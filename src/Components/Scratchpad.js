import React,{useState} from 'react';
import {nanoid} from 'nanoid'

function Scratchpad(props) {
    //scratch pad input
    // let id=0;
    const [content,savecontent]=useState("");
    const [title,saveTitle]=useState("");
    
    function handleSubmit(event){
        event.preventDefault();
        const id=nanoid();
        console.log(id);
        const note={
            ID:id,
            Title:title,
            Content:content
        }
        savecontent("");
        saveTitle("");
        props.toSave(note);

    }
    
    return (
        <div>
            <p>SCRATCH PAD</p>
            <form onSubmit={handleSubmit}>
            <input value={content} onChange={(event)=>savecontent(event.target.value)}></input>
            <input value={title} onChange={(event)=>saveTitle(event.target.value)}/>
            <button type="submit" >submit</button>
            </form>
        </div>
    );
}

export default Scratchpad;