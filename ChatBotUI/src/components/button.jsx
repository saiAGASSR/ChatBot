"use client";

const Button = () => {
    const handleClick = () => {
        console.log("Button clicked!");
    };

    const handlePara = () => {
        console.log("handlePara clicked!");
    };

    const handleParaMouseOver = () => {
        console.log("handlePara Hovered!");
    };


    const handleonDoubleClick = () => {
        console.log("handlePara Doubleclicked!");
    };
    
    const handleonEventObject = (event) => {
        console.log(event);
        
        console.log("event!");
    };
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <p onClick={handlePara}> This is para demofor event</p>
            <p onMouseOver={handleParaMouseOver}> This is para demofor event</p>
            <p onDoubleClick={handleonDoubleClick}> This is para demofor event</p>
            <p onDoubleClick={handleonEventObject}>Demo for event Object </p>
        </div>
    );
};

export default Button;
