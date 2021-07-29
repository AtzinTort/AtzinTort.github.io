'use strict'

window.addEventListener('load', function () {

  //alert("hola mundo");
  var galerias = new Muuri('.galerias', {
    layout: {
      rounding: false,
    }
  });

  //precarga de imagenes
  galerias.refreshItems().layout
  var preload = document.querySelector('#idGeneral');
  preload.style.opacity = "1";

  //Seleccion de categorias y etiquetas
  var enlaces = document.querySelectorAll('#categorias a');
  enlaces.forEach(function (elemento) {
    elemento.addEventListener('click', function (evento) {

      evento.preventDefault();
      enlaces.forEach(function (enlace) {
        enlace.classList.remove('activo')
      });

      evento.target.classList.add('activo');

      //acceder y filtrar por categorias

      var accederCategoria = evento.target.innerHTML.toLowerCase();
      console.log(accederCategoria);

      if (accederCategoria === 'todos') {
        galerias.filter('[data-categoria]');
      } else {
        galerias.filter(`[data-categoria="${accederCategoria}"]`);

      };

    });
    //Filtrar por busqueda de texto
    var busqueda = document.querySelector('#barraBusqueda');
    busqueda.addEventListener('input', function (evento) {
      var buscar = evento.target.value;
      galerias.filter((item) => item.getElement().dataset.etiquetas.includes(buscar));

    });

  });

  //Overlay

  var overlay = document.getElementById('overlay');
  document.querySelectorAll('.galerias .item img').forEach(function (elemento) {
    var ruta = elemento.getAttribute('src');
    var descripcion = elemento.parentNode.parentNode.dataset.description;

    elemento.addEventListener('click', function () {

      overlay.classList.add('activado')
      document.querySelector('#overlay img').src = ruta;
      document.querySelector('#overlay .descripcion').innerHTML = descripcion;
    });
  });


  //overlay imagenes verticales y horizontales


  var vertical = document.getElementsByClassName('item');
  var hola = document.querySelectorAll('.item').forEach(function (elemento) {//para ver las categorias es elemento.dataset IMPORTATNTISIMO

    elemento.addEventListener('click', function () {

      console.log(elemento.dataset.etiquetas);

      if (elemento.dataset.etiquetas.includes('vertical')) {

        document.querySelector('.contenedorImg').style.maxWidth = '50%';
        document.getElementById('formato').classList.add('imgVertical');
        document.getElementById('formato').classList.remove('imgHorizontal');
        console.log('a huevo esta dice vertical :D');
      }
      else {
        document.querySelector('.contenedorImg').style.maxWidth = '50%';
        document.getElementById('formato').classList.add('imgHorizontal');
        document.getElementById('formato').classList.remove('imgVertical');
        console.log('esta  no dice vertical :(');


      }

    });




  });

  //evenlistener cerrar overlay
    document.querySelector('#botonCerrar').addEventListener('click', function () {
    overlay.classList.remove('activado');
  });

  overlay.addEventListener('click', function (evento) {
    if (evento.target.id === 'overlay'){
      overlay.classList.remove('activado');
    }
    else {
      ''
    };
  });













});//Aqui termina el load


















/*-------------PORTFOLIO---------- */



