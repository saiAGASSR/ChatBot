import axios from 'axios';

export async function POST(req) {
  try {
    const body = await req.json();
    const { user_message, session_id, userid } = body;

    if (!user_message || !session_id || !userid) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    console.log("Received request body:", body);

    const BACKEND_URL = "http://13.232.27.217:9090/chat";

    const response = await axios.post(BACKEND_URL, {
      user_message,
      session_id,
      userid,
    });
    console.log("Response from backend:", response.data);
    

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Error in chat request:", error.message);

    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: error.message
      }),
      { status: 500 }
    );
  }
}
