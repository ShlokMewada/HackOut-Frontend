import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* <div>
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
      </div> */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-xl font-semibold text-white mb-4">About Us</h2>
            <p className="text-gray-400">
              We are a leading company in furniture renting, offering a wide
              range of high-quality furniture at affordable prices.
            </p>
          </div>

          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h2>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-lg hover:underline text-white">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-lg hover:underline text-white"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-lg hover:underline text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:w-1/3">
            <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <i className="fab fa-facebook fa-lg hover:text-white"></i>
              <i className="fab fa-twitter fa-lg hover:text-white"></i>
              <i className="fab fa-instagram fa-lg hover:text-white"></i>
              <i className="fab fa-linkedin fa-lg hover:text-white"></i>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
