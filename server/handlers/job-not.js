const db = require('../database/db');
var jobs = db.import('../database/models/jobs.js');
var users = db.import('../database/models/users.js');
var jobApplication = db.import('../database/models/job_applications.js');
var services = db.import('../database/models/services.js');


/**
 * @function getAllNot  
 * @param req {Object} - The request object coming from the client
 * @param res {Object} - The response object that will be sent to the client
 * @returns {void}
 */

exports.getAllNot = async (req, res)=>{
    try {
        console.log(req.params)
    //     FINDING ALL JOBS BASED ON THE CLIENT ID AND THE STATUS 
        const notifaction = await jobs.findAll({where: {status :'open', client_id: req.params.id}})
        console.log('this',  notifaction[0].dataValues.service_id)
        var service1 = await services.findOne({where: notifaction[0].dataValues.service_id})
        console.log("abay", service1)
        var service = service1.service
    // FINDING ALL THE PROFESSIONAL FIRST NAMES AND LAST NAMES THAT APPLIED FOR THE USER'S JOB 
    const sql = `select first_name, last_name from job_applications inner join jobs on job_applications.job_id = jobs.id inner join users on job_applications.professional_id = users.id where jobs.client_id = ?`
    const professional = await db.query(sql , { replacements:  [req.params.id],type: db.QueryTypes.SELECT });
        res.status(200).json({service, professional})
    } catch (e) {
        res.status(400)
        console.log(e)
    }
}
