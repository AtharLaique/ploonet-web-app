import React from "react";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button
      className="outline-none bg-[#FF6D51] rounded-lg py-4 px-7 cursor-pointer hover:opacity-80 text-xl"
    >
      {label}
    </button>
  );
};

export default Button;
