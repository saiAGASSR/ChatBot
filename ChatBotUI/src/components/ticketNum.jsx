
const TicketNum = ({num , index})=>{

    return (
        <>
        <span key={index} className="mx-2 text-lg font-semibold">{num}</span>
        </>
    )

    
}

export default TicketNum;



{items.map((item, idx) => (
  <div key={idx} className="px-2">
    <div
      className="relative bg-white rounded-lg shadow-md overflow-hidden h-full border border-gray-200 
                 transition-transform duration-300 hover:scale-105 group"
    >
      {/* IMAGE */}
      <img
        src={item.imgurl}
        alt={item.contentname}
        className="w-full h-40 object-cover"
      />

      {/* HOVER ACTION BUTTONS */}
      <div className="absolute top-2 right-2 flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={() => handleAddToWatchlist(item)} className="bg-white p-1 rounded-full shadow">
          <img src="/icons/watchlist.svg" className="w-5 h-5" alt="Add to Watchlist" />
        </button>
        <button onClick={() => handleSecondaryAction(item)} className="bg-white p-1 rounded-full shadow">
          <img src="/icons/info.svg" className="w-5 h-5" alt="More Info" />
        </button>
      </div>

      {/* TITLE */}
      <div className="p-2">
        <h3 className="text-sm font-medium">{item.contentname}</h3>
      </div>
    </div>
  </div>
))}
