const db = require('../database/db');
//importing reviews' table's model
var Reviews = db.import('../database/models/reviews.js');
//importing jobs' table's model
var Jobs = db.import ('../database/models/jobs.js');


exports.createReviews = async(req,res)=>{
    try {
        db.sync({force:false})
        var createReviews = await Reviews.create({
            comment: req.body.comment,
            service_quality :req.body.service_quality,
            price : req.body.price,
            communication : req.body.communication,
            overall_rating : req.body.overall_rating,
            job_applications_id : req.body.job_applications_id
        });
        var data = await createReviews.save();
        console.log(data)
        res.status(200).json({data});

    } catch (error) {
        console.log(error)
        res.status(400)
    }
}
