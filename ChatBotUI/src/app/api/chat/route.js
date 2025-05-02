// app/api/chat/route.js
export async function POST(req) {
  const body = await req.json();
  const userInput = body?.messages?.[1]?.content || "";
  // Wait 2 seconds before returning the response (simulate thinking)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Mimic OpenAI-like response
  const response = {
    choices: [
      {
        message: {
          role: "assistant",
          content: `You said: ${userInput}`,
        },
      },
    ],
  };

  return Response.json(response);
}
