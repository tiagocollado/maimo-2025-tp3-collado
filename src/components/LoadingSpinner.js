"use client";

const LoadingSpinner = ({ message = "Cargando..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="loading-portal mb-4"></div>
      <p className="text-gray-300 glow-text">{message}</p>
      <p className="text-sm text-gray-500 mt-2">
        🌀 Navegando por el multiverso...
      </p>
    </div>
  );
};

export default LoadingSpinner;
