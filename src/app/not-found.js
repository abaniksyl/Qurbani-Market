import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-amber-500 mb-6">
        <svg className="w-32 h-32 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
      <h1 className="text-5xl font-black text-amber-950 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-amber-900 mb-4">Page Not Found</h2>
      <p className="text-amber-800/70 max-w-md mx-auto mb-8 text-lg">
        We couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link 
        href="/"
        className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-md hover:shadow-lg"
      >
        Return to Home
      </Link>
    </div>
  );
}
