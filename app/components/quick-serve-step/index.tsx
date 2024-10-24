import React, { ReactNode } from "react";

interface QuickServeStepProps {
  label: string;
  description: string | ReactNode;
  children: ReactNode;
}

const QuickServeStep = ({
  children,
  label,
  description,
}: QuickServeStepProps) => {
  return (
    <div className="flex justify-start bml:gap-12 gap-5">
      {children}
      <div className="border-b-[1px] border-white/50 w-full flex flex-col justify-center gap-3">
        <p className="text-2xl leading-8 text-start">{label}</p>
        <div className="text-[#AAAAAA] bml:text-base text-xs leading-6 text-start">
          {description}
        </div>
      </div>
    </div>
  );
};

export default QuickServeStep;
