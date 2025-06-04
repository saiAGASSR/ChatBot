'use client';


import ChatbotUI from "@/components/ChatBotUI/ChatbotUI";
import { useSearchParams } from 'next/navigation';


export default function Home() {
  const searchParams = useSearchParams();
  const voiceInput = searchParams.get('voiceInput');
  
  

  return (
    <div className="w-screen h-screen md:w-1/2    flex items-center justify-center bg-white">
      <ChatbotUI voiceInput={voiceInput} />
    </div>
  );
}
