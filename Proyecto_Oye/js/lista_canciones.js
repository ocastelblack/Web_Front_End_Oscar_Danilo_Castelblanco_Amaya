const list = document.getElementById('lista_musica')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
const formulario = document.querySelector('#search')
const boton = document.querySelector('#boton')

document.addEventListener('DOMContentLoaded', () =>{
    fetchData()
})

const fetchData = async () =>{
    try {
        const res = await fetch('music.json')
        const data = await res.json()
        //console.log(data)
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}

const pintarCards = data => {
    //console.log(data)
    data.forEach(producto => {
        //console.log(producto)
        templateCard.querySelector('p').textContent = producto.cancion
        templateCard.querySelector('h5').textContent = producto.artista
        templateCard.querySelector('img').setAttribute("src", producto.icono)
        templateCard.querySelector('source').setAttribute("src", producto.ruta)
        templateCard.querySelector('h6').textContent = producto.escuchadas
        
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    lista_musica.appendChild(fragment)
}


