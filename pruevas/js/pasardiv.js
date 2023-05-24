// Obtener una referencia al botón con el ID "toggleButton"
var toggleButton = document.getElementById('toggleButton');

// Agregar un controlador de eventos al botón para el evento "click"
toggleButton.addEventListener('click', toggleDivs);

// Función para alternar la visibilidad de los divs
function toggleDivs() {
  // Obtener referencias a los divs con las clases "div1" y "div2"
  var div1 = document.querySelector('.div1');
  var div2 = document.querySelector('.div2');

  // Obtener la opacidad actual del div1
  var currentOpacity = parseFloat(window.getComputedStyle(div1).getPropertyValue('opacity'));

  // Alternar la opacidad de los divs
  if (currentOpacity === 1) {
    div1.style.opacity = 0; // Ocultar el div1
    div2.style.opacity = 1; // Mostrar el div2
  } else {
    div1.style.opacity = 1; // Mostrar el div1
    div2.style.opacity = 0; // Ocultar el div2
  }
}