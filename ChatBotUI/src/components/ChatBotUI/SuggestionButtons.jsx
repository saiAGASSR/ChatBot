

export function SuggestionButtons({ suggestions , istyping  ,sendMessage }) {

  return (
    <div className="flex flex-wrap justify-center gap-2 px-4 py-2 mt-5">
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    sendMessage(s);
                  }}
                  className="border border-grey-500 text-white opacity-0.7 text-sm px-2 py-1 rounded-full hover:scale-105 transition delay-150 ease-in-out  mt-1 "
                  disabled={istyping}
                >
                  {s}
                </button>
              ))}
            </div>
  );
}
