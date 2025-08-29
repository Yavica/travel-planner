export default function Itinerary({ savedItems }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Itinerary</h1>

      {savedItems.length === 0 ? (
        <p className="text-gray-500">No items saved yet.</p>
      ) : (
        <ul className="space-y-4">
          {savedItems.map((item, index) => (
            <li key={index} className="border p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-sm text-gray-500">{item.location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
