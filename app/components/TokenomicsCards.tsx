import Image from "next/image";
import Token1 from "@/public/images/token1.png";
import Token2 from "@/public/images/token2.png";
import Token3 from "@/public/images/token3.png";
import Token4 from "@/public/images/token4.png";
 // flex-col lg:flex-row lg:space-x-3 lg:mt-14

//  w-full max-w-[140px] max-h-[230px]

export default function TokenomicsCards() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:flex lg:flex-row lg:space-x-3 lg:mt-14">
        <div className="bg-[#3F5F43] lg:max-w-[140px] lg:max-h-[230px] px-2 pt-2 pb-5 rounded-xl">
          <Image src={Token1} alt="Origin1" className="" />
          <div className="text-center">
            <p className="font-fredoka font-medium text-sm lg:text-base text-[#FFFFFF] mt-4">
              Taxes
            </p>
            <p className="font-luckiestGuy font-medium text-sm lg:text-xl text-[#FFFFFF]">
              0/0
            </p>
          </div>
        </div>
        
        <div className="bg-[#3F5F43] lg:max-w-[140px] lg:max-h-[230px] px-2 pt-2 pb-5 rounded-xl">
          <Image src={Token2} alt="Origin1" className="" />
          <div className="text-center">
            <p className="font-fredoka font-medium text-sm lg:text-base text-[#FFFFFF] mt-4">
             Contract
            </p>
            <p className="font-luckiestGuy font-medium text-sm lg:text-xl text-[#FFFFFF]">
              Revoked
            </p>
          </div>
        </div>

        <div className="bg-[#3F5F43] lg:max-w-[140px] lg:max-h-[230px] px-2 pt-2 pb-5 rounded-xl">
          <Image src={Token3} alt="Origin1" className="" />
          <div className="text-center">
            <p className="font-fredoka font-medium text-sm lg:text-base text-[#FFFFFF] mt-4">
              Liquidity
            </p>
            <p className="font-luckiestGuy font-medium text-sm lg:text-xl text-[#FFFFFF]">
             Burned
            </p>
          </div>
        </div>

        <div className="bg-[#3F5F43] lg:max-w-[140px] lg:max-h-[230px] px-2 pt-2 pb-5 rounded-xl">
          <Image src={Token4} alt="Origin1" className="" />
          <div className="text-center">
            <p className="font-fredoka font-medium text-sm lg:text-base text-[#FFFFFF] mt-4">
              Total supply
            </p>
            <p className="font-luckiestGuy font-medium text-sm lg:text-xl text-[#FFFFFF]">
              1,000,000
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
