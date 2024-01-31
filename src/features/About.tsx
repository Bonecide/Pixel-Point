const data = [
  {
    title: "DevOps transformation",
    description: "Reshaping businesses with DevOps expertise.",
    img: "/images/icons/transformation.svg",
  },
  {
    title: "Efficient operations",
    description: "Streamline processes for productivity gains.",
    img: "/images/icons/increase.svg",
  },
  {
    title: "CI/CD implementation",
    description: "Seamless software delivery pipeline.",
    img: "/images/icons/cicd.svg",
  },
  {
    title: "Automation mastery",
    description: "Unlock full automation potential.",
    img: "/images/icons/loop.svg",
  },
];

export const About = () => {
  return (
    <section className="container !mt-[200px]">
      <div className="flex items-center justify-end relative ">
        <img
          src="/images/aboutUsImage.png"
          className="absolute left-[-250px]"
          alt=""
        />
        <div className="w-[590px]">
          <div>
            <h2 className="text-white text-[48px]">What is DevOptima?</h2>
            <p className="font-300 text-[#BDC4D1] text-[20px]">
              At DevOptima, we are a team of passionate DevOps experts committed
              to transforming the way businesses approach software development
              and operations.
            </p>
          </div>
          <div className="flex items-start gap-x-[80px] gap-y-[40px] flex-wrap">
            {data.map((info) => (
              <div key={info.title} className={`w-[250px] relative pt-[80px] `}>
                <img
                  src={info.img}
                  alt=""
                  className="absolute top-0 left-[-30px]"
                />
                <h4 className="text-[24px] text-white font-[500]">
                  {info.title}
                </h4>
                <p className="text-[#BDC4D1] text-[16px] font-[300]">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
