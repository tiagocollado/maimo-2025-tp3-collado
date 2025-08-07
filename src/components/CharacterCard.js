'use client'
import Link from 'next/link'
import Image from 'next/image'

const CharacterCard = ({ character }) => {
  return (
    <Link href={`/${character.id}`}>
      <div className="bg-gray-800 rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer text-white">
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
          className="rounded-md w-full h-60 object-cover"
        />
        <h2 className="text-xl font-bold mt-2">{character.name}</h2>
        <p className="text-sm">{character.species} - {character.status}</p>
      </div>
    </Link>
  )
}

export default CharacterCard
