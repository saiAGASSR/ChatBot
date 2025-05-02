const Card = ({ object }) => {
    if (!object) return null; // Prevents errors if object is undefined

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{object.title}</div>
                <p className="text-gray-700 text-base">{object.description}</p>
            </div>

            <div  className=" p-2 flex">

                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <span className="line-through">₹{object.actualPrice}</span>
                    </span>
                    <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 ml-25 mb-2">
                        ₹{object.discountedPrice}
                    </span>
                
                </div>

            </div>

 
        </div>
    );
};

export default Card;
