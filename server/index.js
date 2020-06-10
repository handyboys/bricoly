
require('dotenv').config();
const socket = require('socket.io');

const express = require('express');
const cors = require('cors');

const router = require('./routers');
console.log("IN INDEX.JS");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// routes
app.use('/auth', router.auth);
app.use('/job-post', router.jobPost);
app.use('/jobs', router.jobs);



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