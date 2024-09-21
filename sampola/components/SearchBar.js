"use client"
import { useState } from 'react';
import { Search } from 'lucide-react'; // Using lucide-react for the search icon

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add your search logic here
  };

  return (
    <div className="flex justify-end items-center w-full mr-2">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-green text-white rounded-lg overflow-hidden w-full max-w-md relative"
      >
        <button
          type="submit"
          className="flex justify-center items-center p-2 absolute left-0"
          aria-label="Submit search"
        >
          <Search className="w-6 h-6 text-[#f3f2e9]" />
        </button>
        <input
          type="text"
          style={{ border: '1px solid' }}
          placeholder="What are you looking for?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 bg-transparent text-[#C0CFB2] placeholder-[#f3f2e9] outline-none border-[#C0CFB2] rounded-lg pl-10"
        />
      </form>
    </div>
  );
};

export default SearchBar;
