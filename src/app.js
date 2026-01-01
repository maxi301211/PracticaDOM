const modificarTitulo = () => {
    const titulo = document.getElementById('titulo')
    titulo.textContent = 'Nuevo título'
    titulo.classList.add('display-6')
    console.log(titulo)
}

const modificarTituloConInnerHTML = () => {
    const titulo = document.getElementById('titulo')
    titulo.innerHTML = 'Texto usaando <b>innerHTML</>'
}

const btnCambiartituloConinnerHTML = document.querySelector('#btnCambiarTituloConInnerHTML')

// agregar un manejador de eventos 
btnCambiartituloConinnerHTML.addEventListener('click', modificarTituloConInnerHTML)

