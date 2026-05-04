import { Character } from "../types/type";
// @ts-ignore: allow importing CSS side-effect in TSX
import "../style/App.css";

interface InformationProps {
  character: Character;
  onClose: () => void;
}

export default function Information({ character, onClose }: InformationProps) {
  return (
    <div className="p-5 fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-80 max-h-[85vh] flex flex-col transition-all">
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
        <div className="p-4 space-y-2 overflow-y-auto flex-1">
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

          {/* Botón de cierre */}
          <button
            className="w-full mt-4 bg-gradient-to-r from-red-400 to-red-600 text-white py-2 rounded-xl hover:opacity-90 transition font-semibold"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}