
var ElasticMail = require('nodelastic');
var client = new ElasticMail('8DB27F009C592324AEAE54E9036D9F9665B977D242ED5441792655B329B07A48A67A74351BCBCA00D92D45883EF33005');
const env= require('dotenv').config()

exports.sendmail=async(req,res)=>{


    try{
    

      if(req.body.email && req.body.link){

        client.send({
          from : 'akrem.hammami170498@gmail.com',
          fromName : 'Oxygeni',
          subject : 'Reset mot de passe',
          msgTo: [ req.body.email ],
          bodyHtml: `<h1>Lien de reset mot de passe :</h1><br><div style="word-wrap: break-word;"><a href=${req.body.link}>${req.body.link}</a> </div>`,
          textHtml: 'Hello World'
        }).then(console.log);
        
     
      }else{


      
      
       /*  var attachments = [ 
            // CSV
            { data: 'id,name\n1,name_1',
              filename: 'attachment1.csv' },
            // PDF
            { data: fs.readFileSync('filepath_here'),
              filename: 'attachment2.pdf',
              contentType: 'application/pdf' } 
          ]; */
          //message ="email = "+req.body.email+"nom= "+req.body.nom+" tel = "+req.body.tel+" message = "+req.body.message;
          client.send({
            from : 'akrem.hammami170498@gmail.com',
            fromName : 'Oxygeni',
            subject : 'Oxygeni contact',
            msgTo: [ 'akremhammami@outlook.com' ],
            bodyHtml: `<h1>From : ${req.body.email} </h1><br> Nom : ${req.body.nom}<br> Tel: ${req.body.tel} <br> Message : ${req.body.message}<br> `,
            textHtml: 'Hello World'
          }).then(console.log);
          
          // will print 
          // {"success":true,"data":{"transactionid":"190d1b03-8b01-41a1-8003-17181c1719b0","messageid":"ilXf1Nm38mxuxemecfdbvw2"}}
          
          // You can also set default options, for example having the same from and the name of the sender
        }
        res.status(200).json({"message":"success"})
        } catch (err) {
          res.status(400).json({
            status: 'fail',
            message: err,
          });
  
    }
  
  }
  
  