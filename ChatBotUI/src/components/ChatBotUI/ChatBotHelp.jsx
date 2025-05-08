import { X } from 'lucide-react'; // for modern close icon

const ChatBotHelp = ({ setShowModal }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 overflow-y-auto max-h-[80vh]">
            <button
                className="ml-200 px-4 py-2  text-red-400 rounded transition-all duration-300  hover:text-red-700  "
                onClick={() => setShowModal(false)}
            >
                <X className="w-5 h-5" />
            </button>


                <h2 className="text-xl font-semibold mb-4">Myreco RecoBot</h2>
                

                    <p className="text-gray-700 mb-4 whitespace-pre-wrap">
{ `Recobot is your AI chatbot companion — an AI-powered bot designed to help you effortlessly discover and enjoy the best movies, TV series, and live content. Whether you're in the mood for a gripping thriller, a feel-good comedy, or the latest trending live event, Recobot analyzes your preferences, viewing habits, and real-time trends to deliver personalized recommendations instantly. Say goodbye to endless scrolling and hello to smarter, faster, and more enjoyable content discovery with Recobot.

Use cases:
1. Suggest me action movies in English-
    you can ask an query of your choice related to the contents with language and genre combinations (movies, tvseries and live).
2. Show me marvel movies.
3. show me dc movies.
4. suggest me inspirational movies
5. im feeling bored. suggest me some content.
6. show me salman khan movies.
7. play aajtak.
8. play ntv
9. zee5 comedy movies.
        - in hindi.

Note: This chatbot does not give any information about other information like:
    1. what happened in pahalgam attack?
    2. why did trump poses tariff on countries?
    3. what is meant by machine learning?
This chatbot is not trained to handle this type of usecases. Its a personalized chatbot related to content discovery.`}
                </p>
                <button
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    onClick={() => setShowModal(false)}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ChatBotHelp;
