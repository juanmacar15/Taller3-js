addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let est = document.getElementById("num1").value;
        const canNotas = 3
        let cont = 1;

        while(cont <= est){
            let nombre = prompt('estudiante #'+cont+'\ningrese su nombre:');
            let apellido = prompt('ingrese su apellido: ');
            let n1 = parseFloat(prompt('ingrese la nota 1: '));
            let n2 = parseFloat(prompt('ingrese la nota 2: '));
            let n3 = parseFloat(prompt('ingrese la nota 3: '));

            let prom = (n1 + n2 + n3) / canNotas;

            alert('el promedio del estudiante '+nombre+' '+apellido+ ' es: \nnota:'+prom);
            cont ++;
        }

    })
})
