
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="h-20 flex items-center justify-center flex-col">

      <div className="w-full max-w-1400px] flex items-center justify-center">
        &copy;{" "}
        <Link to="https://computersocietyofkirinya.tech">
          Computer Society Of Kirinyaga
        </Link>
      </div>
    </footer>
  );
};

export default Footer;


