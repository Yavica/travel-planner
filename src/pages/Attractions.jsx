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
      <h1 className="text-2xl font-bold mb-6">Attractions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {attractions.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow p-4 hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            <p className="text-xs text-gray-500">{item.location}</p>
            <button
              onClick={() => onSave(item)}
              className="mt-3 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
            >
              Save to Itinerary
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
