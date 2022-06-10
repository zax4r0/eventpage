import Button from '@/components/ui/Button';
import React from 'react';

export function EevntTime() {
  return (
    <div className=" flex flex-row items-start justify-between lg:mt-[12px] mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-full">
      <div className=" flex flex-row items-center justify-between lg:mt-[24px] mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] w-full">
        <div className="flex flex-col items-start w-[42%]">
          <h1 className="font-medium text-bluegray_100 lg:text-fs12 text-fs14 2xl:text-fs15 3xl:text-fs18 text-left">
            {`Ticket starts at`}
          </h1>
          <div className="flex flex-row  items-end justify-start mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] lg:mt-[5px] mt-[6px] 3xl:mt-[8px] w-[48%]">
            <h1 className="font-bold lg:text-fs19 text-fs22 2xl:text-fs24 3xl:text-fs29 text-left text-white_A700">
              {`15,00`}
            </h1>
            <h1
              className="
              font-semibold lg:mb-[1px] mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] ml-[9px] lg:mt-[10px] mt-[12px] 2xl:mt-[13px]
              3xl:mt-[16px] lg:text-fs10 text-fs12 2xl:text-fs13 3xl:text-fs16 text-left text-white_A700"
            >
              {`EUR`}
            </h1>
          </div>
        </div>
        <Button
          className="
          bg-white_A700 font-bold my-[3.5px] 2xl:my-[3px] xl:my-[3px] lg:my-[3px] 3xl:my-[4px] lg:py-[12px]
          py-[14.375px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rounded-radius14 shadow-bs text-black_900
          text-center lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 w-[53%]"
        >
          {`Buy a Ticket`}
        </Button>
      </div>
    </div>
  );
}
