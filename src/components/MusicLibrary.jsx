import { songs } from '../data/songs';

function MusicLibrary({ onSongSelect, currentSongId }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Biblioteca</h2>
      <div className="overflow-y-auto max-h-[60vh]">
        {songs.map(song => (
          <div 
            key={song.id} 
            className={`p-3 mb-2 rounded-md hover:bg-gray-700 cursor-pointer flex items-center ${
              currentSongId === song.id ? 'bg-gray-700' : 'bg-gray-800'
            }`}
            onClick={() => onSongSelect(song)}
          >
            <img 
              src={song.cover} 
              alt={`${song.album} cover`} 
              className="w-12 h-12 rounded mr-3" 
            />
            <div>
              <p className="font-medium">{song.title}</p>
              <p className="text-sm text-gray-400">{song.artist} • {song.album}</p>
            </div>
            <p className="ml-auto text-gray-400">{song.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MusicLibrary; 