const modificarTitulo = () => {
  const titulo = document.getElementById("titulo");
  titulo.textContent = "Nuevo título";
  titulo.classList.add("display-6");
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

const borrarTitulo = () => {
  const titulos = document.getElementsByClassName("card-title");
  const titulo = titulos[2];
  if (titulo) {
    titulo.remove();
    btnBorrarTitulo.classList.add("disaled");
  }
};

const mostrarNombre = (e) => {
  e.preventDefault();
  const parrafoNombre = document.querySelector("#parrafoNombre");
  const inputNombre = document.querySelector("input").value;
  console.log(parrafoNombre);
  console.log(inputNombre);
  parrafoNombre.textContent += inputNombre;
};

const changeTheme = () =>{
  const btnChangeTheme = document.querySelector('#btnChangeTheme')
  const html = document.documentElement
  const themeActual = (html.getAttribute('data-bs-theme'))
  html.setAttribute('data-bs-theme', themeActual === 'dark' ? 'light' : 'dark' )
  themeActual === 'dark' ? btnChangeTheme.className = 'btn btn-outline-dark' : btnChangeTheme.className = 'btn btn-outline-light' 
}

const agregarTarea = (e) => {
  e.preventDefault();
  const inputTarea = document.querySelector('#inputTarea').value
  const lista = document.querySelector('.list-group')
  lista.innerHTML += `<li class="list-group-item">${inputTarea}</li>`
  tareaForm.reset()
}

const agregarTareaCreateElement = (e) => {
  e.preventDefault();
  const inputTarea = document.querySelector('#inputTarea').value
  const lista = document.querySelector('.list-group')
  const li = document.createElement('li')
  li.textContent = tareaForm
  li.classList.add('list-group-item')
  lista.appendChild(li)
  tareaForm.reset()
}


const btnCambiartituloConinnerHTML = document.querySelector("#btnCambiarTituloConInnerHTML");
const btnBorrarTitulo = document.getElementById("btnBorrarTitulo");
const formulario = document.querySelector("form");
const tareaForm = document.querySelector('#tareaForm')

// agregar un manejador de eventos
btnCambiartituloConinnerHTML.addEventListener(
  "click",
  modificarTituloConInnerHTML
);
btnBorrarTitulo.addEventListener("click", borrarTitulo);
formulario.addEventListener("submit", mostrarNombre);
tareaForm.addEventListener('submit', agregarTarea)

