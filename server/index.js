
require("dotenv").config();
const socket = require('socket.io');

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
app.use('/reviews', router.createReviews)


const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
    console.log(`Server listening on port : ${port} ..`);
});
// socket setup 
var io = socket(server);
// Listen to new connection and show message in the browser
io.on('connection' ,(socket)=>{
    console.log(`New connection ${socket.id}`)
// Listening for chat event  
     socket.on('chat',(data)=>{
          io.sockets.emit('chat',data)   
     })
     socket.on('typing',(data)=>{
         io.sockets.emit('typing',data)
     });

 });