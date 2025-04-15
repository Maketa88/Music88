import { useEffect, useState } from 'react';

function VolumeControl({ audioRef }) {
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(1);
  const [showVolumeControl, setShowVolumeControl] = useState(false);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      // Aplicar el volumen actual al elemento de audio
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted, audioRef]);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    // Si estaba en mute y el usuario ajusta el volumen, desmutear
    if (isMuted && newVolume > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (!isMuted) {
      // Guardar el volumen actual antes de mutear
      setPreviousVolume(volume);
      setIsMuted(true);
    } else {
      // Restaurar volumen previo
      setIsMuted(false);
      if (previousVolume === 0) {
        setVolume(0.5); // Si el volumen era 0, establecerlo a un valor predeterminado
      }
    }
  };

  const toggleVolumeControl = () => {
    setShowVolumeControl(!showVolumeControl);
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      );
    } else if (volume < 0.5) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072" />
        </svg>
      );
    } else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.536 8.464a9 9 0 010 7.072" />
        </svg>
      );
    }
  };

  // Versión móvil: solo el icono, al hacer clic muestra el control
  const mobileView = (
    <button
      onClick={toggleVolumeControl}
      className="text-gray-300 hover:text-white focus:outline-none transition-colors"
      aria-label="Ajustar volumen"
    >
      {getVolumeIcon()}
    </button>
  );

  // Versión de escritorio: muestra todo
  const desktopView = (
    <div className="flex items-center space-x-1">
      <button
        onClick={toggleMute}
        className="text-gray-300 hover:text-white focus:outline-none transition-colors"
        aria-label={isMuted ? "Activar sonido" : "Silenciar"}
      >
        {getVolumeIcon()}
      </button>
      
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={isMuted ? 0 : volume}
        onChange={handleVolumeChange}
        className="slider w-12 md:w-16 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        aria-label="Control de volumen"
      />
      
      <span className="text-xs text-gray-400 w-5 text-center">
        {isMuted ? "0" : Math.round(volume * 100)}
      </span>
    </div>
  );

  // Versión móvil expandida: al hacer clic muestra el control completo
  const mobileExpandedView = (
    <div className="absolute bg-gray-800 p-2 rounded-lg shadow-lg z-10 bottom-16 left-0 flex items-center space-x-2">
      <button
        onClick={toggleMute}
        className="text-gray-300 hover:text-white focus:outline-none transition-colors"
        aria-label={isMuted ? "Activar sonido" : "Silenciar"}
      >
        {getVolumeIcon()}
      </button>
      
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={isMuted ? 0 : volume}
        onChange={handleVolumeChange}
        className="slider w-32 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        aria-label="Control de volumen"
      />
      
      <span className="text-xs text-gray-400 w-5 text-center">
        {isMuted ? "0" : Math.round(volume * 100)}
      </span>
      
      <button 
        onClick={toggleVolumeControl} 
        className="text-gray-300 hover:text-white p-1"
        aria-label="Cerrar control de volumen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );

  return (
    <div className="relative">
      <div className="md:block hidden">
        {desktopView}
      </div>
      <div className="md:hidden block">
        {mobileView}
        {showVolumeControl && mobileExpandedView}
      </div>
    </div>
  );
}

export default VolumeControl; 