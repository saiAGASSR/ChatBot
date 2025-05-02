'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';



export default function GetUserIdForm() {
  const [userId, setUserId] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userId', userId);
    router.push('/chatbot');
  };

  return (
    <div className=" flex items-center justify-center  px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Enter User ID</h2>


      <Box display="flex" flexDirection="column" gap={2}>
        
        <TextField  type='text' label="Enter User Id" variant="outlined"  value={userId}           onChange={(e) => setUserId(e.target.value)}   required      />

      </Box>


        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-200"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
