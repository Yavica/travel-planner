import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-black/50 backdrop-blur-md shadow-lg border-b border-white/10">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        Vista Voyage
      </Link>

      {/* Nav Links */}
      <nav className="space-x-6 hidden md:flex">
        <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
        <Link to="/attractions" className="hover:text-cyan-400 transition">Attractions</Link>
        <Link to="/itinerary" className="hover:text-cyan-400 transition">Itinerary</Link>
      </nav>

      {/* Login Button */}
      <button
        onClick={() => setShowLogin(true)}
        className="px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/30 transition"
      >
        Login
      </button>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50">
          <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-96 relative border border-white/20">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              Welcome to Vista Voyage
            </h2>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
              >
                Login
              </button>
            </form>

            {/* Close button */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
