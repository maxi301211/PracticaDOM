const modificarTitulo = () => {
    const titulo = document.getElementById('titulo')
    titulo.textContent = 'Nuevo título'
    titulo.classList.add('display-6')
    console.log(titulo)
}