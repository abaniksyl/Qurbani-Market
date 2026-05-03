"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-amber-900 text-amber-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="font-bold text-2xl tracking-tight text-amber-400">Qurbani</span>
              <span className="font-semibold text-xl tracking-tight text-amber-100">Market</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="hover:text-amber-300 transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link href="/animals" className="hover:text-amber-300 transition-colors px-3 py-2 rounded-md text-sm font-medium">All Animals</Link>
            
            {user ? (
              <div className="flex items-center gap-4 ml-4">
                <Link href="/my-profile" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <img src={user.avatar || "https://i.pravatar.cc/150"} alt="Avatar" className="w-8 h-8 rounded-full border border-amber-300" />
                  <span className="text-sm font-medium">{user.name}</span>
                </Link>
                <button 
                  onClick={logout}
                  className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4 ml-4">
                <Link href="/login" className="hover:text-amber-300 transition-colors px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                <Link href="/register" className="bg-amber-500 hover:bg-amber-400 text-amber-950 px-4 py-2 rounded-md text-sm font-bold transition-colors">
                  Register
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-amber-300 hover:bg-amber-800 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-amber-800 border-t border-amber-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block hover:bg-amber-700 px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/animals" className="block hover:bg-amber-700 px-3 py-2 rounded-md text-base font-medium">All Animals</Link>
            
            {user ? (
              <>
                <Link href="/my-profile" className="block hover:bg-amber-700 px-3 py-2 rounded-md text-base font-medium">My Profile</Link>
                <button onClick={logout} className="block w-full text-left hover:bg-amber-700 text-red-300 px-3 py-2 rounded-md text-base font-medium">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" className="block hover:bg-amber-700 px-3 py-2 rounded-md text-base font-medium">Login</Link>
                <Link href="/register" className="block hover:bg-amber-700 px-3 py-2 rounded-md text-base font-medium text-amber-300">Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
