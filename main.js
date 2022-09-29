addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let canGallinas = document.getElementById("num1").value;

        let peso = 0;
        let alt = 0;
        let precio = 0;
        let calidad = 0;
        let cont = 1;

        while(cont <= canGallinas){
            peso = parseInt(prompt('ingrese el peso de la gallina '+ cont))
            alt = parseInt(prompt('ingrese la altura de la gallina '))
            let canHuevos = parseInt(prompt('ingrese la cantidad de huevo que pone la gallina:'))
            calidad =((peso * alt) / canHuevos) + calidad;
            cont ++;
        }
        let promedio = calidad / canGallinas;
        precio = promedio * 1000;
        document.getElementById('res1').innerHTML ="el precio por kilo de huevo es: " + precio;

    })
})
