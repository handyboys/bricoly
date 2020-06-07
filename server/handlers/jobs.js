const db = require('../database/db');

//importing users' table's model
var users = db.import('../database/models/users.js');
//importing services' table's model
var services = db.import('../database/models/services.js');
//importing services categories' table's model
var service_categories = db.import('../database/models/service_categories.js');
//importing jobs' table's model
var Jobs = db.import ('../database/models/jobs.js');

/**
 * @function getJobs - sending json for all the jobs
 * @async
 * @param {req, res}
 * @returns {json} - all jobs data from the database 
 */

exports.getJobs = async (req, res)=>{
    try {
        db.sync({force:false})
        // sync database
        .then(()=>{
            // finding all the jobs by their status
            return Jobs.findAll({
                  where : { status : 'open'}
            })
        })
        .then(async (AllJobs)=>{
            console.log('AllJobs' , AllJobs)
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
                var {first_name, last_name} = await users.findByPk(element.dataValues.client_id);
                //finding the service and the category Id on the primary of the service Id
                var {service, category_id} = await services.findByPk(element.dataValues.service_id);
                //finding the category based on the primary of the category Id that we already found
                var {category} = await service_categories.findByPk(category_id)
                job['first_name'] = first_name
                job['last_name'] = last_name
                job['service'] = service
                job['category'] = category
                //adding all the info to the open jobs array
                return job
            })
            )
            console.log('open jobs', openJobs)
            //sending a json for all the open jobs info
            res.status(200).json(openJobs)
        })
    } catch (e) {
        res.status(404).send(e)
    }
}

