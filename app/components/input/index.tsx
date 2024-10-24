import React from "react";

interface InputProps {
  placeholder: string;
}

const Input = ({ placeholder }: InputProps) => {
  return (
    <input
      type="text"
      className="w-full outline-none border-[1px] rounded-lg py-5 px-10 bg-[#141414] border-white/15 text-white/15"
      placeholder={placeholder}
    />
  );
};

export default Input;
