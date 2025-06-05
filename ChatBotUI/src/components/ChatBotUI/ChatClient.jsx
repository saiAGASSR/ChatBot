'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ChatbotUI from './ChatbotUI';

export default function ChatClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const voiceInput = searchParams.get('voiceInput');
  

  const [userId, setUserId] = useState(null);

useEffect(() => {
  if (typeof window !== 'undefined') {
    const storedUserId = localStorage.getItem('userId');
    console.log('user_id in chat:', storedUserId);

    if (!storedUserId) {
      router.push('/enter-user-id');
    } else {
      setUserId(storedUserId);
    }
  }
}, [router]);


  if (!userId) return <div>Redirecting...</div>;

  return (
    <div className="w-screen h-screen md:w-1/2 flex items-center justify-center bg-white">
        
      <ChatbotUI voiceInput={voiceInput} />
      
    </div>
  );
}