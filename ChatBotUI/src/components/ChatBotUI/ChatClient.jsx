'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ChatbotUI from './ChatbotUI';
import { jwtDecode } from "jwt-decode";


export default function ChatClient() {
  const [userId,setUserId]= useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const voiceInput = searchParams.get('voiceInput');
  let jwt = searchParams.get('token') ? searchParams.get('token') : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMzExMSIsImRldmljZUlkIjoiMTIiLCJpYXQiOjE1MTYyMzkwMjJ9.zFbkBP1F-KxDzyMs14tpvEEkQH4qYgOJurDp9i_zOH8' ;

  const projectId = searchParams.get('projectId');
  console.log('project id in params',projectId);
  



  


  useEffect( ()=>{

    const token = jwt;
    
    let decodedToken;
        try {
          decodedToken = jwtDecode(token);
          console.log('Decoded Token:', decodedToken);
          // Access claims from decodedToken, e.g., decodedToken.userId
        } catch (error) {
          console.error('Error decoding token:', error);
        }
  const userIdFromToken = decodedToken.userId ; 
  const deviceIdFromToken = decodedToken.deviceId ; 
  
  if( userIdFromToken && userIdFromToken !== userId){
    
    setUserId(userIdFromToken)
    localStorage.setItem('userId', userIdFromToken )
    localStorage.setItem('deviceId', deviceIdFromToken )
    localStorage.setItem('projectId', projectId )
    
  }

  }, [searchParams.toString(),jwt] )


  if (!userId) return <div>Redirecting...</div>;

  return (
    <div className="w-screen h-screen md:w-1/2 flex items-center justify-center bg-white">
        
      <ChatbotUI voiceInput={voiceInput}  jwt={jwt}/>
      
    </div>
  );
}