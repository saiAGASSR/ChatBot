'use client';

import React, { useState, useRef } from 'react';

export  function MicToGoogleSpeech() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcribedText, setTranscribedText] = useState('');
  const [error, setError] = useState(null);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY ;

const handleRecording = async () => {
  if (typeof window === 'undefined') {
    console.error("This code is running on the server, not the browser.");
    return;
  }

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    console.error("getUserMedia is not supported in this browser.");
    setError("Your browser doesn't support audio recording.");
    return;
  }

  if (!GOOGLE_API_KEY || GOOGLE_API_KEY !== 'AIzaSyD8GlSK43dHXTFzfxN0BzvIItShxms3KjM') {
    setError('Error: Google Cloud API Key is not set. Please set it in the code.');
    alert('Error: Google Cloud API Key is not set. Please set it in the code.');
    return;
  }

  if (!isRecording) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus',
      });

      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm;codecs=opus' });
        audioChunksRef.current = [];
        sendAudioToGoogle(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setTranscribedText('');
      setError(null);
      console.log("Recording started...");

    } catch (err) {
      console.error("Error accessing microphone:", err);
      setError(`Mic Error: ${err.message}`);
    }
  } else {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
      console.log("Recording stopped by user.");
    }
    setIsRecording(false);
  }
};


  const sendAudioToGoogle = async (audioBlob) => {
    console.log("Sending audio to Google Cloud Speech-to-Text API...");
    setTranscribedText('Processing...');
    setError(null);

    const SPEECH_API_URL = `https://speech.googleapis.com/v1/speech:recognize?key=${GOOGLE_API_KEY}`;

    try {
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob); // Converts Blob to Base64 Data URL
      reader.onloadend = async () => {
        const base64Audio = reader.result.split(',')[1]; // Extract Base64 string

        const requestPayload = {
          config: {
            encoding: 'WEBM_OPUS', // Corresponds to 'audio/webm;codecs=opus'
            // sampleRateHertz: 16000, // Usually not needed for WEBM_OPUS as it's in the header
            languageCode: 'en-US',    // Change as needed,
            alternativeLanguageCodes: ['hi-IN', 'te-IN', 'ta-IN', 'bn-IN'],
            // audioChannelCount : 4,
            // enableSeparateRecognitionPerChannel: true,

            // maxAlternatives: 4,


            enableAutomaticPunctuation: true,
            useEnhanced : true,
            // model:"command_and_search",
            enableWordConfidence: true,
            enableWordTimeOffsets: true,
 
          },
          audio: {
            content: base64Audio,
          },
        };
        console.log("payload",requestPayload);
        

        const response = await fetch(SPEECH_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestPayload),
        });

        const data = await response.json();

        if (!response.ok) {
          console.error('Google Speech API error:', data);
          setError(`API Error: ${data.error?.message || 'Transcription failed'}`);
          setTranscribedText('');
          return;
        }

        if (data.results && data.results.length > 0 && data.results[0].alternatives && data.results[0].alternatives.length > 0) {
          const transcript = data.results[0].alternatives[0].transcript;
          setTranscribedText(transcript);
          console.log("Transcription received:", transcript);
          setError(null);
        } else {
          setTranscribedText('');
          setError('No transcription result from API.');
          console.log('No transcription or unexpected API response:', data);
        }
      };
    } catch (err) {
      console.error("Error sending/processing audio:", err);
      setError(`Request Error: ${err.message}`);
      setTranscribedText('');
    }
  };

  return (
    <div>
      <h3>Record Audio & Send to Google Speech-to-Text</h3>
      <p>
        <strong>Security Note:</strong> The API Key is hardcoded.
        This is <strong>unsafe</strong> for production. Use a backend proxy.
      </p>
      <button onClick={handleRecording} style={{ padding: '10px', fontSize: '16px' }}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>

      {isRecording && <p><i>Listening... Speak into your microphone.</i></p>}

      {error && <p style={{ color: 'red', marginTop: '10px' }}>Error: {error}</p>}

      {transcribedText && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h4>Transcription:</h4>
          <p>{transcribedText}</p>
        </div>
      )}
    </div>
  );
}

export default MicToGoogleSpeech;

// How to use it in your App.js:
// import React from 'react';
// import MicToGoogleSpeech from './MicToGoogleSpeech'; // Assuming you save the above code as MicToGoogleSpeech.js
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>React Mic Test</h1>
//       </header>
//       <main>
//         <MicToGoogleSpeech />
//       </main>
//     </div>
//   );
// }
//
// export default App;