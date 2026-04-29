"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      // In a real app, this would fetch from a database.
      // Here we load from localStorage specific to the user email
      const storedBookings = localStorage.getItem(`bookings_${user.email}`);
      if (storedBookings) {
        setBookings(JSON.parse(storedBookings));
      } else {
        setBookings([]);
      }
    } else {
      setBookings([]);
    }
  }, [user]);

  const addBooking = (animal, bookingDetails) => {
    if (!user) return { success: false, error: "Must be logged in to book." };

    const newBooking = {
      id: Date.now().toString(),
      animalId: animal.id,
      animalName: animal.name,
      price: animal.price,
      bookingDate: new Date().toISOString(),
      status: "Confirmed",
      details: bookingDetails, // Name, email, phone, address
    };

    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    
    // Save to localStorage
    localStorage.setItem(`bookings_${user.email}`, JSON.stringify(updatedBookings));

    return { success: true };
  };

  const value = {
    bookings,
    addBooking,
  };

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export const useBooking = () => useContext(BookingContext);
