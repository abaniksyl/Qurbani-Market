"use client";

import { useState } from "react";
import AnimalCard from "@/components/AnimalCard";
import animalsData from "../../../public/data/animals.json";

export default function Animals() {
  const [filterType, setFilterType] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Extract unique types for the filter
  const types = ["All", ...new Set(animalsData.map((animal) => animal.type))];

  // Filter and Sort logic
  let displayedAnimals = [...animalsData];

  if (filterType !== "All") {
    displayedAnimals = displayedAnimals.filter((animal) => animal.type === filterType);
  }

  if (sortOrder === "price-asc") {
    displayedAnimals.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "price-desc") {
    displayedAnimals.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-amber-950 tracking-tight mb-2">All Animals</h1>
          <p className="text-amber-800/80 text-lg">Browse our complete collection of premium livestock.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl shadow-sm border border-amber-100">
          <div className="flex flex-col">
            <label htmlFor="type-filter" className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">Filter by Type</label>
            <select 
              id="type-filter"
              value={filterType} 
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-amber-50 border border-amber-200 text-amber-950 rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 font-medium"
            >
              {types.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="sort-order" className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">Sort by Price</label>
            <select 
              id="sort-order"
              value={sortOrder} 
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-amber-50 border border-amber-200 text-amber-950 rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 font-medium"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {displayedAnimals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-amber-100 shadow-sm">
          <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-400">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h2 className="text-2xl font-bold text-amber-900 mb-2">No animals found</h2>
          <p className="text-amber-700/70">Try adjusting your filters to see more results.</p>
          <button 
            onClick={() => { setFilterType("All"); setSortOrder("default"); }}
            className="mt-6 text-amber-600 font-semibold hover:text-amber-800 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
