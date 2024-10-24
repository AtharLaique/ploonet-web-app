import React from "react";
import Image from "next/image";
import TechBox from "@/app/components/tech-box";

const StudioSection = () => {
  return (
    <section className="bml:pt-[157px] pt-14 pb-14 flex flex-col justify-start items-center">
      <h1 className="bg-custom-gradient bml:inline-block hidden text-transparent bg-clip-text text-2xl mb-10 ">
        영상 제작소
      </h1> 
      <div className="bml:text-[44px] text-2xl">
        <span className="font-extralight opacity-85 bml:inline block text-center">당장 내일</span>
        <span>‘고품질 맞춤 영상’</span>
        <span className="font-extralight opacity-85">을 받아보세요.</span>
      </div>
      <div className="bml:py-14 py-7 flex gap-0">
        <TechBox label="Fast" hint="X2" />
        <TechBox label="Quality" hint="A++" />
        <TechBox label="LOW PRICE" hint="1/2" />
        <TechBox label="HIGH TECH" hint="Gen AI" />
      </div>
      <h3 className="bml:text-[32px] text-center text-lg leading-[44px] mb-5">
        AI VIDEO ON YOUR DEMAND
      </h3>
      <div className="max-w-[662px] text-center flex flex-col gap-5 justify-center items-center bml:text-xl text-base leading-8 opacity-60 bml:px-0 px-5">
        <p>
          가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI
          기술에 영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는
          보장된 영상을 만듭니다.
        </p>
        <p>
          가격은 절반으로, 속도는 두배로, 품질은 A++!
          <br /> 기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등 <br />{" "}
          당신이 필요한 '그 영상'을 플루닛 영상제작소에 맡겨주세요.
        </p>
      </div>
      <div className="max-w-[800px] w-full h-[1px] bg-white-gradient bml:my-24 my-9"></div>
      <div className="relative text-center">
        <Image
          className="absolute bml:left-[-20px] bml:top-[-10px] left-[-10px] bml:w-4 bml:h-4"
          src="/images/dot.svg"
          alt="active-link"
          width="8"
          height="8"
        />
        <h3 className="bml:text-5xl text-xl">PREVIOUS WORKS</h3>
      </div>
    </section>
  );
};

export default StudioSection;
