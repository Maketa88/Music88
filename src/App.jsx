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
  const [showLibrary, setShowLibrary] = useState(false); // Por defecto oculta
  
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
  
  const handleSearch = (term) => {
    setSearchTerm(term);
    // Si hay un término de búsqueda, mostramos la biblioteca
    if (term) {
      setShowLibrary(true);
    }
  };
  
  const toggleLibrary = () => {
    setShowLibrary(!showLibrary);
  };
  
  return (
    <div className="min-h-screen bg-gray-950 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Maketa88</h1>
        
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-3xl">
            {/* Barra de búsqueda - mismo ancho que el reproductor */}
            <SearchBar 
              onSearch={handleSearch} 
              onToggleLibrary={toggleLibrary}
              showLibrary={showLibrary}
            />
            
            {/* Biblioteca de música - mismo ancho que el reproductor */}
            {(showLibrary || searchTerm) && (
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
            <div className={`${(!showLibrary && !searchTerm) ? 'mt-4' : ''}`}>
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
      </div>
    </div>
  );
}

export default App
