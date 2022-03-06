import {MongoClient} from 'mongodb'
import app from './server.js';
import dotenv from 'dotenv';
import methods from './methods'
dotenv.config();

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
    
    
    
})



