'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';



export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push('/enter-user-id');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className=" flex items-center justify-center  px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>


        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            type="email"
            label="Enter email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            type="password"
            label="Enter password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Box>


        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}
