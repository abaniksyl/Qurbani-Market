"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { data: session, isPending: loading } = authClient.useSession();
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      setUser({
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        avatar: session.user.image || "https://i.pravatar.cc/150?u=" + session.user.email,
      });
    } else {
      setUser(null);
    }
  }, [session]);

  const login = async (email, password) => {
    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });
    
    if (error) {
      return { success: false, error: error.message || "Invalid credentials" };
    }
    return { success: true };
  };

  const register = async (name, email, password) => {
    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
    });
    
    if (error) {
      return { success: false, error: error.message || "Failed to register" };
    }
    return { success: true };
  };

  const loginWithGoogle = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
    });
    
    if (error) {
      return { success: false, error: error.message || "Google login failed" };
    }
    return { success: true };
  };

  const logout = async () => {
    await authClient.signOut();
    setUser(null);
    router.push("/");
  };

  const updateProfile = async (name, avatar) => {
    // Note: better-auth might need a plugin for this or direct DB update
    // For now, we'll keep it as a placeholder or update local state
    if (user) {
      setUser(prev => ({ ...prev, name, avatar }));
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
