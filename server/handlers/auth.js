const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database/db');
// importing users' table's model
var users = db.import('../database/models/users.js');
// importing users' credentials' table's model
var credentials = db.import ('../database/models/credentials.js');

/**
 * @function signUp - sending and saving the user's data in the database 
 * @param req {Object} - The request object coming from the client
 * @param res {Object} - The response object that will be sent to the client
 * @returns {void}
 * @async
 */

exports.signUp = async (req, res) => {
    console.log(req.body);
    // TODO - add req body paramter validation IMPORTANT !!!
    try {
        // generate salt
        var salt = await bcrypt.genSalt(10);
        // hash password
        var hashedPass =  await bcrypt.hash(req.body.password, salt);
        db.sync({force:false})
        // sync database
        .then(() => {
            // create new user
            return users.create({ 
                first_name :req.body.firstName, 
                last_name: req.body.lastName,
                email:req.body.email,
                phone:req.body.phone,
                is_professional:false 
            });
        })
        .then(user => {
            return user.save();
        })
        .then(savedRow => {
            const { id, email } = savedRow;
            const token = jwt.sign({id, email}, process.env.ACCESS_TOKEN_SECRET);   
            return credentials.create({ 
                id:id,
                password: hashedPass,
                salt:salt,
                token:token
            })    
        })
        // create credentials with user id 
        .then(credential => { 
            return credential.save();    
        })
        // send res with the token and user id
        .then(savedCredential => { 
            res.status(201).send({id:savedCredential.id, accessToken:savedCredential.token});
        })
    }
    catch(e){ 
        console.log(e);
    }     
    
    // save new user to database
    // send user id, email & token back to front end
}

  /**
 * @function signUp - getting the user from the database 
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
        db.sync({force: false})
        .then(() => (
            // find user id in db
            users.findOne({
                where: {
                    email: req.body.email
                }
            })
        ))
        .then(userRow => {
            req.body.id = userRow.id;
            // fetch credentials by user id
            return credentials.findOne({
                where: {
                    id: userRow.id
                }
            })
        })
        .then(userCredentials => {
            console.log(userCredentials);
            // compare stored password with attempted password
            return bcrypt.compare(req.body.password, userCredentials.password)
        })
        .then(passwordMatch => {
            if (passwordMatch) {
                const { id, email } = req.body;
            const token = jwt.sign({id, email}, process.env.ACCESS_TOKEN_SECRET)
            res.status(200).send({id:id, accessToken:token});
            } else {
                res.status(401).send({message: 'password is incorrect'})
            }
        })
        .catch(e => {
            console.log('DB Error : ', e)
        })
    } catch(e) {
        console.log('Error catched : ',e)
    }
    
    
    // if successful 
        // create new jwt token
        // send user id and token back
    // if not 
        // send error msg
}