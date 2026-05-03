"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import animalsData from "../../../public/data/animals.json";
import ProtectedRoute from "@/components/ProtectedRoute";
import BookingForm from "@/components/BookingForm";
import Link from "next/link";

function DetailsContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    if (id) {
      const foundAnimal = animalsData.find((a) => a.id === id);
      setAnimal(foundAnimal);
    }
  }, [id]);

  if (!id) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-amber-900 mb-4">No Animal Selected</h2>
        <Link href="/animals" className="text-amber-600 hover:text-amber-800 font-semibold underline">
          Go back to animals list
        </Link>
      </div>
    );
  }

  if (!animal) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(animal.price);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/animals" className="inline-flex items-center text-amber-700 hover:text-amber-900 font-semibold mb-8 group">
        <svg className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
        Back to all animals
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Animal Details */}
        <div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-amber-100 mb-8">
            <div className="relative h-96 w-full">
              <img
                src={animal.image}
                alt={animal.name}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-amber-900 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                  {animal.category}
                </span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl font-extrabold text-amber-950 mb-4">{animal.name}</h1>
          <div className="text-3xl font-black text-amber-600 mb-6">{formattedPrice}</div>
          
          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 mb-8">
            <h3 className="text-xl font-bold text-amber-900 mb-4">Animal Specifications</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              <div>
                <span className="block text-sm text-amber-700 font-semibold mb-1">Type</span>
                <span className="block text-lg text-amber-950 font-medium">{animal.type}</span>
              </div>
              <div>
                <span className="block text-sm text-amber-700 font-semibold mb-1">Age</span>
                <span className="block text-lg text-amber-950 font-medium">{animal.age}</span>
              </div>
              <div>
                <span className="block text-sm text-amber-700 font-semibold mb-1">Weight</span>
                <span className="block text-lg text-amber-950 font-medium">{animal.weight}</span>
              </div>
              <div>
                <span className="block text-sm text-amber-700 font-semibold mb-1">Location</span>
                <span className="block text-lg text-amber-950 font-medium">{animal.location}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-amber-900 mb-3">Description</h3>
            <p className="text-amber-800/80 leading-relaxed text-lg">
              {animal.description}
            </p>
          </div>
        </div>

        {/* Booking Form Side */}
        <div className="lg:sticky lg:top-24 h-fit">
          <ProtectedRoute>
            <BookingForm animal={animal} />
          </ProtectedRoute>
        </div>
      </div>
    </div>
  );
}

export default function DetailsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
      </div>
    }>
      <DetailsContent />
    </Suspense>
  );
}
