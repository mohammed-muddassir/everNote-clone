import methods from "../methods.js"
import express from 'express';
const application=express();

application.use(express.json());
export default class notesController{
    static async apiGetNotes(req,res){
        const notesSofar=await methods.getNotes();
        if(notesSofar){
            console.log(notesSofar);

        }
        else{
            console.log("ur fuckes")
        }
        
        res.json(notesSofar);
    }
    static async apiPostNotes(req,res){
        let newNote={
            
        };

        newNote.title=req.body.title ;
        newNote.note=req.body.note ;
        newNote.last_modified=req.body.last_modified ;
        newNote.dateCreated=req.body.dateCreated ;
        // console.log(req.body);
        // console.log(newNote);
        // res.json(req.body);


        const isInserted=await methods.postNotes(newNote);
        if(isInserted===1){
            res.send("data inserted")
        }
        else{
            res.send("OOps data is not inserted");
        }
        
    }
    static async apiUpdateNotes(req,res){
        let passedId=req.params.id;
        let passedNote=req.body.note;
        // console.log("dssss")
        // console.log(passedNote)
        

        const result=await methods.updateNotes(passedId,passedNote);
        console.log(passedNote);
        res.json(result);
        // res.send(req.body);


    }
    static async apiDeleteNotes(req,res){
        let passedId=req.params.id;

        const result=await methods.deleteNotes(passedId);

        res.json(result);

    }
}