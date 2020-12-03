const piedra = document.getElementById("btnPiedra");
const papel = document.getElementById("btnPapel");
const tijeras = document.getElementById("btnTijeras");
let puntosUsr = document.getElementById("usuario");
let puntosIa = document.getElementById("IA");

iaSelection = () => Math.floor(Math.random() * 10) % 3;

function ganar (opcionUsr, opcionIa) {
    ++puntosUsr.innerHTML;
    
}

function empatar (opcionUsr, opcionIa) {
    
}

function perder (opcionUsr, opcionIa) {
    ++puntosIa.innerHTML;
}

const q4 = 4;
const q5 = 5;
const q6 = 6;
const q7 = 7;
const q8 = 8;

const matrizEstados = [
    /*piedra|papel|tijera|punto*/
    /*q0*/[1, 2, 3, -1],
    /*q1*/[q6, q5, q4, -1],
    /*q2*/[q4, q6, q5, -1],
    /*q3*/[q5, q4, q6, -1],
    /*q4*/[-1, -1, -1, 7],
    /*q5*/[-1, -1, -1, 8],
    /*q6*/[-1, -1, -1, -1],
    /*q7*/[-1, -1, -1, -1],
    /*q8*/[-1, -1, -1, -1]
]

let opcionUsr = -1;
let opcionIa = -1;


// Estado q0
piedra.addEventListener('click', () => {opcionUsr = 0; calcularEstado();});

// Estado q0
papel.addEventListener('click', () => { opcionUsr = 1; calcularEstado();});

// Estado q0
tijeras.addEventListener('click', () => { opcionUsr = 2; calcularEstado();});

function calcularEstado()
{   
    opcionIa = iaSelection();
    console.log("usr", opcionUsr);
    console.log("IA", opcionIa);
    
    if (matrizEstados[opcionUsr + 1][opcionIa] === q6)
        empatar(opcionUsr, opcionIa);
    else if (matrizEstados[opcionUsr + 1][opcionIa] === q4)
        ganar(opcionUsr, opcionIa);
    else if (matrizEstados[opcionUsr + 1][opcionIa] === q5)
        perder(opcionUsr, opcionIa);
}