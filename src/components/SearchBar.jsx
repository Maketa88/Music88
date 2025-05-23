import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg">
      <div className="relative w-full">
        <input
          type="text"
          className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
          placeholder="Buscar canciones..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="absolute left-3 top-3.5 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        {searchTerm && (
          <button 
            onClick={() => {
              setSearchTerm('');
              onSearch('');
            }}
            className="absolute right-3 top-3.5 text-gray-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar; 