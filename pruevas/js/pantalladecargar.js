window.addEventListener("load", function() {
    var loader = document.getElementById("loader-wrapper");
    setTimeout(function() {
      loader.style.display = "none";
    }, 9000); // Aquí puedes ajustar el tiempo de duración de la pantalla de carga en milisegundos
  })


  var loader = document.getElementById("loader");

loader.addEventListener("animationiteration", function() {
  var colors = ["red", "green", "blue", "yellow"]; // Colores disponibles
  var randomColor = colors[Math.floor(Math.random() * colors.length)]; // Color aleatorio
  loader.style.color = randomColor; // Aplicar color al texto
});
