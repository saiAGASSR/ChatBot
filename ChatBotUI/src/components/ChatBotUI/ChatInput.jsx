'use client';
import { SendHorizonal, Mic, MicOff } from 'lucide-react';
import { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export function ChatInput({ input, setInput, sendMessage, isTyping ,userInputFocus}) {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleMicClick = () => {
    if (!browserSupportsSpeechRecognition) {
      alert('Browser does not support speech recognition.');
      return;
    }

    if (listening) {
      // Stop listening manually
      SpeechRecognition.stopListening();
      // Auto send once listening is stopped (optional — handled below by 'listening' change)
    } else {
      resetTranscript();
      setInput(''); // Clear input when starting new speech
      SpeechRecognition.startListening({ continuous: false, language: 'en-IN' });
    }
  };

  //  Auto update input when transcript changes
  useEffect(() => {
    if (!listening && transcript.trim()) {
      setInput(transcript);  // Update the input field
      setTimeout(() => {
        sendMessage(transcript);  // Automatically send after a short delay
        resetTranscript();
      }, 500); // slight delay to avoid any issues
    }
  }, [listening]);

  useEffect(() => {
    // Automatically focus the input field whenever it's re-rendered or after a message is sent
    userInputFocus.current.focus();
  }, [ isTyping]); // Re-focus whenever the input or typing state changes


  return (
    <div className="border-t border-gray-200 bg-white px-3 py-2 flex items-center gap-2">
      
      <div className="relative flex-1 flex items-center">
        <textarea
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder={isTyping ? 'Bot is typing...' : 'Type your message or use mic...'}
          className="w-full resize-none rounded-lg border border-gray-300 bg-white pl-10 pr-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isTyping}
          ref={userInputFocus}
        />
        <button
          onClick={handleMicClick}
          type="button"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
        >
          {listening ? <Mic className="w-5 h-5 animate-pulse " color="red"  /> : <Mic className="w-5 h-5" />}
        </button>
      </div>

      <button
        onClick={() => sendMessage()}
        disabled={!input.trim() || isTyping}
        className={`p-2 rounded-full transition ${
          !input.trim() || isTyping
            ? 'bg-gray-300 text-white cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        <SendHorizonal className="w-4 h-4" />
      </button>

    </div>
  );
}
