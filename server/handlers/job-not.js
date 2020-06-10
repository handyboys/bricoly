const db = require('../database/db');
var jobs = db.import('../database/models/jobs.js');
var users = db.import('../database/models/users.js');
var jobApplication = db.import('../database/models/job_applications.js');
var services = db.import('../database/models/services.js');

exports.getAllNot = async (req, res)=>{
    try {
        console.log(req.body)
        // FINDING ALL JOBS BASED ON THE CLIENT ID AND THE STATUS 
        const notifaction = await jobs.findAll({where: {status :'open', client_id: req.body.client_id}})
        console.log('this three' , notifaction)
        // FINDING ALL JOB APLICATION BASED ON THE JOBS ID
        // const Jobs = await jobApplication.findAll({where: {professional_id: professional_id}}) 
        // FINDING THE SERVICE NAME BASED ON THE JOBS.SERVICE_ID
        // const service = await jobs.findByPk(service_id)
        const Jobs = await Promise.all(notifaction.map(async element => {
            console.log('this is element' ,element)
            var AJ = {
                id: element.dataValues.id,
                client_id: element.dataValues.client_id,
                service_type: element.dataValues.service_type,
                service_id: element.dataValues.service_id,
                client_type: element.dataValues.client_type,
                status: element.dataValues.status,
                longitude: element.dataValues.longitude,
                latitude: element.dataValues.latitude,
                related_info: element.dataValues.related_info
            }
            var service = await services.findByPk(element.dataValues.service_id);
            console.log('this is service',service)
            AJ['service'] = service.dataValues.service
            return AJ 
        })
    )
        console.log('this one' , Jobs[0].service)
        // FINDING THE PROFESSIONAL NAME BASED ON THE JOB APPLICATION.JOB_ID
        const professional = await users.findByPk(jobs.professional_id)
        console.log('this two' , professional)
        // const {professional} = await jobs.findone({where: {professional_id: professional_id}})
        res.status(200).json({service, professional})
    } catch (e) {
        res.status(400)
        console.log(e)
    }
}