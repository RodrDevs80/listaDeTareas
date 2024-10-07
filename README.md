
# Aplicación de Lista de Tareas
## Descripción General
Este proyecto es una aplicación de lista de tareas básica construida con JavaScript y HTML. Permite a los usuarios agregar, marcar como completadas y eliminar tareas. Las tareas se guardan en el almacenamiento local del navegador, lo que asegura que persistan incluso después de recargar la página.

### Características
- Agregar Tarea: Los usuarios pueden ingresar tareas pulsando el botón "Agregar" o presionando la tecla "Enter".
- Marcar como Completada: Cada tarea se puede marcar como completada haciendo clic en el icono de círculo.
- Eliminar Tarea: Los usuarios pueden eliminar una tarea haciendo clic en el icono de la papelera.
- Guardar Datos: La lista de tareas se guarda en localStorage, lo que garantiza que los datos permanezcan incluso después de cerrar o recargar el navegador.
- Mostrar Fecha Actual: La aplicación muestra la fecha y hora actual cuando se carga.
- Saludo al Usuario: Al abrir la aplicación, aparece un mensaje emergente que solicita el nombre del usuario para darle la bienvenida.
### Cómo Usar
- Iniciar la Aplicación: Al cargar la página, un cuadro emergente de SweetAlert2 solicita al usuario que ingrese su nombre.
- Agregar Tarea:
Escriba la descripción de la tarea en el campo de entrada.
Pulse el botón "Agregar" o presione "Enter" para agregar la tarea a la lista.
- Completar Tarea:
Haga clic en el icono de círculo junto a una tarea para marcarla como completada. Esto alterna entre los estados de completada e incompleta.
- Eliminar Tarea:
Haga clic en el icono de la papelera para eliminar una tarea de la lista.
- Ver Lista de Tareas:
Todas las tareas se guardan en localStorage y se cargan automáticamente al volver a abrir la aplicación.
Estructura del Código
### Elementos HTML
- listadoTareas: Contenedor para la lista de tareas.
- inputTarea: Campo de entrada donde el usuario escribe nuevas tareas.
- btnAgregar: Botón para agregar una nueva tarea.
- fecha: Muestra la fecha y hora actual.
- nombre: Muestra el nombre del usuario después de ingresarlo.
### Lógica Principal en JavaScript
- fechaActual(): Devuelve la fecha y hora actual en el formato AAAA-MM-DD HH:MM:SS.
- cargarFecha(): Actualiza el elemento fecha con la fecha y hora actuales.
- sumarTarea(): Agrega una nueva tarea a la lista y genera el HTML correspondiente.
- tareaRealizada(): Alterna el estado de "completado" de una tarea.
- eliminarTarea(): Elimina una tarea de la lista y de localStorage.
- cargarTareas(): Carga las tareas desde localStorage al cargar la página y las renderiza en la interfaz.
### Manejadores de Eventos
- DOMContentLoaded: Carga la fecha, saluda al usuario e inicializa las tareas desde localStorage.
Clic en el botón: Agrega tareas al hacer clic en el botón "Agregar".
- Tecla Enter: Agrega tareas cuando se presiona la tecla "Enter".
- Acciones en las Tareas (Clic): Maneja la finalización y eliminación de tareas al hacer clic en los iconos.
## Almacenamiento Local (localStorage)
Las tareas se guardan como un arreglo de objetos en localStorage bajo la clave TODO. Cada objeto de tarea contiene:

- nombre: Descripción de la tarea.
- id: ID único de la tarea.
- realizado: Booleano que indica si la tarea está completada.
- eliminado: Booleano que indica si la tarea está eliminada.
### Cómo Ejecutar
Simplemente abre el archivo index.html en un navegador. Asegúrate de incluir SweetAlert2 en tu proyecto o utilizarlo a través de un CDN para habilitar el cuadro emergente de saludo.

## Dependencias
- SweetAlert2: Utilizado para solicitar el nombre del usuario.
- FontAwesome: Iconos para las acciones de las tareas (iconos de verificación y papelera).
Mejoras Futuras
Añadir categorías de tareas o niveles de prioridad.
Implementar fechas de vencimiento de tareas con recordatorios.
Proveer mejoras adicionales en la interfaz de usuario y animaciones.
Licencia

Este proyecto está bajo la licencia MIT.





## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfolioweb-sertec.web.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/carlos-rodriguez-developerwebjr)
[![Github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://github.com/RodrDevs80)


## 🛠 Skills
Javascript, HTML, CSS...






















## License


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


