console.log("wuuu");
// 1. Obtener referencia del canvas
const canvas = document.getElementById("lienzo");
console.log(canvas); // Verifica que se obtuvo correctamente

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d'); 


// Rectángulos 
ctx.beginPath();
ctx.fillStyle = "black";

const ancho = 12; // Ancho de cada rectángulo
const alto = canvas.height; // Alto igual al canvas
const y = 0; // Posición Y inicial

// Rectángulos centrales y derecha
// Este bucle dibuja los rectángulos del centro hacia la derecha.
// i inicia en -0.5 para que el primer rectángulo esté centrado.
// i aumenta de 2 en 2 para separar los rectángulos.
for (let i = -0.5; i <= 13.5; i += 2) {
    // La posición X se calcula tomando el centro del canvas y desplazando por ancho*i
    ctx.rect(canvas.width / 2 + ancho * i,  y, ancho, alto);
}

// Rectángulos izquierda
// Este bucle dibuja los rectángulos hacia la izquierda del centro.
// i inicia en -2.5 y disminuye de 2 en 2 para colocar los rectángulos a la izquierda.
for (let i = -2.5; i >= -14.5; i -= 2) {
    ctx.rect(canvas.width / 2 + ancho * i, y, ancho, alto);
}

ctx.fill();
ctx.closePath();

/*
¿POR QUÉ USAR FOR?
- El bucle for permite repetir una acción varias veces cambiando un valor (en este caso, 'i').
- Así puedes dibujar muchos rectángulos sin escribir cada uno manualmente.
- El valor de 'i' controla la posición horizontal de cada rectángulo.
- Cambiando el inicio, fin y paso de 'i', decides cuántos rectángulos y dónde se dibujan.
*/

// Círculo naranja
ctx.beginPath();
ctx.fillStyle = "#D3652A";
ctx.strokeStyle = "#F0E7D5";
ctx.lineWidth = 15;
// Dibuja un círculo centrado en el canvas
ctx.ellipse(canvas.width / 2, canvas.height / 2, 150, 150, 0, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();
ctx.closePath();

// Círculo interior
ctx.beginPath();
ctx.fillStyle = "#F0E7D5";
// Dibuja un círculo pequeño en una posición relativa al centro
ctx.ellipse(canvas.width / 2 + ancho * 5.5, canvas.height / 2 - ancho * 7.5, 15, 15, 0, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();

/*
RESUMEN DEL USO DE FOR:
for (inicialización; condición; incremento) {
    // Código que se repite
}
- inicialización: se ejecuta una vez al principio (ejemplo: let i = 0)
- condición: mientras sea verdadera, el bucle sigue (ejemplo: i < 10)
- incremento: se ejecuta al final de cada ciclo (ejemplo: i++)
*/

