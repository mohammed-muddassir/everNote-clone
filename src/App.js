import './App.css';
import { useState,useEffect} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Scratchpad from './Components/Scratchpad';
import Main from './Components/Main';
import Page from './editing/Page';
// import connectToMongo from './Database/mongoConnect'
// // import {} from '../src/.env'
// //importing mongo connecting function 
// import {connectToMongo} from '../src/Database/mongoConnect'
// // import {uri} from './environment';
// //importing connection uri
// import { MongoClient } from 'mongodb';
// import {MongoClient} from './Database/mongoClient'




function App() {
        
        // const client=new MongoClient("mongodb+srv://muddassir:Whyamihere001@learn-mongo.rjp2v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
        
        // useEffect(()=>{
        //   connectToMongo(client);
          
        // },[]);
        return (
          <div className="App">
            <BrowserRouter>
              
                  <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route path="/page/:id" element={<Page/>}/>
                    <Route exact path="/page" element={<Page/>}/>

                  </Routes>
                
            </BrowserRouter>
              
          </div>
        );
}

export default App;
