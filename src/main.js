const piedra = document.getElementById("btnPiedra");
const papel = document.getElementById("btnPapel");
const tijeras = document.getElementById("btnTijeras");
const puntosUsr = document.getElementById("usuario");
const puntosIa = document.getElementById("IA");
const resultado = document.getElementById("resultado");
const opciones = ["piedra", "papel", "tijeras"];

iaSelection = () => Math.floor(Math.random() * 10) % 3;

function ganar (opcionUsr, opcionIa) {
    ++puntosUsr.innerHTML;
    resultado.innerHTML = `${opciones[opcionUsr]} le gana a ${opciones[opcionIa]}`;
    switch(opcionUsr) {
        case 0:
            piedra.classList.add("correcto");
        break;
        case 1:
            papel.classList.add("correcto");
        break;
        case 2:
            tijeras.classList.add("correcto");
        break;
    }
    // Regresamos a q0
}

function empatar (opcionUsr) {
    resultado.innerHTML = `Hubo un empate, ambos eligieron ${opciones[opcionUsr]}`
    switch(opcionUsr) {
        case 0:
            piedra.classList.add("empate");
        break;
        case 1:
            papel.classList.add("empate");
        break;
        case 2:
            tijeras.classList.add("empate");
        break;
    }
    // Regresamos a q0
}

function perder (opcionUsr, opcionIa) {
    ++puntosIa.innerHTML;
    resultado.innerHTML = `${opciones[opcionIa]} le gana a ${opciones[opcionUsr]}`;
    switch(opcionUsr) {
        case 0:
            piedra.classList.add("incorrecto");
        break;
        case 1:
            papel.classList.add("incorrecto");
        break;
        case 2:
            tijeras.classList.add("incorrecto");
        break;
    }
    // Regresamos a q0
}

function clearClassList () {
    piedra.classList.remove("empate");
    papel.classList.remove("empate");
    tijeras.classList.remove("empate");
    piedra.classList.remove("correcto");
    papel.classList.remove("correcto");
    tijeras.classList.remove("correcto");
    piedra.classList.remove("incorrecto");
    papel.classList.remove("incorrecto");
    tijeras.classList.remove("incorrecto");
}

const q0 = 0;
const q1 = 1;
const q2 = 2;
const q3 = 3;
const q4 = 4;
const q5 = 5;
const q6 = 6;

const matrizEstados = [
    /*piedra|papel|tijera|punto*/
    /*q0*/[q1, q2, q3, -1],
    /*q1*/[q6, q5, q4, -1],
    /*q2*/[q4, q6, q5, -1],
    /*q3*/[q5, q4, q6, -1],
    /*q4*/[-1, -1, -1, q0],
    /*q5*/[-1, -1, -1, q0],
    /*q6*/[-1, -1, -1, -1]
]

let opcionUsr = -1;
let opcionIa = -1;

// Se inicia en estado q0
piedra.addEventListener('click', () => { opcionUsr = 0;
                                         clearClassList();
                                         calcularEstado();
                                        });

// Se inicia en estado q0
papel.addEventListener('click', () => { 
                                        opcionUsr = 1;
                                        clearClassList();
                                        calcularEstado();
                                      });

// Se inicia en estado q0
tijeras.addEventListener('click', () => {
                                          opcionUsr = 2;
                                          clearClassList();
                                          calcularEstado();
                                        });

function calcularEstado()
{   
    // Se encuentra en los estados q1|q2|q3
    opcionIa = iaSelection();
    if (matrizEstados[opcionUsr + 1][opcionIa] === q6)
        empatar(opcionUsr);
    else if (matrizEstados[opcionUsr + 1][opcionIa] === q4)
        ganar(opcionUsr, opcionIa);
    else if (matrizEstados[opcionUsr + 1][opcionIa] === q5)
        perder(opcionUsr, opcionIa);
}