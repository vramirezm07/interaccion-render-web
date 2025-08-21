console.log("yay");

// 1. Obtener referencia del canvas
const canvas = document.getElementById("lienzo");
console.log(canvas); //verificar que se obtuvo correctamente


//2. Definams el contexto de dibujo
const ctx = canvas.getContext('2d'); 
console.log(ctx); //verificar que se obtuvo correctamente el contexto

//3. definir resolucion del canvas
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

// 4. instrucciones para dibujar un circulo 
ctx.beginPath();
ctx.strokeStyle = "#8C3B4A"; // Color del borde
ctx.lineWidth = 10; // Ancho del borde
ctx.ellipse(100, 100, 70, 70, 0, 0, Math.PI*2); // Dibuja un círculo en el centro
ctx.stroke(); // Aplica el trazo
ctx.closePath(); // Cierra el camino actual


//5. Agrupar en una función
//con parámmetros para dibuar cirulos en difenretes posiciones sin repetir código
function dibujarCirculo(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = "#8C3B4A"; // Color del borde
    ctx.lineWidth = 10; // Ancho del borde
    ctx.ellipse(x, y, 70,70, 0, 0, Math.PI*2); 
    ctx.stroke(); // Aplica el trazo
    ctx.closePath(); // Cierra el camino actual
}

dibujarCirculo(200, 100); // Dibuja un círculo en la posición (200, 200)
dibujarCirculo(300, 150); // Dibuja un círculo en la posición (300, 200)

const circulo = {
    colorLinea: "#8C3B4A",
    grosorLinea: 10, 
    radio: 100,
    rotacion: 0,
    anguloInicio: 0,
    anguloFinal: Math.PI*2,
    x:0,
    y:0,
    dibujar:function(x,y) {
        ctx.beginPath();
        ctx.strokeStyle = circulo.colorLinea; // Color del borde
        ctx.lineWidth = circulo.grosorLinea; // Ancho del borde
        ctx.ellipse(x, y, circulo.radio,circulo.radio, circulo.rotacion, circulo.anguloInicio, circulo.anguloFinal); 
        ctx.stroke(); // Aplica el trazo
    }
}

circulo.dibujar(400,400);

// Crear event listener 
window.addEventListener("mousedown", function(eventData) {
    circulo.dibujar(eventData.x, eventData.y);
});