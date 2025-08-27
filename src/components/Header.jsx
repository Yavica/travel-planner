export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex flex-col items-center p-4">
        <h1 className="text-xl font-bold">Vista Voyage</h1>

        <nav className="space-x-4 mt-2">
          <a href="#">Home</a>
          <a href="#">Attractions</a>
          <a href="#">Itinerary</a>
        </nav>

        <hr className="w-full border-t border-blue-400 mt-2" />
      </div>
    </header>
  );
}
