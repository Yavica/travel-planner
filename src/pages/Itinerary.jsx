function Itinerary({ itinerary, removeFromItinerary }) {
  return (
    <div className="text-gray-100">
      <h1 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        Your Itinerary
      </h1>

      {itinerary.length === 0 ? (
        <p className="text-center text-gray-400">No items added yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itinerary.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg
                         bg-white/10 border border-white/20 backdrop-blur-xl
                         hover:shadow-blue-400/40 hover:scale-[1.02]
                         transition-all duration-300 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-indigo-400">{item.name}</h2>
                  <p className="text-gray-200 text-sm mb-2">{item.description}</p>
                  <p className="text-sm text-gray-400">📍 {item.city}</p>
                </div>

                <button
                  onClick={() => removeFromItinerary(index)}
                  className="mt-4 w-full px-4 py-2 rounded-xl
                             bg-red-500/20 text-red-300 border border-red-400/30
                             hover:bg-red-500/30 hover:shadow-red-400/40
                             transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Itinerary;
