console.log("wuuu");
// 1. Obtener referencia del canvas
const canvas = document.getElementById("lienzo");
console.log(canvas); //verificar que se obtuvo correctamente

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const ctx = canvas.getContext('2d'); 


ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = "black";
ctx.moveTo(canvas.width/2+130,canvas.height/2+130); //punto inicial
ctx.lineTo(canvas.width/2-130,canvas.height/2-130); //punto final
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = "black";
ctx.moveTo(canvas.width/2+130,canvas.height/2-130); //punto inicial
ctx.lineTo(canvas.width/2-130,canvas.height/2+130); //punto final
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.fillStyle = "black"; // Cambia fill por fillStyle
ctx.rect(canvas.width/2-125, canvas.height/2, 250 , 10);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "black"; // Cambia fill por fillStyle
ctx.rect(canvas.width/2, canvas.height/2-125, 10 , 250);
ctx.fill();
ctx.closePath();



ctx.beginPath();
ctx.fillStyle = "white";
ctx.ellipse(canvas.width/2, canvas.height/2, 70, 70, 0, 0, Math.PI*2); 
// Dibuja un círculo en la posición del mouse
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 10;
ctx.ellipse(canvas.width/2, canvas.height/2, 40, 40, 0, 0, Math.PI*2); 

ctx.stroke();
ctx.closePath();



