import { useState, Dispatch, SetStateAction } from "react";
import { Character } from "../types/type";
// @ts-ignore: allow importing CSS side-effect in TSX
import '../style/App.css';

interface SearchProps {
  dataApi: Character[];
  setFiltered: Dispatch<SetStateAction<Character[]>>;
}

export function Search({ dataApi, setFiltered }: SearchProps) {
  const [value, setValue] = useState<string>("");

  const handleSearch = (val: string) => {
    const result = dataApi.filter((char) =>
      char.name.toLowerCase().includes(val.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <div className="flex justify-center items-center gap-3 p-0 bg-white sticky top-0 z-10">
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleSearch(e.target.value);
        }}
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