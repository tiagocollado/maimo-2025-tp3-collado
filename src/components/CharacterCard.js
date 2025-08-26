"use client";
import Link from "next/link";
import Image from "next/image";

const CharacterCard = ({ character }) => {
  return (
    <Link href={`/character/${character.id}`}>
      <div className="space-card p-4 hover:scale-105 transition-all duration-300 cursor-pointer text-white group fade-in h-80 flex flex-col">
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
          className="w-full h-48 object-cover rounded-lg flex-shrink-0"
        />

        <div className="mt-3 flex-1 flex flex-col justify-between">
          <h2 className="text-lg font-bold glow-text group-hover:text-white transition-colors duration-300 line-clamp-2 min-h-[3rem]">
            {character.name}
          </h2>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span
                className={`inline-block w-3 h-3 rounded-full ${
                  character.status === "Alive"
                    ? "bg-green-400"
                    : character.status === "Dead"
                    ? "bg-red-400"
                    : "bg-gray-400"
                }`}
              ></span>
              <p className="text-sm text-gray-300">
                {character.species} - {character.status}
              </p>
            </div>

            <p className="text-xs text-gray-400 line-clamp-1">
              📍 {character.location?.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
