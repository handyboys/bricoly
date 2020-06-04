const db = require('../database/db');

var service_categories = db.import('../database/models/service_categories.js');

exports.selectCategory = async (req, res) => { 
 try { 
  const categories = await db.service_categories.findAll({});
  res.status(200).json(categories);


 } catch(e){ 
     console.log(e);
 }
 
} 

