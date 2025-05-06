import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, password } = await request.json();

  const staticCredentials = {
    email: 'myreco_chatbot@gmail.com',
    password: 'MyRecoChatBot@745',
  };

  if (email === staticCredentials.email && password === staticCredentials.password) {
    const response = NextResponse.json({ success: true });

    // Set auth cookie
    response.cookies.set('auth', 'true', {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60, // 1 hour
    });

    return response;
  } else {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }
}
