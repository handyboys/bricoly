const db = require('../database/db');
//importing reviews' table's model
var Reviews = db.import('../database/models/reviews.js');
//importing jobs' table's model
var Jobs = db.import ('../database/models/jobs.js');

var professionals = db.import('../database/models/professionals.js');


exports.updateReviews = async(req,res)=>{
    try {
        let query = `select * from reviews inner join job_applications on job_applications.id = reviews.job_applications_id where job_applications.professional_id = ?`;
        let calcul = `select sum((communication + price + service_quality) / 3) from reviews INNER JOIN job_applications ON job_applications.id = reviews.job_applications_id where job_applications.professional_id = ?`;
        let update = `UPDATE professionals SET average_review = ? where id = ?`;
        await db.sync({force:false});
        let length = await db.query(query,{replacements: [req.body.id], type: db.QueryTypes.SELECT});
        let cal = await db.query(calcul,{replacements: [req.body.id], type: db.QueryTypes.SELECT});
        let result =  cal[0]['sum((communication + price + service_quality) / 3)']/length.length;
        console.log('hahahahahahahahahah', result)
        await db.query(update, {replacements: [result, req.body.id], type: db.QueryTypes.UPDATE});
        let prof = await professionals.findAll({ include: [] });
        res.status(400).json(prof);
    } catch (e) {
        console.log(e);
    }
}