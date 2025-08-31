import { useEffect, useState } from "react";

function Attractions({ addToItinerary }) {
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback images in the same order as the attractions will be displayed
  const fallbackImages = [
    "/images/Paris4.jpg",
    "/images/Paris3.jpg",
    "/images/Paris2.jpg",
  ];

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const response = await fetch(
          `https://api.geoapify.com/v2/places?categories=tourism.attraction&filter=circle:2.3522,48.8566,5000&limit=3&apiKey=${
            import.meta.env.VITE_GEOAPIFY_API_KEY
          }`
        );
        const data = await response.json();
        setAttractions(data.features || []);
      } catch (error) {
        console.error("Error fetching attractions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAttractions();
  }, []);

  return (
    <div className="min-h-screen py-10">
      <h1 className="text-4xl font-extrabold text-cyan-400 text-center mb-12 drop-shadow-lg">
        Top Attractions
      </h1>

      {loading ? (
        <p className="text-center text-gray-400">Loading attractions...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => {
            const name = attraction.properties.name || "Unknown Attraction";
            const city = attraction.properties.city || "Unknown City";
            const desc =
              attraction.properties.formatted || "No description available.";
            const image = fallbackImages[index % fallbackImages.length]; // rotate images if more attractions

            return (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg
                           bg-white/10 border border-white/20 backdrop-blur-xl
                           hover:shadow-cyan-400/40 hover:scale-[1.03]
                           transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <img
                  src={image}
                  alt={name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
                      {name}
                    </h2>
                    <p className="text-gray-200 text-sm mb-4">{desc}</p>
                    <p className="text-sm text-gray-400">📍 {city}</p>
                  </div>

                  <button
                    onClick={() =>
                      addToItinerary({ name, city, description: desc, image })
                    }
                    className="mt-6 w-full px-4 py-2 rounded-xl
                               bg-cyan-500/20 text-cyan-300 border border-cyan-400/30
                               hover:bg-cyan-500/30 hover:shadow-cyan-400/40
                               transition"
                  >
                    Save to Itinerary
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Attractions;
