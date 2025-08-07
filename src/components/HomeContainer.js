'use client';
import CharacterGrid from './CharacterGrid';

const HomeContainer = () => {
  return (
    <main className="min-h-screen px-4 py-8 bg-[var(--background)] text-[var(--foreground)]">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-green-400 drop-shadow-md">
          Rick and Morty Explorer
        </h1>
        <p className="mt-2 text-lg text-gray-400">
          ¡Buscá tus personajes favoritos del multiverso!
        </p>
      </header>

      <CharacterGrid />

      <footer className="text-center mt-20 text-sm text-gray-500">
        Tiago Collado | Universidad Maimónides | Programación Multimedial 3
      </footer>
    </main>
  );
};

export default HomeContainer;
