const db = require('../database/db');

var Jobs = db.import ('../database/models/jobs.js');

exports.getJobs = async (req, res)=>{
    try {
        db.sync({force:false})
        .then(()=>{
            return Jobs.findAll({include:[]})
        })
        .then((AllJobs)=>{
            res.status(200).json(AllJobs)
        })
    } catch (e) {
        res.status(404).send(e)
    }
}