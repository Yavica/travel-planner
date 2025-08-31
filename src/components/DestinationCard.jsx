import { useState } from "react";

function DestinationCard({ title, description, image, onSave }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="bg-gray-800 bg-opacity-70 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-indigo-400">{title}</h2>
          <p className="text-sm text-gray-300 line-clamp-2">{description}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSave();
            }}
            className="mt-3 px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm"
          >
            Save to Itinerary
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-xl p-6 max-w-lg w-full shadow-2xl">
            <img
              src={image}
              alt={title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-indigo-400">{title}</h2>
            <p className="text-gray-300 mt-2">{description}</p>
            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onSave();
                  setShowModal(false);
                }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm"
              >
                Save to Itinerary
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DestinationCard;
