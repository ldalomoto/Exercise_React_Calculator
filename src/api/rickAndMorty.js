// src/api/rickAndMorty.js
export const getCharacters = async (signal) => {
  const response = await fetch("https://rickandmortyapi.com/api/character", {
    signal, // Permite cancelar la petición si el componente se desmonta rápido
  });

  if (!response.ok) {
    throw new Error("Error al obtener los personajes");
  }

  const data = await response.json();
  return data.results;
};