import React, { ReactNode } from "react";

interface ThumbnailProps {
  children: ReactNode;
  overlayText: string;
  overlayDescription: string;
}

const Thumbnail = ({ overlayText,overlayDescription, children }: ThumbnailProps) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute cursor-pointer inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-lg">{overlayText}</p>
        <p className="text-sm">{overlayDescription}</p>
      </div>
    </div>
  );
};

export default Thumbnail;
