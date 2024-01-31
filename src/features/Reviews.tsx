export const Reviews = () => {
  return (
    <section className="container !mt-[200px] relative  overflow-hidden">
      <img
        src="/images/reviewsBg.png"
        alt=""
        className="absolute left-0 top-0 scale-150"
      />
      <div className="flex gap-[40px]">
        <div className="p-[74px] pt-[220px] relative ">
          <img
            src="/images/icons/review1Icon.png"
            className="absolute top-[100px] left-[30px]"
            alt=""
          />
          <p className="text-[#BDC4D1] text-[24px] font-[300] w-[470px]">
            Thanks to DevOptima, our team can focus more on{" "}
            <span className="font-[500] text-white">innovation</span> and less
            on operational challenges. Their{" "}
            <span className="font-[500] text-white">
              cloud management solutions
            </span>{" "}
            are top-notch.
          </p>
          <div className="mt-[20px] flex items-center gap-[12px]">
            <img src="/images/John.svg" alt="" />
            <div>
              <p className="text-white text-[18px]">John Smith</p>
              <p className="text-[#BDC4D1] text-[15px]">
                IT Director at Reflex
              </p>
            </div>
          </div>
        </div>
        <div className="p-[74px] pt-[220px] relative ">
          <img
            src="/images/icons/review2Icon.png"
            className="absolute top-[100px] left-[30px]"
            alt=""
          />
          <p className="text-[#BDC4D1] text-[24px] font-[300] w-[470px]">
            Thanks to DevOptima, our team can focus more on{" "}
            <span className="font-[500] text-white">innovation</span> and less
            on operational challenges. Their{" "}
            <span className="font-[500] text-white">
              cloud management solutions
            </span>{" "}
            are top-notch.
          </p>
          <div className="mt-[20px] flex items-center gap-[12px]">
            <img src="/images/Jane.svg" alt="" />
            <div>
              <p className="text-white text-[18px]">Jane Doe</p>
              <p className="text-[#BDC4D1] text-[15px]">Tech Lead at Dribble</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
