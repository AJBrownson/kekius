/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Origin1 from "@/public/images/origin1.png";
import Origin2 from "@/public/images/origin2.png";
import Origin3 from "@/public/images/origin3.png";
import GenIcon from "@/public/icons/image-flip-vertical.png";

export default function OriginCards() {
  return (
    <>
      <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-between lg:items-center">
        <div className="bg-[#B9E9BD] border border-[#82BF87] max-w-[350px] max-h-[420px] px-2 pt-2 pb-4 lg:pb-14 rounded-lg">
          <Image src={Origin1} alt="Origin1" className="w-full" />
          <div className="px-[1px]">
            <p className="font-fredoka font-medium text-sm lg:text-base text-[#3D3D3D] mt-4 t">
              Created by GROK and named by Elon himself, Kekius Maximus is
              officially recognized as Elon Musk’s meme!
            </p>
          </div>
        </div>

        <div className="bg-[#B9E9BD] order-last lg:order-none border border-[#82BF87] max-w-[350px] max-h-[520px] px-2 pt-2 pb-4 rounded-lg">
          <Image src={Origin2} alt="Origin2" className="w-full" />
          <div className="px-[1px]">
            <p className="font-fredoka font-medium text-sm lg:text-base text-[#3D3D3D] mt-4 t">
              Generate an image of PEPE the frog emperor named ‘Kekius Maximus’
              looking over the people of Kekistani empire
            </p>
          </div>
          <div className="flex justify-center mt-4 lg:mt-20">
            <Link
              href="https://x.com/i/grok/share/Q9pr9ZfunW32wKHPouxqAtXlp"
              rel="noopener noreferrer"
              target="_blank"
              className="w-full"
            >
              <button className="bg-[#FFEB3B] hover:bg-yellow-300 text-[#2E7D32] lg:text-base font-fredoka font-semibold px-4 py-3 flex justify-center items-center border-[1.5px] border-b-[3px] border-[#2E7D32] rounded-lg shadow-[#2E7D32] shadow-md transition-all w-full">
                Generate Keikus Images
                <Image src={GenIcon} alt="Generate" className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-[#B9E9BD] border border-[#82BF87] max-w-[350px] max-h-[420px] px-2 pt-2 pb-4 lg:pb-14 rounded-lg">
          <Image src={Origin3} alt="Origin1" className="w-full" />
          <div className="px-[1px]">
            <p className="font-fredoka font-medium text-sm lg:text-base text-[#3D3D3D] mt-4">
              Kekius Maximus has captured the crypto world's attention, thanks
              to Elon Musk's playful tweets about PEPE the Frog Emperor, along
              with recognition from the official @PEPE token account and others
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
