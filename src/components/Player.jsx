import { useEffect, useRef, useState } from 'react';
import ShuffleButton from './ShuffleButton';
import VolumeControl from './VolumeControl';

function Player({ currentSong, isPlaying, setIsPlaying, onNextSong, onPrevSong, isShuffleOn, onShuffleToggle }) {
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

  // Configurar MediaSession API para controles en la pantalla de bloqueo
  useEffect(() => {
    // Configurar/actualizar MediaSession cada vez que cambia currentSong o isPlaying
    const setupMediaSession = () => {
      if (!('mediaSession' in navigator)) return;
      
      // Si no hay canción, no configuramos MediaSession
      if (!currentSong) {
        // Limpiar metadatos si no hay canción actual
        navigator.mediaSession.metadata = null;
        return;
      }
      
      // Configurar metadatos
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentSong.title,
        artist: currentSong.artist,
        album: currentSong.album,
        artwork: [
          { src: currentSong.cover, sizes: '512x512', type: 'image/png' }
        ]
      });
      
      // Actualizar el estado de reproducción
      navigator.mediaSession.playbackState = isPlaying ? 'playing' : 'paused';
    };
    
    setupMediaSession();
  }, [currentSong, isPlaying]);
  
  // Configurar manejadores de acción de MediaSession (separados para evitar re-renders innecesarios)
  useEffect(() => {
    if (!('mediaSession' in navigator)) return;
    
    // Definir funciones de acción que usan valores actualizados de props
    const handlePlay = () => {
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.play().catch(err => console.error("Error en MediaSession play:", err));
      }
    };
    
    const handlePause = () => {
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
    
    const handlePreviousTrack = () => {
      // Esperar brevemente antes de ejecutar para evitar problemas con el navegador
      setTimeout(() => {
        onPrevSong();
      }, 50);
    };
    
    const handleNextTrack = () => {
      // Esperar brevemente antes de ejecutar para evitar problemas con el navegador
      setTimeout(() => {
        onNextSong();
      }, 50);
    };
    
    // Configurar acciones de control de reproducción
    navigator.mediaSession.setActionHandler('play', handlePlay);
    navigator.mediaSession.setActionHandler('pause', handlePause);
    navigator.mediaSession.setActionHandler('previoustrack', handlePreviousTrack);
    navigator.mediaSession.setActionHandler('nexttrack', handleNextTrack);
    
    // Función de limpieza
    return () => {
      // Limpiar controladores cuando el componente se desmonte
      navigator.mediaSession.setActionHandler('play', null);
      navigator.mediaSession.setActionHandler('pause', null);
      navigator.mediaSession.setActionHandler('previoustrack', null);
      navigator.mediaSession.setActionHandler('nexttrack', null);
    };
  }, [onNextSong, onPrevSong, setIsPlaying]); // Solo se recrea cuando estas funciones cambian
  
  // Actualizar posición de reproducción para MediaSession
  useEffect(() => {
    if (!('mediaSession' in navigator) || !audioRef.current || !currentSong) return;
    
    const updatePositionState = () => {
      if (audioRef.current && !isNaN(audioRef.current.duration)) {
        try {
          navigator.mediaSession.setPositionState({
            duration: audioRef.current.duration,
            playbackRate: audioRef.current.playbackRate,
            position: audioRef.current.currentTime
          });
        } catch (err) {
          console.error("Error al actualizar posición:", err);
        }
      }
    };
    
    // Actualizar cada segundo mientras hay una canción
    const interval = setInterval(updatePositionState, 1000);
    return () => clearInterval(interval);
  }, [currentSong]);

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
  }, [onNextSong, currentSong]);

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
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-5 text-center">Reproduciendo</h2>
      
      {currentSong ? (
        <>
          <audio 
            ref={audioRef} 
            src={currentSong.url} 
            preload="metadata"
          />
          
          <div className="flex flex-col md:flex-row md:items-center md:gap-8">
            {/* Lado izquierdo: Portada */}
            <div className="flex flex-col items-center md:w-1/3">
              <div className={`relative w-52 h-52 md:w-60 md:h-60 p-1 rounded-lg mb-4 transform transition-all duration-300 ${
                isPlaying 
                  ? 'ring-4 ring-violet-500/90 shadow-lg shadow-violet-500/30' 
                  : 'ring-2 ring-gray-600 shadow-md'
              }`}>
                <img 
                  src={currentSong.cover} 
                  alt={`${currentSong.album} cover`} 
                  className="w-full h-full object-contain rounded-md" 
                />
                {isPlaying && (
                  <div className="absolute bottom-2 right-2 bg-violet-600 rounded-full p-1.5 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
            
            {/* Lado derecho: Información y controles */}
            <div className="flex-1 flex flex-col md:justify-between">
              <div className="mb-6">
                <p className="font-semibold text-xl text-center md:text-left">{currentSong.title}</p>
                <p className="text-gray-400 text-sm mb-4 text-center md:text-left">{currentSong.artist} • {currentSong.album}</p>
                
                {/* Barra de progreso */}
                <div className="w-full mb-4">
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleProgressChange}
                    className="slider w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              </div>
              
              {/* Controles de reproducción y volumen */}
              <div className="flex justify-center md:justify-start items-center space-x-2 md:space-x-3">
                <button 
                  className="p-2 text-gray-300 hover:text-white focus:outline-none transition-colors"
                  onClick={onPrevSong}
                  aria-label="Canción anterior"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  className="p-3 md:p-4 bg-violet-600 hover:bg-violet-500 text-white rounded-full shadow-lg focus:outline-none transform hover:scale-105 transition-all"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pausar" : "Reproducir"}
                >
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </button>
                
                <button 
                  className="p-2 text-gray-300 hover:text-white focus:outline-none transition-colors"
                  onClick={onNextSong}
                  aria-label="Canción siguiente"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </button>
                
                <div className="flex items-center gap-1 ml-1">
                  {/* Control de volumen integrado junto a los controles */}
                  <VolumeControl audioRef={audioRef} />
                </div>
                
                {/* Botón de reproducción aleatoria */}
                <ShuffleButton isShuffleOn={isShuffleOn} onShuffleToggle={onShuffleToggle} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-6">
          <div className="mx-auto w-48 h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center shadow-lg ring-2 ring-gray-600 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </div>
          <div className="text-center w-full">
            <p className="text-lg font-medium">Ninguna canción seleccionada</p>
            <p className="text-sm text-gray-500 mt-2">Selecciona una canción para reproducir</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Player; 