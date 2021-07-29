'use strict'

var inicio = document.querySelector("#inicio");

var i;
for (i = 1; i <= 200; i++) {

    var bloques = document.createElement('div');

    bloques.classList.add('bloques');

    inicio.appendChild(bloques);

};

function generate(){
    anime({
        targets: '.bloques',
        translateX: function(){
            return anime.random(-700,700)
        },
        translateY: function(){
            return anime.random(-700,700)
        },
        scale: function(){
            return anime.random(1,5)
        }
    })
}

generate()



