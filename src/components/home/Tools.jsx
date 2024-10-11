import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'; 

const tools = [
  {
    name: "Kali Linux",
    description:
      "A Debian-based Linux distribution used for penetration testing and security auditing.",
  },
  {
    name: "OpenSSL",
    description:
      "A robust toolkit for implementing cryptographic protocols and functions, widely used for secure communications.",
  },
  {
    name: "Steghide",
    description:
      "A steganography tool that allows users to hide data within various types of image and audio files.",
  },
  {
    name: "Autopsy",
    description:
      "A digital forensics platform and graphical interface to The Sleuth Kit, used for analyzing hard drives and smartphones.",
  },
  {
    name: "Ghidra",
    description:
      "A software reverse engineering suite developed by the NSA that helps analyze binary files and decompile them.",
  },
  {
    name: "MobSF",
    description:
      "A mobile security framework for automated security analysis of Android and iOS apps, including static and dynamic analysis.",
  },
  {
    name: "Burp Suite",
    description:
      "A popular tool for web application security testing, providing features for scanning, crawling, and exploiting vulnerabilities.",
  },
];


const Tools = () => {
  useEffect(() => {
    const sr = ScrollReveal();
  
 
    sr.reveal('.tools-title', {
      origin: 'left',
      distance: '250px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0,
      scale: 0.9,
      reset:true
    });
  
    // Reveal the h3 from the bottom
    sr.reveal('.tools-description', {
      origin: 'bottom',
      distance: '150px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0,
      scale: 0.9,
      reset:true
    });
  

  
    sr.reveal('.animate-tools-image', {
      origin: 'right',
      distance: '150px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0,
      scale: 0.9,
      reset:true
    });
    sr.reveal('.animate-tools-card', {
      origin: 'left',
      distance: '150px',
      duration: 1000,
      delay:300,
      easing: 'ease-in-out',
      opacity: 0,
      scale: 0.9,
      reset:true
    });
  }, []);
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl tools-title">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-500 tools-description">
            In this event, we will explore several essential tools related to
            cybersecurity. These tools are designed to help you understand
            various aspects of securing systems, protecting data, and mitigating
            threats. It&apos;s important to familiarize yourself with these tools as
            they are crucial in the field of cybersecurity.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {tools.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4 animate-tools-card">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFft23wsmE8OIjMg3f-m3gir96a-Expb1GohOPcCs-tAUcHWJymv17eOZM0aVAdoYW5o"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="bg-gray-100 rounded-lg animate-tools-image"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhsxQWs-HC3dwhODYFY22aPooG4lKtOHtOiedLhfNc9CiLo_WZg9UW5ZbWhYhR10Z6Oo&usqp=CAU"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="bg-gray-100 rounded-lg animate-tools-image"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-1OK2jgZD9AKAJOLId0pqX_FNrBEjDjozg&s"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="bg-gray-100 rounded-lg animate-tools-image"
          />
          <img
            src="https://i0.wp.com/9to5linux.com/wp-content/uploads/2024/06/par61.webp"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="bg-gray-100 rounded-lg animate-tools-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Tools;
