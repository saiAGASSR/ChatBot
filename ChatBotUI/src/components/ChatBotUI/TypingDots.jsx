// components/TypingDots.jsx
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Avatar from '@mui/material/Avatar';


export function TypingDots() {
  return (
    <div className="flex justify-start h-20 items-center">
      <div>
        <Avatar
          alt='you'
          src='/gifs/chatbotavatar.png'
          sx={{ width: 40, height: 35 }}
        /> 
      </div>

      {/* GIF beside the typing dots */}
      <div className='w-30 h-30'>
              <DotLottieReact
                src="https://lottie.host/28a2feea-f17e-4d95-9171-106f202acceb/Ah6nnqgWlB.lottie"
                loop
                autoplay
                />  

      </div>
    
      

    </div>
  );
}
