import { X } from 'lucide-react'; // for modern close icon
import Avatar from '@mui/material/Avatar';
import ReplayIcon from '@mui/icons-material/Replay';

const ChatHeader = ({setIsOpen , setClearChat})=>{
    return (
        <div className="bg-gradient-to-br from-white to-blue-600 text-black p-4 flex justify-between items-center">

            <div className='flex flex-row'>
            <Avatar
                alt='bot'
                src='https://i.ibb.co/8LT53RnN/myreco-Icon.png'
                sx={{ width: 45, height: 40 }}
            /> 
                <div className="flex flex-col">

                <span className="ml-2 text-2xl  md:text-xl font-semibold leading-tight ">
                    RecoBot
                </span>

                <span className="ml-2 text-sm  md:text-sm font leading-tight ">
                 MyReco AI Assitant
                 </span>

            </div>

            </div>

            <div className='flex flex-row'>
                <button className='text-black hover:text-red-600 transition mr-2' onClick={()=>setClearChat(true)}><ReplayIcon color='error' />  </button>

                <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 transition">
                <X className="w-5 h-5" />
                </button>

            </div>

        </div>

    );
}

export default ChatHeader;
