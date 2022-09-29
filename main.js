addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let cont = 1;
        let gTotal = 0;
        let canVendedores = document.getElementById("num1").value;

        while(cont <= canVendedores){
            let sb = parseInt(prompt('vendedor #'+cont+'\ningrese su sueldo base'));
            let v1 = parseInt(prompt('ingrese el valor de su primera venta:'));
            let v2 = parseInt(prompt('ingrese el valor de su segunda venta:'));
            let v3 = parseInt(prompt('ingrese el valor de su tercera venta:'));

            let comision = (v1 + v2 + v3) * 0.10;
            gTotal = sb + comision;
            cont ++;

            document.getElementById('res1').innerHTML='ganancias por comision: '+ comision+ ' pesos';
            document.getElementById('res2').innerHTML='ganancias totales: '+ gTotal+ ' pesos';
        }
        


    })
})
