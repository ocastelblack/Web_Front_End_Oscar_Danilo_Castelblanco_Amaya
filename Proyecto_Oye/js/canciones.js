const tabla = document.querySelector('#top_3 tbody');
//Usar extension live server
function cargarDatos(){
    fetch('music.json')
    .then(respuesta => respuesta.json())//Indicamos el formato en que se desea obtener la informacion
    //.then(respuesta => console.log(respuesta))// Aqui mostramos esa informacion
    .then(respuesta => {
        var newData = respuesta.sort(function (a, b) {
            return b.escuchadas - a.escuchadas;
        });
        var top = newData;
        //console.log(top);
        for (var i = 0; i < top.length; i++){
            if(i <= 2){
                //console.log(top[i]);
                //console.log(top[i].artista);
                const row = document.createElement('tr');
                row.innerHTML += `
                <td>${top[i].artista}</td>
                <td>${top[i].cancion}</td>
                <td><audio src="${top[i].ruta}" controls=""></audio></td>
                `;
                //console.log(row)
                tabla.appendChild(row); 
            }
        } 
    })
}

cargarDatos();