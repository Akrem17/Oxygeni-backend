
const jwt=require("jsonwebtoken");
const USER = require('../model/user');


exports.forgetpassword = async (req, res) => {
    try {
     
        const {email} = req.body
       
        const user = await USER.findOne({email});

        if(!user){throw 'Email n existe pas '}
        const secret="mysecretkey"+user.password;
        const payload={
            email:user.email,
            id:user._id
        }
        const token=jwt.sign(payload,secret,{expiresIn:'15m'},(err,token)=>{
            var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
            const link=fullUrl+"/reset-password/"+user._id+"/"+token;
            console.log(link)
         
            res.json({
                link
            })


        });
   

    }catch(err){
        console.log(err)
        res.status(403).send({msg:err})
    
  
    } }
  
    exports.resetpassword = async (req, res) => {
        try {
         
            const {id,token} = req.params;
           
            const user = await USER.findById(id)
    
            if(!user){throw 'User n exsite pas  '}


            const secret="mysecretkey"+user.password
            console.log(secret)
            const payload = jwt.verify(token,secret,(err,data)=>{

                if (err)  {res.sendStatus(403); }
                else{
                      
                        res.status(200).json({data})
                }   

            })
        }catch(err){
            console.log(err)
            res.status(403).send({msg:err})
        
      
        } }
        
    exports.reset = async (req, res) => {
        try {
         
            const {id,token} = req.params;
            const {password,passwordConfirm}=req.body

            if(password!=passwordConfirm) throw 'password ne confirme pas'

         
    
   

            const user = await USER.findByIdAndUpdate(id, {password,passwordConfirm})
            
            res.status(200).json({
                "message":"password updated"
            })

        }catch(err){
            console.log(err)
            res.status(403).send({msg:err})
        
      
        } }
      
      
    /* 
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
  
  
     */