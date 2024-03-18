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
        this.id=1;
       
    }

    getAllActivities () {
       
        return this.arrayactividades;
    }

    createActivity (){
       
        const actividad = document.getElementById('actfavorita').value;
        const desd = document.getElementById('desd').value;
        const linkimg = document.getElementById('linkimg').value;
        // Verificar que los campos obligatorios no estén vacíos
    
       const activity = new Activity(this.id,actividad,desd,linkimg)
              
        this.arrayactividades.push(activity);
    
        document.getElementById('actfavorita').value = '';
        document.getElementById('desd').value = '';
        document.getElementById('linkimg').value = '';
            
        this.id++;
        

    }

    deleteActivity  = (id) => {
    
        this.arrayactividades = this.arrayactividades.filter((activity) => activity.id !== id);
        
    }

}


function crearcarta(infocarta){
    //Reinicio del + del div 'Contenedor'
    const resultadoDiv = document.getElementById('Contenedor');
    resultadoDiv.innerHTML = '';
     
    
   const arraytarjetahtml= repository.getAllActivities ().map(crearcartahtml);
   arraytarjetahtml.forEach( (arrayactividades ) => resultadoDiv.appendChild(arrayactividades) )
    

}
 function crearcartahtml({id,title,description,imgUrl }){// pasamos la Destructuración de propiedades del objeto como argumento
    
        // creacion de elementos html
        const div = document.createElement('div');
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        const img = document.createElement("img")
        const BottonEli = document.createElement('button');
       
        div.classList.add('tarjeta');
        BottonEli.classList.add('btn');
        BottonEli.value =id;
        BottonEli.id='botonsubmitdelet';
        BottonEli.addEventListener("click", () => eliminarActividad(id));
       
        //asignacion de valores
        h3.innerHTML=title;
        p.innerHTML=description;
        img.src=imgUrl;
        img.alt='imagen sobre${title}';
        BottonEli.innerHTML="Eliminar"; // Agregar texto al botón
        console.log(img);
        //agragamos los elementos de nuestra carta en un contenedor div
        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(img);
        div.appendChild(BottonEli);
        
        return div;

}
 
function guardarValores(){
 
    repository.createActivity();
    const activity = repository.getAllActivities();
    crearcarta(activity);

}


function eliminarActividad(id) {
    repository.deleteActivity(id);
    const activity = repository.getAllActivities();
    crearcarta(activity);
}


// Crear una instancia de la clase Repository
const repository = new Repository();


const BottonSumbit = document.getElementById("botonsubmit")
BottonSumbit.addEventListener("click",guardarValores)

// const BottonSumbitDelet = document.getElementById("botonsubmitdelet")
// BottonSumbitDelet.addEventListener("click",)




