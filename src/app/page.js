import CharacterGrid from "@/components/CharacterGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="text-center py-12 px-4">
        <h1 className="rick-title mb-4">🛸 Rick & Morty Universe 🧪</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          🌌 Explora el multiverso de Rick y Morty 🌌
          <br />
          Descubre personajes, dimensiones y aventuras interdimensionales en
          esta base de datos galáctica creada por un estudiante.
        </p>
      </header>

      <main>
        <CharacterGrid />
      </main>

      <Footer />
    </div>
  );
}
