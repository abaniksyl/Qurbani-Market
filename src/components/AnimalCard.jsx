import Link from "next/link";
import Image from "next/image";

export default function AnimalCard({ animal }) {
  // Format price
  const formattedPrice = new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(animal.price);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-amber-100 group flex flex-col h-full">
      <div className="relative h-64 w-full overflow-hidden bg-amber-50">
        {/* Placeholder image approach since we're using external mock URLs */}
        <img
          src={animal.image}
          alt={animal.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-amber-900 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {animal.category}
          </span>
          <span className="bg-white/90 text-amber-900 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full shadow-md border border-amber-200">
            {animal.type}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors line-clamp-1">{animal.name}</h3>
        </div>
        
        <div className="text-2xl font-extrabold text-amber-600 mb-4">{formattedPrice}</div>
        
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-600 mb-6 flex-grow">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
            <span className="font-medium">{animal.weight}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="font-medium">{animal.age}</span>
          </div>
          <div className="flex items-center gap-1.5 col-span-2 text-xs">
            <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span className="truncate">{animal.location}</span>
          </div>
        </div>
        
        <Link 
          href={`/details-page?id=${animal.id}`}
          className="w-full mt-auto block text-center bg-amber-100 hover:bg-amber-600 text-amber-900 hover:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
