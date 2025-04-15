import { useState } from 'react'
import './App.css'
import MusicLibrary from './components/MusicLibrary'
import Player from './components/Player'
import SearchBar from './components/SearchBar'
import { songs } from './data/songs'

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isShuffleOn, setIsShuffleOn] = useState(false);
  
  const handleSongSelect = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };
  
  const handleNextSong = () => {
    if (!currentSong) return;
    
    if (isShuffleOn) {
      // Reproducción aleatoria: selecciona una canción al azar diferente a la actual
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * songs.length);
      } while (songs[randomIndex].id === currentSong.id && songs.length > 1);
      
      setCurrentSong(songs[randomIndex]);
    } else {
      // Reproducción normal: selecciona la siguiente canción en orden
      const currentIndex = songs.findIndex(song => song.id === currentSong.id);
      const nextIndex = (currentIndex + 1) % songs.length;
      setCurrentSong(songs[nextIndex]);
    }
  };
  
  const handlePrevSong = () => {
    if (!currentSong) return;
    
    if (isShuffleOn) {
      // En modo aleatorio, la función "anterior" también selecciona al azar
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * songs.length);
      } while (songs[randomIndex].id === currentSong.id && songs.length > 1);
      
      setCurrentSong(songs[randomIndex]);
    } else {
      // En modo normal, selecciona la canción anterior
      const currentIndex = songs.findIndex(song => song.id === currentSong.id);
      const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
      setCurrentSong(songs[prevIndex]);
    }
  };
  
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  
  const toggleShuffle = () => {
    setIsShuffleOn(!isShuffleOn);
  };
  
  return (
    <div className="min-h-screen bg-gray-950 text-white py-4 px-4 sm:px-4 lg:px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Maketa88</h1>
        
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-3xl">
            {/* Barra de búsqueda */}
            <SearchBar onSearch={handleSearch} />
            
            {/* Biblioteca de música - solo visible cuando hay búsqueda */}
            {searchTerm && (
              <div className="mb-6">
                <MusicLibrary 
                  onSongSelect={handleSongSelect} 
                  currentSongId={currentSong?.id}
                  searchTerm={searchTerm}
                  visible={true}
                />
              </div>
            )}
            
            {/* Panel de reproducción */}
            <div className={`${!searchTerm ? 'mt-4' : ''}`}>
              <Player 
                currentSong={currentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                onNextSong={handleNextSong}
                onPrevSong={handlePrevSong}
                isShuffleOn={isShuffleOn}
                onShuffleToggle={toggleShuffle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
