const EventDetails = () => {
  return (
    <>
      <div className="grid gap-[0] min-h-[auto] lg:mt-[28px] mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mx-[auto] w-[75%]">
        <div className=" flex flex-row items-center justify-between lg:my-[6px] my-[7px] 3xl:my-[9px] w-full">
          {/* lollypop */}
          <div className=" flex flex-row items-center justify-start w-[10%]">
            <h1
              className="
            font-bold font-roboto my-[1px] text-black_900 lg:text-fs17 text-fs20 2xl:text-fs22 3xl:text-fs27 text-left"
            >
              {`📍`}
            </h1>
            <strong className="font-normal font-nunito lg:ml-[5px] ml-[6px] 3xl:ml-[9px] not-italic lg:text-fs14 text-fs10 2xl:text-fs18 3xl:text-fs21 text-left text-white_A700 ">
              Lorem Ipsum
            </strong>
          </div>
          {/* date */}
          <div className="flex flex-row items-center justify-start w-[10%]">
            <h1 className="font-bold font-roboto my-[1px] text-black_900 lg:text-fs17 text-fs20 2xl:text-fs22 3xl:text-fs27 text-left">{`📅`}</h1>
            <h1
              className="
              font-normal font-nunito lg:ml-[5px] ml-[6px] 3xl:ml-[8px] not-italic lg:text-fs14 text-fs10
              2xl:text-fs18 3xl:text-fs21 text-left text-white_A700"
            >
              {`10th May`}
            </h1>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between lg:my-[6px] my-[7px] 3xl:my-[9px] w-full">
          {/* dance */}
          <div className="flex flex-row items-center justify-start w-[10%]">
            <p className="font-bold font-roboto my-[1px] text-black_900 lg:text-fs17 text-fs20 2xl:text-fs22 3xl:text-fs27 text-left">{`🎙️`}</p>
            <p className="font-normal font-nunito lg:ml-[5px] ml-[5px] 3xl:ml-[8px] not-italic lg:text-fs14 text-fs10 2xl:text-fs18 3xl:text-fs21 text-left text-white_A700">{`Dance & Arts`}</p>
          </div>
          {/* time */}
          <div className="flex flex-row items-center justify-start w-[10%]">
            <p className="font-bold font-roboto my-[1px] text-black_900 lg:text-fs17 text-fs20 2xl:text-fs22 3xl:text-fs27 text-left">{`🕒`}</p>
            <p className="font-normal font-nunito lg:ml-[5px] ml-[5px] 3xl:ml-[8px] not-italic lg:text-fs14 text-fs10 2xl:text-fs18 3xl:text-fs21 text-left text-white_A700">{`07:00 PM`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
