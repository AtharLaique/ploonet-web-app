import React from "react";
import Image from "next/image";

import HeroSection from "./partials/hero";
import StudioSection from "./partials/studio";
import PreviousWork from "./previous-work";
import Progress from "./making-progress";
import ContactForm from "./contact-form";

const HomePage = () => {
  return (
    <div className="relative">
      <Image
        className="fixed z-50 right-10 top-52 cursor-pointer bml:visible  invisible"
        src="/images/help-support.svg"
        alt="active-link"
        width="125"
        height="125"
      />
      <HeroSection />
      <StudioSection />
      <PreviousWork />
      <Progress />
      <ContactForm />
    </div>
  );
};

export default HomePage;
