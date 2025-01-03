import type { Metadata } from "next";
import { Fredoka, Luckiest_Guy } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// const luckiestGuy = localFont({
//   src: "./fonts/LuckiestGuy-Regular.ttf",
//   variable: "--font-luckiestGuy",
// });

// const fredoka = localFont({
//   src: [
//     {
//       path: "./fonts/Fredoka-Medium.ttf",
//       weight: "500",
//     },
//     {
//       path: "./fonts/Fredoka-Semibold.ttf",
//       weight: "600",
//     },
//   ],
//   variable: "--font-fredoka",
// });


const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  variable: "--font-luckiestGuy",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kiekus Maximus: The Meme Emperor of Kekistan | Kekius Maximus",
  description:
    "Meme coin landing page built with NextJS, TailwindCSS and Vercel for the XRP blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${luckiestGuy.variable} antialiased`}
      >
        <div className="fixed md:px-4 top-0 w-screen">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
