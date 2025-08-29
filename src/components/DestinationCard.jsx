function DestinationCard({ name, description, location, image, onSave }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <p className="text-xs text-gray-500 mt-1">{location}</p>
        <button
          onClick={onSave}
          className="mt-3 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
        >
          Save to Itinerary
        </button>
      </div>
    </div>
  );
}

export default DestinationCard;
