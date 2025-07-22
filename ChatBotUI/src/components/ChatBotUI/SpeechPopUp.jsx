'use client';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, AnimatePresence } from 'framer-motion';

import SplitText from "./SplitText";

export function SpeechPopUp (){
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
 const showInput = (input)=>{

 }
 
    return(
        <AnimatePresence >
        <motion.div  
            // animate={{ scale: 2 }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            // className="absolute flex flex-col items-center justify-center  bg-gradient-to-br from-white via-blue-50 to-blue-100 w-full h-full"
            // className="absolute flex flex-col items-center justify-center  bg-linear-to-r from-gray-300 via-gray-500 to-gray-700 w-full h-full"
            // className="absolute flex flex-col items-center justify-center  bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 w-full h-full"
            className="absolute flex flex-col items-center justify-center  bg-black w-full h-full"
            >

            <div className="w-64 h-64">
            <DotLottieReact
                src="https://lottie.host/2ff0940c-3f07-4bb9-a7d4-19ffb589c549/sct82frGG5.lottie" 
                loop
                autoplay
            />
            </div>

            <div className='w-64 h-64 flex flex-col justify-center item-center'>
                <div className='text-center'>
                        <SplitText
                        text="I am Listening"
                        className="text-center  text-2xl  text-white"
                        delay={50}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />

                </div>

            </div>

            {/* {This is Waves} */}
            {/* <div className="w-64 h-64">

                <DotLottieReact
                    src="https://lottie.host/eee703fc-bd28-44c7-94be-615bb48992ce/15Si4QIZLR.lottie"
                    loop
                    autoplay
                    />

            </div> */}

            {/* {This is Mic} */}
            <div className="w-64 h-64">

                <DotLottieReact
                    src="https://lottie.host/2f315e4c-e67d-478d-a198-f447cf46a00f/YQsBsGtdhW.lottie"
                    loop
                    autoplay
                    />

            </div>



            {/* {sendIcon} */}

            {/* <div className="w-64 h-64">
                <DotLottieReact
                    src="https://lottie.host/89cec428-9358-4f65-b97b-feba9836b888/IOsZ2j3VvM.lottie"
                    loop
                    autoplay
                    />
            </div> */}


            {/* {Typing Animations} */}


            {/* <div className="w-64 h-64">


                <DotLottieReact
                    src="https://lottie.host/28a2feea-f17e-4d95-9171-106f202acceb/Ah6nnqgWlB.lottie"
                    loop
                    autoplay
                    />

            </div> */}


        </motion.div>
        </AnimatePresence>
        
    )

}