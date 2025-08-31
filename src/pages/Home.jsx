import DestinationCard from "../components/DestinationCard";

const sampleDestinations = [
  {
    name: "Nairobi",
    description: "A vibrant city with wildlife, culture, and urban life.",
    image: "/images/Nairobi1.jpg",
  },
  {
    name: "Paris",
    description: "The city of lights, love, and timeless landmarks.",
    image: "/images/Paris1.jpg",
  },
  {
    name: "Tokyo",
    description: "A futuristic blend of tradition, technology, and food.",
    image: "/images/Tokyo1.jpg",
  },
  {
    name: "London",
    description: "A historic yet modern city with iconic landmarks and culture.",
    image: "/images/London1.jpg",
  },
  {
    name: "New York",
    description: "The city that never sleeps, full of energy and skyscrapers.",
    image: "/images/NewYork1.jpg",
  },
];

function Home({ addToItinerary }) {
  return (
    <div className="text-gray-100">
      <h1 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        Explore Destinations
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {sampleDestinations.map((destination, index) => (
         <DestinationCard
            key={index}
            title={destination.name}
            description={destination.description}
            image={destination.image}
              onSave={() => addToItinerary(destination)} // send whole object
         />

        ))}
      </div>
    </div>
  );
}

export default Home;
