addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let cantEstudiantes = document.getElementById("num1").value;
        let cont = 1;
        let nivelacion = 0;
        while(cont <= cantEstudiantes) {
            let nota1 = parseFloat(prompt('alumno #'+cont+'\ningrese la nota 1'))
            let nota2 = parseFloat(prompt("ingrese la nota 2: "));
            let nota3 = parseFloat(prompt("ingrese la nota 3: "));
            let nota4 = parseFloat(prompt("ingrese la nota 4: "));
            let nota5 =parseFloat(prompt("ingrese la nota 5: "));

            let prom = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
            cont++;
            alert('su promedio es de: '+prom)

            if(prom < 3){
                nivelacion ++;
            }
        }
        document.getElementById('res1').innerHTML= nivelacion;

    })
})
