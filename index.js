
//DELETE/TESTING ONLY/ file for testing/starting purpose 

import {connectDB} from "./API/config/database.js"; 
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";

const app = express()

//dotenv.config();

//may need to edit ip address on mongodb to allow ur device to connect to db
connectDB();

app.get('/', (req,res)=> {
    res.send("index/js");
}); 

app.listen(5000, () =>{ //
    console.log("server/port 5000");
});
