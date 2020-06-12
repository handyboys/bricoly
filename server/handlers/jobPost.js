const db = require('../database/db');

var service_categories = db.import('../database/models/service_categories.js');
var services = db.import('../database/models/services.js');

/**
 * @function selectCategory
 * @param req {Object} - The request object coming from the client
 * @param res {Object} - The response object that will be sent to the client
 * @returns void
 */

exports.selectCategory =(req, res) => { 
 
 try { 
     db.sync({force:false})
     .then(()=>{
return service_categories.findAll({include :[]})
})
.then(selectCategories => {   
  res.status(200).json(selectCategories);
})

 } catch(e){ 
     console.log(e);
     res.status(400);
 }
 
} 

/**
 * @function selectService
 * @param req {Object} - The request object coming from the client
 * @param res {Object} - The response object that will be sent to the client
 * @returns {void}
 */

exports.selectService = (req, res) =>{ 
  try{
    console.log(req);
    db.sync({force:false})
    .then(()=>{ 
      return services.findAll ({where:{category_id: req.body.id}});
    }).then(selectService =>{ 
      res.status(200).json(selectService)
    })
  } catch(e){
    console.log(e);
    res.status(400);
  }
}
