import { useEffect } from "react";
import BannerImage from "../../assets/banner_img_2.png";

import ScrollReveal from "scrollreveal";
const Banner = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    // Reveal the typing text from the left
    sr.reveal(".banner-title", {
      origin: "left",
      distance: "250px",
      duration: 1000,
      easing: "ease-in-out",
      opacity: 0,
      scale: 0.9,
      reset: true,
    });

    // Reveal the h3 from the bottom
    sr.reveal(".animate-banner-description", {
      origin: "bottom",
      distance: "150px",
      duration: 1000,
      easing: "ease-in-out",
      opacity: 0,
      scale: 0.9,
      reset: true,
    });

    // Reveal the description from the bottom
    sr.reveal(".banner-title-2", {
      origin: "bottom",
      distance: "250px",
      duration: 1000,
      easing: "ease-in-out",
      opacity: 0,
      scale: 0.9,
      reset: true,
    });

    sr.reveal(".banner-image", {
      origin: "right",
      distance: "150px",
      duration: 1000,
      easing: "ease-in-out",
      opacity: 0,
      scale: 0.9,
      reset: true,
    });
  }, []);
  return (
    <section className="min-h-[30vh] h-full w-full flex items-center justify-center  banner-gradient-background max-xl:px-4 py-12">
      <div className="w-full max-w-[1400px] flex items-start justify-between max-lg:flex-col pt-12">
        <div className="flex-1">
          <div className="capitalize text-white font-medium">
            <h2 className="text-3xl banner-title">An Exciting Opportunity</h2>
            <h2 className="text-4xl banner-title-2">
              to Learn and Collaborate

            </h2>
          </div>
          <div className="py-3 text-lg text-gray-100 animate-banner-description">
            <p>
              Join us for the CSK Cyber Security Hack Night, where you&apos;ll
              have the chance to work with like-minded individuals, solve
              challenges, and develop your skills. Whether you&apos;re just

              starting out or are already an experienced hacker, this is a great
              way to collaborate, share knowledge, and learn from others.
            </p>
            <p className="my-4">
              Collaboration is key to growth. By working alongside peers,
              you&apos;ll gain new perspectives, enhance your problem-solving
              skills, and build strong connections within the cyber security
              community. Together, we can explore innovative solutions to
              real-world challenges.
            </p>
            <p>
              Don&apos;t miss out on this comprehensive learning experience.
              Whether you&apos;re here to learn, teach, or just have fun, Hack
              Night is the perfect environment for everyone to grow and succeed.
            </p>
          </div>
        </div>
         <p className="text-8xl text-red-500 hidden">Inaugural_h4ck_N1ght{`}`}</p> 
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <img
            src={BannerImage}
            className="w-[400px] banner-image"
            alt="Collaboration at Hack Night"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
