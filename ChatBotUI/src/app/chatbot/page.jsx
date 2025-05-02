import ChatbotUI from "@/components/ChatBotUI/ChatbotUI";

export default function Home() {



 

  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       
       <div className="col-span-2 row-span-2 ...">  <ChatbotUI /> </div>

     


      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
