Tienda de Música
Este es un proyecto de una página web para una Tienda de Música, desarrollado con HTML, CSS y JavaScript.

Estructura del Proyecto
  El archivo HTML está organizado de la siguiente manera:
• Encabezado (<head>)
  -Definición de la codificación de caracteres en UTF-8.
  -Configuración de la metaetiqueta para una correcta visualización en dispositivos móviles.
  -Título de la página "Tienda de Música".
  -Inclusión de una hoja de estilos externa (Estilos.css).
• Cuerpo (<body>)
  -Un encabezado con un título principal (<h1>) que da la bienvenida a los visitantes.
  -Una sección principal (<main>) que contiene una breve descripción de la tienda.
  -Un pie de página con derechos de autor.
  -Inclusión de un script externo (Script.js).

  Estilos CSS
El archivo Estilos.css define los estilos de la página:
• Cuerpo (body)
  -Fuente: Arial, sin serifa.
  -Margen y relleno en 0.
  -Fondo color #f4f4f4.
  -Texto alineado al centro.
• Encabezado (header)
  -Fondo color #333.
  -Texto color blanco.
  -Relleno de 20px.
•Sección principal (main)
  -Relleno de 20px.
• Pie de página (footer)
  -Fondo color #333.
  -Texto color blanco.
  -Relleno de 10px.
  -Posición fija en la parte inferior.
  -Ancho al 100%.

  JavaScript 
  En este proyecto agrega dinamismo a la página. Específicamente, su función principal es:
  • Agregar un mensaje dinámico en la sección principal de la tienda.
  • Modificar estilos de texto en ese mensaje.
  ¿Cómo funciona el script?
  -Espera a que el DOM cargue usando document.addEventListener("DOMContentLoaded", function() {...}).
  -Crea un nuevo elemento<pag> con document.createElement("pag").
  -Asigna contenido al párrafo con textContent.
  -Modifica estilos (tamaño de fuente, peso de la fuente y color).
  -Lo añade al<main> con document.querySelector("main").appendChild. 

  Tecnologías Utilizadas
  • HTML para la estructura de la página.
  • CSS (referenciado en Estilos.css) para los estilos.
  • JavaScript (referenciado en Script.js) para funcionalidades dinámicas.

  Instalación y Uso
  • Clonar o descargar el código.
  • Asegurarse de tener Estilos.css y Script.js en el mismo directorio.
  • Abrir el archivo index.html en un navegador web.

  Licencia
Este proyecto es de código abierto y puede ser utilizado libremente.
