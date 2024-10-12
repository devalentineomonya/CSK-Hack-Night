import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi"; // Import external link icon

const Footer = () => {
  return (
    <footer className="shadow-lg flex items-center justify-center flex-col bg-white  h-52 mt-6 border-t max-xl:px-4 ">
      <div className="w-full max-w-3xl flex items-center justify-center text-gray-700">
        <div className="flex items-center w-full justify-between">
          <div className="flex flex-col justify-start">

          <p className="flex items-center gap-x-4">
            &copy;{" "}
            <Link
              href="https://computersocietyofkirinyaga.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-blue-600 hover:underline flex items-center"
            >
              Computer Society Of Kirinyaga
              <FiExternalLink className="ml-1" />
            </Link>{" "}
            {new Date().getFullYear()}
          </p>
          <p className="flex items-center gap-x-4">
        &bull;
            <Link
              href="https://ctf.cybereyesnetworks.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-blue-600 hover:underline flex items-center"
            >
              Cyber Eyes Networks
              <FiExternalLink className="ml-1" />
            </Link>
          </p>
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <Link
              to="https://twitter.com/cskirinyaga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center"
            >
              Twitter
              <FiExternalLink className="ml-1" />
            </Link>
            <Link
              to="https://linkedin.com/company/computersocietyofkirinyaga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center"
            >
              LinkedIn
              <FiExternalLink className="ml-1" />
            </Link>
            <Link
              to="https://github.com/cskirinyaga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center"
            >
              GitHub
              <FiExternalLink className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
