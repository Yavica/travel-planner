import { useState } from "react";

const mockAttractions = [
  {
    id: 1,
    name: "Mt. Fuji Tour",
    description: "A scenic trip to Japan’s most famous mountain.",
    location: "Tokyo, Japan",
  },
  {
    id: 2,
    name: "Eiffel Tower Visit",
    description: "Climb or admire the Paris landmark.",
    location: "Paris, France",
  },
  {
    id: 3,
    name: "Maasai Market",
    description: "Explore Kenyan culture and buy local crafts.",
    location: "Nairobi, Kenya",
  },
];

export default function Attractions({ onSave }) {
  const [attractions] = useState(mockAttractions);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Attractions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {attractions.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-sm text-gray-500">{item.location}</p>
            <button
              onClick={() => onSave(item)}
              className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save to Itinerary
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
