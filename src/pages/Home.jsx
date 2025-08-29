import sampleDestinations from "../data/sampleDestinations";
import DestinationCard from "../components/DestinationCard";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Explore Destinations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {sampleDestinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            name={dest.name}
            description={dest.description}
            image={dest.image}
          />
        ))}
      </div>
    </div>
  );
}
