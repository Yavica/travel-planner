export default function Itinerary({ savedItems }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">My Itinerary</h1>

      {savedItems.length === 0 ? (
        <p className="text-gray-500 text-center">No items saved yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition p-5"
            >
              <h2 className="text-lg font-semibold text-blue-700">{item.name}</h2>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              <p className="text-xs text-gray-500 mt-1 italic">{item.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
