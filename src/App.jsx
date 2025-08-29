import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Attractions from "./pages/Attractions";
import Itinerary from "./pages/Itinerary";

function App() {
  const [page, setPage] = useState("home");
  const [savedItems, setSavedItems] = useState([]);

  function handleSave(item) {
    setSavedItems([...savedItems, item]);
  }

  return (
    <div>
      <Header />

      <nav className="flex justify-center space-x-4 my-4">
        <button
          onClick={() => setPage("home")}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Home
        </button>
        <button
          onClick={() => setPage("attractions")}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Attractions
        </button>
        <button
          onClick={() => setPage("itinerary")}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Itinerary
        </button>
      </nav>

      <main className="p-6">
        {page === "home" && <Home />}
        {page === "attractions" && <Attractions onSave={handleSave} />}
        {page === "itinerary" && <Itinerary savedItems={savedItems} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
