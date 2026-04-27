import { useState, useEffect } from "react";
import "./page.css";

//export function Search({ onSearch }) {
//  const [value, setValue] = useState("");
//
//  return (
//    <div className="flex justify-center items-center gap-3 p-6 bg-white shadow-md sticky top-0 z-10">
//      <input
//        type="text"
//        placeholder="Buscar personaje..."
//        value={value}
//        onChange={(e) => setValue(e.target.value)}
//        className="w-72 px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
//      />
//      <button
//        onClick={() => onSearch(value)}
//        className="bg-blue-500 text-white px-5 py-2 rounded-xl hover:bg-blue-600 transition shadow"
//      >
//        Buscar
//      </button>
//    </div>
//  );
//}

export function Card({ character }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition duration-300">
      
      {/* Imagen */}
      <div className="relative">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-lg">
          {character.status}
        </span>
      </div>

      {/* Info */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-bold">{character.name}</h2>

        <p className="text-sm text-gray-600">
          <span className="font-semibold">Species:</span> {character.species}
        </p>

        <p className="text-sm text-gray-600">
          <span className="font-semibold">Gender:</span> {character.gender}
        </p>

        <p className="text-xs text-gray-400">
          Created: {character.created}
        </p>

        {/* Episodios */}
        <div className="mt-2">
          <p className="text-xs font-semibold text-gray-500 mb-1">
            Episodios:
          </p>
          <div className="max-h-20 overflow-y-auto space-y-1">
            {character.episode.slice(0, 4).map((ep, i) => (
              <p key={i} className="text-xs text-gray-500 truncate">
                {ep}
              </p>
            ))}
          </div>
        </div>

        {/* Botón */}
        <button className="w-full mt-3 bg-gradient-to-r from-green-400 to-green-600 text-white py-2 rounded-xl hover:opacity-90 transition">
          Ver más
        </button>
      </div>
    </div>
  );
}

export default function Api( {dataApi, filtered, setDataApi, setFiltered} ) {

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setDataApi(data.results);
        setFiltered(data.results);
      });
  }, []);

  //const handleSearch = (value) => {
  //  const result = dataApi.filter((char) =>
  //    char.name.toLowerCase().includes(value.toLowerCase())
  //  );
  //  setFiltered(result);
  //};

  return (
    <div className="min-h-screen bg-gradient-to-t from-blue-500 to-purple-950 via-gray-100">
      
      {/*<Search onSearch={handleSearch} />*/}

      <div className="p-6 grid gap-6 
        grid-cols-2
        sm:grid-cols-1 
        md:grid-cols-3 
        lg:grid-cols-4">
        
        {filtered.map((char) => (
          <Card key={char.id} character={char} />
        ))}
      </div>

    </div>
  );
}