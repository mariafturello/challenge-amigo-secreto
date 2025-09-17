# Challenge: Amigo Secreto 🎁

Aplicación desarrollada como **challenge del curso de alura latam**, que permite ingresar nombres de amigos y realizar un sorteo aleatorio para descubrir quién es el "amigo secreto".  

Incluye validación de entrada, visualización clara de la lista, posibilidad de eliminar nombres, sorteo aleatorio y un botón de **Reiniciar sorteo** que deja todo como al inicio.

---

## 🚀 Cómo usar la aplicación

1. **Pantalla inicial**  
   Al abrir la aplicación, verás un campo para escribir los nombres y los botones principales.  
   ![Pantalla inicial](assets/screenshots/screenshot-01-home.png)

---

2. **Agregar participantes**  
   Escribe un nombre y presiona el botón **Añadir** (o la tecla Enter).  
   El nombre aparecerá en una lista ordenada.  
   ![Lista de amigos](assets/screenshots/screenshot-02-lista.png)

   👉 Cada participante tiene a la derecha un botón **Eliminar**, en caso de que quieras quitarlo.

---

3. **Realizar el sorteo**  
   Cuando hayas cargado a todos tus amigos, presiona **Sortear amigo**.  
   Se elegirá un nombre de manera aleatoria, que aparecerá resaltado en la lista y mostrado en pantalla.  
   ![Resultado del sorteo](assets/screenshots/screenshot-03-resultado.png)

---

4. **Reiniciar el sorteo**  
   Si querés empezar de nuevo, presiona **Reiniciar sorteo**.  
   Esto borrará tanto la lista de participantes como el resultado, dejando la app lista para volver a usarse.  
   ![Después de reiniciar](assets/screenshots/screenshot-04-reiniciar.png)

---

## 🛠️ Funcionalidades

- Validación: no se pueden añadir nombres vacíos.  
- Lista clara y alineada, con botón **Eliminar** para cada participante.  
- Sorteo aleatorio con resultado destacado.  
- Botón **Reiniciar sorteo** que limpia todo de una vez.  
- Accesibilidad: soporte para tecla Enter y `aria-live` para resultados.

---

## 📂 Estructura del proyecto
/ (root)
├─ index.html # Estructura principal
├─ app.js # Lógica de la aplicación
├─ style.css # Estilos de la interfaz
├─ assets/
│ ├─ amigo-secreto.png
│ ├─ play_circle_outline.png
│ └─ screenshots/
│ ├─ screenshot-01-home.png
│ ├─ screenshot-02-lista.png
│ ├─ screenshot-03-resultado.png
│ └─ screenshot-04-reiniciar.png
└─ README.md


---

## 💡 Ideas futuras

- Guardar la lista en **localStorage** para no perder los nombres al recargar la página.  
- Agregar animación al momento del sorteo.  
- Exportar e importar listas en formato CSV.  

---

## 👩‍💻 Autor

Desarrollado por **María Turello** como parte del challenge del curso Logica de programacion de Alura Latam. ✨

