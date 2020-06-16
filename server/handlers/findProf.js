const db = require('../database/db');

var users = db.import('../database/models/users.js');
var professionals = db.import('../database/models/professionals.js');
var job_applications = db.import('../database/models/job_applications');


exports.getAllProfessionals = async (req, res) => { 
  var query = "SELECT * FROM users INNER JOIN professionals ON users.id = professionals.id";
  
  try { 
    await db.sync({force:false});
    
    var allProfs = await db.query(query, {type: db.QueryTypes.SELECT})
    res.status(200).json(allProfs)
    //var numberOfJobs = await job_applications.count({ where: { professional_id : professional.id}})
 // get the number of the jobs from the jobs table
    

   } catch (e){ 
      console.log(e)
      res.status(400);
  }
}