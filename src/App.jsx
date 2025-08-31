import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Attractions from "./pages/Attractions";
import Itinerary from "./pages/Itinerary.jsx";

function App() {
  const [itinerary, setItinerary] = useState([]);

  // ✅ Add to itinerary (with full details, not just name)
  const addToItinerary = (item) => {
    setItinerary((prev) => [...prev, item]);
  };

  // ✅ Remove from itinerary
  const removeFromItinerary = (index) => {
    setItinerary((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-6 py-10">
          <Routes>
            <Route
              path="/"
              element={<Home addToItinerary={addToItinerary} />}
            />
            <Route
              path="/attractions"
              element={<Attractions addToItinerary={addToItinerary} />}
            />
            <Route
              path="/itinerary"
              element={
                <Itinerary
                  itinerary={itinerary}
                  removeFromItinerary={removeFromItinerary}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
