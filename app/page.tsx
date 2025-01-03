/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Hero from "@/public/images/shadows.png";
import HeroMobile from "@/public/images/shadows-mobile.png"
import Abstract from "@/public/images/abstract.png"
import AbstractStory from "@/public/images/abstract-story.png"
import String from "@/public/images/vector-string.png"
import DexscrLogo from "@/public/icons/dexscreener-black.png"
import DextLogo from "@/public/icons/dextools.svg"
import CopyAddressButton from "./components/CopyAddressButton"
import OriginCards from "./components/OriginCards";
import TokenomicsCards from "./components/TokenomicsCards";
import TokenomicsHeroImg from "@/public/images/tokenomics-hero-img.png"
import VectorUp from "@/public/icons/Vector-up.png"
import MediaFeed from "./components/MediaFeed";
import TextCarousel from "./components/TextCarousel";

export default function Home() {
  return (
    <>
      {/* hero section  */}
      <section className="relative -z-20 pt-32 lg:pt-40">
        <div className="px-6 lg:px-0 flex flex-col justify-center text-center">
          <h1 className="text-7xl font-luckiestGuy lg:text-[80px] text-[#165819]">
            Kiekus Maximus
          </h1>
          <h1 className="font-luckiestGuy text-5xl lg:text-[80px] text-[#3D3D3D]">
            Elon's Pepe
          </h1>
        </div>

        <div className="flex items-center justify-center -mt-10 lg:-mt-44 ">
          <Image src={Hero} alt="Hero" className="hidden lg:block lg:max-w-[1200px] lg:mx-auto" />
          <Image src={HeroMobile} alt="Hero" className="lg:hidden" />
        </div>

        <div className="px-6 lg:px-0 mt-2 lg:mt-5">
          <p className="font-fredoka font-medium text-center text-lg lg:text-xl text-[#3D3D3D] max-w-[660px] mx-auto">
            Kekius Maximus, also known as “Pepe the frog Emperor,” is the
            sovereign ruler of the mythical Kekistani Empire, a realm that
            exists primarily in the digital universe of memes.
          </p>

          <div className="flex justify-center items-center space-x-4 lg:space-x-8 mt-5 lg:mt-10">
            <button className="bg-[#FFEB3B] max-w-[200px] text-[#2E7D32] text-sm lg:text-base shadow-dextoolShadow border-[1px] border-b-2 border-[#2E7D32] font-fredoka font-semibold px-8 h-14 py-3 flex items-center rounded-lg">
              DEXTOOLS
              <Image
                src={DextLogo}
                alt="Arrow Right"
                className="w-5 h-5 ml-2"
              />
            </button>

            <button className="bg-[#FFFFFF] w-[180px] flex justify-center text-[#000000] text-sm lg:text-base shadow-dexscreenerShadow border-[1px] border-b-2 border-[#000000] font-fredoka font-semibold px-8 h-14 py-3 items-center rounded-lg">
              DEXSCREENER
              <Image
                src={DexscrLogo}
                alt="Arrow Right"
                className="w-6 h-6 ml-2 rounded-full"
              />
            </button>
          </div>
        </div>

        {/* floating images */}
        <div className="hidden lg:block">
          <Image src={Abstract} alt="" className="w-24 h-24 absolute top-28 right-40"/>
          <Image src={Abstract} alt="" className="w-24 h-24 absolute top-60 left-32"/>
          <Image src={Abstract} alt="" className="w-24 h-24 absolute top-96 right-72"/>
          <Image src={Abstract} alt="" className="w-24 h-24 absolute bottom-96 left-60"/>
          <Image src={Abstract} alt="" className="w-24 h-24 absolute bottom-80 right-0"/>
          <Image src={Abstract} alt="" className="w-24 h-24 absolute bottom-24 right-40"/>
        </div>
      </section>

      {/* carousel section */}
      <section className="mt-20">
        <TextCarousel />
      </section>

      {/* floating string */}
      <section>

      </section>

      {/* story section */}
      <section className="px-6 lg:px-0 mt-20 flex flex-col justify-center items-center">
        <Image src={AbstractStory} alt="" className="w-96 h-60 lg:h-80 object-contain -mt-14 -mb-28 -z-30" />
        <Image src={String} alt="" className="absolute -translate-x-[26rem] -translate-y-80 w-96 h-[20.5rem] object-contain -mt-14" />

        <div className="container flex flex-col items-center justify-center py-7 lg:py-14 px-4 lg:px-10 rounded-lg lg:rounded-[2rem] bg-[#E0CDA9] max-w-[800px]">
          <h1 className="font-luckiestGuy text-[#3D3D3D] text-2xl lg:text-4xl text-center mb-5">
            STORY
          </h1>
          <p className="max-w-[826px] text-center font-fredoka font-medium text-sm lg:text-lg text-[#3D3D3D]">
            Kekius Maximus, also known as “Pepe the frog Emperor,” is the
            sovereign ruler of the mythical Kekistani Empire, a realm that
            exists primarily in the digital universe of memes. Picture this:
            Pepe the Frog, that once innocent cartoon character, has evolved
            into a majestic emperor,crowned with the might of internet humor,
            reigning over a land where memes dictate law and laughter is the
            currency. His chariot? Golden, of course, pulled by fellow Pepe
            frogs because why not?
          </p>

          <h1 className="font-luckiestGuy text-[#3D3D3D] text-2xl lg:text-4xl my-5 lg:mt-10 text-center">
            THE LEGEND
          </h1>
          <p className="max-w-[826px] text-center font-fredoka font-medium text-sm lg:text-lg text-[#3D3D3D]">
            Kekius Maximus, also known as “Pepe the frog Emperor,” is the
            sovereign ruler of the mythical Kekistani Empire, a realm that
            exists primarily in the digital universe of memes. Picture this:
            Pepe the Frog, that once innocent cartoon character, has evolved
            into a majestic emperor,crowned with the might of internet humor,
            reigning over a land where memes dictate law and laughter is the
            currency. His chariot? Golden, of course, pulled by fellow Pepe
            frogs because why not?
          </p>

          <div className="mt-8">
            <CopyAddressButton />
          </div>
        </div>
      </section>

        {/* floating image absolute -translate-x-[32rem] -translate-y-64 lg:w-[500px] lg:h-80*/}
        <div>
        <Image src={AbstractStory} alt="" className="-mt-40 lg:-mt-64 lg:ml-32 hidden lg:block lg:w-[500px] lg:h-80" />
        </div>

        

      {/* origin section */}
      <section className="mt-20 bg-[#8FE896] px-6 lg:px-24 py-7 lg:py-12">
        <h1 className="font-luckiestGuy text-[#3D3D3D] text-3xl lg:text-7xl mb-7 lg:mb-20 text-center">
          THE ORIGIN
        </h1>
        <OriginCards />
      </section>

      {/* tokenomics section */}
      <section className="px-6 lg:pr-0 lg:pl-24">
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center">
          <div>
          <h1 className="font-luckiestGuy text-[#3D3D3D] text-3xl lg:text-6xl mt-5 mb-3 lg:mt-10 text-center lg:text-left">
              TOKENOMICS
            </h1>
            <p className="font-fredoka text-[#3D3D3D] font-medium text-xl max-w-[828px] mb-5 text-center lg:text-left">
              Never forget about contract details!
            </p>

            <span>
            <TokenomicsCards />
            </span>
          </div>

          <div>
          <Image src={TokenomicsHeroImg} alt="" className="hidden lg:block max-w-[500px]" />
          </div>
        </div>
      </section>

      {/* media feed section */}
      <section className="mt-20 px-6 lg:px-24 lg:pb-40">
        <Image src={VectorUp} alt="" />
        <h1 className="font-luckiestGuy text-[#3D3D3D] text-3xl lg:text-6xl mt-5 lg:mt-0 mb-5 text-center">
          MEDIA FEED
        </h1>
        <p className="mb-10 font-fredoka text-[#3D3D3D] font-medium text-sm lg:text-xl text-center max-w-[828px] mx-auto">
          Explore the latest updates, trends, and posts all in one place.
          Discover content tailored to you, keeping you connected and informed
          effortlessly.
        </p>

        <MediaFeed />
      </section>
    </>
  );
}
