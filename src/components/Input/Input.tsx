import { FC, InputHTMLAttributes } from "react";
import { StatusType } from "../../features/Hero";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onSubmit: () => void;
  setValue: (text: string) => void;
  status: StatusType;
  error: string;
}

export const Input: FC<InputProps> = ({
  onSubmit,
  setValue,
  error,
  status,
  ...props
}) => {
  const iconsByStatus: Record<StatusType, JSX.Element> = {
    initial: (
      <button
        onClick={onSubmit}
        className="bg-[#243BB9]  text-white rounded-full  h-[80%] absolute top-[5px] right-[5px] w-[150px]  hover:bg-[#3F57DA] transition-all duration-300"
      >
        Free trial
      </button>
    ),
    loading: (
      <div className=" h-[80%] absolute bg-[#243BB9] rounded-full w-[50px] flex items-center justify-center top-[5px] right-[5px]">
        <span className="loader"></span>
      </div>
    ),
    success: (
      <div className=" h-[100%] absolute top-[5px] right-[5px]">
        <img className="h-[80%]" src="/images/successButton.svg" alt="" />
      </div>
    ),
    error: (
      <div className=" h-[100%] absolute top-[5px] right-[5px]">
        <img className="h-[80%]" src="/images/errorButton.svg" alt="" />
      </div>
    ),
  };
  return (
    <>
      <div className="wrapper w-[80%]  relative">
        <input
          onChange={(e) => setValue(e.target.value)}
          {...props}
          className="gradientInput border border-[#243BB9] rounded-full py-[18px] px-[24px] w-full outline-none text-white"
        />
        {iconsByStatus[status]}
        {error && (
          <p className="text-[#F04242] text-[16px] absolute left-[30px] bottom-[-30px] ">
            {error}
          </p>
        )}
      </div>
    </>
  );
};
