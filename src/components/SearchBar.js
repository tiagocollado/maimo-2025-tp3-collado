"use client";
import { useState } from "react";

const SearchBar = ({ onSearch, onFilterChange, searchTerm, filters }) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  const handleStatusFilter = (status) => {
    onFilterChange("status", status);
  };

  const handleSpeciesFilter = (species) => {
    onFilterChange("species", species);
  };

  const clearAllFilters = () => {
    onSearch("");
    onFilterChange("status", "");
    onFilterChange("species", "");
  };

  const statusOptions = ["Alive", "Dead", "unknown"];
  const speciesOptions = ["Human", "Alien"];

  return (
    <div className="max-w-4xl mx-auto mb-8 p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold glow-text mb-2">
          🔍 Buscar Personajes
        </h2>
        <p className="text-gray-400">Encuentra tus personajes favoritos</p>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="🔍 Buscar por nombre... (ej: Rick, Morty)"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-6 py-4 bg-gray-800 text-white rounded-full border-2 border-gray-600 focus:border-rick-green focus:outline-none text-lg placeholder-gray-400 transition-all duration-300"
        />
        {searchTerm && (
          <button
            onClick={() => onSearch("")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-rick-green transition-colors text-xl"
          >
            ✕
          </button>
        )}
      </div>

      <div className="text-center mb-4">
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="rick-button inline-flex items-center gap-2"
        >
          {isFiltersOpen ? "🔼 Ocultar" : "🔽 Mostrar"} Filtros Avanzados
        </button>
      </div>

      {isFiltersOpen && (
        <div className="space-card p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold rick-green mb-3">
                💚 Estado del Personaje
              </h3>
              <div className="flex flex-wrap gap-2">
                {statusOptions.map((status) => (
                  <button
                    key={status}
                    onClick={() => handleStatusFilter(status)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      filters.status === status
                        ? "bg-green-500 text-white shadow-lg"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white cursor-pointer"
                    } cursor-pointer`}
                  >
                    {status === "Alive" && "💚 "}
                    {status === "Dead" && "💀 "}
                    {status === "unknown" && "❓ "}
                    {status}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold portal-blue mb-3">
                👽 Especie
              </h3>
              <div className="flex flex-wrap gap-2">
                {speciesOptions.map((species) => (
                  <button
                    key={species}
                    onClick={() => handleSpeciesFilter(species)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      filters.species === species
                        ? "bg-blue-500 text-white shadow-lg"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white cursor-pointer"
                    } cursor-pointer`}
                  >
                    {species === "Human" && "👨‍🔬 "}
                    {species === "Alien" && "👽 "}
                    {species}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={clearAllFilters}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all duration-300 font-medium shadow-lg"
            >
              🗑️ Limpiar todos los filtros
            </button>
          </div>
        </div>
      )}

      {(searchTerm || filters.status || filters.species) && (
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          <span className="text-sm text-gray-400">Filtros activos:</span>
          {searchTerm && (
            <span className="px-3 py-1 bg-rick-green text-dark-space rounded-full text-sm font-medium">
              Búsqueda: &quot;{searchTerm}&quot;
            </span>
          )}
          {filters.status && (
            <span className="px-3 py-1 bg-morty-yellow text-dark-space rounded-full text-sm font-medium">
              Estado: {filters.status}
            </span>
          )}
          {filters.species && (
            <span className="px-3 py-1 bg-portal-blue text-dark-space rounded-full text-sm font-medium">
              Especie: {filters.species}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
