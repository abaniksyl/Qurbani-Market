"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useBooking } from "@/context/BookingContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Link from "next/link";

function ProfileContent() {
  const { user, updateProfile, logout } = useAuth();
  const { bookings } = useBooking();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [avatar, setAvatar] = useState(user?.avatar || "");
  const [toast, setToast] = useState({ show: false, message: "" });

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfile(name, avatar);
    setIsEditing(false);
    setToast({ show: true, message: "Profile updated successfully!" });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-amber-950 tracking-tight mb-8">My Profile</h1>

      {toast.show && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8 rounded-md">
          <p className="text-green-700 text-sm font-medium">{toast.message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Info Side */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden sticky top-24">
            <div className="bg-gradient-to-r from-amber-500 to-amber-700 h-32"></div>
            <div className="px-6 pb-6 relative">
              <div className="flex justify-center -mt-16 mb-4">
                <img 
                  src={user?.avatar || "https://i.pravatar.cc/150"} 
                  alt={user?.name} 
                  className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover bg-white"
                />
              </div>
              
              {!isEditing ? (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-amber-950">{user?.name}</h2>
                  <p className="text-amber-700 mb-6">{user?.email}</p>
                  
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={() => setIsEditing(true)}
                      className="w-full bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-2 px-4 rounded-xl transition-colors"
                    >
                      Edit Profile
                    </button>
                    <button 
                      onClick={logout}
                      className="w-full bg-white border border-red-200 hover:bg-red-50 text-red-600 font-semibold py-2 px-4 rounded-xl transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleUpdate} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-amber-900 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-amber-200 focus:border-amber-500 outline-none text-amber-950"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-amber-900 mb-1">Avatar URL</label>
                    <input
                      type="url"
                      required
                      value={avatar}
                      onChange={(e) => setAvatar(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-amber-200 focus:border-amber-500 outline-none text-amber-950"
                    />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button 
                      type="submit"
                      className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                    >
                      Save
                    </button>
                    <button 
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bookings Side */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-950 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
              My Bookings
            </h2>

            {bookings.length === 0 ? (
              <div className="text-center py-12 bg-amber-50/50 rounded-xl border border-dashed border-amber-200">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">No Bookings Yet</h3>
                <p className="text-amber-700/70 mb-6">You haven't booked any animals for Qurbani yet.</p>
                <Link 
                  href="/animals" 
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-2.5 px-6 rounded-xl transition-colors"
                >
                  Browse Animals
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {bookings.map((booking) => (
                  <div key={booking.id} className="border border-amber-100 rounded-xl p-5 hover:border-amber-300 transition-colors flex flex-col sm:flex-row gap-6">
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-amber-950">
                          <Link href={`/details-page?id=${booking.animalId}`} className="hover:text-amber-600 transition-colors">
                            {booking.animalName}
                          </Link>
                        </h3>
                        <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
                          {booking.status}
                        </span>
                      </div>
                      <div className="text-xl font-black text-amber-600 mb-4">
                        {new Intl.NumberFormat("en-BD", { style: "currency", currency: "BDT", maximumFractionDigits: 0 }).format(booking.price)}
                      </div>
                      <div className="text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div><span className="font-semibold">Booking ID:</span> #{booking.id.slice(-6)}</div>
                        <div><span className="font-semibold">Date:</span> {new Date(booking.bookingDate).toLocaleDateString()}</div>
                        <div className="sm:col-span-2"><span className="font-semibold">Delivery To:</span> {booking.details.address}</div>
                        <div><span className="font-semibold">Contact:</span> {booking.details.phone}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MyProfile() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  );
}
