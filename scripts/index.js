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
        this.id=0;
       
    }

    getAllActivities () {
       
        return this.arrayactividades;
    }

    createActivity (){
        
        const id = this.id++;
        
        const actividad = document.getElementById('actfavorita').value;
        const desd = document.getElementById('desd').value;
        const linkimg = document.getElementById('linkimg').value;
        // Verificar que los campos obligatorios no estén vacíos
        if (actividad.trim() === '' || desd.trim() === '' || linkimg.trim() === '') {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }
        const datos = new Activity(id,actividad, desd, linkimg);
        this.arrayactividades.push(datos);
       
        

    document.getElementById('actfavorita').value = '';
    document.getElementById('desd').value = '';
    document.getElementById('linkimg').value = '';
        
    

    }

    deleteActivity  = (id) => {
        this.arrayactividades = this.arrayactividades.filter(activity => activity.id !== id);
      
    }

}


function instActivity(insvaraible){
    const ins = new Activity(insvaraible);

    // Destructuración de propiedades del objeto en variables
//     const { id, title, description, imgUrl } = pruebadeistancia;

// // Uso de las variables extraídas
// console.log("console de id",id); 
// console.log(title);   
// console.log(description); 
// console.log(imgUrl); 

}


// Crear una instancia de la clase Repository
const act = new Repository();




function guardarValores(){    
act.createActivity();
const resultadodeguardar = act.getAllActivities();
console.log("resultador de guardar=> ", resultadodeguardar);
const ins= new Activity(resultadodeguardar)
// instActivity(resultadodeguardar);
 console.log("resultado de instancia activity =>",ins);






}

function eliminarActividad(id) {
    act.deleteActivity(id);
    act.getAllActivities
    // mostrarActividades(); mostrar nuevamente el div con el contenido existente
}


