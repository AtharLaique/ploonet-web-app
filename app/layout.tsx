import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

import Header from "./header";

const pretendard = localFont({
  display:'swap',
  variable:'--font-pretendard',
  src: "../public/fonts/PretendardVariable.ttf"
});

export const metadata: Metadata = {
  title: "PLOONET",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pretendard.variable}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
