"use client";
import { useState } from "react";



const Counter = ()=>{
    const [count,setCount] = useState(0);
    console.log("Component is rendered");
    console.log(`Count is ${count}`);
    
    
    const handleClick=()=>{
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount((prev=>{
                            
        //         return prev+1;
        // }))
        // setCount((prev=>{
                
        //         return prev+1;
        // }))  
        setCount(25);
        console.log(`Inside HandleClick is ${count}`);

    }
    return (
        <>
        <div>
            <button onClick={handleClick}>Counter {count}</button>
        </div>
        </>
    )
}

export default Counter;