const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    console.log(req.headers)
    const auth = req.headers.Authorization.split(' ') // token is of format 'Bearer aflie5a64654a6ef3513a5f4...'
    if (req.headers.authorization && auth[0] === 'Bearer') {
        jwt.verify(auth[1], process.env.ACCESS_TOKEN_SECRET)
        .then(decodedToken => {
            req.user = decodedToken;
            console.log(req.user)
            next();
        })
        .catch(err => {
            res.status(401).send({message: 'Invalid access token'})
        })
    } else {
        res.status(401).send({message: 'Missing access token'})
    }
}