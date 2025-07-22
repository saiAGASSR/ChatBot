import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import chatbotAnimation from '@/public/lottie/chatbot.json'; // adjust path if needed

const tips = [
  "Did you know? Chatbots don't sleep.",
  "Fun Fact: Chatbots process messages in milliseconds!",
  "Tip: You can ask your chatbot to summarize long texts.",
  "Did you know? This bot learns over time!",
  "Tip: Try saying 'help' if you're lost!",
];

function Loading() {
  const [tipIndex, setTipIndex] = useState(0);

  // Rotate tips every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200">
      <div className="backdrop-blur-xl bg-white/60 border border-white/30 rounded-3xl shadow-2xl px-8 py-10 flex flex-col items-center animate-fade-in space-y-6 max-w-sm">
        
        {/* Lottie Animation */}
        <div className="w-40 h-40">
          <Lottie animationData={chatbotAnimation} loop={true} />
        </div>

        {/* Tip */}
        <div className="text-center text-sm text-blue-700 italic">
          {tips[tipIndex]}
        </div>

        {/* Typing dots */}
        <div className="flex space-x-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:.1s]"></span>
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:.2s]"></span>
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:.3s]"></span>
        </div>

        <p className="text-xs text-gray-600 tracking-wide">Loading your chatbot...</p>
      </div>
    </div>
  );
}

export { Loading };
