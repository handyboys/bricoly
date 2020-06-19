const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database/db');
// importing users' table's model
var users = db.import('../database/models/users.js');
var professionals = db.import('../database/models/professionals.js');
// importing users' credentials' table's model
var credentials = db.import('../database/models/credentials.js');


// TODO : change async handling using await instead of .then

/**
 * @function signUp - sending and saving the user's data in the database 
 * @param req {Object} - The request object coming from the client
 * @param res {Object} - The response object that will be sent to the client
 * @returns {void}
 * @async
 */
exports.signUp = async (req, res) => {

    // TODO - add req body paramter validation IMPORTANT !!!
    try {
        // generate salt
        const salt = await bcrypt.genSalt(10);
        // hash password
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        await db.sync({ force: false })
        // sync databaseif
        if (req.body.is_professional === false) {
            const user = await users.create({
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                is_professional: false
            });
            const savedRow = await user.save();
            const { id, email } = savedRow;
            const token = jwt.sign({ id, email }, process.env.ACCESS_TOKEN_SECRET);
            const credential = await credentials.create({
                id: id,
                password: hashedPass,
                salt: salt,
                token: token
            })
            // create credentials with user id 
            const savedCredential = await credential.save();

            // send res with the token and user id
            res.status(201).send({ id: savedCredential.id, accessToken: savedCredential.token });
        } else if (req.body.is_professional === true) {

            const user = await users.create({
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                is_professional: true
            });
            const professional = await professionals.create({
                id: user.id,
                category_id: req.body.category_id,
                adress: req.body.adress,
                longitude: req.body.longitude,
                latitude: req.body.latitude,
                motorized: req.body.motorized,
                description: req.body.description
            });
            const savedRow = await user.save();
            const { id, email } = savedRow;
            const token = jwt.sign({ id, email }, process.env.ACCESS_TOKEN_SECRET);

            const credential = await credentials.create({
                id: user.id,
                password: hashedPass,
                salt: salt,
                token: token
            })
            // create credentials with user id 
            const savedCredential = await credential.save();
            // send res with the token and user id
            res.status(201).send({ id: savedCredential.id, accessToken: savedCredential.token, is_professional: user.is_professional });
        }

    }
    catch (e) {
        throw (e);
    }
    // save new user to database
    // send user id, email & token back to front end
}

/**
* @function signIn - getting the user from the database 
* @async
* @param req {Object} - The request object coming from the client
* @param res {Object} - The response object that will be sent to the client
* @returns {void}
*/

exports.singIn = async (req, res) => {
    console.log(req.body);
    // TODO - add req body paramter validation IMPORTANT !!!
    try {
        // synchronizing database
        await db.sync({ force: false })
        // find user id in db
        const userRow = await users.findOne({
            where: {
                email: req.body.email
            }
        })
        req.body.id = userRow.id;
        // fetch credentials by user id
        const userCredentials = await credentials.findOne({
            where: {
                id: userRow.id
            }
        })
        console.log(userCredentials);
        // compare stored password with attempted password
        const passwordMatch = await bcrypt.compare(req.body.password, userCredentials.password)
        if (passwordMatch) {
            const { id, email } = req.body;
            const token = jwt.sign({ id, email }, process.env.ACCESS_TOKEN_SECRET)
            res.status(200).send({ id: id, accessToken: token, is_professional: userRow.is_professional });
        } else {
            res.status(401).send({ message: 'password is incorrect' })
        }

    } catch (e) {
        console.log('Error catched : ', e)
    }


    // if successful 
    // create new jwt token
    // send user id and token back
    // if not 
    // send error msg
}