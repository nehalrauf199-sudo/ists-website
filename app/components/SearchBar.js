'use client';

import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ placeholder, onSearch }) {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder={placeholder}
                className="w-full px-6 py-4 pl-14 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
                onKeyUp={(e) => {
                    if (onSearch) {
                        onSearch(e.target.value.toLowerCase());
                    }
                }}
            />
            <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
        </div>
    );
}