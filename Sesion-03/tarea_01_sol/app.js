console.log("Ejercicio 03");

console.log(gsap);

// Asume que tienes un canvas y ctx definidos
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Objeto para animar
const circulo = { x: 0, y: canvas.height / 2 };

function dibujarCirculo(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas
    ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.ellipse(x, y, 70, 70, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

// Dibuja el círculo inicialmente
dibujarCirculo(circulo.x, circulo.y);

window.addEventListener("mousedown", function() {
    gsap.to(
        circulo, // <--- aquí va el objeto
        {
            x: canvas.width/2,
            y: 100,
            duration: 2,
            ease: "power1.inOut",
            onUpdate: function() {
                dibujarCirculo(circulo.x, circulo.y);
            },
            onComplete: function() {
                gsap.to(circulo, {
                    x: canvas.width,
                    y: canvas.height/2,
                    duration: 2,
                    ease: "power1.inOut",
                    onUpdate: function() {
                        dibujarCirculo(circulo.x, circulo.y);
                    }
                });
            }
        }
    );
});