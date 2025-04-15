import { songs } from '../data/songs';

function MusicLibrary({ onSongSelect, currentSongId, searchTerm = '' }) {
  // Filtrar canciones basado en el término de búsqueda
  const filteredSongs = searchTerm 
    ? songs.filter(song => 
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.album.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-5">
        Resultados para "{searchTerm}"
      </h2>
      
      <div className="overflow-y-auto max-h-[60vh] pr-1">
        {filteredSongs.length > 0 ? (
          filteredSongs.map(song => (
            <div 
              key={song.id} 
              className={`p-3 mb-2 rounded-lg hover:bg-gray-700 cursor-pointer flex items-center transition-colors ${
                currentSongId === song.id ? 'bg-gray-700 border-l-4 border-violet-500' : 'bg-gray-800'
              }`}
              onClick={() => onSongSelect(song)}
            >
              <img 
                src={song.cover} 
                alt={`${song.album} cover`} 
                className="w-12 h-12 rounded-md mr-4 object-cover shadow-md" 
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{song.title}</p>
                <p className="text-sm text-gray-400 truncate">{song.artist} • {song.album}</p>
              </div>
              <p className="ml-4 text-gray-400 text-sm whitespace-nowrap">{song.duration}</p>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-400">No se encontraron canciones</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MusicLibrary; 