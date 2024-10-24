import React from "react";
import Image from "next/image";

import QuickServeStep from "@/app/components/quick-serve-step";

const QuickServeCard = () => {
  return (
    <div className="bml:bg-custom-gradient w-full relative rounded-[20px] bml:p-[1px]">
      <div className="bml:bg-[#141414] py-16 bml:px-24 text-center rounded-[20px] flex flex-col gap-1 border-white/15 h-full">
        <h1 className="bml:text-[44px] text-3xl bml:leading-[61px] bg-custom-gradient inline-block text-transparent bg-clip-text text-nowrap">
          Ploonet Quickserve™
        </h1>
        <p className="bml:text-2xl text-base leading-8 ">
          제작 시작 후 12~48시간 이내{" "}
        </p>
        <div className="bml:bg-transparent bg-custom-gradient bml:p-0 p-[1px] bml:rounded-none rounded-[20px] w-full bml:mt-12 mt-6">
          <div className="flex flex-col bml:gap-11 gap-3 bg-[#141414] bml:rounded-none rounded-[20px] bml:py-0 bml:px-0 py-12 px-7">
            <QuickServeStep
              label="제작 안내"
              description={
                <>
                  <p>영상 제작 문의를 통해 의뢰 확인 후</p>
                  <p>견적 및 진행 순서 안내</p>
                </>
              }
            >
              <Image
                className="w-[133px] h-[132px]"
                src="/images/quick-serve/step1.svg"
                alt="active-link"
                width="82"
                height="82"
              />
            </QuickServeStep>
            <QuickServeStep
              label="영상 생성"
              description={
                <>
                <p>스크립트 수신 즉시 가상인간 영상 생성</p>
                <p>그외 이미지, 배경 음악 등 필요 요소 생성</p>
                </>
              }
            >
              <Image
                className="w-[133px] h-[132px]"
                src="/images/quick-serve/step2.svg"
                alt="active-link"
                width="82"
                height="82"
              />
            </QuickServeStep>
            <QuickServeStep
              label="편집 및 납품"
              description="편집 진행, 12~48시간 내 최종본 완성 및 납품"
            >
              <Image
                className="w-[133px] h-[132px]"
                src="/images/quick-serve/step3.svg"
                alt="active-link"
                width="82"
                height="82"
              />
            </QuickServeStep>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickServeCard;
