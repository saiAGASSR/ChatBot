import ChatClient from '@/components/ChatBotUI/ChatClient';
import { Suspense } from 'react';


export default function Home() {
  return (
    <Suspense 
    fallback= { <div className="w-screen h-screen flex flex-col items-center justify-center bg-white">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
                <p className="mt-4 text-gray-600 text-sm">Loading chatbot...</p>
                </div>
              }>
      <ChatClient />
    </Suspense>
  );
}
