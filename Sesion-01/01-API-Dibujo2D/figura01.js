console.log("wuuu");
// 1. Obtener referencia del canvas
const canvas = document.getElementById("lienzo");
console.log(canvas); //verificar que se obtuvo correctamente

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const ctx = canvas.getContext('2d'); 


// Rectangulos 
ctx.beginPath();
ctx.fillStyle = "black";

var ancho = 12;
var alto = canvas.height;
var y = 0;

ctx.rect( // Derecha 01
    canvas.width/2 - ancho/2, 
    y, 
    ancho, 
    alto    
); 

ctx.rect( // Derecha 02
    canvas.width/2 + ancho*1.5, 
    y, 
    ancho, 
    alto    
); 

ctx.rect( // Derecha 03
    canvas.width/2 + ancho*3.5, 
    y, 
    ancho, 
    alto    
); 

ctx.rect( // Derecha 04
    canvas.width/2 + ancho*5.5, 
    y, 
    ancho, 
    alto    
); 

ctx.rect( // Derecha 05
    canvas.width/2 + ancho*7.5, 
    y, 
    ancho, 
    alto    
); 

ctx.rect( // Derecha 06
    canvas.width/2 + ancho*9.5, 
    y, 
    ancho, 
    alto    
); 

ctx.rect( // Derecha 07
    canvas.width/2 + ancho*11.5, 
    y, 
    ancho, 
    alto    
); 

ctx.rect( // Derecha 08
    canvas.width/2 + ancho*13.5, 
    y, 
    ancho, 
    alto    
); 

//IZQUIERDA

ctx.rect( // Izquierda 01
    canvas.width/2 - ancho*2.5, 
    y, 
    ancho, 
    alto    
); 

ctx.rect( // Derecha 02
    canvas.width/2 - ancho*4.5, 
    y, 
    ancho, 
    alto    
); 

ctx.rect( // Derecha 03
    canvas.width/2 - ancho*6.5, 
    y, 
    ancho, 
    alto    
); 

ctx.rect( // Derecha 04
    canvas.width/2 - ancho*8.5, 
    y, 
    ancho, 
    alto    
); 

ctx.rect( // Derecha 05
    canvas.width/2 - ancho*10.5, 
    y, 
    ancho, 
    alto    
); 

ctx.rect( // Derecha 06
    canvas.width/2 - ancho*12.5, 
    y, 
    ancho, 
    alto    
); 

ctx.rect( // Derecha 07
    canvas.width/2 - ancho*14.5, 
    y, 
    ancho, 
    alto    
); 

ctx.fill();
ctx.closePath();

// Circulo naranja
ctx.beginPath();

ctx.fillStyle = "#D3652A";
ctx.strokeStyle = "#F0E7D5";
ctx.lineWidth = 15;

ctx.ellipse(canvas.width/2, canvas.height/2 , 150, 150, 0, 0, Math.PI*2); //(x,y, radioX, radioY, rotacion, anguloInicio, anguloFinal)

ctx.fill();
ctx.stroke();
ctx.closePath();

//circulo interior
ctx.beginPath();


ctx.fillStyle = "#F0E7D5";

ctx.ellipse(canvas.width/2 + ancho*5.5, canvas.height/2-ancho*7.5 , 15, 15, 0, 0, Math.PI*2); //(x,y, radioX, radioY, rotacion, anguloInicio, anguloFinal)

ctx.fill();
ctx.closePath();

