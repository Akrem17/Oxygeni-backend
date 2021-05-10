
var ElasticMail = require('nodelastic');
var client = new ElasticMail('8DB27F009C592324AEAE54E9036D9F9665B977D242ED5441792655B329B07A48A67A74351BCBCA00D92D45883EF33005');
const env= require('dotenv').config()

exports.sendmail=async(req,res)=>{


    try{
    

     
       /*  var attachments = [ 
            // CSV
            { data: 'id,name\n1,name_1',
              filename: 'attachment1.csv' },
            // PDF
            { data: fs.readFileSync('filepath_here'),
              filename: 'attachment2.pdf',
              contentType: 'application/pdf' } 
          ]; */
          
          client.send({
            from : 'akrem.hammami170498@gmail.com',
            fromName : 'Sender',
            subject : 'Subject',
            msgTo: [ 'akrem@gmx.us' ],
            bodyHtml: '<h1>Hello World</h1>',
            textHtml: 'Hello World'
          }).then(console.log);
          
          // will print 
          // {"success":true,"data":{"transactionid":"190d1b03-8b01-41a1-8003-17181c1719b0","messageid":"ilXf1Nm38mxuxemecfdbvw2"}}
          
          // You can also set default options, for example having the same from and the name of the sender
          // the function below is the same as the client.send above
          client.setConfig({
            from : 'akrem.hammami170498@gmail.com',
            fromName : 'Sender'
          });
          client.send({
            subject : 'Subject',
            msgTo: [ 'akrem@gmx.us' ],
            msgCC: [ 'cc_1@domain.com', 'cc_2@domain.com' ],
            bodyHtml: '<h1>Hello World</h1>',
            textHtml: 'Hello World'
          }).then(console.log);
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
  
  