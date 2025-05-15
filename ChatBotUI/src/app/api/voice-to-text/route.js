import { NextResponse } from 'next/server';

export async function POST(req) {
  console.log("request received",req);
  console.log("request received");
  
  try {
    const formData = await req.formData();
    const file = formData.get('audio');

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'No audio file uploaded' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const audioBase64 = buffer.toString('base64');

    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
    console.log("googleKey",GOOGLE_API_KEY);
    
    if (!GOOGLE_API_KEY) {
      return NextResponse.json({ error: 'Missing Google API key' }, { status: 500 });
    }

    const response = await fetch(
      `https://speech.googleapis.com/v1/speech:recognize?key=${GOOGLE_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          config: {
            encoding: 'WEBM_OPUS',
            sampleRateHertz: 48000,
            languageCode: 'en-IN',
            alternativeLanguageCodes: ['hi-IN', 'te-IN', 'ta-IN', 'bn-IN'],

          },
          audio: {
            content: audioBase64,
          },
        }),
      }
    );
    console.log("response from google",response);
    

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Google API error: ${errorText}`);
    }

    const result = await response.json();
    const transcription = result.results?.map(r => r.alternatives[0].transcript).join('\n') || '';
    console.log("transcription",transcription);
    

    return NextResponse.json({ transcription });

  } catch (error) {
    console.error('Voice-to-text error:', error);
    return NextResponse.json(
      { error: 'Server error', details: error.message },
      { status: 500 }
    );
  }
}
