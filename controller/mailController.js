const nodemailer = require("nodemailer");


exports.sendmail=async(req,res)=>{


    try{
    

      
     let  transport  = nodemailer.createTransport({

        service:"gmail",
        auth:{
            user:'akrem.hammami.issatso@gmail.com',
            pass:'Friendly05'
        }
    });
        message ="email = "+req.body.email+req.body.nom+" tel = "+req.body.tel+" message = "+req.body.message;
    let mailOptions={
        from:req.body.email,
        to:"akrem.hammami.issatso@gmail.com",
        subject:req.body.nom,
        text:message
    };
    
    transport.sendMail(mailOptions,(err,data)=>{
    
        if(err){
            console.log("error")
        }else{
            console.log("emailsend")
        }
    })
    
    
     
    
  
    
  
        res.status(200).json({

        
            status: 'success',
        
          });
        } catch (err) {
          res.status(400).json({
            status: 'fail',
            message: err,
          });
  
    }
  
  }
  
  