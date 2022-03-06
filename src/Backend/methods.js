let savedNotes;
export default class methods{
    static async injectDB(client){

        if(savedNotes){
            return;
        }
        else{
            try{
                 savedNotes=await client.db(process.env.DB_NAME).collection("listOfNotes");
            }
            catch(err){
                console.error(err);
            }
        }

    }
    static async getNotes(){
        console.log("it works")
        let cursor;
        try{
            cursor=await savedNotes.find({})
        }
        catch(err){
            console.error(err);
            return [];
        }
        const displayNotes=cursor.limit(15);
        try{
            const listofNotes=await displayNotes.toArray();
            
            return listofNotes;

        }
        catch(err){
            console.error(err);
            return [];
        }
    }
    static async postNotes(newNote)
    {
        let result=0;
        if(newNote!==null){
            // console.log(newNote);
            result=await savedNotes.insertOne(newNote);
            
        }
        return result.nInserted;


    }

    //to update notes

    static async updateNotes(passedId,passedNote){

        if(passedId==null || passedNote==null) return;

        // let query=`{"id":${passedId}},{$set:{note:${passedNote}}}`


        const result=await savedNotes.updateOne({_id:passedId},{$set:{note:passedNote}});
        console.log({_id:passedId},{$set:{note:passedNote}});
        return result;

    }
    static async deleteNotes(passedId){
        if(passedId===null) return;
        // let check=`{id:{"$eq":${passedId}}`;

        // let query=`{id:${passedId}}`;
        const isPresent=await savedNotes.find({_id:{"$eq":passedId}}).count();
        if(isPresent===1){
            const result=await savedNotes.deleteOne({_id:passedId});
            return result;

        }
        else{
            return {error:"no data found"};
        }

        

        
    }
    
}