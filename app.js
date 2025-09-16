// app.js
// "Challenge Amigo Secreto"

'use strict';

// Estado: array con los nombres de los amigos
const amigos = [];

// Referencias a elementos del DOM (coinciden con tu index.html)
const inputNombre = document.getElementById('amigo');
const listaAmigosEl = document.getElementById('listaAmigos');
const resultadoEl = document.getElementById('resultado');

// --- RENDER: actualiza la lista visible en la página ---
function renderLista() {
  // limpiamos la lista
  listaAmigosEl.innerHTML = '';

  // por cada amigo creamos un <li>
  amigos.forEach((nombre, idx) => {
    const li = document.createElement('li');
    li.className = 'name-item';
    li.textContent = nombre;

    // botón para eliminar (funcionalidad extra, útil para el test)
    const btnEliminar = document.createElement('button');
    btnEliminar.className = 'remove-button';
    btnEliminar.type = 'button';
    btnEliminar.setAttribute('aria-label', `Eliminar ${nombre}`);
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', () => {
      amigos.splice(idx, 1); // removemos del array
      renderLista();
      // si la lista quedó vacía, limpiamos resultado
      if (amigos.length === 0) resultadoEl.innerHTML = '';
    });

    li.appendChild(document.createTextNode(' ')); // pequeño espacio
    li.appendChild(btnEliminar);
    listaAmigosEl.appendChild(li);
  });
}

// --- AÑADIR AMIGO ---
function agregarAmigo() {
  const nombre = inputNombre.value.trim();

  // Validación: campo vacío
  if (!nombre) {
    alert('Por favor ingresa un nombre válido.');
    inputNombre.focus();
    return;
  }

  // evitar duplicados 
   if (amigos.includes(nombre)) {
     alert('Ese nombre ya está en la lista.');
     inputNombre.focus();
     return;
   }

  amigos.push(nombre);
  renderLista();

  // limpiar input y dejar el foco para agregar otro
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

  // Mostrar resultado 
  resultadoEl.innerHTML = '';
  const li = document.createElement('li');
  li.className = 'resultado-item';
  li.textContent = `🎉 El amigo secreto es: ${elegido} 🎉`;
  resultadoEl.appendChild(li);

  // destacar el nombre seleccionado en la lista
  const items = listaAmigosEl.querySelectorAll('.name-item');
  items.forEach((it) => it.classList.remove('highlight'));
  if (items[indiceAleatorio]) items[indiceAleatorio].classList.add('highlight');
}

// Habilitar "Enter" para añadir 
inputNombre.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    agregarAmigo();
  }
});

// Exponer funciones en window para que onclick en el HTML funcione
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
