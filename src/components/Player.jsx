import { useEffect, useRef, useState } from 'react';

function Player({ currentSong, isPlaying, setIsPlaying, onNextSong, onPrevSong }) {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  useEffect(() => {
    if (currentSong && audioRef.current) {
      // Si hay una canción cargada y se supone que está reproduciéndose
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Error al reproducir:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentSong, isPlaying]);

  useEffect(() => {
    // Verificamos que audioRef.current no sea null
    if (!audioRef.current) return;
    
    // Actualizar la duración cuando cambia la canción
    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };
    
    // Actualizar el tiempo actual mientras se reproduce
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
    
    // Al finalizar la canción
    const handleEnded = () => {
      onNextSong();
    };
    
    const audio = audioRef.current;
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    
    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [onNextSong, currentSong]); // Añadimos currentSong a las dependencias para volver a configurar los listeners cuando cambie

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };
  
  const handleProgressChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Reproduciendo</h2>
      
      {currentSong ? (
        <>
          <audio 
            ref={audioRef} 
            src={currentSong.url} 
            preload="metadata"
          />
          
          <div className="flex-grow flex flex-col items-center justify-center">
            <img 
              src={currentSong.cover} 
              alt={`${currentSong.album} cover`} 
              className="w-40 h-40 object-cover rounded-lg mb-4" 
            />
            <p className="font-medium text-center">{currentSong.title}</p>
            <p className="text-gray-400 text-sm mb-4">{currentSong.artist}</p>
            
            {/* Barra de progreso */}
            <div className="w-full mb-2">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleProgressChange}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
          
          {/* Controles */}
          <div className="mt-4 flex justify-center space-x-6">
            <button 
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 text-xl"
              onClick={onPrevSong}
            >
              ⏮️
            </button>
            <button 
              className="p-3 bg-purple-600 rounded-full hover:bg-purple-500 text-xl"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? "⏸️" : "▶️"}
            </button>
            <button 
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 text-xl"
              onClick={onNextSong}
            >
              ⏭️
            </button>
          </div>
        </>
      ) : (
        <div className="flex-grow flex flex-col items-center justify-center text-gray-400">
          <div className="w-40 h-40 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
            <p>Portada</p>
          </div>
          <p>Ninguna canción seleccionada</p>
        </div>
      )}
    </div>
  );
}

export default Player; 