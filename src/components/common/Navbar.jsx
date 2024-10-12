import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [yScroll, setYScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setYScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`h-16 w-full max-xl:px-4 z-20  flex items-start justify-center  sticky top-0 ${
        yScroll > 20 ? "bg-white text-slate-950  shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-[1400px] h-full">
        <h1 className=" font-semibold text-lg xs:text-4xl whitespace-nowrap">
          CSK HACKNIGHT
        </h1>
        <nav className="w-full items-center justify-end font-medium">
          <ul className="flex items-center justify-end gap-x-3">
            <li className="text-xl">
              <Link to="/about">About</Link>
            </li>
            <li className="text-xl">
              <Link to="http://ctf.cybereyesnetworks.co.ke/register" target="_blank">Join</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
