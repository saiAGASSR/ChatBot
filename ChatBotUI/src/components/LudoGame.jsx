"use client";
import { useState } from "react";

const LudoGame = ()=>{

    const [moves,setMoves] = useState({blue : 0 ,Yellow : 0 ,Red : 0 ,Green : 0})
    const [array,setArrays] = useState([])


    const blueButtonClass = "text-blue-900 bg-white border border-blue-300 focus:outline-none hover:bg-blue-100 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-800 dark:text-white dark:border-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-600 dark:focus:ring-blue-700"
    const YellowButtonClass = "focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
    const RedButtonClass = "text-red-900 bg-white border border-red-300 focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-red-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-800 dark:text-white dark:border-red-600 dark:hover:bg-red-700 dark:hover:border-red-600 dark:focus:ring-red-700"
    const GreenButtonClass = "text-green-900 bg-white border border-green-300 focus:outline-none hover:bg-green-100 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-800 dark:text-white dark:border-green-600 dark:hover:bg-green-700 dark:hover:border-green-600 dark:focus:ring-green-700"


    const handleBlueClick = ()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves, blue : prevMoves.blue + 1}
        })

        array.push("sai")
    }
       
    const handleYellowClick = ()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves, Yellow : prevMoves.Yellow + 1}
        })
    }
    
    const handleRedClick = ()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves, Red : prevMoves.Red + 1}
        })
    }
    
    const handleGreenClick = ()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves, Green : prevMoves.Green + 1}
        })
    }
    

    return (
        <>
            <div className="Board">

                <p>Blue Moves {moves.blue}</p>
                <button className={blueButtonClass}  onClick={handleBlueClick}>Blue  </button>



                <p>Yellow Moves {moves.Yellow}</p>
                <button className={YellowButtonClass} onClick={handleYellowClick}>Yellow</button>

                <p>Red Moves {moves.Red}</p>
                <button  className={RedButtonClass} onClick={handleRedClick}>   Red</button>

                <p>Green Moves {moves.Green} </p>
                <button className={GreenButtonClass} onClick={handleGreenClick}>Green</button>

            </div>
        </>
    )
}

export default LudoGame;