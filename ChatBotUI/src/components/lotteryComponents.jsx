"use client";

import { useState ,useEffect } from "react";
import { random_array_generator, array_sum } from "../../genericFunctions/generateArray_of_n.mjs";
import TicketComponent from "./ticketComponent";
import { winCondition } from "../../genericFunctions/generateArray_of_n.mjs";

const LotteryGame = ({numberofticktets}  ) => {
    const [isWinner, setIsWinner] = useState(false);
    const [numbers, setNumbers] = useState([]);
    useEffect(() => {
        setNumbers(random_array_generator(numberofticktets));  // Generate numbers only on client side
    }, [numberofticktets]);

    const generateLotteryTicket = (numberofticktets) => {

        let newNumbersArray = random_array_generator(numberofticktets)
        console.log("numberofticktets ==> ", numberofticktets);
        console.log("newNumbersArray ==> ", newNumbersArray);
    
        setNumbers(newNumbersArray)
        setIsWinner(winCondition(newNumbersArray));
    
    };


    return (
        <div className="p-4">

           {           console.log("numbers ==> ", numbers)           }
           <TicketComponent numbers={numbers}   winFunction={generateLotteryTicket} numberofticktets={numberofticktets} />

            {isWinner && (
                <h1 className="mt-4 text-green-600 text-xl font-semibold">
                    🎉 Congratulations! You won the lottery! 🎉
                </h1>
            )}
        </div>
    );
};

export default LotteryGame;
