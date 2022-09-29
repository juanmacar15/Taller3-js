addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let fund = 3, bd = 5, etica = 2;
        let cont = 1;
        let canVendedores = document.getElementById("num1").value;

        while(cont <= canVendedores){
            let nFund = parseInt(prompt('vendedor #'+cont+'\ningrese su nota de fundamentos: '));
            let nBd = parseInt(prompt('ingrese su nota de BD: '));
            let nEtica = parseInt(prompt('ingrese su nota de etica: '));

            let rFund = nFund * fund;
            let rBd = nBd * bd;
            let rEtica = nEtica * etica;

            let sumaCreditos = fund + bd + etica;

            let pP = (rFund + rBd + rEtica) / sumaCreditos;

            cont ++;

            alert('su promedio es de: \n   '+pP)
        }
        


    })
})
