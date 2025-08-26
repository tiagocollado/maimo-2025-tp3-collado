"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchBar from "./SearchBar";
import LoadingSpinner from "./LoadingSpinner";

const CharacterGrid = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    status: "",
    species: "",
  });

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character?page=1"
      );
      setCharacters(response.data.results);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  const getFilteredCharacters = () => {
    let filtered = characters;

    if (searchTerm) {
      filtered = filtered.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.status) {
      filtered = filtered.filter(
        (character) => character.status === filters.status
      );
    }

    if (filters.species) {
      filtered = filtered.filter(
        (character) => character.species === filters.species
      );
    }

    return filtered;
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const filteredCharacters = getFilteredCharacters();

  if (loading) {
    return <LoadingSpinner message="Cargando personajes del multiverso..." />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        searchTerm={searchTerm}
        filters={filters}
      />

      <div className="text-center mb-6">
        <p className="text-lg text-gray-300">
          🧬 Encontrados:{" "}
          <span className="glow-text font-bold">
            {filteredCharacters.length}
          </span>{" "}
          personajes
        </p>
      </div>

      {filteredCharacters.length > 0 ? (
        <div className="character-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 fade-in">
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🛸</div>
          <h3 className="text-2xl font-bold text-gray-300 mb-2">
            No se encontraron personajes
          </h3>
          <p className="text-gray-400">
            Intenta ajustar tus filtros de búsqueda
          </p>
        </div>
      )}
    </div>
  );
};

export default CharacterGrid;
