const db = require('../database/db');
const { jobs } = require('.');

//importing users' table's model
var users = db.import('../database/models/users.js');
//importing services' table's model
var services = db.import('../database/models/services.js');
//importing services categories' table's model
var service_categories = db.import('../database/models/service_categories.js');
//importing jobs' table's model
var Jobs = db.import('../database/models/jobs.js');

var job_applications = db.import('../database/models/job_applications.js');

var professionals = db.import('../database/models/professionals.js')
/**
* @function getJobs - sending json for all the jobs
* @param req {Object} - The request object coming from the client
* @param res {Object} - The response object that will be sent to the client
* @returns {void}
* @async
*/

exports.getJobs = async (req, res) => {
    console.log("123")
    try {
        db.sync({ force: false })
            // sync database
            .then(() => {
                // finding all the jobs by their status
                return Jobs.findAll({
                    where: { status: 'open' }
                })
            })
            .then(async (AllJobs) => {
                //maping througth all jobs and getting the info from the db
                var openJobs = await Promise.all(AllJobs.map(async element => {
                    //an object that contains all the info from the db 
                    var job = {
                        client_type: element.dataValues.client_type,
                        description: element.dataValues.related_info,
                        longitude: element.dataValues.longitude,
                        latitude: element.dataValues.latitude,
                        service_type: element.dataValues.service_type
                    }
                    //finding the first name and the last name based on the primary of the client Id
                    var { first_name, last_name } = await users.findByPk(element.dataValues.client_id);
                    //finding the service and the category Id on the primary of the service Id
                    var { service, category_id } = await services.findByPk(element.dataValues.service_id);
                    //finding the category based on the primary of the category Id that we already found
                    var { category } = await service_categories.findByPk(category_id)
                    job['first_name'] = first_name
                    job['last_name'] = last_name
                    job['service'] = service
                    job['category'] = category
                    //adding all the info to the open jobs array
                    return job
                })
                )
                //sending a json for all the open jobs info 
                res.status(200).json(openJobs)
            })
    } catch (e) {
        res.status(400).send(e)
    }
}
exports.getJobHistory = async (req, res) => {
    var query = `select * from job_applications inner join jobs on job_applications.id = jobs.id inner join users on jobs.client_id = users.id inner join services on services.id = service_id where users.id = ?;
 `
    try {
        var user = await users.findAll({ where: { id: req.params.id } })
        if (user.is_professional) {
            var jobApps = await db.query(query, { replacements: [req.params.id], type: db.QueryTypes.SELECT });
            res.status(200).send(jobApps)
        } else {
            var jobsHistory = await Jobs.findAll({ where: { client_id: req.params.id } })
            var myJobsHistory = await Promise.all(jobsHistory.map(async element => {

                var jobHistory = {
                    client_type: element.dataValues.client_type,
                    description: element.dataValues.related_info,
                    longitude: element.dataValues.longitude,
                    latitude: element.dataValues.latitude,
                    service_type: element.dataValues.service_type
                }
                var { first_name, last_name } = await users.findByPk(element.dataValues.client_id);

                var { service, category_id } = await services.findByPk(element.dataValues.service_id);
                var { category } = await service_categories.findByPk(category_id)
                jobHistory['first_name'] = first_name
                jobHistory['last_name'] = last_name
                jobHistory['service'] = service
                jobHistory['category'] = category
                //adding all the info to the open jobs array
                return jobHistory
            }))
            res.status(200).json(myJobsHistory);
        }
    } catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
}
