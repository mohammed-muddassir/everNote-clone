import React,{useState,useEffect} from 'react';

function Cover(props) {
    const [greeting,changeGreeting]=useState("");
    const [currentDate,setDate]=useState("");
    const findDate=()=>{
        let string="";
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        const day=new Date().getDay();
        const month=new Date().getMonth();
        string+=days[day]+","+months[month];
        return string;
    }
    useEffect(()=>{
        const hours=new Date().getHours();
        const day=findDate();
        setDate(day+" "+new Date().getDate()+","+new Date().getFullYear());
        if(hours>=0 && hours<12){
            
            changeGreeting("Good Morning");
        }
        else if(hours>=12 && hours<16){
            changeGreeting("Good Afternoon");
        }
        else if(hours>=16 && hours<19){
            changeGreeting("Good Evening");
        }
        else{
            changeGreeting("Lets burn some midnight oil...")
        }
       
        

    },[greeting,currentDate]);
    return (
        <div>
            <p>{greeting} User!!</p>
            <p>{currentDate}</p>
        </div>
    );
}

export default Cover;