
"use client";

import { useState } from "react";

const Todo = ()=>{
    

    const [toDo,setToDo] = useState(["sample"]);
    const handleToDo=(event)=>{
        event.preventDefault();

        
        const formData = new FormData(event.currentTarget);

        setToDo( (prevToDo)=>{

            let action = formData.get("action")
            return [...prevToDo, action ]
        } )
        event.currentTarget.reset();
    }

    return(

        <>
            <div>
                <form  onSubmit={handleToDo}>
                    <input type="text" name="action" />
                    <button>  add</button>
                </form>
            </div>

            <ul>

            Your ToDo List 
            {toDo.map((el , index)    =>  (

                                    <li key={index}> {el}</li>

                                      ))}
            </ul>
        </>

    )

}

export default Todo;