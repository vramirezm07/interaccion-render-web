console.log("wuuu");
// 1. Obtener referencia del canvas
const canvas = document.getElementById("lienzo");
console.log(canvas); //verificar que se obtuvo correctamente

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const ctx = canvas.getContext('2d'); 


ctx.fill();
ctx.closePath();

// Circulo naranja
ctx.beginPath();

ctx.strokeStyle = "#F0E7D5";
ctx.lineWidth = 3;

//Circulo centro
ctx.ellipse(canvas.width/2, canvas.height/2 , 140, 140, 0, 0, Math.PI*2); //(x,y, radioX, radioY, rotacion, anguloInicio, anguloFinal)
//Circulos inferiores

for (let i = 0; i < 6; i++) {
    ctx.ellipse(canvas.width/2, canvas.height/2 + (i * 25), 140, 140, 0, 0, Math.PI*2);
}

//circulos superiores
for (let i = 0; i < 6; i++) {
    ctx.ellipse(canvas.width/2, canvas.height/2 + (i * -25), 140, 140, 0, 0, Math.PI*2);
}


ctx.stroke();
ctx.closePath();

//circulo interior
ctx.beginPath();


ctx.fillStyle = "#F0E7D5";

ctx.ellipse(canvas.width/2 + ancho*5.5, canvas.height/2-ancho*7.5 , 15, 15, 0, 0, Math.PI*2); //(x,y, radioX, radioY, rotacion, anguloInicio, anguloFinal)

ctx.fill();
ctx.closePath();

