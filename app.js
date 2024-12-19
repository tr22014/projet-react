const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routeClient = require('./route/clientRoutes');
mongoose.connect('mongodb+srv://taharami22014:taharami22014@cluster0.ukrqb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("Connected succesfully");
}).catch((error)=>{
    console.log("Failed to connect");
});

app.use(bodyParser.json());
app.use('./api/client/',routeClient);
module.exports = app;