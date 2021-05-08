const oxygene = require('../model/oxygene');
const user = require('../model/user');
const jwt=require("jsonwebtoken");

exports.createOxygene = async (req, res) => {
  try {
    const newDoc = await oxygene.create(req.body);
                    
    res.status(200).json({
      status: 'success',
      data: {
        newDoc,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllOxygenes=async(req,res)=>{


    try{
           //pagination default 1
     const page = req.query.page * 1 || 1;
     const limit = req.query.limit * 1 || 5
     const skip = (page - 1) * limit
     const tel=req.query.tel||null
     const capacite=req.query.capacite||null
     const region=req.query.region||null
     const ville=req.query.ville||null

     const userAuth=req.authData||null
      
     if(tel,capacite,region,ville){

      var doc= await oxygene.find({tel,capacite,region,ville}).skip(skip).limit(limit);
      var total = doc.length

     }else{
       doc= await oxygene.find({}).skip(skip).limit(limit);
       const total = await oxygene.countDocuments();



     }

     if (total==0) throw 'no documents found';
  
        res.status(200).json({
          total:total,
          userAuth,
            status: 'success',
            data: {
              doc,
            },
          });
        } catch (err) {
          res.status(400).json({
            status: 'fail',
            message: err,
          });

    }

}


exports.getOxygenByVilleAndRegion= async (req, res) => {

  try {
          //pagination default 1
          const page = req.query.page * 1 || 1;
          const limit = req.query.limit * 1 || 5
          const skip = (page - 1) * limit
     
      var region=req.params.region;
      var ville =req.params.city;
      console.log(region)
      
 /*        user
        .findOne({region: region,ville:ville })
.populate("blogs") // key to populate
.then(user => {
   res.json(user); 
}); */
    /*   const docs =  await user.aggregate([
        { $lookup:
            {
               from: "oxygenes",
               localField: "_id",
               foreignField: "user",
               as: "oxygenes"
            }
          },{
        $match : { region : region,ville:ville }
    
      }
    ]).skip(skip).limit(limit);
 */

    const docs =  await oxygene.find({region: region,ville:ville }).skip(skip).limit(limit);
    const total =  await docs.length;
    //if (total==0) throw 'no documents found';


  
      res.status(200).json({
        total:total,
        status: 'success',
        data: {
          docs,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  };

  exports.getOxygenByRegion= async (req, res) => {

    try {
            //pagination default 1
            const page = req.query.page * 1 || 1;
            const limit = req.query.limit * 1 || 5
            const skip = (page - 1) * limit

       /*  var region=req.params.region;
        region= region.charAt(0).toUpperCase() + region.slice(1);

        console.log(region)
        

        const docs =  await user.aggregate([
          { $lookup:
              {
                 from: "oxygenes",
                 localField: "_id",
                 foreignField: "user",
                 as: "oxygenes"
              }
            },{
          $match : { region : region }
      
        }
      ]).skip(skip).limit(limit);
 */
      const docs =  await oxygene.find({region: req.params.region}).skip(skip).limit(limit);
    
      const total =  await docs.length;
      
  
     // if (total==0) throw 'no documents found';
  
  
    
        res.status(200).json({
          total:total,
          status: 'success',
          data: {
            docs,
          },
        });
      } catch (err) {
        res.status(400).json({
          status: 'fail',
          message: err,
        });
      }
    };
  

/*
  exports.getMultipleCircByCode= async (req, res) => {

    try {
      const page = req.query.page * 1 || 1;
      const limit = req.query.limit * 1 || 5
      const skip = (page - 1) * limit
 
      req.params.code  = new RegExp("^"+req.params.code,"i");
      
        
        const docs = await circonsci.find({codeCirconscriptions:req.params.code}).sort({codeCirconscriptions:1}).skip(skip).limit(limit);
        const total = await circonsci.countDocuments({codeCirconscriptions:req.params.code});

        if (total==0)throw 'no document found';
    
        res.status(200).json({
          total,
          status: 'success',
          data: {
            docs,
          },
        });
      } catch (err) {
        res.status(400).json({
          status: 'fail',
          message: err,
        });
      }
    };

  exports.getCircByName= async (req, res) => {

    try {
      const page = req.query.page * 1 || 1;
      const limit = req.query.limit * 1 || 5
      const skip = (page - 1) * limit
 
      req.params.name  = new RegExp("^"+req.params.name,"i");
      const docs = await circonsci.find({libelleCirconscriptions:req.params.name}).sort({libelleCirconscriptions:1}).skip(skip).limit(limit);
      const total = await circonsci.countDocuments({libelleCirconscriptions:req.params.name});
      console.log(req.params.name)
        if (total==0)throw 'no document found';
    
        res.status(200).json({
          total:total,
          status: 'success',
          data: {
            docs,
          },
        });
      } catch (err) {
        res.status(400).json({
          status: 'fail',
          message: err,
        });
      }
    };
    

    exports.getCircByCodeAndName= async (req, res) => {

      try {
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 5
        const skip = (page - 1) * limit
        req.params.code  = new RegExp("^"+req.params.code,"i");

        req.params.name  = new RegExp("^"+req.params.name,"i");
        const docs = await circonsci.find({libelleCirconscriptions:req.params.name,codeCirconscriptions:req.params.code}).sort({libelleCirconscriptions:1,codeCirconscriptions:1}).skip(skip).limit(limit);
        const total = await circonsci.countDocuments({libelleCirconscriptions:req.params.name,codeCirconscriptions:req.params.code});
        console.log(req.params.name)
          if (total==0)throw 'no document found';
      
          res.status(200).json({
            total:total,
            status: 'success',
            data: {
              docs,
            },
          });
        } catch (err) {
          res.status(400).json({
            status: 'fail',
            message: err,
          });
        }
      };
  exports.updateOnecirconsci = async (req, res) => {
    try {
      const obj = Object.assign({},req.body);
      delete obj.bureaux
      console.log(obj)

  
      const updatedDoc = await circonsci.findOneAndUpdate({codeCirconscriptions:req.params.codeCirconscri},obj, 
        {
        new: true,
        //to run the validator again
        runValidators: true,
      });
      if (!updatedDoc) throw 'document not found';
      res.status(201).json({
        status: 'success',
        data: {
          updatedDoc,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
}

exports.deleteOnecirconsci =  async (req, res) => {
  try {
    const doc = await circonsci.findOneAndDelete({codeCirconscriptions:req.params.codeCirconscri});
    if (!doc) {
      throw 'no document found with this codeCommune';
    }

    res.status(204).json({
      status: 'success',
      message: 'doc deleted !',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
}; */