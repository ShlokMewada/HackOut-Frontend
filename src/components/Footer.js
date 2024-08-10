import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div>
        Footer
        <li>
          <li>
            <Link to="/" className="text-xl font-bold text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/" className="text-xl font-bold text-white">
              Contact Us
            </Link>
          </li>
        </li>
      </div>
    </div>
  );
};

export default Footer;
