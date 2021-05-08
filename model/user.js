const mongoose = require('mongoose');


const userSchema=mongoose.Schema({
    //the code of 'canton'
    nom:{
        type:String,
    },
    
    //the code of 'departement' that include that specific 'canton'
    prenom:{
        type:String,
        
    },email:{
        type:String,

    },
    password:{
        type:String,
        required:[true,'please provide a password'],
        select:false
    },
    passwordConfirm:{
        type:String,
        required:[true,"please provide a confirm password"],
        validate:{
            validator:function(el){
                return el===this.password
            },
            message:"passwords are not the same "
            
        }}
}

)


const User = mongoose.model('User',userSchema);
module.exports = User