import { Link } from "react-router-dom";
import { scrollRevealConfig } from "../../config/scrollReveal";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
const people = [
  {
    name: "Brian Karanja",
    role: "CEO Cyber Eyes Networks",
    imageUrl:
      "https://briankaranja.cybereyesnetworks.co.ke/images/Profile1.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Jessica Mbithi",
    role: "Cyber Security Leaad",
    imageUrl: "https://i.postimg.cc/DwwYNyKx/jess.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Brian Kemboi",
    role: "CKS Chair Person",
    imageUrl: "https://i.postimg.cc/90Qd4J49/kemboii.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Dennis Kathuri",
    role: "CKS Vice Chair Person",
    imageUrl: "https://i.postimg.cc/pT64tmG1/1722813024059.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Mwaniki Tifany",
    role: "CKS General Sec",
    imageUrl: "https://i.postimg.cc/zDwtXRzd/tiffany.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Gideon Ngetich",
    role: "Technical Staff",
    imageUrl: "https://i.postimg.cc/q70d3c20/giddy.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Reyhan Luyai",
    role: "Technical Staff",
    imageUrl:
      "https://i.postimg.cc/BQHFDd0j/Whats-App-Image-2024-09-13-at-00-22-25-4ccae3fe.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Anon Uer",
    role: "PlaceHolder",
    imageUrl:
      "https://th.bing.com/th/id/OIP.cZNawJEvJFRbxK59nzOPmQHaMW?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

const OrganizingTeam = () => {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".animate-team-image", {
      ...scrollRevealConfig,
      origin: "bottom",
    });
    sr.reveal(".animate-team-title", {
      ...scrollRevealConfig,
      origin: "left",
    });
    sr.reveal(".animate-team-description", {
      ...scrollRevealConfig,
      origin: "right",
    });
  }, []);
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-3 sm:space-y-2 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-gradient animate-team-title">
              Our Organizing Team
            </h2>
            <p className="text-lg text-slate-800 animate-team-description">
              The entire event was brought to life by a team of brilliant
              engineers who collaborated to ensure that students get the best
              out of themselves.
            </p>
          </div>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8"
          >
            {people.map((person) => (
              <li key={person.name} className="animate-team-image">
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2 h-[300px]">
                    <img
                      className="object-cover shadow-lg rounded-lg h-full w-full"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                    <ul role="list" className="flex space-x-5">
                      <li>
                        <Link
                          to={person.twitterUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={person.linkedinUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrganizingTeam;
