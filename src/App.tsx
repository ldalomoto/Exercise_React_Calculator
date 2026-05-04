import { useState } from "react";
// @ts-ignore: allow importing CSS side-effect in TSX
import "./style/App.css";
import { Search } from "./components/Search";
import SimpleSumPage from "./pages/SimpleSumPage";
import CalculatorPage from "./pages/CalculatorPage";
import RickMortyPage from "./pages/RickMortyPage";
import { Character } from "./types/type";

export default function App() {
  const [dataApi1, setDataApi1] = useState<Character[]>([]);
  const [filtered1, setFiltered1] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(0);

  const changePage = (value: number): void => {
    setPage(value);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 p-5 gap-6 items-center">
        <div className="grid grid-cols-3 gap-2 bg-white/10 backdrop-blur-md rounded-xl p-2">
          <button
            onClick={() => changePage(1)}
            className={`py-2 rounded-lg transition font-bold ${
              page === 1
                ? "bg-blue-600 text-white"
                : "text-gray-800 hover:scale-105 hover:duration-350"
            }`}
          >
            SUMA SIMPLE
          </button>

          <button
            onClick={() => changePage(2)}
            className={`py-2 rounded-lg transition font-bold ${
              page === 2
                ? "bg-blue-600 text-white"
                : "text-gray-800 hover:scale-105 hover:duration-350"
            }`}
          >
            CALCULADORA
          </button>

          <button
            onClick={() => changePage(3)}
            className={`py-2 rounded-lg transition font-bold ${
              page === 3
                ? "bg-blue-600 text-white"
                : "text-gray-800 hover:scale-105 hover:duration-350"
            }`}
          >
            RICK&MORTY
          </button>
        </div>

        <div className="flex justify-end">
          <div
            className={`w-full md:w-3/4 lg:w-2/3 transition ${
              page === 3 ? "" : "opacity-50 pointer-events-none"
            }`}
          >
            <Search dataApi={dataApi1} setFiltered={setFiltered1} />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pt-5">
        {page === 1 && <SimpleSumPage />}
        {page === 2 && <CalculatorPage />}
        {page === 3 && (
          <RickMortyPage
            dataApi={dataApi1}
            filtered={filtered1}
            setDataApi={setDataApi1}
            setFiltered={setFiltered1}
          />
        )}
      </div>
    </div>
  );
}