import mexicanaLogo from '../assets/cara-triste.png';
import { songs } from "../data/songs";

function MusicLibrary({ onSongSelect, currentSongId, searchTerm = "" }) {
  // Filtrar canciones basado en el término de búsqueda
  const filteredSongs = searchTerm
    ? songs.filter(
        (song) =>
          song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
          song.album.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="overflow-y-auto max-h-[60vh] pr-1">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => (
            <div
              key={song.id}
              className={`p-3 mb-2 rounded-lg hover:bg-gray-700 cursor-pointer flex items-center transition-colors ${
                currentSongId === song.id
                  ? "bg-gray-700 border-l-4 border-violet-500"
                  : "bg-gray-800"
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
                <p className="text-sm text-gray-400 truncate">
                  {song.artist} • {song.album}
                </p>
              </div>
              <p className="ml-4 text-gray-400 text-sm whitespace-nowrap">
                {song.duration}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 mx-auto mb-4 relative">
              <img 
                src={mexicanaLogo} 
                alt="Calavera mexicana" 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-400">No se encontraron canciones</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MusicLibrary;
