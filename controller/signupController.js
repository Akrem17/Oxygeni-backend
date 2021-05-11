const USER = require('../model/user');
const jwt=require("jsonwebtoken");

exports.signup = async (req, res) => {
    try {
     
        const {nom,prenom,email,password,passwordConfirm} = req.body
        // check if email and password exist
        if(! email && !password){throw 'Saisir email et mot de passe'}
        //check if user exists && and password is correct

        const emailverif = await USER.findOne({email});

        if(emailverif){throw 'Email exists'}

        if(password !=passwordConfirm) {throw "Le mot de passe n'est pas conforme "}
        //crypt password


        const user = await USER.create(req.body);


         
        var token =jwt.sign({user},"mysecretkey",(err,token)=>{
         
            res.status(200).json({
                token,
                status: 'success singup',
                user,
              });
        })
                      
      
    }catch(err){
        console.log(err)
        res.status(403).send({msg:err})
        
    }}
  