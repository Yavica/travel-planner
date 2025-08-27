function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Travel Planner</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <section className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Search for a Destination</h2>
          <form className="flex gap-2">
            <input
              type="text"
              placeholder="Enter city or destination..."
              className="flex-1 rounded-lg border-gray-300 shadow-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Search
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Travel Planner
      </footer>
    </div>
  )
}

export default App
