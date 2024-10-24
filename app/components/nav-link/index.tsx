import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  isActive: boolean;
  children: ReactNode;
  onClick: (data:any) => void;
}

export default function NavLink({
  href,
  children,
  isActive,
  onClick,
}: NavLinkProps) {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={`flex flex-col items-center font-bold lg:text-base text-sm ${
        !isActive && "opacity-60"
      }`}
    >
      {children}
      {isActive && (
        <Image src="/images/dot.svg" alt="active-link" width="8" height="8" />
      )}
    </Link>
  );
}
