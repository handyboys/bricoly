const db = require('../database/db');

var users = db.import('../database/models/users.js');
var services = db.import('../database/models/services.js');
var service_categories = db.import('../database/models/service_categories.js');
var Jobs = db.import ('../database/models/jobs.js');


exports.getJobs = async (req, res)=>{
    var openJobs = []
    console.log('job feed request recieved')
    try {
        db.sync({force:false})
        .then(()=>{
            return Jobs.findAll({
                  where : { status : 'open'}
            })
        })
        .then((AllJobs)=>{
            AllJobs.forEach(async element => {
                var job = {
                    client_type: element.client_type,
                    description: element.related_info,
                    longitude: element.longitude,
                    latitude: element.latitude,
                    service_type: element.service_type
                }
                var {first_name, last_name} = await users.findByPk(element.client_id);
                var {service, category_id} = await services.findByPk(element.service_id);
                var {category} = await service_categories.findByPk(category_id)
                job['first_name'] = first_name
                job['last_name'] = last_name
                job['service'] = service
                job['category'] = category
                openJobs.push(job)
            });
            res.status(200).json(openJobs)
        })
    } catch (e) {
        res.status(404).send(e)
    }
}

