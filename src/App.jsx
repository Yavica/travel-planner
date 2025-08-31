import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Attractions from "./pages/Attractions";
import Itinerary from "./pages/Itinerary.jsx";
import LoginModal from "./components/LoginModal"; // 👈 import here

function App() {
  const [itinerary, setItinerary] = useState([]);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // 👈 modal state

  const addToItinerary = (item) => {
    setItinerary([...itinerary, item]);
  };

  const removeFromItinerary = (index) => {
    setItinerary(itinerary.filter((_, i) => i !== index));
  };

  const handleLogin = (email, password) => {
    console.log("Logging in with:", email, password);
    setIsLoginOpen(false); // close after login
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 shadow-md">
          <Link
            to="/"
            className="text-2xl font-bold text-cyan-400 hover:text-cyan-300"
          >
            Travel Planner
          </Link>

          <div className="space-x-6 flex items-center">
            <Link to="/" className="hover:text-cyan-300">
              Home
            </Link>
            <Link to="/attractions" className="hover:text-cyan-300">
              Attractions
            </Link>
            <Link to="/itinerary" className="hover:text-cyan-300">
              Itinerary
            </Link>
            <button
              onClick={() => setIsLoginOpen(true)} // 👈 open modal
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
            >
              Login
            </button>
          </div>
        </nav>

        {/* Pages */}
        <div className="p-6">
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
        </div>

        {/* 👇 Login Modal */}
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onLogin={handleLogin}
        />
      </div>
    </Router>
  );
}

export default App;
