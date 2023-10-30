import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chrono Bump",
  description: "Simple metronome for musicians",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        <main className="flex justify-center mt-4">
          <div className="w-full max-w-screen-xl px-2 md:px-6">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
