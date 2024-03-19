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

module.exports ={
    Activity, Repository
};
