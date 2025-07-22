// MessageList.jsx
'use client';
import { TypingDots } from './TypingDots';
import { SuggestionButtons } from './SuggestionButtons';
import CarouselComponent from './CarouselComponent';
import { MessageBubble } from './MessageBubble';
import { memo, useEffect, useRef } from 'react';
import Carousel from '@/blocks/Components/Carousel/Carousel';

  const MessageList = memo(function MessageList ({ messages, isTyping, messagesEndRef, sendMessage ,messagesLength}) {
  const renderedCount = useRef(null); 
  useEffect(()=>{
    renderedCount.current += 1;  
    console.log(" useEffect it is MessageList rendered");
    console.log("useEffect MessageList renderedCount",renderedCount.current);
  })
  return (
    
    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2  max-w-full">
        {console.log("it is MessageList rendered")}
        {console.log("it is MessageList rendered and messagesLength",messagesLength)}
        {console.log(" MessageList renderedCount In Return",renderedCount.current)} 
        {messages.map((msg, index) => (
          <div key={index} className={`flex flex-col space-y-2 ${msg.from === 'user' ? 'items-end' : 'items-start'}`}>
            
            {/* Message Bubble */}
            {msg.text && <MessageBubble from={msg.from} text={msg.text}  lastMessage={(messagesLength-1) === index}/>}

            {/* Carousel Response */}
            {msg.carousel_results && 
              <CarouselComponent items={msg.carousel_results} />
              // <Carousel 
              //   items={msg.carousel_results}
              //   baseWidth={300}
              //   autoplay={true}
              //   autoplayDelay={3000}
              //   pauseOnHover={true}
              //   loop={true}
              //   round={false}

              //   />
            }

            {/* Suggestions */}
            {msg.suggestions && <SuggestionButtons suggestions={msg.suggestions} istyping={isTyping} sendMessage={sendMessage} />}
          </div>
        ))}

          {/* Typing Animation */}
          {isTyping && <TypingDots />}

          {/* Always scroll to the bottom */}
          <div ref={messagesEndRef} />
    </div>
  );
})

export default MessageList;