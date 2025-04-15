import { useState } from 'react'
import './App.css'
import MusicLibrary from './components/MusicLibrary'
import Player from './components/Player'
import { songs } from './data/songs'

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handleSongSelect = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };
  
  const handleNextSong = () => {
    if (!currentSong) return;
    
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
  };
  
  const handlePrevSong = () => {
    if (!currentSong) return;
    
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[prevIndex]);
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Reproductor de Música</h1>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Biblioteca de música */}
        <div className="md:col-span-2">
          <MusicLibrary 
            onSongSelect={handleSongSelect} 
            currentSongId={currentSong?.id}
          />
        </div>
        
        {/* Panel de reproducción */}
        <div>
          <Player 
            currentSong={currentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            onNextSong={handleNextSong}
            onPrevSong={handlePrevSong}
          />
        </div>
      </div>
    </div>
  );
}

export default App
