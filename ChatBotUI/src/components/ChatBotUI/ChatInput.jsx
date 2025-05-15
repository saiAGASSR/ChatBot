'use client';
import { SendHorizonal, Mic } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FcGoogle } from "react-icons/fc";
import { FaGoogle } from "react-icons/fa"; 



export function ChatInput({ input, setInput, sendMessage, isTyping, userInputFocus }) {
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && input.trim()) {
      e.preventDefault();
      sendMessage();
    }

  };


  useEffect(() => {
  return () => {
    // Cleanup on component unmount
    if (mediaRecorderRef.current) {
      // Stop media recorder if it's still running
      if (mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }

      // Stop all audio tracks
      mediaRecorderRef.current.stream?.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };
}, []);


  const handleReactMicClick = () => {
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

useEffect(() => {
 if (!listening && transcript.trim()) {
  setInput(transcript);
  setTimeout(() => {
    sendMessage(transcript);  
    resetTranscript();
  }, 500);
}

}, [listening]);





const handleMicClick = async () => {
  if (recording) {
    mediaRecorderRef.current.stop();
    setRecording(false);
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    chunksRef.current = [];

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };

    mediaRecorder.onstop = async () => {
      stream.getTracks().forEach(track => track.stop());

      const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
      const formData = new FormData();
      formData.append('audio', blob, 'voice.webm');

      try {
        const res = await fetch('/api/voice-to-text', {
          method: 'POST',
          body: formData,
        });
        console.log("response from api-g",res);
        

        if (!res.ok) throw new Error('Server error');

        const data = await res.json();

        if (data.transcription) {
          setInput(data.transcription);
          sendMessage();  // pass transcription directly
        } else {
          alert('No transcription received.');
        }
      } catch (err) {
        console.error('Transcription error:', err);
        alert('Voice transcription failed.');
      }
    };

    mediaRecorder.start();
    setRecording(true);
  } catch (err) {
    console.error('Mic error:', err);
    alert('Microphone access is required.');
  }
};


useEffect(() => {
  if (!isTyping) userInputFocus.current.focus();
}, [isTyping]);


 return (
  <div className="border-t border-gray-200 bg-white px-3 py-2 flex items-center gap-2">
    {/* Google Mic Button (Node backend) */}
    <button
      onClick={handleMicClick}
      type="button"
      className="text-gray-500 hover:text-blue-600"
      disabled = {listening}
    >
      {recording ? (
        <FcGoogle  className="w-5 h-5 animate-pulse"  />
      ) : (
        <FaGoogle  className="w-5 h-5" />
      )}
    </button>

    {/* Input Text Area */}
    <textarea
      rows={1}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyPress}
      placeholder={isTyping ? 'Bot is typing...' : 'Type or use mic...'}
      className="flex-1 resize-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={isTyping}
      ref={userInputFocus}
    />

    {/* React Speech Recognition Mic Button */}
    <button
      onClick={handleReactMicClick}
      type="button"
      className="text-gray-500 hover:text-blue-600"
      disabled = {recording}
    >
      {listening ? (
        <Mic className="w-5 h-5 animate-pulse" color="red" />
      ) : (
        <Mic className="w-5 h-5" />
      )}
    </button>
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
