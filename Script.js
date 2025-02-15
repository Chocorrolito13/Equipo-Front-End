document.addEventListener("DOMContentLoaded", function() {
    const mensajeBienvenida = document.createElement("p");
    mensajeBienvenida.textContent = "¡Descubre   especiales en instrumentos!";
    mensajeBienvenida.style.fontSize = "13px";
    mensajeBienvenida.style.fontWeight = "bold";
    mensajeBienvenida.style.color = "#333";
    
    document.querySelector("main").appendChild(mensajeBienvenida);
});
