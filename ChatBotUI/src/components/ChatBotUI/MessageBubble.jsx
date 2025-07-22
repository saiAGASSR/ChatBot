// components/MessageBubble.jsx
import Avatar from '@mui/material/Avatar';
import SplitText from "./SplitText";


export const MessageBubble = ({ from, text ,lastMessage }) => {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (

          
    <div className={`flex  ${from === 'user' ? 'justify-end' : 'justify-start'}`}>

    { from !== 'user' && 
      
      <Avatar
        src="/gifs/chatbotavatar.png"
        alt='bot'
        // src='https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?w=740'
        // src='https://sdmntprwestus.oaiusercontent.com/files/00000000-2b74-6230-ad6c-73fc65335d32/raw?se=2025-04-11T09%3A35%3A24Z&sp=r&sv=2024-08-04&sr=b&scid=59bf0b2b-06d8-5f0d-83d9-6e6f3b80ec19&skoid=e872f19f-7b7f-4feb-9998-20052dec61d6&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-11T08%3A50%3A35Z&ske=2025-04-12T08%3A50%3A35Z&sks=b&skv=2024-08-04&sig=gtMvDTQ5Fa2DK4Q7z1/RbdnVLvuGHIHc24iP7O72wvc%3D'
        // src='https://i.ibb.co/sdZcFf3z/Chat-GPT-Image-Apr-11-2025-04-36-26-PM.png'
        // src='https://i.imgur.com/7hb9DSP.png'
        // src='https://i.imgur.com/AKwCiIP.jpeg'
        // className='animate-spin'
        // className='animate-ping'
        className='animate-pulse'
        
      /> 
    }

  

      <div
        className={`rounded-xl px-4 py-2 max-w-[90%] text-sm text-white font-semibold ${
          from === 'user'
            ? '   shadow-lg'
            : '   '
        }`}
      >
        {
          lastMessage ?
      <SplitText
        text={text}
        className="text-center"
        delay={30}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      /> :
      text
        }
      </div>

      { from === 'user' && 
      
      <Avatar
        alt='you'
        src='https://i.imgur.com/ayWNFic.png'
        sx={{ width: 32, height: 32 }}
      /> 
    }
  </div>
);
};
