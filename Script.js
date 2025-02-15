document.addEventListener("DOMContentLoaded", function() {
    const mensajeBienvenida = document.createElement("p");
    mensajeBienvenida.textContent = "¡Descubre  ofertas especiales en instrumentos!";
    mensajeBienvenida.style.fontSize = "18px";
    mensajeBienvenida.style.fontWeight = "bold";
    mensajeBienvenida.style.color = "#333";
    
    document.querySelector("main").appendChild(mensajeBienvenida);
});
