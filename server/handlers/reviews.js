const db = require('../database/db');
//importing reviews' table's model
var Reviews = db.import('../database/models/reviews.js');
//importing jobs' table's model
var Jobs = db.import ('../database/models/jobs.js');

var professionals = db.import('../database/models/professionals.js');


exports.updateReviews = async(req,res)=>{
        try {
            var query = `select overall_rating from reviews`;
            var calcul = `select sum((communication + price + service_quality) / 3) from reviews INNER JOIN  job_applications ON job_applications.id = reviews.job_applications_id where job_applications.professional_id = 5 `;
            var update = `UPDATE professionals SET average_review = ? where id = 5 `
            await db.sync({force:false});
            var length = await db.query(query, {type: db.QueryTypes.SELECT})
            var cal = await db.query(calcul, {type: db.QueryTypes.SELECT})
            var result = length/cal
            var result2 = await db.query(update, {replacements: [result], type: Sequelize.QueryTypes.UPDATE}) 
            var prof = await professionals.findAll({ include: [] })
            console.log(prof)       
        } catch (e) {
            console.log(e)
        }
    }
