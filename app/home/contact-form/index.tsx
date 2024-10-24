import React from "react";
import Image from "next/image";

import Button from "@/app/components/button";
import Input from "@/app/components/input";
import TextArea from "@/app/components/text-area";
import Select from "@/app/components/select";

const ContactForm = () => {
  return (
    <section className="bml:py-32 px-5 bml:mx-auto bml:max-w-[900px]">
      <div className="flex flex-col gap-5">
     
        <div className="text-center flex flex-col gap-3">
        <h1 className="bg-custom-gradient inline-block text-transparent bg-clip-text text-2xl text-center ">
          영상 제작 문의
        </h1>
          <p className="text-center bml:text-[44px] text-2xl bml:leading-10 bml:my-4">
            영상 제작이 필요하다면, 지금 문의 주세요.
          </p>
          <p className="text-center text-[#666666] bml:text-2xl text-base">
            여러분이 필요한 영상을 빠르게 제작하기 위해 플루닛 영상제작소가 즉시
            연락 드리겠습니다.
          </p>
          <span className="bml:hidden block text-center text-[#666666]">
            E-MAIL
          </span>
          <p className="font-normal bml:text-lg text-base bml:text-[#666666] text-white text-center bml:mb-12 bml:mt-6">
            henry.lim@saltlux.com
          </p>
        </div>

        <Select />
        <Input placeholder="연락 받으실 담당자 성함" />
        <Input placeholder="이메일" />
        <Input placeholder="휴대폰 번호" />
        <TextArea />
        <Input placeholder="참고 영상" />
        <span className="text-[#FF6D51] px-4">
          * 참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크 주소를
          적어주시면 더 정확히 안내해드리겠습니다.
        </span>
      </div>
      <div className="flex sm:flex-row flex-col w-full justify-between sm:mt-36 sm:gap-0 gap-20 mt-20">
        <span className="flex gap-2 items-center opacity-60 ">
          <Image
            src="/images/tick-circle.svg"
            alt="active-link"
            width="28"
            height="28"
          />
          <span className="border-b-[0.5px]">개인정보처리방침에</span>
          동의합니다.
        </span>
        <Button label="문의 보내기" />
      </div>
    </section>
  );
};

export default ContactForm;
