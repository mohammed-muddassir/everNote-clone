import React,{useState} from 'react';
import Cover from './Cover';
import Listofnotes from './Listofnotes';
import Scratchpad from './Scratchpad';

function Main(props) {
    const [list,saveList]=useState([]);
    function save(note){
        saveList([...list,note]);
        console.log(list)
    }
    return (
        <div>
            <div>
                <Cover/>
            </div>
            <Listofnotes notes={list}/>
            <Scratchpad toSave={save}/>
        </div>
    );
}

export default Main;