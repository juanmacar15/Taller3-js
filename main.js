addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        // let est = document.getElementById("num1").value;
        
        let damas=1, caballeros=7, personas=0;
        while(personas<42) {
            damas++;
            caballeros++;
            personas=damas+caballeros;
        }
        document.getElementById('res1').innerHTML='habian '+damas+ ' damas';

    })
})
