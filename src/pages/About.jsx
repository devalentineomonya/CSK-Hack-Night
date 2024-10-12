import { FaLaptopCode, FaUsers, FaChartLine, FaUser } from "react-icons/fa";
import ctfScore from "../assets/ctfscore.png";
import { useEffect } from "react";
import { scrollRevealConfig } from "../config/scrollReveal";
import ScrollReveal from "scrollreveal";
const About = () => {
  const eventBenefits = [
    {
      name: "Hands-on Experience",
      href: "#",
      description:
        "Students gained practical, hands-on experience in cyber security through real-world hacking challenges, enhancing their skills in areas such as web penetration testing and Wi-Fi hacking.",
      icon: FaLaptopCode, // Represents coding or hands-on tech work
    },
    {
      name: "Collaboration and Networking",
      href: "#",
      description:
        "The event fostered collaboration among students, allowing them to network with like-minded individuals, share knowledge, and solve problems together, creating a stronger tech community.",
      icon: FaUsers, // Represents collaboration and teamwork
    },
    {
      name: "Skill Enhancement",
      href: "#",
      description:
        "Participants improved their cyber security skills by engaging with cutting-edge tools and methodologies, preparing them for future challenges in the rapidly evolving tech landscape.",
      icon: FaChartLine, // Represents growth and improvement
    },
  ];

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".about-title", {
      ...scrollRevealConfig,
      origin: "left",
    });

    sr.reveal(".benefits-cards", {
      ...scrollRevealConfig,
      origin: "bottom",
    });

    sr.reveal(".about-description", {
      ...scrollRevealConfig,
      origin: "bottom",
    });

    sr.reveal(".animate-about-image", {
      ...scrollRevealConfig,
      origin: "left",
    });
    sr.reveal(".animate-about-scoreboard-image", {
      ...scrollRevealConfig,
      origin: "right",
    });
    sr.reveal(".animate-about-stats", {
      ...scrollRevealConfig,
      origin: "right",
    });
    sr.reveal(".animate-score-title", {
      ...scrollRevealConfig,
      origin: "left",
    });
    sr.reveal(".animate-score-description", {
      ...scrollRevealConfig,
      origin: "right",
    });
  }, []);
  return (
    <section className="bg-white ">
      <div className="relative pb-32 bg-gray-800 about-hero-background -mt-16">
        <div className="absolute inset-0 ">
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl about-title">
            About
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300 about-description">
            CSK Hacker Night is an exciting event hosted by the Computer Society
            of Kirinyaga, on{" "}
            <span>
              Saturday 13 <sup>th</sup> October 2024
            </span>{" "}
            designed to bring together tech enthusiasts, students, and
            professionals for a night of intense learning and hands-on hacking
            challenges. The event will focus on various aspects of cyber
            security, including web penetration testing, Wi-Fi hacking, and
            exploring cutting-edge tools in the cybersecurity space.
            Participants will have the opportunity to work on real-world
            problems, collaborate with peers, and enhance their practical
            skills. Whether you are a beginner or an advanced hacker, CSK Hacker
            Night promises an immersive experience where you can learn, compete,
            and network.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="About-heading"
      >
        <h2 className="sr-only" id="About-heading">
          About us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {eventBenefits.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl benefits-cards"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block  bg-gradient-to-tr text-white from-[#2409CF] to-[#F52727] rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  {link.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex items-start justify-center banner-gradient-background h-full min-h-[65vh] ">
        <div className="max-w-[1400px]">
          <div className="relative  mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
            <div className="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2 animate-about-image">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                alt="Support team"
              />
            </div>
            <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10 animate-about-stats max-lg:mt-6">
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md  bg-gradient-to-tr text-white from-[#2409CF] to-[#F52727]">
                  <FaUser className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-100 sm:text-4xl">
                Got to learn and collaborate with/from techies
              </h2>
              <p className="mt-6 text-base text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
                nihil ea rerum ipsa. Nostrum consectetur sequi culpa doloribus
                omnis, molestiae esse placeat, exercitationem magnam quod
                molestias quia aspernatur deserunt voluptatibus.
              </p>
              <div className="mt-8 overflow-hidden">
                <dl className="-mx-8 -mt-8 flex flex-wrap">
                  <div className="flex flex-col px-8 pt-8">
                    <dt className="order-2 text-base font-medium text-white">
                      Hours
                    </dt>
                    <dd className="order-1 text-2xl font-extrabold text-gray-200 sm:text-3xl">
                      10+
                    </dd>
                  </div>
                  <div className="flex flex-col px-8 pt-8">
                    <dt className="order-2 text-base font-medium text-gray-200">
                      Attendies
                    </dt>
                    <dd className="order-1 text-2xl font-extrabold text-gray-200 sm:text-3xl">
                      100+
                    </dd>
                  </div>
                  <div className="flex flex-col px-8 pt-8">
                    <dt className="order-2 text-base font-medium text-gray-200">
                      Challenges
                    </dt>
                    <dd className="order-1 text-2xl font-extrabold text-gray-200 sm:text-3xl">
                      15+
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gradient text-white md:text-5xl lg:text-6xl mb-2 animate-score-title">
            CTF Scoreboard
          </h1>
          <p className="text-xl text-slate-700 mt-4 animate-score-description">
            The Capture The Flag (CTF) competition was fierce, with a total of
            20 teams participating. Leading the scoreboard was{" "}
            <strong>Tripple Light</strong> from Kirinyaga University, scoring an
            impressive 1120 points. They were followed closely by{" "}
            <strong>&lt;Thr3at_Hunters/&gt;</strong>, and{" "}
            <strong>TechNocturnals</strong>. For more detailed results, refer to
            the scoreboard image below.
          </p>
        </div>
        <div className="w-full h-full flex justify-center items-center animate-about-scoreboard-image">
          <img src={ctfScore}  className="w-ful h-full"/>
        </div>
      </div>
    </section>
  );
};

export default About;
