import React from "react";

import StepBadge from "@/app/components/step-badge";

const StandardProductionCard = () => {
  return (
    <div className="bml:bg-[#141414] w-full bml:py-16 lg:px-24  mx-auto text-center rounded-[20px] flex flex-col gap-1 bml:border-[1px] border-white/15">
      <h1 className="text-[44px] leading-[61px]">일반 제작</h1>
      <p className="text-2xl leading-8 opacity-80">제작 시작 후 5영업일 이내</p>
      <div className="flex flex-col gap-3 mt-7">
        <StepBadge
          step="step1"
          label="사전 논의"
          descriptionPrimary="영상 제작 문의를 통해 의뢰 확인 후"
          descriptionSecondary="상담을 통해 방향 설정 및 내용 협의"
        />
        <StepBadge
          step="step2"
          label="영상 기획"
          descriptionPrimary="스토리보드 전달&수정을 통한 기획안 확정"
          descriptionSecondary="가상인간 발화용 스크립트 작성과 프롬프팅"
        />
        <StepBadge
          step="step3"
          label="영상 생성 "
          descriptionPrimary="작성한 스크립트로 가상인간 영상 생성"
          descriptionSecondary="그외 이미지, 배경 음악 등 필요 요소 생성"
        />
        <StepBadge
          step="step4"
          label="영상 편집"
          descriptionPrimary="영상 전문가의 편집, 디자인, 후반 작업 단계"
          descriptionSecondary="필요시 실사 촬영 병행하여 편집본 완성"
        />
        <StepBadge
          hideCaret
          step="step5"
          label="최종 납품"
          descriptionPrimary="고객 피드백 반영하여 최종본 완성 및 납품"
          descriptionSecondary="* 영상 수정 무료 1회 제공"
        />
      </div>
    </div>
  );
};

export default StandardProductionCard;
