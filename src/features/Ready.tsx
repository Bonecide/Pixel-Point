import { PrimaryButton } from "../components/Buttons/primary-button";
import { SecondaryButton } from "../components/Buttons/secondary-button";

export const Ready = () => {
  return (
    <section className="container flex flex-col items-center !mt-[200px]">
      <h3 className="gradientTextBottom text-[48px] ">
        Ready to elevate your DevOps strategy?
      </h3>
      <p className="text-center text-[20px] text-[#BDC4D1] mt-[20px]">
        Join the multitude of companies benefiting from optimized DevOps
        practices. <br /> Contact us to discover how DevOptima can help your
        business.
      </p>
      <div className="mt-[40px] flex gap-[18px]">
        <SecondaryButton>Contact us</SecondaryButton>
        <PrimaryButton>Try for free</PrimaryButton>
      </div>
    </section>
  );
};
