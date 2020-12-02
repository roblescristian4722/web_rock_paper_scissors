const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijeras = document.getElementById("tijera");
let puntosUsr = 0;
let puntosIa = 0;

iaSelection = () => Math.floor(Math.random() * 10) % 3;

ganar = () => {
    puntosUsr++;
}

empatar = () => {
    
}

perder = () => {
    puntosIa++;
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

function main()
{   
    let opcionUsr = -1;
    let opcionIa = iaSelection();

    // Estado q0
    rock.addEventListener('click', () => opcionUsr = 0);

    // Estado q0
    paper.addEventListener('click', () => opcionUsr = 1);

    // Estado q0
    scissors.addEventListener('click', () => opcionUsr = 2);

    if (matrizEstados[opcionUsr + 1][opcionIa] === q6)
        empatar();
    else if (matrizEstados[opcionUsr + 1][opcionIa] === q4)
        ganar();
    else if (matrizEstados[opcionUsr + 1][opcionIa] === q5)
        perder();
}

main();