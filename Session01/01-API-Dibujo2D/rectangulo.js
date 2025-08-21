console.log("wuuu");
// 1. Obtener referencia del canvas
const canvas = document.getElementById("lienzo");
console.log(canvas); //verificar que se obtuvo correctamente

// 1.1. Sincroniar dimensiones del canvas virtual con el viewport
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

// 2. Definir si es 2D o 3D
const ctx = canvas.getContext('2d'); 


// 3. Definir los estilos
ctx.beginPath();
ctx.fillStyle = "red";

// 4. Definir el rectángulo
var ancho = 150;
var alto = 100;
ctx.rect(
    canvas.width/2 - ancho/2 , //x
    canvas.height/2 - alto/2, //y
    ancho, // ancho
    alto //alto
); // Definir un rectángulo (x,y, ancho, alto)

// 5. Renderizar la linea
ctx.fill();
ctx.closePath();