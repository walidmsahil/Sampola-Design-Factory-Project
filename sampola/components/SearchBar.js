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
    <div className="flex justify-end items-center lg:ml-12 mr-2 lg:w-96 w-full">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-primary text-white rounded-full overflow-hidden w-full lg:max-w-md relative"
      >
        <input
          type="text"
          placeholder=""
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full lg:py-2 p-1 bg-[#f3f2e9] dark:bg-[#C0CFB2] text-[#151515] placeholder-[#f3f2e9] outline-none border-none rounded-lg px-6 pr-8 "
        />
        <button
          type="submit"
          className="flex justify-center items-center p-2 absolute right-0"
          aria-label="Submit search"
        >
          <Search className="w-6 h-6 text-[#c2c2c2] dark:text-[#00000099]" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
