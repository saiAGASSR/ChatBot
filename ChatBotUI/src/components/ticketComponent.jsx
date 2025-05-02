"use client";

import TicketNum from "./ticketNum";


const TicketComponent = ({ numbers, winFunction ,numberofticktets }) => {
    return (
        <>
            <button 
                onClick={()=> winFunction(numberofticktets)} 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
                Generate Lottery
            </button>

            <div className="mt-2">
                {numbers.map((num, index) => (
                    <TicketNum num={num} key={index} />
                ))}
            </div>
        </>
    );
};

export default TicketComponent;
