import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Attractions from "./pages/Attractions";
import Itinerary from "./pages/Itinerary";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/itinerary" element={<Itinerary />} />
          </Routes>

          {/* Tailwind test */}
          <h1 className="text-4xl text-red-500 mt-8">Tailwind Test</h1>
        </main>
      </div>
    </Router>
  );
}

export default App;
