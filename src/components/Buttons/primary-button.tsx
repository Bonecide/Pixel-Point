import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button
      className="py-[16px] px-[36px] text-white bg-[#243BB933] border border-[#243BB9] rounded-[40px] hover:bg-[#243BB980] hover:border-[#3F57DA] transition-all duration-300  "
      {...props}
    >
      {children}
    </button>
  );
};
