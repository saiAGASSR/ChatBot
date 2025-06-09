'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ChatbotUI from './ChatbotUI';

export default function ChatClient() {
  const [userId,setUserId]= useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const voiceInput = searchParams.get('voiceInput');
  const jwt = searchParams.get('token');

  


  useEffect( ()=>{
  const userIdParam = searchParams.get('userId');
  
  if( userIdParam && userIdParam !== userId){
    
    setUserId(userIdParam)
    localStorage.setItem('userId', userIdParam )
    
  }

  }, [searchParams.toString()] )


  if (!userId) return <div>Redirecting...</div>;

  return (
    <div className="w-screen h-screen md:w-1/2 flex items-center justify-center bg-white">
        
      <ChatbotUI voiceInput={voiceInput}  jwt={jwt}/>
      
    </div>
  );
}