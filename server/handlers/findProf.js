const db = require('../database/db');

var users = db.import('../database/models/users.js');
var professionals = db.import('../database/models/professionals.js');
var job_applications = db.import('../database/models/job_applications.js');

/**
* @function getAllProfessionals - getting the all the professionals from the database 
* @param req {Object} - The request object coming from the client
* @param res {Object} - The response object that will be sent to the client
* @returns {void}
* @async
*/


exports.getAllProfessionals = async (req, res) => {
  var query = "SELECT * FROM users INNER JOIN professionals ON users.id = professionals.id INNER JOIN service_categories On professionals.category_id = service_categories.id;" //inner join job_applications on job_applications.professional_id = professionals.id 

  try {
    await db.sync({ force: false });
    // selecting all the professionals from the database
    var allProfs = await db.query(query, { type: db.QueryTypes.SELECT })
    res.status(200).json(allProfs)
    //var numberOfJobs = await job_applications.count({ where: { professional_id : professional.id}})
    // get the number of the jobs from the jobs table
  } catch (e) {
    console.log(e)
    res.status(400);
  }
}