const db = require('../database/db');

// importing services' categories table's model
var service_categories = db.import('../database/models/service_categories.js');
// importing services' table's model
var services = db.import('../database/models/services.js');
var jobs = db.import('../database/models/jobs');
/**
 * @function selectCategory
 * @param req {Object} - The request object coming from the client
 * @param res {Object} - The response object that will be sent to the client
 * @returns void
 */


exports.selectCategory = async (req, res) => {

  try {

    await db.sync({ force: false })
    var selectCategories = await service_categories.findAll({ include: [] })
    res.status(200).json(selectCategories);

  } catch (e) {
    console.log(e);
    res.status(400);
  }

}
/**
 * @function selectService -get all the services saved in the services table basing on the category id
 * @param {Object} req - the object sent from the client side 
 * @param {Object} res - the object that will be send from the server 
 */

exports.selectService = async (req, res) => {
  try {
    await db.sync({ force: false })

    var selectService = await services.findAll({ where: { category_id: req.body.id } });

    res.status(200).json(selectService)

  } catch (e) {
    console.log(e);
    res.status(400);
  }
}

/**
  * @function jobDraft - saving the clients's job information in the database
 * @param req {Object} - The request object coming from the client
 * @param res {Object} - The response object that will be sent to the client
 * @returns {void}
 * @async
 */


exports.jobDraft = async (req, res) => {
  try {
    await db.sync({ force: false })
    // sync database
    // create new jobDraft
    var jobs = await jobs.create({
      client_id: req.body.client_id,
      service_type: req.body.service_type,
      service_id: req.body.service_id,
      client_type: req.body.client_type,
      status: "open",
      longitude: req.body.longitude,
      latitude: req.body.latitude,
      related_info: req.body.related_info
    });
    var data = await jobs.save();
    res.status(201).json({ data });
  }
  catch (e) {
    console.log(e);
  }
}

exports.createNewJob = async (req, res) => {
  try {
    db.sync({ force: false })
      // sync database
      .then(() => {
        // create new jobDraft
        return jobs.create({
          client_id: req.body.client_id,
          service_type: req.body.service_type,
          service_id: req.body.service_id,
          client_type: req.body.client_type,
          status: "open",
          longitude: req.body.longitude,
          latitude: req.body.latitude,
          related_info: req.body.related_info
        });
      })
      .then(jobs => {
        return jobs.save();
      })
      .then(data => {
        res.status(201).json({ data });
      })
  }
  catch (e) {
    console.log(e);
  }
}
