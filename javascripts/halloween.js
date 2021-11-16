/* FUNCTIONS TO USE INSIDE HALLOWEEN EXERCISE */

/* una function es un modulo que describe un algoritmo simple */
/* suele tener parámetros, en este caso, imagen */
/* un parámetro es la variable sobre la que actúa el módulo */
/* por otra parte, javascript es orientado a objetos */
/* el objeto principal es document, la página */

function mostrar (imagen) {
    document.getElementById(imagen).style.visibility="visible";
}

function ocultar (imagen) {
    document.getElementById(imagen).style.visibility="hidden";
}

function sonar (sonido) {
    document.getElementById(sonido).play();
}

function parar (sonido) {
    document.getElementById(sonido).pause();
}
