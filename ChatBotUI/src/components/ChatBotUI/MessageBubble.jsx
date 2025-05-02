// components/MessageBubble.jsx
import Avatar from '@mui/material/Avatar';

export const MessageBubble = ({ from, text }) => {
  return (

          
    <div className={`flex  ${from === 'user' ? 'justify-end' : 'justify-start'}`}>

    { from !== 'user' && 
      
      <Avatar
        alt='bot'
        // src='https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?w=740'
        // src='https://sdmntprwestus.oaiusercontent.com/files/00000000-2b74-6230-ad6c-73fc65335d32/raw?se=2025-04-11T09%3A35%3A24Z&sp=r&sv=2024-08-04&sr=b&scid=59bf0b2b-06d8-5f0d-83d9-6e6f3b80ec19&skoid=e872f19f-7b7f-4feb-9998-20052dec61d6&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-11T08%3A50%3A35Z&ske=2025-04-12T08%3A50%3A35Z&sks=b&skv=2024-08-04&sig=gtMvDTQ5Fa2DK4Q7z1/RbdnVLvuGHIHc24iP7O72wvc%3D'
        // src='https://i.ibb.co/sdZcFf3z/Chat-GPT-Image-Apr-11-2025-04-36-26-PM.png'
        // src='https://i.imgur.com/7hb9DSP.png'
        src='https://i.imgur.com/AKwCiIP.jpeg'
        
        sx={{ width: 32, height: 32 }}
      /> 
    }

  

      <div
        className={`rounded-xl px-4 py-2 max-w-[90%] text-sm shadow-sm ${
          from === 'user'
            ? 'bg-blue-100  text-gray-800 '
            : 'bg-white border border-gray-200 text-gray-800 '
        }`}
      >
        {text}
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
