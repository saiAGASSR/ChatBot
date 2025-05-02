// MessageList.jsx
'use client';
import { TypingDots } from './TypingDots';
import { SuggestionButtons } from './SuggestionButtons';
import CarouselComponent from './CarouselComponent';
import { MessageBubble } from './MessageBubble';

export function MessageList({ messages, isTyping, messagesEndRef, setInput, sendMessage }) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-gray-50 max-w-full">
      {messages.map((msg, index) => (
        <div key={index} className={`flex flex-col space-y-2 ${msg.from === 'user' ? 'items-end' : 'items-start'}`}>
          
          {/* Message Bubble */}
          {msg.text && <MessageBubble from={msg.from} text={msg.text} />}

          {/* Carousel Response */}
          {msg.carousel_results && (
            <CarouselComponent items={msg.carousel_results} />
          )}

          {/* Suggestions */}
          {msg.suggestions && <SuggestionButtons suggestions={msg.suggestions} istyping={isTyping} sendMessage={sendMessage} setInput={setInput} />}
        </div>
      ))}

      {/* Typing Animation */}
      {isTyping && <TypingDots />}

      {/* Always scroll to the bottom */}
      <div ref={messagesEndRef} />
    </div>
  );
}
