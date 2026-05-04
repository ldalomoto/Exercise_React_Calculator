import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Card from "../components/Card";
import Information from "../components/Information";
import { getCharacters } from "../api/rickAndMorty";
import { Character } from "../types/type";

interface RickMortyPageProps {
  dataApi: Character[];
  filtered: Character[];
  setDataApi: Dispatch<SetStateAction<Character[]>>;
  setFiltered: Dispatch<SetStateAction<Character[]>>;
}

export default function RickMortyPage({
  dataApi,
  filtered,
  setDataApi,
  setFiltered,
}: RickMortyPageProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // AbortController para prevenir llamadas duplicadas en StrictMode
    const controller = new AbortController();
    const { signal } = controller;

    const loadCharacters = async (): Promise<void> => {
      setLoading(true);
      setError(null);
      try {
        const results = await getCharacters(signal);
        setDataApi(results);
        setFiltered(results);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();

    // Función de limpieza
    return () => {
      controller.abort();
    };
  }, [setDataApi, setFiltered]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p className="text-xl font-bold animate-pulse">Cargando personajes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-red-500">
        <p className="text-xl font-bold">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-t from-blue-500 to-purple-950 via-gray-100 p-6 relative">
      <div
        className="grid gap-6 
        grid-cols-2
        sm:grid-cols-1 
        md:grid-cols-3 
        lg:grid-cols-4"
      >
        {filtered.map((char) => (
          <Card
            key={char.id}
            character={char}
            onOpen={() => setSelectedCharacter(char)}
          />
        ))}
      </div>

      {selectedCharacter && (
        <Information
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}