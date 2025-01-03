/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Telegram from "@/public/icons/telegram.png";
import Twitter from "@/public/icons/new-twitter.png";
import GenIcon from "@/public/icons/image-flip-vertical.png";
import MenuOpen from "@/public/icons/menu-11.png";
import MenuClose from "@/public/icons/cancel-01.png";
import DexscrLogo from "@/public/icons/dexscreener-black.png";
import DextLogo from "@/public/icons/dextools.svg";
import Logo from "@/public/icons/logo.svg";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const navigateAndClose = (path: string) => {
    setNav(false); // Close the menu immediately
    router.push(path); // Navigate to the path
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <main className="relative lg:flex lg:justify-center">
      {/* navbar for desktop */}
      <nav className="hidden lg:flex w-full max-w-[890px] lg:max-h-20 justify-between items-center mx-3 md:mx-5 m-5 py-3 px-3 rounded-2xl bg-[#2E7D32]">
        <div className="flex items-center lg:space-x-6">
          <Link href="/">
            <Image src={Logo} alt="Logo" className="w-12 h-12" />
          </Link>

          <ul className="flex space-x-6 lg:space-x-10 font-fredoka">
            <Link href="#story" className="hover:text-[#FFEB3B]">
              <li className="font-medium text-sm lg:text-base">Our Story</li>
            </Link>
            <Link href="#tokenomics" className="hover:text-[#FFEB3B]">
              <li className="font-medium text-sm lg:text-base">Tokenomics</li>
            </Link>
            <Link href="#media" className="hover:text-[#FFEB3B]">
              <li className="font-medium text-sm lg:text-base">Media</li>
            </Link>
          </ul>
        </div>

        <div className="flex items-center space-x-3">
        <Link href="https://t.co/hLN8RbYsJi" rel="noopener noreferrer" target="_blank">
          <button className="p-3 hover:bg-green-600/40 border border-b-[3px] border-white rounded-lg shadow-white shadow-md transition-all">
            <Image src={Telegram} alt="Telegram" className="w-5 h-5" />
          </button>
          </Link>
          <Link href="https://x.com/KeKiusOnXRP" rel="noopener noreferrer" target="_blank">
          <button className="p-3 hover:bg-green-600/40 border border-b-[3px] border-white rounded-lg shadow-white shadow-md transition-all">
            <Image src={Twitter} alt="Twitter" className="w-5 h-5" />
          </button>
          </Link>
          <Link href="https://x.com/i/grok/share/Q9pr9ZfunW32wKHPouxqAtXlpM" rel="noopener noreferrer" target="_blank">
          <button className="bg-[#FFEB3B] hover:bg-yellow-300 text-[#2E7D32] lg:text-base font-fredoka font-semibold px-4 py-3 flex items-center border-b-[3px] border-white rounded-lg shadow-white shadow-md transition-all">
            Generate Keikus
            <Image src={GenIcon} alt="Generate" className="w-5 h-5 ml-2" />
          </button>
          </Link>
        </div>
      </nav>

      {/* Hamburger button */}
       {!nav && (
        <button
          onClick={handleNav}
          className="lg:hidden fixed top-5 right-5 z-50 bg-[#FFEB3B] border border-b-2 border-[#165819] p-3 shadow-lg rounded-lg"
        >
          <Image src={MenuOpen} alt="Menu Toggle" className="w-6 h-6" />
        </button>
      )}

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full bg-[#2E7D32] text-white transition-transform ${
          nav ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="p-5 pt-6">
        <button onClick={handleNav} className="p-4 border-b-[1px] border-[#fff]">
            <Image src={MenuClose} alt="Close Menu" className="w-6 h-6" />
          </button>
        </div>

        <div className="p-5 space-y-5">
          <Link href="#story" onClick={handleNav}>
            <p className="font-fredoka text-lg font-medium hover:text-[#FFEB3B] mb-5">
              Our Story
            </p>
          </Link>
          <Link href="#tokenomics" onClick={handleNav}>
            <p className="font-fredoka text-lg font-medium hover:text-[#FFEB3B] mb-5">
              Tokenomics
            </p>
          </Link>
          <Link href="#media" onClick={handleNav}>
            <p className="font-fredoka text-lg font-medium hover:text-[#FFEB3B] mb-5">Media</p>
          </Link>
          <Link href="https://x.com/KeKiusOnXRP" rel="noopener noreferrer" target="_blank" onClick={handleNav}>
            <p className="font-fredoka text-lg font-medium hover:text-[#FFEB3B] mb-5">Twitter</p>
          </Link>
          <Link href="https://t.co/hLN8RbYsJi" rel="noopener noreferrer" target="_blank" onClick={handleNav}>
            <p className="font-fredoka text-lg font-medium hover:text-[#FFEB3B] mb-5">Telegram</p>
          </Link>

          <div className="flex flex-col space-y-3 mt-5">
            <Link href="https://www.dextools.io/app/en/xrpl/pair-explorer/4B454B4955530000000000000000000000000000.rLWCx7obzMRbFfreNR6eScPz6GWj4xbr4v_XRP?t=1735732303613" rel="noopener noreferrer" target="_blank">
            <button className="bg-[#FFEB3B] w-full justify-center text-[#2E7D32] shadow-dextoolShadow border-[1px] border-b-2 border-[#2E7D32] font-fredoka font-semibold px-8 h-14 py-3 flex items-center rounded-lg">
              DEXTOOLS
              <Image
                src={DextLogo}
                alt="Arrow Right"
                className="w-5 h-5 ml-2"
              />
            </button>
            </Link>

            <Link href="https://t.co/znB3HYcyF8" rel="noopener noreferrer" target="_blank">
            <button className="bg-[#FFFFFF] w-full flex justify-center text-[#000000] shadow-dexscreenerShadow border-[1px] border-b-2 border-[#000000] font-fredoka font-semibold px-8 h-14 py-3 items-center rounded-lg">
              DEXSCREENER
              <Image
                src={DexscrLogo}
                alt="Arrow Right"
                className="w-6 h-6 ml-1 rounded-full"
              />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
