'use client';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// function Loading() {
//   return (
//     <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50">
//       <div className="w-64 h-64">
//         <DotLottieReact
//           src="https://lottie.host/2ff0940c-3f07-4bb9-a7d4-19ffb589c549/sct82frGG5.lottie" 
//           loop
//           autoplay
//         />
//       </div>
//     </div>
//   );
// }

// export { Loading };


import { Bot } from 'lucide-react';

function Loading() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100">
      
      <div className="w-64 h-64">
        <DotLottieReact
          src="https://lottie.host/2ff0940c-3f07-4bb9-a7d4-19ffb589c549/sct82frGG5.lottie" 
          loop
          autoplay
        />
      </div>
      {/* Animated Chatbot Icon */}
      <div className="animate-pulse text-blue-600 mb-4">
        <Bot className="w-12 h-12" />
      </div>

      {/* Spinner */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-blue-400 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute inset-0 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
      </div>



      {/* Message */}
      <p className="mt-6 text-gray-700 text-sm tracking-wide animate-fade-in">
        Connecting to your chatbot...
      </p>
    </div>
  );
}

export { Loading };
