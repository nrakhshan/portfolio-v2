import {Outfit, Lexend, Urbanist} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit"
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend"
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist"
});

export const metadata = {
  title: "Nusaiba Rakhshan",
  description: "Nusaiba Rakhshan's Junior Dev Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${lexend.className} ${urbanist.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}