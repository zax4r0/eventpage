/* eslint-disable @next/next/no-img-element */
import { Navigation, Swiper, SwiperSlide } from '@/components/ui/slider';
import Image from 'next/image';
import React from 'react';
import { Lazy } from 'swiper';
import { breakpoints, images } from '@/lib/constants';
function Slides() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <>
      <div className="select-none flex flex-row items-start  lg:mt-[42px] mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-full">
        <img
          ref={navigationPrevRef}
          src="/assets/images/img_frame19199_1.svg"
          alt="Frame19199"
          loading="lazy"
          className="
          cursor-pointer invisible  md:visible lg:h-[35px] h-[40px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mb-[61px] mb-[70px] 2xl:mb-[78px]
          3xl:mb-[94px] xs:ml-4 xs:mb-1 ml-[6px] sm:ml-[9px] md:ml-[69px] 2xl:ml-[114px] 3xl:ml-[137px] 4xl:ml-[239px] lg:ml-[89px]
          xs:mt-[64px] mt-[89px] 2xl:mt-[127px]
          3xl:mt-[152px] lg:mt-[98px] object-contain rounded-radius12 lg:w-[35px] w-[40px] 2xl:w-[45px]
          3xl:w-[54px] "
        />
        <div className="flex flex-col items-start justify-start lg:ml-[15px] xs:ml-[-3px] ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] w-[75%]">
          <h1
            className="
            font-bold mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] lg:text-fs17 text-fs20 2xl:text-fs22 3xl:text-fs27
            text-left text-white_A700"
          >
            {`Event Images`}
          </h1>

          <div className=" flex flex-col lg:mt-[14px] mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-full">
            <div className=" flex flex-row items-center justify-between rounded-radius10 w-full ml-1">
              <Swiper
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                modules={[Navigation, Lazy]}
                breakpoints={breakpoints}
                // centeredSlides={true}
                grabCursor={true}
                className="mySwiper"
              >
                {images.map((image) => (
                  <SwiperSlide key={image.id}>
                    <div className="xs:ml-[-0.75rem] ml-2 h-full w-full md:h-30 md:w-30 xs:w-40 rounded-radius10 ">
                      <Image
                        src={image.path}
                        alt="Rectangle11"
                        layout="responsive"
                        height={375}
                        width={375}
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <img
          ref={navigationNextRef}
          src="/assets/images/img_frame29229_1.svg"
          alt="Frame29229"
          loading="lazy"
          className="
          cursor-pointer invisible  md:visible lg:h-[35px] h-[40px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mb-[61px] mb-[70px] 2xl:mb-[78px]
          3xl:mb-[94px] lg:ml-[15px] xs:ml-[13px]  ml-[15px] sm:ml-[40px] md:ml-[10px] 2xl:ml-[20px] 3xl:ml-[24px] xs:mt-[64px]
          mt-[89px] 2xl:mt-[127px] 3xl:mt-[152px] lg:mt-[98px] object-contain rounded-radius12 lg:w-[35px] w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
        />
      </div>
    </>
  );
}

export default Slides;
