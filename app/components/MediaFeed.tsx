import Image from "next/image";
import Feed1 from "@/public/images/feed1.png";
import Feed2 from "@/public/images/feed2.png";
import Feed3 from "@/public/images/feed3.png";
import Feed4 from "@/public/images/feed4.png";
export default function MediaFeed() {
  return (
    <>
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 justify-between">

        <div className="bg-[#A1DBA6] border border-b-4 border-[#82BF87] lg:max-w-[270px] lg:max-h-[240px] px-2 pt-2 pb-5 rounded-xl">
          <Image src={Feed1} alt="Origin1" className="" />
          <div>
            <p className="font-fredoka font-medium text-sm lg:text-sm text-[#000] mt-4">
              Elon tweets Kekius Maximus
            </p>
          </div>
        </div>

        <div className="bg-[#A1DBA6] border border-b-4  border-[#82BF87] lg:max-w-[270px] lg:max-h-[240px] px-2 pt-2 pb-5 rounded-xl">
          <Image src={Feed2} alt="Origin1" className="" />
          <div>
            <p className="font-fredoka font-medium text-sm lg:text-sm text-[#000] mt-4">
            Pepecoin Official tweeted out “Keki...
            </p>
          </div>
        </div>

        <div className="bg-[#A1DBA6] border border-b-4 border-[#82BF87] lg:max-w-[270px] lg:max-h-[240px] px-2 pt-2 pb-5 rounded-xl">
          <Image src={Feed3} alt="Origin1" className="" />
          <div>
            <p className="font-fredoka font-medium text-sm lg:text-sm text-[#000] mt-4">
            Elon has made his Character nam...
            </p>
          </div>
        </div>

        <div className="bg-[#A1DBA6] border border-b-4 border-[#82BF87] lg:max-w-[270px] lg:max-h-[240px] px-2 pt-2 pb-5 rounded-xl">
          <Image src={Feed4} alt="Origin1" className="" />
          <div>
            <p className="font-fredoka font-medium text-sm lg:text-sm text-[#000] mt-4">
            Elon died on his HC PoE character...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
