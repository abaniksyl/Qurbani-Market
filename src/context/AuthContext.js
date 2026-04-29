"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (mocking localStorage persistence)
    const storedUser = localStorage.getItem("qurbani_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    // Mock network request
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    if (email && password) {
      const mockUser = {
        name: "Test User",
        email: email,
        avatar: "https://i.pravatar.cc/150?u=" + email,
      };
      setUser(mockUser);
      localStorage.setItem("qurbani_user", JSON.stringify(mockUser));
      setLoading(false);
      return { success: true };
    }
    setLoading(false);
    return { success: false, error: "Invalid credentials" };
  };

  const register = async (name, email, password) => {
    setLoading(true);
    // Mock network request
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    if (name && email && password) {
      const mockUser = {
        name: name,
        email: email,
        avatar: "https://i.pravatar.cc/150?u=" + email,
      };
      setUser(mockUser);
      localStorage.setItem("qurbani_user", JSON.stringify(mockUser));
      setLoading(false);
      return { success: true };
    }
    setLoading(false);
    return { success: false, error: "Missing information" };
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const mockUser = {
      name: "Google User",
      email: "google.user@example.com",
      avatar: "https://i.pravatar.cc/150?img=11",
    };
    setUser(mockUser);
    localStorage.setItem("qurbani_user", JSON.stringify(mockUser));
    setLoading(false);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("qurbani_user");
  };

  const updateProfile = (name, avatar) => {
    if (user) {
      const updatedUser = { ...user, name, avatar };
      setUser(updatedUser);
      localStorage.setItem("qurbani_user", JSON.stringify(updatedUser));
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    loginWithGoogle,
    logout,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
