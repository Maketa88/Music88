import React from 'react';

function ShuffleButton({ isShuffleOn, onShuffleToggle }) {
  return (
    <button 
      className={`p-2 focus:outline-none transition-all rounded-full ml-1 ${
        isShuffleOn 
          ? 'bg-violet-600 text-white shadow-lg hover:bg-violet-500 transform hover:scale-105' 
          : 'text-gray-400 hover:text-gray-200'
      }`}
      onClick={onShuffleToggle}
      aria-label={isShuffleOn ? "Desactivar reproducción aleatoria" : "Activar reproducción aleatoria"}
      title={isShuffleOn ? "Desactivar aleatorio" : "Activar aleatorio"}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    </button>
  );
}

export default ShuffleButton; 