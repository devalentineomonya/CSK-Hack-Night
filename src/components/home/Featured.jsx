import { useEffect } from "react";
import FeaturedImage from "../../assets/banner_img.png";
import { BiBulb } from "react-icons/bi";
import { FaLaptopCode, FaRegHandshake } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { VscDebugDisconnect } from "react-icons/vsc";
import ScrollReveal from "scrollreveal";
import { scrollRevealConfig } from "../../config/scrollReveal";
const Featured = () => {
  const features = [
    {
      icon: <FaLaptopCode size={24} />,
      title: "Hands-on Experience",
      description:
        "Engage in practical challenges that will enhance your cybersecurity skills.",
    },
    {
      icon: <VscDebugDisconnect size={24} />,
      title: "Networking Opportunities",
      description:
        "Connect with industry professionals and fellow enthusiasts to build your network.",
    },
    {
      icon: <IoCodeSlash size={24} />,
      title: "Skill Development",
      description:
        "Learn new tools and techniques to effectively tackle cybersecurity challenges.",
    },
    {
      icon: <FaRegHandshake size={24} />,
      title: "Collaborative Learning",
      description:
        "Work in teams to solve problems, fostering a collaborative environment.",
    },
  ];

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".description-features", {
      ...scrollRevealConfig,
      origin: "left",
    });

    sr.reveal(".animate-title", {
      ...scrollRevealConfig,
      origin: "right",
    });

    sr.reveal(".animate-title-2", {
      ...scrollRevealConfig,
      origin: "left",
    });

    sr.reveal(".animate-image-features", {
      ...scrollRevealConfig,
      origin: "left",
    });

    sr.reveal(".info-card", {
      ...scrollRevealConfig,
      origin: "top",
      scale: 0.7,
      reset: true,
    });
    sr.reveal(".animate-feature-card", {
      ...scrollRevealConfig,
      origin: "top",
      scale: 0.7,
      reset: true,
    });
  }, []);

  return (
    <div className="h-fill min-h-[70vh] flex justify-center">
      <div className="max-w-[1400px] flex items-start justify-between max-xl:flex-col max-xl:px-8 w-full h-full pt-12">
        <div className="flex-1 h-full w-full max-xl:flex justify-center items-center animate-image-features">
          <img src={FeaturedImage} alt="Featured Banner" />
        </div>
        <div className="flex-1 h-full w-full">
          <h2 className="font-medium text-4xl animate-title">
            Tackling Modern
          </h2>
          <h2 className="text-gradient font-medium text-5xl animate-title-2">
            Security Challenges
          </h2>
          <p className="text-slate-800 text-lg mt-4 description-features">
            In today&apos;s digital age, staying ahead of modern security
            threats is crucial. At the CSK Cyber Security Hack Night,
            you&apos;ll have the opportunity to face real-world challenges and
            learn how to protect systems and data from cyber attacks. Whether
            it&apos;s identifying vulnerabilities, responding to threats, or
            developing secure code, this event will equip you with the skills
            needed to tackle the latest security issues. Join us and be part of
            the solution!
          </p>
          <p className="text-7xl text-red-500 hidden">
            CyberEyes{`{`}W3lc0me_t0_
          </p>
          <div className="flex items-center h-fit lg:h-36 w-full bg-zinc-100 mt-4 rounded-md relative overflow-hidden info-card">
            <div className="w-1 bg-[#2409CF] absolute left-0 top-0 h-full"></div>
            <div className="flex-1 h-full p-3 ">
              <div className="flex items-center gap-x-3">
                <div className="h-8 aspect-square rounded-full flex items-center justify-center bg-gradient-to-tr text-white from-[#2409CF] to-[#F52727]">
                  <BiBulb size={24} />
                </div>
                <h6 className="font-medium text-xl text-slate-700">
                  Boost Your Cyber Skills
                </h6>
              </div>
              <p className="text-sm my-2">
                Attending the CSK Cyber Security Hack Night is a fantastic way
                to enhance your skill set. Through hands-on challenges and
                collaborative problem-solving, you&apos;ll gain practical
                experience in addressing real-world security threats. Whether
                you&apos;re a beginner or seasoned in cybersecurity, this event
                offers valuable insights that will sharpen your knowledge and
                advance your career.
              </p>
            </div>
          </div>

          <div className="grid  sm:grid-cols-2 mt-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="h-full w-full flex p-3 animate-feature-card"
              >
                <div className="w-12 h-full">
                  <div className="h-8 aspect-square rounded-full flex items-center justify-center bg-gradient-to-tr text-white from-[#2409CF] to-[#F52727]">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-medium text-slate-800">
                    {feature.title}
                  </h4>
                  <p className="text-sm font-normal text-gray-700">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
