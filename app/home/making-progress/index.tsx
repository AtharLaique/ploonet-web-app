import React from "react";
import Image from "next/image";

import StandardProductionCard from "./standard-production-card";
import QuickServeCard from "./quick-serve-card";

const MakingProgress = () => {
  return (
    <section className="bml:pt-[157px] pt-24 pb-14 flex flex-col justify-start items-center">
      <div className="relative bm:mb-14 mb-5 text-center">
        <Image
          className="absolute bml:left-[-20px] bml:top-[-10px] left-[-10px] bml:w-4 bml:h-4"
          src="/images/dot.svg"
          alt="active-link"
          width="8"
          height="8"
        />
        <h3 className="bml:text-5xl text-xl bml:mb-10">MAKING PROCESS</h3>
      </div>
      <div className="grid xl:grid-cols-2 grid-cols-1 bml:grid-rows-1 grid-rows-2 max-w-[1620px] w-full bml:gap-12 bml:px-10 px-4">
        <StandardProductionCard />
        <QuickServeCard />
      </div>
      <div className="w-full text-center text-[#999999] text-sm leading-5 bml:mt-12 bml:px-0 px-6 flex flex-col gap-3">
        <p> 
            * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며,  모션그래픽 등
          전문 작업이 필요할 경우 작업 기간은 조정될 수 있습니다.
        </p>
        <p>
          ** 영상의 길이, 영상 제작에 필요한 수준에 따라 빠른 작업이 불가할 수
          있으며, 클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.
        </p>
      </div>
    </section>
  );
};

export default MakingProgress;
