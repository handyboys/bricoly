const db = require('../database/db');

var service_categories = db.import('../database/models/service_categories.js');
var services = db.import('../database/models/services.js');

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


exports.selectService = (req, res) =>{ 
  try{
    
    db.sync({force:false})
    .then(()=>{ 
      return services.findAll ({where:{category_id:req.params.id}});
    }).then(selectService =>{ 
      res.status(200).json(selectService)
    })
  } catch(e){
    console.log(e);
    res.status(400);
  }
}