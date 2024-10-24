import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bml:h-[934px] h-96 w-full overflow-hidden">
      <Image
        src="/images/hero.svg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
      />
    </section>
  );
};

export default HeroSection;
