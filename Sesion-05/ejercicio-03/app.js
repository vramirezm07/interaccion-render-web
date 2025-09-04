console.log ("Sesion 05. Ejercicio 01: Geometrias.");
console.log(THREE);


//configurar canvas
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Creamos nuestros elementos basicos
// Escena, cámara, mesh y render

//Escena
const scene = new THREE.Scene();
//Cámara
//const camera = new THREE.Camera(fov, SVGPreserveAspectRatio, NodeIterator,far);
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
//Mesh 

//Geometría
const geometry = new THREE.TorusKnotGeometry();

// Material
const material = new THREE.MeshNormalMaterial(
   {flatShading: true}
);

/////configuracion de matcaps
//INICIO
// Material.
const textureLoader = new THREE.TextureLoader();
var matcapMaterial;
var mesh;
var matcapMap = textureLoader.load(
   // Textura URL
   './textures/matcap_01.png',
   // on Load callback
   function (texture) {
       matcapMaterial = new THREE.MeshMatcapMaterial( { matcap: texture } );
       // Mesh.
       mesh = new THREE.Mesh( geometry, matcapMaterial );
       // 3. Poner objeto en la escena.
       scene.add(mesh);
       mesh.position.z = -8;
       // 4. Activar animación.
       animate();
   },
   // on Progress (no funciona por ahora)
   undefined,
   // on Error callback
   function (error) { console.error("Algo salio mal con la textura,", error); }
);




//FIN 


//Render {}-> objeto, llamar al constructor en este caso canvas
const renderer = new THREE.WebGLRenderer({canvas: canvas});

//Dar instrucciones de renderizado
renderer.render(scene, camera);


function animate() {
   requestAnimationFrame(animate);

   mesh.rotation.x += 0.01;
   mesh.rotation.y += 0.01;

   renderer.render(scene, camera);
}
//animate();
