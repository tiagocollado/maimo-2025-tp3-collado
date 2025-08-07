"use client";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const CharacterContainer = ({ id }) => {
  const [character, setCharacter] = useState({});
  const [episodeNames, setEpisodeNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getCharacter = useCallback(async () => {
    const BASE_URL = `https://rickandmortyapi.com/api/`;

    try {
      setLoading(true);

      // 1. Traer personaje
      const response = await axios.get(`${BASE_URL}character/${id}`);
      const charData = response.data;
      setCharacter(charData);

      // 2. Sacar los IDs de los episodios
      const episodeIds = charData.episode.map((url) => url.split("/").pop());
      const episodesURL = `${BASE_URL}episode/${episodeIds.join(",")}`;

      // 3. Traer los episodios
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
    }
  }, [id]);

  useEffect(() => {
    getCharacter();
  }, [getCharacter]);

  if (loading)
    return (
      <div className="text-white text-center mt-10">Cargando personaje...</div>
    );

  if (error)
    return (
      <div className="text-red-500 text-center mt-10">
        Error al cargar personaje
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
        <Image
          src={character.image}
          alt={character.name}
          width={240}
          height={240}
          className="rounded-xl object-cover mx-auto md:mx-0"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{character.name}</h1>
          <p className="text-lg mb-1">
            <span className="font-semibold">Estado:</span> {character.status}
          </p>
          <p className="text-lg mb-1">
            <span className="font-semibold">Especie:</span> {character.species}
          </p>
          <p className="text-lg mb-1">
            <span className="font-semibold">Género:</span> {character.gender}
          </p>
          <p className="text-lg mb-1">
            <span className="font-semibold">Tipo:</span>{" "}
            {character.type || "No especificado"}
          </p>
          <p className="text-lg mb-1">
            <span className="font-semibold">Origen:</span>{" "}
            {character.origin?.name}
          </p>
          <p className="text-lg mb-1">
            <span className="font-semibold">Ubicación actual:</span>{" "}
            {character.location?.name}
          </p>

          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">
              Apariciones en episodios:
            </h2>
            <ul className="list-disc list-inside text-sm max-h-40 overflow-y-auto pr-2">
              {episodeNames.map((ep, idx) => (
                <li key={idx}>{ep}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterContainer;
