import express from "express";
import cors from "cors";
import router from "./api.routes.js";
import {MongoClient} from 'mongodb'

import dotenv from 'dotenv';
import methods from './methods.js'
const app=express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/",router);
app.use("*",(req,res)=>res.status(404).json({error:"not found"}));


MongoClient.connect(process.env.URI,{
    maxPoolSize:50,
    wtimeoutMS:2500,
    useNewUrlParser:true,
})
.catch(err=>{
    console.error(err)
    process.exit(1);
})
.then(async client=>{
    await methods.injectDB(client);
   console.log("connected")
   app.listen(process.env.PORT,()=>{
    console.log("listening on 5000");
   })
    
})





export default app;


