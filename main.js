addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let avion = 20;
        let proyect = 10;
        let distancia = 0;

        while(distancia < 1000){
            avion = avion * 2;
            proyect = proyect * 2;
            distancia = avion + proyect;
        }
        document.getElementById('res1').innerHTML= distancia +' m';


    })
})
