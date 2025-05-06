import { X } from 'lucide-react'; // for modern close icon
import Avatar from '@mui/material/Avatar';
import ReplayIcon from '@mui/icons-material/Replay';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useState } from 'react';

const ChatHeader = ({setIsOpen , setClearChat})=>{
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="bg-linear-to-bl from-violet-500 to-fuchsia-500 text-black p-4 flex justify-between items-center">

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

                
                <div className="relative group">
                    <button
                        className="text-black hover:text-blue-600 transition mr-2"
                        onClick={() => setShowModal(true)}
                    >
                        <HelpOutlineIcon />
                    </button>
                    <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs rounded py-1 px-2 z-10">
                        Help
                    </div>
                    </div>

                    <div className="relative group">
                    <button
                        className="text-black hover:text-red-600 transition mr-2"
                        onClick={() => setClearChat(true)}
                    >
                        <ReplayIcon color="error" />
                    </button>
                    <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs rounded py-1 px-2 z-10">
                        ReloadChat
                    </div>
                    </div>

                    <div className="relative group mt-1">

                    <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 transition" title='Close'>
                    <X className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs rounded py-1 px-2 z-10">
                        CloseChat
                    </div>
                    </div>

            </div>

             {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-xl font-semibold mb-4">Help Information</h2>
                    <p className="text-gray-700 mb-4">
                    Work In progress
                    </p>
                    <button
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    onClick={() => setShowModal(false)}
                    >
                    Close
                    </button>
                </div>
                </div>
            )}

        </div>

    );
}

export default ChatHeader;
