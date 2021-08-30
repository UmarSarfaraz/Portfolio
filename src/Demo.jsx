import React from "react";
import { useState } from "react";


const Demo=()=>{
            let newTime=new Date().toLocaleTimeString();
            const[cTime,setCtime]=useState(newTime);
    
            const UpdateTime=()=>{
                newTime=new Date().toLocaleTimeString();
                setCtime(newTime);
    
            };
            setInterval(UpdateTime,1000);
            return(
                <>
                <h1>{cTime}</h1>
                </>
            );
    };
    export default Demo;