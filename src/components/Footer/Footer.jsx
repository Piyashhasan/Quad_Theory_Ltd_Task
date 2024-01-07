import footerImg from "../../assets/img/footer.png";
import { GoArrowRight } from "react-icons/go";
import { FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="sm:container min-h-full">
      <div className="grid grid-cols-1 lg:grid lg:grid-cols-2">
        <div className="pt-10 md:px-10 lg:px-0 xl:px-10">
          <div className="px-2">
            <form>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 md:ps-10 text-[12px] sm:text-sm text-gray-900 border-none border-gray-300 rounded-2xl bg-gray-50 focus:ring-orange-500"
                  placeholder="Enter Your Email"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center text-orange-500 sm:text-white absolute end-2.5 bottom-2.5 sm:bg-orange-500 hover:bg-orange-700 focus:ring-1 focus:outline-none focus:ring-orange-300 rounded-xl text-sm sm:px-4 py-2"
                >
                  <span className="text-md font-extrabold">Subscribe</span>
                  <GoArrowRight className="text-xl mx-2" />
                </button>
              </div>
            </form>
          </div>

          {/* --- social icon for mobile device --- */}
          <div className="mt-10 lg:hidden">
            <ul className="flex items-center justify-center gap-2">
              <li className="h-10 w-10 bg-[#FC6011] flex items-center justify-center rounded-full">
                <a href="#">
                  <FaGoogle className="text-white" />
                </a>
              </li>
              <li className="h-10 w-10 bg-[#FC6011] flex items-center justify-center rounded-full">
                <a href="#">
                  <FaTwitter className="text-white" />
                </a>
              </li>
              <li className="h-10 w-10 bg-[#FC6011] flex items-center justify-center rounded-full">
                <a href="#">
                  <FaInstagram className="text-white" />
                </a>
              </li>
            </ul>
          </div>
          {/* --- social icon for mobile device --- */}

          <div className="my-10 md:my-8 lg:mt-10 lg:mb-0 xl:mt-20">
            <h3 className="font-bold text-4xl sm:text-3xl text-center lg:text-left">
              pti<span className="text-orange-500">.</span>
            </h3>
          </div>

          {/* --- copy right for mobile device --- */}
          <div className="my-10 lg:hidden">
            <p className="flex items-center justify-center text-md font-semibold">
              Copyright <span>&copy;</span> Tripp.All Right Reserved
            </p>
          </div>
          {/* --- copy right for mobile device --- */}

          <div className="hidden lg:flex lg:items-center lg:justify-between">
            <div className="">
              <p className="flex items-center text-sm font-semibold">
                Copyright <span>&copy;</span> Tripp.All Right Reserved
              </p>
            </div>
            <div className="md:my-5 lg:my-2">
              <ul className="flex items-center gap-2 lg:justify-between lg:gap-2">
                <li className="h-10 w-10 bg-red-300 flex items-center justify-center rounded-full">
                  <a href="#">
                    <FaGoogle className="text-orange-500" />
                  </a>
                </li>
                <li className="h-10 w-10 bg-red-300 flex items-center justify-center rounded-full">
                  <a href="#">
                    <FaTwitter className="text-orange-500" />
                  </a>
                </li>
                <li className="h-10 w-10 bg-red-300 flex items-center justify-center rounded-full">
                  <a href="#">
                    <FaInstagram className="text-orange-500" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-32 hidden lg:block lg:px-28">
          <img className="" src={footerImg} alt="footer-img" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
