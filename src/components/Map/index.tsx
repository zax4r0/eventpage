/* eslint-disable @next/next/no-img-element */

function Map() {
  return (
    <>
      <div className=" flex flex-row items-start justify-between  w-full">
        <div
          className="flex flex-col bg-bluegray_900 items-center justify-start
        py-[10px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] rounded-radius16 w-full"
        >
          <div className="relative flex-wrap lg:h-[165px] h-[188px] xl:h-[189px] 2xl:h-[212px] 3xl:h-[254px] mx-[auto] w-[96%]">
            <img
              src="/assets/images/img_rectangle14.webp"
              className="absolute lg:h-[165px] h-[188px] xl:h-[189px] 2xl:h-[212px] 3xl:h-[254px] inset-[0] object-cover rounded-radius10 w-full"
              alt="Rectangle14"
              loading="lazy"
            />
            <img
              src="/assets/images/img_iconlyboldloc_1.svg"
              className="absolute lg:h-[29px] h-[32.23px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[38%] my-[auto] object-contain w-[6%]"
              alt="IconlyBoldLoc"
              loading="lazy"
            />
          </div>
          <h1 className="font-bold mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] mx-[auto] text-center lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 text-white_A700">{`Cologne, Germany`}</h1>
        </div>
      </div>
    </>
  );
}
export default Map;
