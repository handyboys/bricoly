const db = require('../database/db');
// importing jobs' table's model
var jobs = db.import('../database/models/jobs.js');
// importing services' table's model
var services = db.import('../database/models/services.js');


/**
 * @function getAllNot  
 * @param req {Object} - The request object coming from the client
 * @param res {Object} - The response object that will be sent to the client
 * @returns {void}
 * @async
 */

exports.getAllNot = async (req, res)=>{
    try {
    //     FINDING ALL JOBS BASED ON THE CLIENT ID AND THE STATUS 
        const notifaction = await jobs.findAll({where: {status :'open', client_id: req.params.id}})
        // FETCHING THE SERVICE TABLE BY ID 
        var serviceName = await services.findOne({where: notifaction[0].dataValues.service_id})
        var service = serviceName.service
    // FINDING ALL THE PROFESSIONAL FIRST NAMES AND LAST NAMES THAT APPLIED FOR THE USER'S JOB 
    const sql = `select first_name, last_name from job_applications inner join jobs on job_applications.job_id = jobs.id inner join users on job_applications.professional_id = users.id where jobs.client_id = ?`
    // FETCHING THE PROFESSIONAL FIRST NAMES AND LAST NAMES BY CLIENT ID
    const professional = await db.query(sql , { replacements:  [req.params.id],type: db.QueryTypes.SELECT });
        res.status(200).json({service, professional})
    } catch (e) {
        res.status(400)
        console.log(e)
    }
}
