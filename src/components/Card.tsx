import { Character } from "../types/type"; // Puedes mover la interfaz a una carpeta types/

interface CardProps {
  character: Character;
  onOpen: () => void;
}

export default function Card({ character, onOpen }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition duration-300 flex flex-col justify-between">
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
      <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold">{character.name}</h2>

          <p className="text-sm text-gray-600">
            <span className="font-semibold">Species:</span> {character.species}
          </p>

          <p className="text-sm text-gray-600">
            <span className="font-semibold">Gender:</span> {character.gender}
          </p>

          <p className="text-xs text-gray-400">Created: {character.created}</p>

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
        </div>

        {/* Botón Ver más */}
        <button
          className="w-full mt-3 bg-gradient-to-r from-green-400 to-green-600 text-white py-2 rounded-xl hover:opacity-90 transition font-semibold"
          onClick={onOpen}
        >
          Ver más
        </button>
      </div>
    </div>
  );
}