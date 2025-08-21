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
ctx.ellipse(canvas.width/2, canvas.height/2 + (0 * 25), 140, 140, 0, 0, Math.PI*2);
ctx.ellipse(canvas.width/2, canvas.height/2 + (1 * 25), 140, 140, 0, 0, Math.PI*2);
ctx.ellipse(canvas.width/2, canvas.height/2 + (2 * 25), 140, 140, 0, 0, Math.PI*2);
ctx.ellipse(canvas.width/2, canvas.height/2 + (3 * 25), 140, 140, 0, 0, Math.PI*2);
ctx.ellipse(canvas.width/2, canvas.height/2 + (4 * 25), 140, 140, 0, 0, Math.PI*2);
ctx.ellipse(canvas.width/2, canvas.height/2 + (5 * 25), 140, 140, 0, 0, Math.PI*2);

//Circulos superiores
ctx.ellipse(canvas.width/2, canvas.height/2 + (0 * -25), 140, 140, 0, 0, Math.PI*2);
ctx.ellipse(canvas.width/2, canvas.height/2 + (1 * -25), 140, 140, 0, 0, Math.PI*2);
ctx.ellipse(canvas.width/2, canvas.height/2 + (2 * -25), 140, 140, 0, 0, Math.PI*2);
ctx.ellipse(canvas.width/2, canvas.height/2 + (3 * -25), 140, 140, 0, 0, Math.PI*2);
ctx.ellipse(canvas.width/2, canvas.height/2 + (4 * -25), 140, 140, 0, 0, Math.PI*2);
ctx.ellipse(canvas.width/2, canvas.height/2 + (5 * -25), 140, 140, 0, 0, Math.PI*2);


ctx.stroke();
ctx.closePath();


//1. Escuchar el mouse que se mueve sobre el canvas.
window.addEventListener("mousemove", function(eventData) {
    console.log('nanon x:', eventData.x); // asegurarse de que se escucha el evento, mousemove datos sobre x.
    console.log('ohm y:', eventData.y); // asegurarse de que se escucha el evento, mousemove datos sobre y.
   
   //Limpiar canvas
   ctx.clearRect(0, 0, canvas.width, canvas.height);
        
            ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 , 140, 140, 0, 0, Math.PI*2); //(x,y, radioX, radioY, rotacion, anguloInicio, anguloFinal)
             ctx.stroke();
     
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (0 * 25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
     
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (1 * 25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (2 * 25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (3 * 25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (4 * 25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (5 * 25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (0 * -25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (1 * -25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (2 * -25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (3 * -25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (4 * -25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (5 * -25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(eventData.x, eventData.y , 140, 140, 0, 0, Math.PI*2);
    ctx.stroke();
    ctx.closePath();
});

// //2. escuchar mouse presionado
window.addEventListener("mousedown", function (eventData) {
    console.log("mousedown");
    //1. actualizar estilos 
    ctx.strokeStyle = "#087d4cff";
    //2. renderizar de nuevo

     //Limpiar canvas
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 , 140, 140, 0, 0, Math.PI*2); //(x,y, radioX, radioY, rotacion, anguloInicio, anguloFinal)
        ctx.stroke();
     
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (0 * 25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
     
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (1 * 25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (2 * 25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (3 * 25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (4 * 25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (5 * 25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (0 * -25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (1 * -25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (2 * -25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (3 * -25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (4 * -25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (5 * -25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(eventData.x, eventData.y , 140, 140, 0, 0, Math.PI*2);
    ctx.stroke();
    ctx.closePath()



});


window.addEventListener("mouseup", function (eventData) {
    console.log("mouseup");
    //1. actualizar estilos 
    ctx.strokeStyle = "#ffffffff";
    //2. renderizar de nuevo
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 , 140, 140, 0, 0, Math.PI*2); //(x,y, radioX, radioY, rotacion, anguloInicio, anguloFinal)
        ctx.stroke();
     
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (0 * 25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
     
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (1 * 25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (2 * 25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (3 * 25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (4 * 25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (5 * 25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (0 * -25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (1 * -25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (2 * -25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (3 * -25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (4 * -25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();
 
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 + (5 * -25), 140, 140, 0, 0, Math.PI*2);
        ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(eventData.x, eventData.y , 140, 140, 0, 0, Math.PI*2);
    ctx.stroke();
    ctx.closePath()


});

//1. crear la referencia a nuestro botón
const boton = document.getElementById("boton");
console.log(boton); //verificar que se obtuvo correctamente
//2. Agregar un "event listener" al botón
boton.addEventListener("mousedown", function(){
    console.log("mousedown");
    ctx.fillStyle = "rgba(16, 69, 57,1)"; //cambiar el color del trazo a transparente
    ctx. beginPath();
    ctx.rect(300, 300, 150, 130);
    ctx.fill(); 
    ctx.closePath(); 

});
//2.1 n el event listener vamos a redenrizar el canvas

