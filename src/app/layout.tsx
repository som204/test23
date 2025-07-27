import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "@/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "PawMingle - Find Your Pet's Perfect Match",
  description: "A social platform for pet owners to connect for playdates, companionship, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${roboto.variable} flex flex-col min-h-screen`}>
        <ThemeProvider>
          <AuthProvider>
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}