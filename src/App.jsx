import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  function handleSearch(query) {
    console.log("Searching for:", query);
  }

  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to Vista Voyage</h1>
        <SearchBar onSearch={handleSearch} />
      </main>
    </div>
  );
}

export default App;
