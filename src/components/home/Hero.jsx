import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import HeroSectionImage from "../../assets/section.png";
import TypingEffect from "../common/TypingEffect";
import { scrollRevealConfig } from "../../config/scrollReveal";

const Hero = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".typing-effect", {
      ...scrollRevealConfig,
      origin: "left",
    });

    sr.reveal(".hero-title", {
      ...scrollRevealConfig,
      origin: "bottom",
    });

    sr.reveal(".description", {
      ...scrollRevealConfig,
      origin: "bottom",
    });

    sr.reveal(".animate-image", {
      ...scrollRevealConfig,
      origin: "right",
    });
  }, []);

  return (
    <section className="h-fit min-h-screen w-full gradient-background -mt-16 flex items-center justify-center max-xl:px-4 max-xl:pt-32 max-xl:pb-12">
      <div className="max-w-[1400px] w-full min-h-48 flex max-lg:flex-col gap-x-20">
        <div className="max-w-2xl flex-1">
          <div className="font-medium text-lg xs:text-3xl lg:text-2xl xl:text-5xl text-white typing-effect">
            <TypingEffect words={[`Welcome to CSK`]} />
          </div>
          <h3 className="text-xl xs:text-4xl lg:text-3xl xl:text-6xl py-4 text-white hero-title">{`Hack Night`}</h3>
          <p className="font-light text-sm xs:text-lg text-white description">
            Join us for an exciting night of hacking, learning, and
            collaboration! Whether you&apos;re a beginner or an experienced
            cyber security enthusiast, this event is designed to take you on a
            thrilling journey into the world of cyber security. Hack Night is
            all about solving challenges, learning new skills, and working
            together to tackle real-world problems in a fun and friendly
            environment. Everyone is welcome, no prior experience is needed!
          </p>
        </div>
        <div className="w-full h-full flex-1 flex justify-center lg:justify-end items-center max-lg:pt-12 animate-image">
          <img
            src={HeroSectionImage}
            alt="Cyber Security Event"
            className="breathing-image "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
