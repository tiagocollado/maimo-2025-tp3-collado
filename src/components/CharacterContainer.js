"use client";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LoadingSpinner from "./LoadingSpinner";

const CharacterContainer = ({ id }) => {
  const [character, setCharacter] = useState({});
  const [episodeNames, setEpisodeNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  const getCharacter = useCallback(async () => {
    const BASE_URL = `https://rickandmortyapi.com/api/`;

    try {
      setLoading(true);
      setError(false);

      // 1. Personaje
      const response = await axios.get(`${BASE_URL}character/${id}`);
      const charData = response.data;
      setCharacter(charData);

      // 2. IDs de los episodios
      const episodeIds = charData.episode.map((url) => url.split("/").pop());
      const episodesURL = `${BASE_URL}episode/${episodeIds.join(",")}`;

      // 3. Episodios
      const episodesResponse = await axios.get(episodesURL);
      const episodes = Array.isArray(episodesResponse.data)
        ? episodesResponse.data
        : [episodesResponse.data];

      // 4. Guardar los nombres
      setEpisodeNames(episodes.map((ep) => `${ep.episode} - ${ep.name}`));
      setLoading(false);
    } catch (error) {
      console.log("Hubo un error", error);
      setError(true);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getCharacter();
  }, [getCharacter]);

  const getStatusIcon = (status) => {
    switch (status) {
      case "Alive":
        return "💚";
      case "Dead":
        return "💀";
      default:
        return "❓";
    }
  };

  const getSpeciesIcon = (species) => {
    switch (species) {
      case "Human":
        return "👨‍🔬";
      case "Alien":
        return "👽";
      case "Robot":
        return "🤖";
      case "Animal":
        return "🐾";
      case "Cronenberg":
        return "🧟";
      case "Mythological Creature":
        return "🐉";
      default:
        return "🧬";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner message="Cargando datos del personaje..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-card p-8 max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Error Interdimensional
          </h2>
          <p className="text-gray-300 mb-6">
            No se pudo cargar la información del personaje. Puede que esté en
            otra dimensión.
          </p>
          <button onClick={() => router.push("/")} className="rick-button">
            🏠 Volver al Portal Principal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto mb-6">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 border border-gray-600 hover:border-rick-green"
        >
          ← Volver al Multiverso
        </button>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="space-card p-8">
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="flex-shrink-0">
              <div className="portal-effect rounded-2xl">
                <Image
                  src={character.image}
                  alt={character.name}
                  width={300}
                  height={300}
                  className="rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>

            <div className="flex-1">
              <h1 className="rick-title text-4xl lg:text-5xl mb-4">
                {character.name}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">
                      {getStatusIcon(character.status)}
                    </span>
                    <span className="text-sm text-gray-400 uppercase tracking-wide">
                      Estado
                    </span>
                  </div>
                  <p
                    className={`text-lg font-semibold ${
                      character.status === "Alive"
                        ? "text-green-400"
                        : character.status === "Dead"
                        ? "text-red-400"
                        : "text-gray-400"
                    }`}
                  >
                    {character.status === "Alive"
                      ? "Vivo"
                      : character.status === "Dead"
                      ? "Muerto"
                      : "Desconocido"}
                  </p>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">
                      {getSpeciesIcon(character.species)}
                    </span>
                    <span className="text-sm text-gray-400 uppercase tracking-wide">
                      Especie
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-portal-blue">
                    {character.species}
                  </p>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">⚧️</span>
                    <span className="text-sm text-gray-400 uppercase tracking-wide">
                      Género
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-morty-yellow">
                    {character.gender}
                  </p>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🧪</span>
                    <span className="text-sm text-gray-400 uppercase tracking-wide">
                      Tipo
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-300">
                    {character.type || "No especificado"}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-purple-900 to-blue-900 p-4 rounded-lg border border-purple-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🌍</span>
                    <span className="text-sm text-purple-200 uppercase tracking-wide">
                      Origen
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-white">
                    {character.origin?.name}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-900 to-teal-900 p-4 rounded-lg border border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">📍</span>
                    <span className="text-sm text-green-200 uppercase tracking-wide">
                      Ubicación Actual
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-white">
                    {character.location?.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📺</span>
              <h2 className="text-2xl font-bold glow-text">
                Apariciones en Episodios
              </h2>
              <span className="bg-rick-green text-dark-space px-3 py-1 rounded-full text-sm font-bold">
                {episodeNames.length} episodios
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto pr-2">
              {episodeNames.map((episode, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 p-3 rounded-lg border border-gray-600 hover:border-rick-green transition-all duration-300 hover:bg-gray-750"
                >
                  <p className="text-sm text-gray-300">{episode}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterContainer;
