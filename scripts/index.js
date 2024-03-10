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
        this.actividades=[];
        this.nextId = 1; // ID inicial
    }

    agregarDatos(dato) {
        Activity.id = this.nextId++; // Asignar el próximo ID único
        this.actividades.push(dato);
    }

    obtenerDatos() {
        return this.actividades;
    }

    eliminarActividad(id) {
        this.actividades = this.actividades.filter(activity => activity.id !== id);
    }

}

const repo = new Repository();

function guardarValores() {
    
    const actividad = document.getElementById('actfavorita').value;
    const desd = document.getElementById('desd').value;
    const linkimg = document.getElementById('linkimg').value;

    const datos = new Activity(actividad, desd, linkimg);
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
    repo.obtenerDatos().forEach(actividades => {
        // Creación de un nuevo div para cada actividad
        const actividadDiv = document.createElement('div');
        actividadDiv.classList.add('tarjeta');
        // Asignación del contenido HTML del div con los datos de la actividad
        actividadDiv.innerHTML = `
            <h1>${actividades.title}</h1><br>
            <p>${actividades.description}</p><br>
            <img src="${actividades.imgUrl}" alt="${actividades.title}">
            <button class="button" data-id="${actividades.id}" onclick="eliminarActividad(${actividades.id})">Eliminar</button>
        `;
        
        // Agregado del div de la actividad al div 'resultado'
        resultadoDiv.appendChild(actividadDiv);
    });
}

function eliminarActividad(id) {
    repo.eliminarActividad(id);
    mostrarActividades();
}