
console.log("in job posts");

const db = require('../database/db');

var service_categories = db.import('../database/models/service_categories.js');

exports.selectCategory =(req, res) => { 
 console.log(req.body)
 try { 
     db.sync({force:false})
     .then(()=>{
return service_categories.findAll({include:[]})
})
.then(categories => {   
  res.status(200).json(selectCategories);
})

 } catch(e){ 
     console.log(e);
     res.status(400)
 }
 
} 

