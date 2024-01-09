import "./index.css";

function App() {
  return (
    <div className="w-full max-w-2xl mx-auto shadow-xl rounded-lg px-4 py-7 my-8 bg-gray-700 text-gray-300">
      <h1 className="text-center text-3xl mb-4">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
        <button className="outline-none bg-blue-800 text-white px-3 py-2 hover:bg-blue-500">
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-5">
        <div className="flex items-center gap-x-1">
          <input type="range" min={6} max={100} className="cursor-pointer" />
          <label>Length: 8</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox" />
          <label>Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox" />
          <label>Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
