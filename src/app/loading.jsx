export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-amber-100 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-amber-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <h2 className="mt-6 text-xl font-bold text-amber-900 animate-pulse">Loading Qurbani Market...</h2>
    </div>
  );
}
