// app.js
// "Challenge Amigo Secreto"

'use strict';

// Estado
const amigos = [];

// Referencias DOM
const inputNombre = document.getElementById('amigo');
const listaAmigosEl = document.getElementById('listaAmigos');
const resultadoEl = document.getElementById('resultado');

// --- RENDER: lista alineada con span y botón ---
function renderLista() {
  listaAmigosEl.innerHTML = '';

  amigos.forEach((nombre, idx) => {
    const li = document.createElement('li');
    li.className = 'name-item';

    // span para el nombre (ayuda a alinear)
    const spanNombre = document.createElement('span');
    spanNombre.className = 'name-text';
    spanNombre.textContent = nombre;
    li.appendChild(spanNombre);

    // botón eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.className = 'remove-button';
    btnEliminar.type = 'button';
    btnEliminar.setAttribute('aria-label', `Eliminar ${nombre}`);
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', () => {
      amigos.splice(idx, 1);
      renderLista();
      if (amigos.length === 0) resultadoEl.innerHTML = '';
    });

    li.appendChild(btnEliminar);
    listaAmigosEl.appendChild(li);
  });
}

// --- AÑADIR AMIGO ---
function agregarAmigo() {
  const nombre = inputNombre.value.trim();

  if (!nombre) {
    alert('Por favor ingresa un nombre válido.');
    inputNombre.focus();
    return;
  }

  amigos.push(nombre);
  renderLista();

  inputNombre.value = '';
  inputNombre.focus();
}

// --- SORTEAR AMIGO ---
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('La lista está vacía. Agrega al menos un nombre antes de sortear.');
    inputNombre.focus();
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indiceAleatorio];

  resultadoEl.innerHTML = '';
  const li = document.createElement('li');
  li.className = 'resultado-item';
  li.textContent = `🎉 El amigo secreto es: ${elegido} 🎉`;
  resultadoEl.appendChild(li);

  // destacar en la lista
  const items = listaAmigosEl.querySelectorAll('.name-item');
  items.forEach((it) => it.classList.remove('highlight'));
  if (items[indiceAleatorio]) items[indiceAleatorio].classList.add('highlight');
}

// --- REINICIAR SORTEO (borra todo: lista, resultado y resaltados) ---
function reiniciarSorteo() {
  amigos.length = 0;         // vacía el array de participantes
  listaAmigosEl.innerHTML = ''; // borra la lista en pantalla
  resultadoEl.innerHTML = '';   // borra el resultado
  inputNombre.value = '';       // limpia el input
  inputNombre.focus();          // deja el cursor listo para escribir
}


// Enter para añadir
inputNombre.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    agregarAmigo();
  }
});

// Exponer funciones para los botones inline en el HTML
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
window.reiniciarSorteo = reiniciarSorteo;
