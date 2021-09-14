let datos = [
    {
        "artista" : "Avicii",
        "cancion" : "Levels",
        "ruta" : "./music/Avicii - Levels.mp3",
        "icono" : "./img/icon_1.svg",
        "escuchadas" : 50
    },
    {
        "artista" : "Avicii",
        "cancion" : "Wake Me Up",
        "ruta" : "./music/Avicii - Wake Me Up.mp3",
        "icono" : "./img/icon_2.svg",
        "escuchadas" : 25
    },
    {
        "artista" : "Ed Sheeran",
        "cancion" : "Shape of You",
        "ruta" : "./music/Ed Sheeran - Shape of You.mp3",
        "icono" : "./img/icon_3.svg",
        "escuchadas" : 41
    },
    {
        "artista" : "Juanes",
        "cancion" : "Es Por Ti",
        "ruta" : "./music/Juanes - Es Por Tí.mp3",
        "icono" : "./img/icon_4.svg",
        "escuchadas" : 78
    },
    {
        "artista" : "Juanes",
        "cancion" : "Nada Valgo Sin Tu Amor",
        "ruta" : "./music/Juanes - Nada Valgo Sin Tu Amor.mp3",
        "icono" : "./img/icon_1.svg",
        "escuchadas" : 12
    },
    {
        "artista" : "Juanes",
        "cancion" : "Para Tu Amor",
        "ruta" : "./music/Juanes - Para Tu Amor.mp3",
        "icono" : "./img/icon_2.svg",
        "escuchadas" : 12
    },
    {
        "artista" : "OneRepublic",
        "cancion" : "Counting Stars",
        "ruta" : "./music/OneRepublic - Counting Stars.mp3",
        "icono" : "./img/icon_3.svg",
        "escuchadas" : 12
    },
    {
        "artista" : "OneRepublic",
        "cancion" : "Secrets",
        "ruta" : "./music/OneRepublic - Secrets.mp3",
        "icono" : "./img/icon_4.svg",
        "escuchadas" : 12
    },
    {
        "artista" : "Shawn Mendes",
        "cancion" : "There's Nothing Holdin' Me Back",
        "ruta" : "./music/OneRepublic - Secrets.mp3",
        "icono" : "./img/icon_1.svg",
        "escuchadas" : 12
    },
    {
        "artista" : "Shawn Mendes",
        "cancion" : "Treat You Better",
        "ruta" : "./music/Shawn Mendes - Treat You Better.mp3",
        "icono" : "./img/icon_2.svg",
        "escuchadas" : 12
    }
];

class Discos {
    /* Almacenamos los datos proporcionados para su posterior uso */
    constructor (datos, padre, plantilla) {
      this.datos = [];
      /* Clonamos los datos junto con un nuevo elemento que será el DOM */
      datos.forEach(elemento => {
        this.datos.push({
          dom: null,
          style: null,
          elemento
        });
      });
      this.padre = padre;
      this.plantilla = plantilla;
    }
    /* Pintamos una única vez los elementos en el DOM */
    pintar() {
      this.datos.forEach(dato => {
        this.plantilla.querySelector('p').innerText = dato.elemento.cancion;
        this.plantilla.querySelector('h5').innerText = dato.elemento.artista;
        this.plantilla.querySelector('img').setAttribute("src", dato.elemento.icono);
        this.plantilla.querySelector('source').setAttribute("src", dato.elemento.ruta);
        /* Clonamos solo el contenido generado de la plantilla */
        dato.dom = this.plantilla.cloneNode(true).firstElementChild;
        /* Agregamos ese DOM al documento */
        this.padre.appendChild(dato.dom);
        /* Almacenamos el estilo para su correcta restauración */
        dato.display = dato.dom.style.display;
      });
    }
    /* Transliteramos y normalizamos la cadena antes de compararla */
    normalizar(palabra) {
      return palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
    /* Función de comparación de cadenas para el buscador */
    incluye(pajar, aguja) {
      return this.normalizar(pajar)
        .includes(this.normalizar(aguja));
    }
    /* Función para ocultar aquellos datos que no contengan la palabra */
    filtrar(palabra) {
      this.datos.forEach(dato => {
        /* Comprobamos si el título o contenido incluye la palabra */
        if (
          this.incluye(dato.elemento.cancion, palabra)
          || this.incluye(dato.elemento.artista, palabra)
        ) {
          /* En caso positivo restauramos la visibilidad */
          dato.dom.style.display = dato.display;
        } else {
          /* En caso negativo ocultamos el elemento */
          dato.dom.style.display = "none";
        }
      });
    }
}

/* Creamos una instancia de nuestra clase */
const discos = new Discos(
    datos,
    lista_musica,
    window["template-card"].content
  );
  
  /* Cuando cargue el DOM pintamos los datos */
  window.addEventListener("DOMContentLoaded", () => {
    discos.pintar();
  });
  
  /* Cuando actualicemos o soltemos una tecla actualizamos los elementos mostrados */
  search.addEventListener("keyup", (evento) => {
    discos.filtrar(evento.target.value);
  });
  search.addEventListener("change", (evento) => {
    discos.filtrar(evento.target.value);
  });
