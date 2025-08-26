import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rick and Morty Explorer",
  description:
    "Aplicación web de Next.js para explorar personajes, ubicaciones y episodios de la serie Rick and Morty, consumiendo la API pública.",
  keywords: "Rick and Morty, API, Next.js, personajes, episodios, multiverso",
  authors: [{ name: "Rick & Morty Explorer" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <div className="video-background">
          <div className="video-overlay"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
