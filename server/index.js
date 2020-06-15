
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const middleware = require('./middleware')
const router = require('./routers');
console.log("IN INDEX.JS");

// TODO : check Morgan for logging
// TODO : check helmet for security
// TODO : Express rate limiter for limiting access frequency
// TODO : XSS
// TODO : add error middlewarre; have one file that handles all errors  
// Error structure : 1-Message, 2-Details, 3-Code
const app = express();
// app.use(middleware.auth);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// routes
app.use('/auth', router.auth);
app.use('/job-post', router.jobPost)
app.use('/jobs', router.jobs)
app.use('/findProf', router.findProf)
app.use('/job', router.jobNot)


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server listening on port : ${port} ..`);
});