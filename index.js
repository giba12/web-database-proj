
//DELETE/TESTING ONLY/ file for testing/starting purpose 

const { configDotenv } = require('dotenv');
const express = require('express')
const mongoose = require('mongoose');
const app = express()

//may need to edit ip address on mongodb to allow ur device to connect to db
mongoose.connect('mongodb+srv://giba:<saGEpapnHmZYzaDw>@cluster0.zog7p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then (() => console.log('connected'));

app.get('/', (req,res)=> {
    res.send("index/js");
}); 

