import React from "react";
import Image from "next/image";

interface StepBadgeProps {
  step: string;
  label: string;
  descriptionPrimary: string;
  descriptionSecondary: string;
  hideCaret?: boolean;
}

const StepBadge = ({
  step,
  label,
  descriptionPrimary,
  descriptionSecondary,
  hideCaret = false,
}: StepBadgeProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="bml:bg-black/20 bg-[#141414] bml:rounded-full rounded-2xl py-6 border-[1px] border-white/20 w-full h-24 flex gap-4">
        <div className="basis-1/4 text-start pl-7">
          <h1 className="text-[#FF7E7E] bml:text-base text-xs font-normal leading-5 uppercase">
            {step}
          </h1>
          <span className="bml:text-xl text-sm">{label}</span>
        </div>
        <div className="text-[#AAAAAA] text-sm bml:text-base leading-6 text-start col-span-3">
          <p>{descriptionPrimary}</p>
          <p>{descriptionSecondary}</p>
        </div>
      </div>
      {!hideCaret && (
        <Image
          className=""
          src="/images/caret-down.svg"
          alt="caret"
          width="29"
          height="13"
        />
      )}
    </div>
  );
};

export default StepBadge;
