import React,{useState,useEffect} from 'react';
import { Link,Route} from 'react-router-dom';

function Listofnotes(props) {
    const savedNotes=props.notes;
    useEffect(()=>{
            
    })
    return (
        <div>
            {savedNotes.map(singleNote=><Link to={`/page/${singleNote.ID}`} state={singleNote} key={singleNote.ID}>{singleNote.Title}</Link>)}
            <div>
                <Link to={{pathname:"/page",state:{}}}>Create new Note</Link>
            </div>
        </div>
    );
}

export default Listofnotes;