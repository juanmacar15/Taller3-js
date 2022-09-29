addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let estudiantes = document.getElementById("num1").value;
        let con = 1, a = 0, b = 0, c = 0;
        while (estudiantes >= con) {
            let voto = prompt("Ingrese el candidato por el que deseea votar (A, B o C)");
            if (voto == 'A' || voto == 'a') {
                a++;
            } else if (voto == 'B' || voto == 'b') {
                b++;
            } else if (voto == 'C' || voto == 'c') {
                c++;
            }
            con++;
        }
        let candidatoA = (a / estudiantes) * 100;
        let candidatoB = (b / estudiantes) * 100;
        let candidatoC = (c / estudiantes) * 100;
        let con2 = 1;
        a = 0, b = 0, c = 0;
        if (candidatoA > 51) {
            alert("Gano el candidato A");
        } else if (candidatoB > 51) {
            alert("Gano el candidato B");
        } else if (candidatoC > 51) {
            alert("Gano el candidato C")
        } else if (candidatoA == candidatoB && candidatoB == candidatoB) {
            alert("Triple empate");
        } else if (candidatoA > candidatoB && candidatoB > candidatoC) {
            let candidatoA = 0, candidatoB = 0;
            while (estudiantes >= con2) {
                let voto = prompt("Ingrese el candidato por el que deseea votar (A o B)");
                if (voto == 'A' || voto == 'a') {
                    a++;
                } else if (voto == 'B' || voto == 'b') {
                    b++;
                }
                candidatoA = (a / estudiantes) * 100;
                candidatoB = (b / estudiantes) * 100;
                con2++
            }
            if (candidatoA > candidatoB) {
                alert("Gano el candidato A!!!");
            } else if (candidatoB > candidatoA) {
                alert("Gano el candidato B!!!");
            } else {
                alert("Empate");
            }
        } else if (candidatoA > candidatoC && candidatoC > candidatoB) {
            let candidatoA = 0, candidatoC = 0;
            while (estudiantes >= con2) {
                let voto = prompt("Ingrese el candidato por el que deseea votar (A o C)");
                if (voto == 'A' || voto == 'a') {
                    a++;
                } else if (voto == 'C' || voto == 'c') {
                    c++;
                }
                candidatoA = (a / estudiantes) * 100;
                candidatoC = (c / estudiantes) * 100;
                con2++
            }
            if (candidatoA > candidatoC) {
                alert("Gano el candidato A!!!");
            } else if (candidatoC > candidatoA) {
                alert("Gano el candidato C!!!");
            } else {
                alert("Empate");
            }
        } else if (candidatoB > candidatoC && candidatoC > candidatoA) {
            let candidatoB = 0, candidatoC = 0;
            while (estudiantes >= con2) {
                let voto = prompt("Ingrese el candidato por el que deseea votar (B o C)");
                if (voto == 'C' || voto == 'c') {
                    c++;
                } else if (voto == 'B' || voto == 'b') {
                    b++;
                }
                candidatoC = (c / estudiantes) * 100;
                candidatoB = (b / estudiantes) * 100;
                con2++
            }
            if (candidatoB > candidatoC) {
                alert("Gano el candidato B!!!");
            } else if (candidatoC > candidatoB) {
                alert("Gano el candidato C!!!");
            } else {
                alert("Empate");
            }
        } else if (candidatoB > candidatoA && candidatoA > candidatoC) {
            let candidatoA = 0, candidatoB = 0;
            while (estudiantes >= con2) {
                let voto = prompt("Ingrese el candidato por el que deseea votar (A o B)");
                if (voto == 'A' || voto == 'a') {
                    a++;
                } else if (voto == 'B' || voto == 'b') {
                    b++;
                }
                candidatoA = (a / estudiantes) * 100;
                candidatoB = (b / estudiantes) * 100;
                con2++
            }
            if (candidatoA > candidatoB) {
                alert("Gano el candidato A!!!");
            } else if (candidatoB > candidatoA) {
                alert("Gano el candidato B!!!");
            } else {
                alert("Empate");
            }
        } else if (candidatoC > candidatoA && candidatoA > candidatoB) {
            let candidatoA = 0, candidatoC = 0;
            while (estudiantes >= con2) {
                let voto = prompt("Ingrese el candidato por el que deseea votar (A o C)");
                if (voto == 'A' || voto == 'a') {
                    a++;
                } else if (voto == 'C' || voto == 'c') {
                    c++;
                }
                candidatoA = (a / estudiantes) * 100;
                candidatoC = (c / estudiantes) * 100;
                con2++
            }
            if (candidatoA > candidatoC) {
                alert("Gano el candidato A!!!");
            } else if (candidatoC > candidatoA) {
                alert("Gano el candidato C!!!");
            } else {
                alert("Empate");
            }
        } else if (candidatoC > candidatoB && candidatoB > candidatoA) {
            let candidatoB = 0, candidatoC = 0;
            while (estudiantes >= con2) {
                let voto = prompt("Ingrese el candidato por el que deseea votar (C o B)");
                if (voto == 'B' || voto == 'b') {
                    b++;
                } else if (voto == 'C' || voto == 'c') {
                    c++;
                }
                candidatoB = (b / estudiantes) * 100;
                candidatoC = (c / estudiantes) * 100;
                con2++
            }
            if (candidatoB > candidatoC) {
                alert("Gano el candidato C!!!");
            } else if (candidatoC > candidatoB) {
                alert("Gano el candidato B!!!");
            } else {
                alert("Empate");
            }
        }


    })
})
