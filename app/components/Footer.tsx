import Image from "next/image";
import Link from "next/link";
import Left from "@/public/images/footer-left.png";
import Right from "@/public/images/footer-right.png";
import Telegram from "@/public/icons/telegram.png";
import Twitter from "@/public/icons/new-twitter.png";
import Dexscreener from "@/public/icons/dexscreener-white.png"
import Desxtools from "@/public/icons/dextools-white.svg"

export default function Footer() {
  return (
    <>
      <footer className="bg-[#165819] pt-[60px]">
        <div className="flex items-center justify-between">
          <Image
            src={Left}
            alt="Left"
            className="hidden lg:block lg:w-[268px] lg:h-auto object-contain"
          />

          <div>
            <h1 className="text-center font-luckiestGuy text-3xl lg:text-6xl mb-5">
              CONTACT KEKIUS
            </h1>
            <p className="text-center max-w-[600px] mx-auto font-fredoka font-medium lg:text-xl">
              Join our community to connect, share and grow together in the
              world of memes.
            </p>
            <div className="flex justify-center items-center space-x-4 mt-8">
            <Link href="https://t.co/hLN8RbYsJi" rel="noopener noreferrer" target="_blank">
              <button className="p-3 border hover:bg-green-600/40 border-b-[3px] border-white rounded-lg shadow-white shadow-md transition-all">
                <Image src={Telegram} alt="Telegram" className="w-5 h-5" />
              </button>
              </Link>
              <Link href="https://x.com/KeKiusOnXRP" rel="noopener noreferrer" target="_blank">
              <button className="p-3 border hover:bg-green-600/40 border-b-[3px] border-white rounded-lg shadow-white shadow-md transition-all">
                <Image src={Twitter} alt="Twitter" className="w-5 h-5" />
              </button>
              </Link>
              <Link href="https://t.co/znB3HYcyF8" rel="noopener noreferrer" target="_blank">
              <button className="p-3 border hover:bg-green-600/40 border-b-[3px] border-white rounded-lg shadow-white shadow-md transition-all">
                <Image src={Dexscreener} alt="Dexscreener" className="w-5 h-5" />
              </button>
              </Link>
              <Link href="https://www.dextools.io/app/en/xrpl/pair-explorer/4B454B4955530000000000000000000000000000.rLWCx7obzMRbFfreNR6eScPz6GWj4xbr4v_XRP?t=1735732303613" rel="noopener noreferrer" target="_blank">
              <button className="p-3 border hover:bg-green-600/40 border-b-[3px] border-white rounded-lg shadow-white shadow-md  transition-all">
                <Image src={Desxtools} alt="Desxtools" className="w-5 h-5" />
              </button>
              </Link>
            </div>
          </div>
          <Image
            src={Right}
            alt="Right"
            className="hidden lg:block lg:w-[271px] lg:h-auto object-contain"
          />
        </div>

        {/* lower footer */}
        <div className="border-t-[1px] border-[#2B7D2F] py-4 text-center mt-8 lg:mt-0">
          <p className="font-fredoka font-medium text-xs">
            2025 KEKIUS. All right reserved!
          </p>
        </div>
      </footer>
    </>
  );
}
