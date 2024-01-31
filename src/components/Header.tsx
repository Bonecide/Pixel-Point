import { PrimaryButton } from "./Buttons/primary-button";

export const Header = () => {
  return (
    <header className="relative container">
      <nav className="absolute top-0 w-full flex p-[20px] px-0 items-center justify-between z-[999]">
        <img src="/images/logo.svg" alt="" />
        <div className="text-[16px] flex items-center gap-[50px]">
          <a
            href=""
            className="text-white hover:font-[500] transition-all cursor-pointer "
          >
            About us
          </a>
          <a
            href=""
            className="text-white hover:font-[500] transition-all cursor-pointer "
          >
            Services
          </a>
          <a
            href=""
            className="text-white hover:font-[500] transition-all cursor-pointer "
          >
            Why DevOptima{" "}
          </a>
        </div>
        <PrimaryButton>Get started</PrimaryButton>
      </nav>
    </header>
  );
};
