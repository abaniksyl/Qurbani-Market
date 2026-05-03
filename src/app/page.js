import Link from "next/link";
import AnimalCard from "@/components/AnimalCard";
import animalsData from "../../public/data/animals.json";

export default function Home() {
  const featuredAnimals = animalsData.filter((animal) => animal.featured).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-amber-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            Find the Perfect <span className="text-amber-400">Qurbani</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl max-w-3xl text-amber-50 drop-shadow-md mb-10 leading-relaxed">
            Premium livestock sourced from top farms across the country. Quality, health, and transparency guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/animals" 
              className="bg-amber-500 hover:bg-amber-400 text-amber-950 px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              Browse All Animals
            </Link>
            <Link 
              href="/register" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-4">Featured Livestock</h2>
              <p className="text-lg text-amber-800/80 max-w-2xl">Handpicked premium animals with excellent health records and superior lineage, perfect for your Qurbani.</p>
            </div>
            <Link href="/animals" className="hidden md:inline-flex items-center text-amber-700 hover:text-amber-600 font-semibold group">
              View all 
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/animals" className="inline-flex items-center text-amber-700 hover:text-amber-600 font-semibold text-lg">
              View all animals
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-4">Why Choose Qurbani Market?</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100 shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Verified Health</h3>
              <p className="text-amber-800/70 leading-relaxed">Every animal comes with a complete medical history and is checked by certified veterinarians before listing.</p>
            </div>
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100 shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Transparent Pricing</h3>
              <p className="text-amber-800/70 leading-relaxed">No hidden fees or middleman commissions. You pay exactly what you see directly to the farm owner.</p>
            </div>
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100 shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Hassle-free Delivery</h3>
              <p className="text-amber-800/70 leading-relaxed">Optional safe and secure delivery right to your doorstep, managed by experienced transport professionals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
