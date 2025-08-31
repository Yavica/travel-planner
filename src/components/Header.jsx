import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-black/40 backdrop-blur-md border-b border-white/10 text-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo now clickable to go Home */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent hover:opacity-80 transition"
        >
          Travel Planner
        </Link>

        {/* Navigation */}
        <nav className="space-x-6">
          <Link to="/" className="hover:text-pink-400 transition">Home</Link>
          <Link to="/attractions" className="hover:text-pink-400 transition">Attractions</Link>
          <Link to="/itinerary" className="hover:text-pink-400 transition">Itinerary</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
