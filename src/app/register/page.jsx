"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register, loginWithGoogle } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const res = await register(name, email, password);
    if (res.success) {
      router.push("/my-profile");
    } else {
      setError(res.error);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    const res = await loginWithGoogle();
    if (res.success) {
      router.push("/my-profile");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-amber-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-orange-500"></div>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-amber-950 mb-2">Create Account</h2>
          <p className="text-amber-700/80">Join Qurbani Market today</p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md">
            <p className="text-red-700 text-sm font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-amber-900 mb-2">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-amber-950"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-amber-900 mb-2">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-amber-950"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-amber-900 mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-amber-950"
              placeholder="••••••••"
              minLength={6}
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md hover:shadow-lg mt-2"
          >
            Register
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <span className="border-b w-1/5 border-amber-200 lg:w-1/4"></span>
          <span className="text-xs text-center text-amber-600 font-semibold uppercase">or continue with</span>
          <span className="border-b w-1/5 border-amber-200 lg:w-1/4"></span>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="mt-6 w-full flex items-center justify-center gap-3 bg-white border-2 border-amber-100 hover:bg-amber-50 text-amber-900 font-bold py-3 px-4 rounded-xl transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Google
        </button>

        <p className="mt-8 text-center text-sm text-amber-800">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-amber-600 hover:text-amber-800 hover:underline">
            Sign In here
          </Link>
        </p>
      </div>
    </div>
  );
}
