console.log("Ejercicio 03");

console.log(gsap);



window.addEventListener("mousedown", function() {
    gsap.to(
        ".rectangulo", 
            {
                x:500,
                y:300,
                duration: 5, //segundos
                ease:"bounce.inOut",
                onComplete: function() {
                    gsap.to(
                        ".rectangulo", 
                        {
                            x:0,
                            y:100,
                            duration: 5, //segundos
                            ease:"bounce.inOut"
                        }
                    )
                }
            }
    );
});