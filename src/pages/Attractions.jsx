function Attractions({ addToItinerary }) {
  const attractions = [
    {
      city: "Paris",
      name: "Eiffel Tower",
      description: "Iconic iron tower offering stunning views of the city.",
      image: "/images/Paris1.jpg",
    },
    {
      city: "Nairobi",
      name: "Maasai Market",
      description: "Vibrant open-air market full of culture, crafts, and colors.",
      image: "/images/Nairobi1.jpg",
    },
    {
      city: "Tokyo",
      name: "Shibuya Crossing",
      description: "The busiest pedestrian crossing in the world.",
      image: "/images/Tokyo1.jpg",
    },
    {
      city: "Kyoto",
      name: "Fushimi Inari Shrine",
      description: "Famous for its thousands of red torii gates.",
      image: "/images/Tokyo2.jpg", // reused
    },
    {
      city: "London",
      name: "Tower Bridge",
      description: "An iconic symbol of London with stunning river views.",
      image: "/images/London1.jpg",
    },
    {
      city: "New York",
      name: "Statue of Liberty",
      description: "A global symbol of freedom standing tall in New York Harbor.",
      image: "/images/NewYork1.jpg",
    },
  ];

  return (
    <div className="min-h-screen py-10">
      <h1 className="text-4xl font-extrabold text-cyan-400 text-center mb-12 drop-shadow-lg">
        Top Attractions
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {attractions.map((attraction, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg
                       bg-white/10 border border-white/20 backdrop-blur-xl
                       hover:shadow-cyan-400/40 hover:scale-[1.03]
                       transition-all duration-300 flex flex-col"
          >
            <img
              src={attraction.image}
              alt={attraction.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
                  {attraction.name}
                </h2>
                <p className="text-gray-200 text-sm mb-4">
                  {attraction.description}
                </p>
                <p className="text-sm text-gray-400">📍 {attraction.city}</p>
              </div>

              <button
                onClick={() => addToItinerary(attraction)}  // send whole object instead of string
                className="mt-6 w-full px-4 py-2 rounded-xl
                bg-cyan-500/20 text-cyan-300 border border-cyan-400/30
                hover:bg-cyan-500/30 hover:shadow-cyan-400/40
                transition"
           >
          Save to Itinerary
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attractions;
