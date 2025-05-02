"use client"
const { useState } = require("react")

const BasicForm= ()=>{
    const [fullName,setFullName] = useState("SA");

    const handleNameChange =(event)=>{
        // event.preventdefault();
        let newName = event.target.value;
        console.log("newName ==> ", newName);
        setFullName(newName)
    }

    return <>
            <div>
                <form >
                    <input type="text" name="firstName" value={fullName} onChange={handleNameChange}/>
                </form>
            </div>
        
    </>

}

export default BasicForm;