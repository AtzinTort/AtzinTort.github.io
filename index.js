'use strict'

window.addEventListener('load', function () {

    //animaciones de los textos
    window.sr = ScrollReveal();

    sr.reveal('.subtitulo', {
        origin: 'top',
        duration: 2000,
        distance: '100px'

    });
    sr.reveal('.parrafo', {
        origin: 'top',
        duration: 2000,
        distance: '100px',
        delay: 500

    });


    //boton del nav
    var navbar = document.querySelector("#aside");


    var nuv = document.querySelector("#botonNav","#sidebar");
    nuv.addEventListener('click', function (evento) {
        navbar.classList.toggle('mostrar');

        







    });

    /*nuv.addEventListener('click', function (evento) {
        if (evento.target.id === 'botonNav') {
            navbar.classList.remove('mostrar');
        }
        else {
            ''
        };
    });*/








});// este es el load

