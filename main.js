addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let pro = document.getElementById("num1").value;
        let cont = 1;

        while(cont <= pro){
            let n1 = parseInt(prompt('procedimiento #'+cont+'\ningrese el primer numero:'));
            let n2 = parseInt(prompt('ingrese el segundo numero: '));

            let suma = n1 + n2;
            let resta = n1 - n2;
            let mult = n1 * n2;
            let div = n1 / n2;
            cont ++;

            alert('suma: '+suma+ '\nresta: '+resta+'\nmultiplicacion: '+mult+ '\ndivision: '+div);
        }

    })
})
