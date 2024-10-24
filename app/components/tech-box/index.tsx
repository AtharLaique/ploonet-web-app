import React from "react";

interface TechBoxProps {
  label: string;
  hint: string;
}

const TechBox = ({label, hint}:TechBoxProps) => {
  return (
    <div className="bg-custom-gradient bml:w-[211px] w-[84px] bml:h-[211px] h-[84px] rounded-full p-[1px]">
      <div className="bg-[#141414] w-full h-full rounded-full flex flex-col justify-center items-center">
        <p className="bg-custom-gradient inline-block text-transparent bg-clip-text bml:text-[32px] text-base text-center bml:leading-9 leading-4">
          {label}
        </p>
        <span className="bml:inline-block hidden bg-custom-gradient text-transparent bg-clip-text font-medium opacity-60 text-2xl">
          {hint}
        </span>
      </div>
    </div>
  );
};

export default TechBox;
