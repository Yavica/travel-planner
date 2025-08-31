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
              className="bg-gray-800 bg-opacity-60 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
            >
              {/* Image */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-cover rounded-lg mb-4"
                />
              )}

              {/* Title + Description */}
              <h2 className="text-xl font-semibold text-indigo-400">{item.name}</h2>
              {item.description && (
                <p className="text-gray-300 text-sm mt-2">{item.description}</p>
              )}

              {/* City tag */}
              {item.city && (
                <p className="text-sm text-gray-400 mt-2">📍 {item.city}</p>
              )}

              {/* Remove Button */}
              <button
                onClick={() => removeFromItinerary(index)}
                className="mt-4 px-4 py-2 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Itinerary;
