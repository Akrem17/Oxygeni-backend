const mongoose = require('mongoose');


const oxygeneSchema=mongoose.Schema({
    //the code of 'canton'
    modele:{
        type:String,
    },
    
    //the code of 'departement' that include that specific 'canton'
    fabriquant:{
        type:String,
        
    },
    //the name of the 'canton'
    capacite:{
        type:String,
        required:true

    } ,
    quantite:{
        type:String

        
    } ,
    
    prix:{
        type:String,

    } ,
    
    user:{
        type:mongoose.Types.ObjectId,
        ref:'Users'
    }
    
},

)


const ox = mongoose.model('Oxygenes',oxygeneSchema);
module.exports = ox