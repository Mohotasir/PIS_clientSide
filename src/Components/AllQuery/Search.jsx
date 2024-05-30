import  { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [productType, setProductType] = useState('');
  const [brand, setBrand] = useState('');
  const [datePosted, setDatePosted] = useState('');
  const [userRating, setUserRating] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({
      searchTerm,
      productType,
      brand,
      datePosted,
      userRating
    });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mt-8 text-gray-800">
      <form onSubmit={handleSearch} className='flex  flex-col md:flex-row md:gap-3'>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Search Term</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Product Type</label>
          <input
            type="text"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Brand</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date Posted</label>
          <input
            type="date"
            value={datePosted}
            onChange={(e) => setDatePosted(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">User Rating</label>
          <select
            value={userRating}
            onChange={(e) => setUserRating(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 btn bgClr mt-4  py-2 bg-indigo-600 text-white font-semibold rounded-md shadow"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
