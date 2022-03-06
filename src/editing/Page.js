import React,{useEffect, useState} from 'react';
import {
    useParams,useLocation
  } from "react-router-dom";
function Page(props) {
    const {id}=useParams();
    const [savedNote,setNote]=useState("");
    const content=useLocation().state;
    
    
    useEffect(()=>{
        content!==null?setNote(content.Content):setNote("");
    },[]);
    // console.log(savedNote)
    // const handleChange=(event)=>{
    //     setNote(event.target.value);
    // }
    

    return (
        <div>
            {savedNote===""?<textarea placeholder="edit text" value={savedNote} onChange={(event)=>setNote(event.target.value)}/>:
            <textarea value={savedNote} onChange={(event)=>setNote(event.target.value)}></textarea>}


        </div>
    );
}

export default Page;