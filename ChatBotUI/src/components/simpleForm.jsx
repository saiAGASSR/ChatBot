"use client";


const  SimpleForm = () => {

    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log("Form was submitted ");
    }

    return (
        <>
        <div>
            <form  onSubmit={handleSubmit}>
                <input type="text"  placeholder="Input here"/>
                <button >Submit</button>
            </form>
        </div>
        </>
    )


}

export default SimpleForm;