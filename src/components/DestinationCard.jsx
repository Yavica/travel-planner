export default function DestinationCard({ name, description, image }) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      style={{ width: "250px" }} // lock card width
    >
      <div style={{ width: "250px", height: "160px", overflow: "hidden" }}>
        <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
        />

      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
