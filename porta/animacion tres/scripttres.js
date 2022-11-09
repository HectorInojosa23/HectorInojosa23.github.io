const pantalla = document.getElementById('div');
    pantalla.width = window.innerWidth;
    pantalla.height = 700;

    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = pantalla.width;
    canvas.height = pantalla.height;

    window.addEventListener('resize', function () {
        canvas.width = pantalla.width;
        canvas.height = pantalla.height;
    });



window.addEventListener('load', function () {


});