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
ctx.strokeStyle = "black"; // Color del borde
ctx.lineWidth = 10; // Ancho del borde
ctx.ellipse(100, 100, 70, 70, 0, 0, Math.PI*2); // Dibuja un círculo en el centro
ctx.stroke(); // Aplica el trazo
ctx.closePath(); // Cierra el camino actual


//5. Agrupar en una función
//con parámmetros para dibuar cirulos en difenretes posiciones sin repetir código
function dibujarCirculo(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = "black"; // Color del borde
    ctx.lineWidth = 10; // Ancho del borde
    ctx.ellipse(x, y, 70,70, 0, 0, Math.PI*2); 
    ctx.stroke(); // Aplica el trazo
    ctx.closePath(); // Cierra el camino actual
}

dibujarCirculo(200, 100); // Dibuja un círculo en la posición (200, 200)
dibujarCirculo(300, 150); // Dibuja un círculo en la posición (300, 200)

//6. Escuchar el evento de movemouse para dibujar circulos
window.addEventListener("mousemove", function(Loaiza) {
    
    // Dibujar un círculo en la posición del mouse
    dibujarCirculo(Loaiza.x, Loaiza.y);
});