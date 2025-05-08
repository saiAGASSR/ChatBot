'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';
import { SuggestionButtons } from './SuggestionButtons';
import { responseObject } from './responseObject';
import ChatHeader from './ChatHeader';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Avatar from '@mui/material/Avatar';


export default function ChatbotUI() {
  const [userId,setUserId] = useState(15)
  const [sessionId, setSessionId] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [clearChat,setClearChat]= useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: (
      <>
        <div>
          <div className='flex row'>
            
          
          <span className="font-bold text-base">
            Hi Master ,  I am Genie   

           
          </span>
          <p className='ml-2'>&#129502;</p>
          </div>
          <span className="text-sm text-gray-600">
            I can help you find movies, TV series, and live channels based on your preferences or searches.
          </span>
        </div>
      </>
    )}
  ]);



  

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const userInputFocus = useRef(null)
  const response = responseObject;

  const fetchBotResponse = async (userInput) => {
    const body = {
      userid: `${userId}`,
      session_id: sessionId,
      user_message: userInput,
    };
  
    try {
        const response = await axios.post(
          'https://16ab-183-82-43-227.ngrok-free.app/chat',
          body,
          {
            withCredentials: true,
          }
        );


      return response.data;  // Return the parsed JSON response
    } catch (error) {
      console.error("Error in chat request:", error);
      if(error.code === 'ECONNABORTED'){
        console.error("Timeout error:", error.message);
      }

      return {
        Bot_Response: "Sorry, something went wrong.",
        Carousel_Results: [],
        Search_Suggestions: [],
      };
    }
  };
  
  

  const sendMessage = async (messageText = input) => {
    if (!messageText.trim()) return;

    // Add user message
    const newMessage = { from: 'user', text: messageText };
    setMessages((prev) => [...prev, newMessage]);
    setInput(''); // Clear the input field

    // Set bot typing animation
    setIsTyping(true);

    // Fetch bot reply (assuming this fetches the bot response)
    const botReply = await fetchBotResponse(messageText);

    setIsTyping(false);

    // Check if we have suggestions in the previous message and remove them
    setMessages((prev) => {
      const updated = [...prev];


      // Add the new bot message with carousel and suggestions (if any)
      return [...updated, { from: 'bot', carousel_results: botReply.Carousel_Results, text: botReply.Bot_Response, suggestions: botReply.Search_Suggestions }];
    });


  };
  useEffect(() => {
      setMessages((prevMessages)=>{
        const restart = [...prevMessages];
        restart.splice(1,restart.length)

        return restart;
      })
      setClearChat(false)
  }, [clearChat]);

  useEffect(() => {
    // Ensure sessionId is set only on the client side
    if (typeof window !== 'undefined') {
      const existingSessionId = sessionStorage.getItem('sessionId');

      if (!existingSessionId) {
        const storedUserId = localStorage.getItem('userId');
        setUserId(storedUserId);
        
        const newSessionId = uuidv4();
        sessionStorage.setItem('sessionId', newSessionId);
        setSessionId(newSessionId);
      } else {
        const storedUserId = localStorage.getItem('userId');
        setUserId(storedUserId);
        setSessionId(existingSessionId);
      }
    }
  }, []);

  useEffect(() => {
    const fetchInitialBotMessage = async () => {
      if (!sessionId) return; // Prevent request if session ID is not available yet
      const botReply = await fetchBotResponse(`My user id is ${userId}`);

      setMessages((prev) => [
        ...prev,
        {
          from: 'bot',
          carousel_results: botReply.Carousel_Results,
          text: botReply.Bot_Response,
          suggestions: botReply.Search_Suggestions
        }
      ]);
    };

    fetchInitialBotMessage();
  }, [sessionId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-3 rounded-full shadow-xl hover:from-blue-700 hover:to-indigo-700 z-50"
          >
            💬
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 right-0 w-full h-full xl:w-1/2 xl:mr-80 rounded-xl shadow-lg flex flex-col overflow-hidden border border-gray-200 z-50  bg-cover bg-no-repeat bg-center"
            >

            {/* Header */}
            <ChatHeader setIsOpen={setIsOpen} setClearChat={setClearChat} />


            {/* Messages */}
            <MessageList
              messages={messages}
              isTyping={isTyping}
              messagesEndRef={messagesEndRef}
              setInput={setInput}
              sendMessage={sendMessage}
            />

            {/* Input */}
            <ChatInput
              input={input}
              setInput={setInput}
              sendMessage={sendMessage}
              isTyping={isTyping}
              userInputFocus={userInputFocus}
            />

            {/* Footer Note */}
            <p className="text-xs text-gray-600 text-center p-2 border-t border-gray-200 bg-white">
              Note: AI chat may produce inaccurate results. Don't share personal info.
            </p>


          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
