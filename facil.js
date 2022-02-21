//Inicio de Variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let PrimerResultado = null;
let SegundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let timerinicial = timer;
let tiempofinal = null;
let imagen = null;
let findelJuego = false;
//HTML

let totalMovimientos = document.getElementById("movimientos");
let totalAciertos = document.getElementById("aciertos");
let totalTiempo = document.getElementById("tiempo");
//Generar Numeros Aleatorios
let numeros = [
  "colocolo.jpg",
  "colocolo.jpg",
  "gman.jpg",
  "gman.jpg",
  "hmm.png",
  "hmm.png",
  "meme.jpg",
  "meme.jpg",
  "meme.png",
  "meme.png",
  "mym.png",
  "mym.png",
  "pokerface.png",
  "pokerface.png",
  "spoderman.png",
  "spoderman.png",
];
numeros = numeros.sort(() => {
  return Math.random() - 0.5;
});

let htmlid = [
  "n0",
  "n1",
  "n2",
  "n3",
  "n4",
  "n5",
  "n6",
  "n7",
  "n8",
  "n9",
  "n10",
  "n11",
  "n12",
  "n13",
  "n14",
  "n15",
];

//Funciones

function contarTiempo() {
  tiempofinal = setInterval(() => {
    timer--;
    totalTiempo.innerHTML = `Tiempo: <span>${timer} segundos</span>`;
    if (timer == 0) {
      clearInterval(tiempofinal);
      totalTiempo.innerHTML = `Tiempo: <span>${timer} segundos. Se te acabo el tiempo.</span>`;
      bloquertarjetas();
    }
  }, 1000);
}

function bloquertarjetas() {
  findelJuego = true;
  for (let i = 0; i <= 15; i++) {
    let tarjetaBloqueada = document.querySelector(`#n${i}`);
    imagen = `<img src="img/${numeros[i]}" alt="" />`;
    tarjetaBloqueada.innerHTML = imagen;
    tarjetaBloqueada.disabled = true;
    if (findelJuego == true) {
      reiniciar();
    }
  }
}

function destapar(pos, id) {
  if (temporizador == false) {
    contarTiempo();
    temporizador = true;
  }
  tarjetasDestapadas++;

  if (tarjetasDestapadas == 1) {
    tarjeta1 = document.querySelector(`#${id}`);
    PrimerResultado = `<img src="img/${numeros[pos]}" alt="" />`;
    tarjeta1.innerHTML = PrimerResultado;

    tarjeta1.disabled = true;
  } else if (tarjetasDestapadas == 2) {
    tarjeta2 = document.querySelector(`#${id}`);
    SegundoResultado = `<img src="img/${numeros[pos]}" alt="" />`;
    tarjeta2.innerHTML = SegundoResultado;
    tarjeta2.disabled = true;

    movimientos++;
    totalMovimientos.innerHTML = `Movimientos: <span>${movimientos}</span>`;
    if (PrimerResultado == SegundoResultado) {
      tarjetasDestapadas = 0;
      aciertos++;
      totalAciertos.innerHTML = `Buenas: <span>${aciertos}</span>`;

      if (aciertos == 8) {
        clearInterval(tiempofinal);
        totalAciertos.innerHTML = `Buenas: <span>${aciertos}</span>`;
        totalTiempo.innerHTML = `<span>Felicidades solo demoraste ${
          timerinicial - timer
        } segundos.</span>`;
        totalMovimientos.innerHTML = `Movimientos: <span>${movimientos}</span>`;
        findelJuego = true;
        reiniciar();
      }
    } else if (PrimerResultado != SegundoResultado) {
      //Mostrar un rato los valores y volver a tapar

      setTimeout(() => {
        tarjeta1.innerHTML = " ";
        tarjeta2.innerHTML = " ";
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0;
      }, 800);
    }
  }
}

function reiniciar() {
  findelJuego = false;
  let section = document.querySelector(".section2");
  let divReinicio = document.createElement("div");
  divReinicio.classList.add("estadisticas", "reinicio");
  section.appendChild(divReinicio);

  let selectdiv = document.querySelector(".reinicio");
  let h2Reinicio = document.createElement("h2");
  h2Reinicio.classList.add("h2reinicio");
  h2Reinicio.innerHTML = "Reiniciar Juego";
  selectdiv.appendChild(h2Reinicio);

  let aReinicio = document.createElement("a");
  aReinicio.classList.add("aReinicio");
  aReinicio.setAttribute("href", "index.html");
  aReinicio.innerHTML = "Reiniciar";
  selectdiv.appendChild(aReinicio);
}

// h2Reinicio.innerHTML = "Reiniciar Juego"
