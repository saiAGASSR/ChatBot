'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ChatbotUI from './ChatbotUI';
import { jwtDecode } from "jwt-decode";
import { Loading } from './Loading';
import { SpeechPopUp } from './SpeechPopUp';
import Particles from './Particles';
import { ParticlesBackground } from './ParticlesBackground';
import Aurora from './Aurora';
import { AuroraBackground } from './AuroraBackground';


export default function ChatClient() {
  const [userId,setUserId]= useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const voiceInput = searchParams.get('voiceInput') ? searchParams.get('voiceInput') : 'on';
  // let jwt = searchParams.get('token') ? searchParams.get('token') : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwiZGV2aWNlSWQiOiIxMiIsImlhdCI6MTUxNjIzOTAyMn0.gLJjEVaLvi9Cqh0SM76fJK3BUEWb15Hw8tpz5PL0odw' ;
  let jwt = searchParams.get('token') ? searchParams.get('token') : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyMSIsImRldmljZUlkIjoiMTIiLCJwcm9qZWN0SWQiOiI4R1QtMVdjLXZEbi1TdlkiLCJhcGlLZXkiOiJleUpoYkdjaU9pSklVekkxTmlKOS5leUp3Y205cVpXTjBTV1FpT2lJNFIxUXRNVmRqTFhaRWJpMVRkbGtpZlEueUswY1hLa3p0bDJUVWc3X3I2Y3dZLU5XYklkVFFjZkpUVXFCNmhES0NqOCIsImlhdCI6MTUxNjIzOTAyMn0.GsyZwMWrhbqPO0n8Ky3J9MKhx6xWSwgNZyw3ZemFZqE' ;
 
  console.log("jwt",jwt);
   
  const [closeAnimation,setCloseAnimation] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setCloseAnimation(true);
    },1000)
  },[])


  


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
  const projectIdFromToken = decodedToken.projectId ; 
  const apiKeyFromToken = decodedToken.apiKey ; 
  
  if( userIdFromToken && userIdFromToken !== userId){
    
    setUserId(userIdFromToken)
    localStorage.setItem('userId', userIdFromToken )
    localStorage.setItem('deviceId', deviceIdFromToken )
    localStorage.setItem('projectId', projectIdFromToken )
    localStorage.setItem('apiKey', apiKeyFromToken )
    
  }

  }, [searchParams.toString(),jwt] )


  if (!userId) return (<Loading />);

  return (
    <AuroraBackground >
        {!closeAnimation && <Loading /> }
        {closeAnimation && 
              <ChatbotUI voiceInput={voiceInput}  jwt={jwt}
        />

        }
    </AuroraBackground>
      
  );
}