import React from "react";
import Image from "next/image";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

const MenuSection = React.forwardRef<HTMLInputElement, IProps>(
  ({ children, ...props }, ref) => {
    return (
      <div className="flex flex-row justify-center items-center h-screen gap-x-2 select-none">
        <div className="flex flex-col items-center gap-y-4 font-bold text-white">
          <Image
            src="/img/home/game-title.svg"
            alt="game-title"
            width={549}
            height={227}
          />
          {children}
        </div>
        <div>
          <Image
            src="/img/home/logo.svg"
            alt="game-title"
            width={522}
            height={522}
          />
        </div>
      </div>
    );
  }
);

MenuSection.displayName = "MenuSection";
export default MenuSection;
