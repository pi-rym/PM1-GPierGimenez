class Activity{
    constructor(id,title, description, imgUrl) {
        this.id=id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor(){
        this.arrayactividades=[];
       
    }

    agregarDatos(dato) {
      
        this.arrayactividades.push(dato);
    }

    obtenerDatos() {
        return this.arrayactividades;
    }

    borrarcarta(id) {
        this.arrayactividades = this.arrayactividades.filter(activity => activity.id !== id);
      
    }

}


let contador = 0; // Variable global para almacenar el número

const repo = new Repository();

function guardarValores() {
    contador++;
    const actividad = document.getElementById('actfavorita').value;
    const desd = document.getElementById('desd').value;
    const linkimg = document.getElementById('linkimg').value;

    // Verificar que los campos obligatorios no estén vacíos
    if (actividad.trim() === '' || desd.trim() === '' || linkimg.trim() === '') {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }
    const datos = new Activity(contador,actividad, desd, linkimg);
    repo.agregarDatos(datos);

    console.log(repo.obtenerDatos());
    document.getElementById('actfavorita').value = '';
    document.getElementById('desd').value = '';
    document.getElementById('linkimg').value = '';
    
    mostrarActividades();
}

function mostrarActividades() {
    
    const resultadoDiv = document.getElementById('resultado');

    // Reinicio del contenido del div 'resultado'
    resultadoDiv.innerHTML = '';

    // Iteración sobre todas las actividades almacenadas en el repository
    repo.obtenerDatos().forEach(arrayactividades => {
        // Creación de un nuevo div para cada actividad
        const actividadDiv = document.createElement('div');
        actividadDiv.classList.add('tarjeta');
        
        // Asignación del contenido HTML del div con los datos de la actividad
        actividadDiv.innerHTML = `
        
            <h3>${arrayactividades.title}</h3><br>
            <p>${arrayactividades.description}</p><br>
            <img src="${arrayactividades.imgUrl}" alt="${arrayactividades.title}">
            <button class="btn" data-id="${arrayactividades.id}" onclick="eliminarActividad(${arrayactividades.id})">Eliminar</button>
        `;
        
        // Agregado del div de la actividad al div 'resultado'
        resultadoDiv.appendChild(actividadDiv);
    });
}

function eliminarActividad(id) {
    repo.borrarcarta(id);
    mostrarActividades();
}