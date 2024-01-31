export const Solutions = () => {
  return (
    <section className="container !mt-[200px]">
      <h2 className="text-center text-white text-[48px] leading-[54px]">
        Innovative solutions <br /> for operational excellence
      </h2>
      <p className="text-center mt-[20px] text-[#BDC4D1] text-[20px]">
        Tailored DevOps expertise driving your business momentum. <br />
        Personalized solutions for growth and evolution.
      </p>

      <div className="flex justify-center gap-[40px] relative items-start mt-[56px]">
        <img src="/images/solutionBlind.png" className="absolute top-[-20px] z-[-1]" alt="" />
        <div className="card">
          <img src="/images/newVersion.png" alt="" />

          <div className="flex flex-col p-[32px] pt-0 w-[350px]">
            <h4 className="text-white text-[20px] font-[500]">
              Continuous Integration & Deployment
            </h4>
            <p className="text-[#BDC4D1] text-[16px] mt-[12px]">
              Streamline your development process with our advanced CI/CD
              solutions, ensuring faster and more reliable code deployment.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="/images/clouds.png" alt="" />

          <div className="flex flex-col p-[32px] pt-0 w-[350px]">
            <h4 className="text-white text-[20px] font-[500]">
              Cloud Solutions & Infrastructure Management
            </h4>
            <p className="text-[#BDC4D1] text-[16px] mt-[12px]">
              Leverage the cloud for scalability and efficiency. We provide
              comprehensive cloud infrastructure management and optimization
              services.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="/images/tests.png" alt="" />

          <div className="flex flex-col p-[32px] pt-0 w-[350px]">
            <h4 className="text-white text-[20px] font-[500]">
              Continuous Integration & Deployment
            </h4>
            <p className="text-[#BDC4D1] text-[16px] mt-[12px]">
              Streamline your development process with our advanced CI/CD
              solutions, ensuring faster and more reliable code deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
