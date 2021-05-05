const mongoose = require('mongoose');


const userSchema=mongoose.Schema({
    //the code of 'canton'
    nom:{
        type:String,
    },
    
    //the code of 'departement' that include that specific 'canton'
    prenom:{
        type:String,
        
    },
    //the name of the 'canton'
    tel:{
        type:String,
        required:true

    } ,email:{
        type:String,

    },
    region:{
        type:String,

    },
    ville:{
        type:String,

    }
},

)


const User = mongoose.model('User',userSchema);
module.exports = User