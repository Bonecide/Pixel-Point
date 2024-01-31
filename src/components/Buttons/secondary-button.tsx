import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className="bg-[#243BB9] text-white rounded-full py-[16px] px-[36px] right-[5px]  hover:bg-[#3F57DA] transition-all duration-300"
    >
      {children}
    </button>
  );
};
