import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo / App Name */}
        <h1 className="text-xl font-bold">Travel Planner</h1>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/attractions" className="hover:underline">
            Attractions
          </Link>
          <Link to="/itinerary" className="hover:underline">
            Itinerary
          </Link>
        </nav>
      </div>
    </header>
  );
}
