"use client";

import { useState } from "react";
import { useBooking } from "@/context/BookingContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function BookingForm({ animal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const { addBooking } = useBooking();
  const { user } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!user) {
      setToast({ show: true, message: "Please log in to book this animal.", type: "error" });
      setTimeout(() => router.push("/login"), 2000);
      return;
    }

    const res = addBooking(animal, formData);
    if (res.success) {
      setToast({ show: true, message: "Booking successful! Redirecting to profile...", type: "success" });
      setFormData({ name: "", email: "", phone: "", address: "" }); // Reset form
      setTimeout(() => {
        router.push("/my-profile");
      }, 2000);
    } else {
      setToast({ show: true, message: res.error, type: "error" });
    }

    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 mt-8">
      <h3 className="text-2xl font-bold text-amber-950 mb-6">Book this Animal</h3>
      
      {toast.show && (
        <div className={`p-4 mb-6 rounded-md ${toast.type === "success" ? "bg-green-50 border-l-4 border-green-500 text-green-700" : "bg-red-50 border-l-4 border-red-500 text-red-700"}`}>
          <p className="text-sm font-medium">{toast.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-amber-900 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-amber-950"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-amber-900 mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-amber-950"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-amber-900 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-amber-950"
            placeholder="+880 1XXXXXXXXX"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-amber-900 mb-2">Delivery Address</label>
          <textarea
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-amber-950 resize-none"
            placeholder="House #, Road #, Area, City"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-4 rounded-xl transition-colors shadow-md hover:shadow-lg mt-2 text-lg"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
