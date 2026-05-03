import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { BookingProvider } from "@/context/BookingContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Qurbani Market | Premium Livestock Marketplace",
  description: "Find the best and healthiest livestock for your Qurbani needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-amber-50/30 text-slate-800`}>
        <AuthProvider>
          <BookingProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </BookingProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
