
const jwt=require("jsonwebtoken");
const USER = require('../model/user');

exports.login = async (req, res) => {
    try {
     
        const {email,password} = req.body
        // check if email and password exist
        if(! email && !password){throw 'Saisir email et mot de passe '}
        //check if user exists && and password is correct
        const user = await USER.findOne({email}).select("+password");


        if(!user || password!=user.password){
            throw 'email ou mot de passe incorrect !'
         }
        console.log(user);
        
        
        var token =jwt.sign({user},"mysecretkey",(err,token)=>{

            res.json({
                token,
                user
            })
        })
                      
      
    }catch(err){
        console.log(err)
        res.status(403).send({msg:err})
    }}
  
  
    
exports.verifyToken = async (req, res,next) => {
    try {
        const bearerHeader=req.headers['authorization'];
        if(typeof bearerHeader!=='undefined'){
            const bearer= bearerHeader.split(' ');
            const bearerToken=bearer[1];

                        
                jwt.verify(bearerToken,'mysecretkey',(err,authData)=>{

                    if(err){

                    res.sendStatus(403); 
                    }else{
                        req.authData=authData
                        next();

                    }
                })
        }else{
            res.sendStatus(403);
        }
        
      
                      
      
    }catch(err){
        console.log(err)
        res.json({err})
    }}
  
  
    