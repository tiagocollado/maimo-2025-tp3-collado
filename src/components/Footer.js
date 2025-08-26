const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold glow-text mb-3">
              🧪 Rick & Morty Explorer
            </h3>
            <p className="text-gray-400 text-sm">
              📚 Materia: Programacion Multimedial III
              <br />
              🎯 Objetivo: Explorar el universo de Rick y Morty
              <br />
              🔗 Usando la API oficial de Rick and Morty
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold text-portal-blue mb-3">
              💻 Tecnologías Usadas
            </h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">⚛️ React & Next.js</p>
              <p className="text-gray-400 text-sm">🎨 Tailwind CSS</p>
              <p className="text-gray-400 text-sm">📡 Rick & Morty API</p>
              <p className="text-gray-400 text-sm">🔍 Búsqueda y Filtros</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold text-morty-yellow mb-3">
              📊 Multiverso
            </h3>
            <div className="space-y-1 text-sm text-gray-400">
              <p>🧬 826+ Personajes</p>
              <p>🌍 126+ Ubicaciones</p>
              <p>📺 51+ Episodios</p>
              <p>🚀 ∞ Dimensiones</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            🎓 Universidad Maimonides 2025 - Rick & Morty Explorer
          </p>
          <p className="text-xs text-gray-600 mt-1">
            📚 Aplicación educativa no oficial - Rick and Morty © Adult Swim
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
