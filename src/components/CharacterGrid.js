"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchBar from "./SearchBar";

const CharacterGrid = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchCharacters = async (name = "") => {
    setLoading(true);
    setError(false);

    try {
      const url = name
        ? `https://rickandmortyapi.com/api/character/?name=${name}`
        : `https://rickandmortyapi.com/api/character`;
      const res = await axios.get(url);
      setCharacters(res.data.results);
    } catch (err) {
      if (err.response?.status === 404) {
        setCharacters([]);
        setError(true);
      } else {
        console.error("Error inesperado:", err);
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    fetchCharacters(term);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Personajes</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <div className="text-center text-white">Cargando personajes...</div>
      )}

      {error && (
        <div className="text-center text-red-500">
          No se encontraron personajes con ese nombre.
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CharacterGrid;
