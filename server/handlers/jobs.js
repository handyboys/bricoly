const db = require('../database/db');

var users = db.import('../database/models/users.js');
var services = db.import('../database/models/services.js');
var service_categories = db.import('../database/models/service_categories.js');
var Jobs = db.import ('../database/models/jobs.js');


exports.getJobs = async (req, res)=>{
    console.log('job feed request recieved')
    try {
        db.sync({force:false})
        .then(()=>{
            return Jobs.findAll({
                  where : { status : 'open'}
            })
        })
        .then(async (AllJobs)=>{
            console.log('AllJobs' , AllJobs)
            var openJobs = await Promise.all(AllJobs.map(async element => {
                console.log('wassap',openJobs)
                var job = {
                    client_type: element.dataValues.client_type,
                    description: element.dataValues.related_info,
                    longitude: element.dataValues.longitude,
                    latitude: element.dataValues.latitude,
                    service_type: element.dataValues.service_type
                }
                var {first_name, last_name} = await users.findByPk(element.dataValues.client_id);
                var {service, category_id} = await services.findByPk(element.dataValues.service_id);
                var {category} = await service_categories.findByPk(category_id)
                job['first_name'] = first_name
                job['last_name'] = last_name
                job['service'] = service
                job['category'] = category
                console.log('Job : ', typeof job, job)
                return job
            })
            )
            console.log('open jobs', openJobs)
            res.status(200).json(openJobs)
        })
    } catch (e) {
        res.status(404).send(e)
    }
}

