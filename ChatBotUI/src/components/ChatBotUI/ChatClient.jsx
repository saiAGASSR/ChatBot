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
  let jwt = searchParams.get('jwt') ? searchParams.get('jwt') : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyMSIsImRldmljZUlkIjoiMTIiLCJwcm9qZWN0SWQiOiI4R1QtMVdjLXZEbi1TdlkiLCJhcGlLZXkiOiJleUpoYkdjaU9pSklVekkxTmlKOS5leUp3Y205cVpXTjBTV1FpT2lJNFIxUXRNVmRqTFhaRWJpMVRkbGtpZlEueUswY1hLa3p0bDJUVWc3X3I2Y3dZLU5XYklkVFFjZkpUVXFCNmhES0NqOCIsImlhdCI6MTUxNjIzOTAyMn0.GsyZwMWrhbqPO0n8Ky3J9MKhx6xWSwgNZyw3ZemFZqE' ;

  const projectId = searchParams.get('projectId');
  const test = searchParams.get('test');
  const isTest = test === 'true'
  console.log('project id in params',projectId);
  const [istesting,setIsTesting] = useState(isTest)
  



  


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
  const apiKeyFromToken = decodedToken.apiKey ; 
  const projectIdToken = decodedToken.projectId ; 
  
  if( userIdFromToken && userIdFromToken !== userId){
    
    setUserId(userIdFromToken)
    localStorage.setItem('userId', userIdFromToken )
    localStorage.setItem('deviceId', deviceIdFromToken )
    localStorage.setItem('projectId', projectIdToken )
    localStorage.setItem('apiKey', apiKeyFromToken )
    
  }

  }, [searchParams.toString(),jwt] )


  if (!userId) return <div>Redirecting...</div>;

  return (
    <div className="w-screen h-screen md:w-1/2 flex items-center justify-center bg-white">
        
      <ChatbotUI voiceInput={voiceInput}  isTest={isTest} jwt={jwt}/>
      
    </div>
  );
}