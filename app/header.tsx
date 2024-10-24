"use client";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./components/nav-link";

import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(0);

  return (
    <header className="h-[100px] flex items-center justify-between xl:px-40 lg:px-20 px-4">
      <Link href="/">
        <Image
          className="cursor-pointer"
          src="/images/ploonet.svg"
          alt="Ploonet"
          width="170"
          height="28"
        />
      </Link>
      <Image
        className="cursor-pointer bml:hidden"
        src="/images/menu.svg"
        alt="Ploonet"
        width="16"
        height="12"
      />
      <nav className="2xl:gap-20 xl:gap-14 gap-4 mt-2 bml:flex hidden">
        {[
          "워크센터",
          "워크센터",
          "손비서",
          "메타휴먼",
          "영상제작소",
          "공지사항",
          "제휴문의",
        ].map((link, index) => (
          <NavLink
            key={index}
            onClick={() => setActive(index)}
            isActive={index == active}
            href="/"
          >
            {link}
          </NavLink>
        ))}
      </nav>
      <div className="bml:flex hidden gap-4">
        <p className="m-0 font-bold">로그인</p>
        <Image
          className="cursor-pointer"
          src="/images/glob.svg"
          alt="language"
          width="40"
          height="20"
        />
      </div>
    </header>
  );
};

export default Header;
