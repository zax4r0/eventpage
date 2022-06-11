/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react';
import Image from 'next/image';
import I2 from '@/public/assets/images/img_public_1.svg';

const Organiser = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>
        {/* line */}
        <div className="bg-white_A700 h-[2px] opacity-op1 w-full" />
        <div className=" flex flex-row items-start justify-between lg:mt-[12px] mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-full">
          <div className="flex flex-row items-center justify-between w-[62%]">
            <img
              src="/assets/images/img_ellipse41.webp"
              className="lg:h-[56px] h-[64px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] object-contain rounded-radius50 w-[64px]"
              alt="Ellipse41"
              loading="lazy"
            />
            <div className="flex flex-col items-start 3xl:my-[10px] lg:my-[6px] my-[7.5px] xl:my-[7px] 2xl:my-[8px] w-[74%]">
              <div className="flex flex-col w-full">
                <h1 className="font-bold mx-[auto] text-center lg:text-fs17 text-fs20 2xl:text-fs22 3xl:text-fs27 text-white_A700">{`Event Organiser name`}</h1>
              </div>
              <h1 className="font-semibold mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] text-bluegray_100 text-center lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21">{`12 events`}</h1>
            </div>
          </div>
          <Image
            src={I2}
            className="lg:h-[39px] h-[44px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] lg:mb-[17px] mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] object-contain rounded-radius8 lg:w-[38px] w-[44px] 2xl:w-[49px] 3xl:w-[59px]"
            alt="public"
            loading="lazy"
          />
        </div>
        {/* line */}
        <div className="bg-white_A700 h-[2px] opacity-op1 w-full md:mt-1 lg:mt-9" />
        {/* event timings */}
        {children}
      </div>
    </>
  );
};

export default Organiser;
