console.log ('Ejercicio 02. Render Image 2D')

//1. Configurar canvas
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 2. cargar imagen. 
var img = new Image();

//2.1 Especificar la fuente de la imagen. 
var path = "./img/shadow.jpg";
img.src = path;

//3. Encontrar el evento de carga "load"
img.onload = function() {
    //3.1 Dibujar la imagen en el canvas
    console.log("Imagen cargada correctamente");
    ctx.drawImage(img, 50, 30, 1000,1000);
};

//3. Renderizar imgaen. 