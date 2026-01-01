const modificarTitulo = () => {
  const titulo = document.getElementById("titulo");
  titulo.textContent = "Nuevo título";
  titulo.classList.add("display-6");
  console.log(titulo);
};

const modificarTituloConInnerHTML = () => {
  const titulo = document.getElementById("titulo");
  titulo.innerHTML = "Texto usaando <b>innerHTML</b>";
};

const ocultarTexto = () => {
  const titulos = document.getElementsByClassName("card-title");
  const btn = document.getElementById("btnOcultarTexto");

  titulos[1].classList.toggle("d-none");

  btn.textContent = titulos[1].classList.contains("d-none") 
    ? "Mostrar texto" 
    : "Ocultar texto";
};

const btnCambiartituloConinnerHTML = document.querySelector(
  "#btnCambiarTituloConInnerHTML"
);

// agregar un manejador de eventos
btnCambiartituloConinnerHTML.addEventListener(
  "click",
  modificarTituloConInnerHTML
);
