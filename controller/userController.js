const user = require('../model/user');

exports.createUser = async (req, res) => {
  try {
    const newDoc = await user.create(req.body);
                    
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

exports.getAllUsers=async(req,res)=>{


    try{
           //pagination default 1
     const page = req.query.page * 1 || 1;
     const limit = req.query.limit * 1 || 5
     const skip = (page - 1) * limit

        const doc= await user.find({}).skip(skip).limit(limit);
        const total = await user.countDocuments();

        if (total==0) throw 'no documents found';

  
        res.status(200).json({
          total:total,
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
exports.getUserById= async (req, res) => {

  try {
      console.log(req.body.id)
      const docs = await user.findById(req.params.id)
      if (!docs)throw 'no document found';
  
      res.status(200).json({
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

  exports.updateById= async (req, res) => {

    try {
     
        console.log(req.body)
        const docs = await user.findByIdAndUpdate(req.params.id,req.body)
        if (!docs)throw 'no document found';
    
        res.status(200).json({
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