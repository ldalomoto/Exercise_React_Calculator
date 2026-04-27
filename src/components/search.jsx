import { useState, useEffect } from "react";
import './page.css';

export function Search({ dataApi, setFiltered}) {
  const [value, setValue] = useState("");

  const handleSearch = (value) => {
    const result = dataApi.filter((char) =>
      char.name.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <div className="flex justify-center items-center gap-3 p-0 bg-white sticky top-0 z-10">
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-72 px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <button
        onClick={() => handleSearch(value)}
        className="bg-blue-500 text-white px-5 py-2 rounded-xl hover:bg-blue-600 transition shadow"
      >
        Buscar
      </button>
    </div>
  );
}