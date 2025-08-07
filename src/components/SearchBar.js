"use client";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") { // si se borra todo, mostrar todos los personajes
      onSearch("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex gap-4 items-center justify-center"
    >
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={query}
        onChange={handleInputChange}
        className="p-2 rounded-lg border border-gray-500 bg-gray-900 text-white w-72 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
