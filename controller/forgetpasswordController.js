
const jwt=require("jsonwebtoken");
const USER = require('../model/user');
var mailController = require("../controller/mailController");

exports.forgetpassword = async (req, res) => {
    try {
     
        const {email} = req.body
       
        const user = await USER.findOne({email}).select("+password");;

        if(!user){throw 'Email n existe pas '}
        const secret="mysecretkey"+user.password;
        const payload={
            email:user.email,
            id:user._id
        }
        const token=jwt.sign(payload,secret,{expiresIn:'15m'},(err,token)=>{
          //  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
          var ref = req.header('Referer');

            const link=ref+"oxygeni-frontend/forgetpassword/"+user._id+"/"+token;
            req.body.link=link;
            mailController.sendmail(req,res)
            res.status(200)


        });
   

    }catch(err){
        res.status(403).send({msg:err})
    
  
    } }


    exports.reset = async (req, res,next) => {
        try {
         
            const {id,token} = req.params;
            const {password,passwordConfirm}=req.body
            if(password!=passwordConfirm) throw 'password ne confirme pas'

            //check if user exists && and password is correct
            const user = await USER.findById(id).select("+password");
            if(!user) throw 'user not found'

            const secret="mysecretkey"+user.password;
            jwt.verify(token,secret,(err,data)=>{

                if(err){

                res.sendStatus(403); 
                }else{
                    console.log(data)
                    req.params.id=id;
                    user.password=password;
                    user.passwordConfirm=passwordConfirm;
                    req.body=user;
               next();
                }
            })
       
          
          
        }catch(err){
            console.log(err)
            res.status(403).send({msg:err})
        }}
      
 /* 
    exports.reset = async (req, res) => {
        try {
            

            console.
                
            const payload =  jwt.verify(token,secret,(err,data)=>{
                if (err)  {res.sendStatus(403); }
                else{

                
                      }
                 

            })
         

        }catch(err){
            console.log("lena")
            res.status(403).send({msg:err})
        
      
        } }
       */
      
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