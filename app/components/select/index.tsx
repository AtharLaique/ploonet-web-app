"use client";
import { useState } from "react";
import Image from "next/image";

interface Option {
  label: string;
  value: string;
}

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);

  const options: Option[] = [
    { label: "영상 유형 선택", value: "영상 유형 선택" },
    { label: "영상 유형 선택", value: "영상 유형 선택" },
    { label: "영상 유형 선택", value: "영상 유형 선택" },
    { label: "영상 유형 선택", value: "영상 유형 선택" },
    { label: "영상 유형 선택", value: "영상 유형 선택" }
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Trigger */}
      <div
        onClick={toggleDropdown}
        className="flex items-center justify-between cursor-pointer outline-none border-[1px] rounded-lg py-5 px-10 bg-[#141414] border-white/15 text-white/75"
      >
        <span>{selected ? selected.label : "영상 유형 선택"}</span>
        {isOpen ? (
          <Image
            className="rotate-180"
            src="/images/arrow-down.svg"
            alt="caret"
            width="20"
            height="10"
          />
        ) : (
          <Image
            className=""
            src="/images/arrow-down.svg"
            alt="caret"
            width="20"
            height="10"
          />
        )}
      </div>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute mt-1 w-full bg-[#141414] border-white/15 text-white/75 shadow-lg rounded-lg z-10 border-[1px] border-[#FF6D51] max-h-44 overflow-y-auto">
          <ul className="py-2 px-5">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 cursor-pointer "
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
