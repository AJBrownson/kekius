import Image from "next/image";
import Link from "next/link";
import Feed1 from "@/public/images/feed1.png";
import Feed2 from "@/public/images/feed2.png";
import Feed3 from "@/public/images/feed3.png";
import Feed4 from "@/public/images/feed4.png";
export default function MediaFeed() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:space-y-0 lg:flex-row lg:space-x-4 justify-between">

        <Link href="https://x.com/elonmusk/status/1867752745039458668" rel="noopener noreferrer" target="_blank">
        <div className="bg-[#A1DBA6] border border-b-4 border-[#82BF87] lg:max-w-[270px] lg:max-h-[240px] px-2 pt-2 pb-5 rounded-xl">
          <Image src={Feed1} alt="Origin1" className="" />
          <div>
            <p className="font-fredoka font-medium text-sm lg:text-sm text-[#000] mt-4">
              Elon tweets Kekius Maximus
            </p>
          </div>
        </div>
        </Link>

        <Link href="https://x.com/elonmusk/status/1867752745039458668" rel="noopener noreferrer" target="_blank">
        <div className="bg-[#A1DBA6] border border-b-4  border-[#82BF87] lg:max-w-[270px] lg:max-h-[240px] px-2 pt-2 pb-5 rounded-xl">
          <Image src={Feed2} alt="Origin1" className="" />
          <div>
            <p className="font-fredoka font-medium text-sm lg:text-sm text-[#000] mt-4">
            Pepecoin Official tweeted out “Keki...
            </p>
          </div>
        </div>
        </Link>

        <Link href="https://x.com/cyb3rgam3r420/status/1873129550017880206" rel="noopener noreferrer" target="_blank">
        <div className="bg-[#A1DBA6] border border-b-4 border-[#82BF87] lg:max-w-[270px] lg:max-h-[240px] px-2 pt-2 pb-5 rounded-xl">
          <Image src={Feed3} alt="Origin1" className="" />
          <div>
            <p className="font-fredoka font-medium text-sm lg:text-sm text-[#000] mt-4">
            Elon has made his Character nam...
            </p>
          </div>
        </div>
        </Link>

        <Link href="https://x.com/elonmusk/status/1873388017458778627" rel="noopener noreferrer" target="_blank">
        <div className="bg-[#A1DBA6] border border-b-4 border-[#82BF87] lg:max-w-[270px] lg:max-h-[240px] px-2 pt-2 pb-5 rounded-xl">
          <Image src={Feed4} alt="Origin1" className="" />
          <div>
            <p className="font-fredoka font-medium text-sm lg:text-sm text-[#000] mt-4">
            Elon died on his HC PoE character...
            </p>
          </div>
        </div>
        </Link>
      </div>
    </>
  );
}
