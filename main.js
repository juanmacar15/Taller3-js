addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let cant = document.getElementById("num1").value;
        let  turismo = 0;
        let autobus = 0;
        let camion = 0;
        let motocicleta = 0;
        cont = 1;

        while( cont <= cant){
            let tipoV = prompt('vehiculo #'+cont+' \n ingrese el tipo de vehiculo:')
            if(tipoV ==  'turismo'){
                turismo ++;
            }
            else if(tipoV == 'autobus'){
                autobus ++;
            }
            else if(tipoV == 'camion'){
                camion ++;
            }
            else{
                motocicleta ++;
            }
            cont ++;
        }
        let pTu = (turismo / 200) + 100;
        let pAu = (turismo / 200) + 100;
        let pCam = (turismo / 200) + 100;
        let pMoto = (turismo / 200) + 100;
        alert('% en turismo: '+pTu+'\n% en autobus: '+pAu+'\n% en camion: '+pCam+'\n% en motocicleta: '+pMoto);
    })
})
