import { RiUserLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <div className="px-3 container py-5">
      <div className="grid grid-cols-6 sm:grid sm:grid-cols-6 gap-4">
        <div className="flex items-center">
          <a href="#" className="font-bold text-2xl sm:text-3xl">
            pti.
          </a>
        </div>
        <div className="col-start-2 col-span-5 sm:col-span-4">
          <div className="flex items-center justify-between gap-3">
            {/* --- search menu start --- */}
            <div className="w-full">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-orange-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full ps-10 text-sm text-gray-900 border-none rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-400 "
                  placeholder="Search Audiobook."
                  required
                />
              </div>
            </div>
            {/* --- search menu end --- */}

            {/* --- dropdown menu start --- */}
            <div className="">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-black bg-white font-medium rounded-lg text-sm px-3 py-2 text-center flex items-center justify-between"
                type="button"
              >
                <span>MENU</span>
                <svg
                  className="w-2.5 h-2.5 ms-3 sm:ms-12 text-orange-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
              >
                <ul
                  className="py-2 text-sm text-gray-700"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-orange-500"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-orange-500"
                    >
                      Details
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-orange-500"
                    >
                      Category
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-orange-500"
                    >
                      My Favorites
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-orange-500"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100  hover:text-orange-500"
                    >
                      Log in/Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* --- dropdown menu end --- */}
          </div>
        </div>
        <div className="hidden sm:flex sm:items-center sm:justify-center cursor-pointer">
          {/* --- User icon --- */}
          <div className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full">
            <RiUserLine className="text-white text-xl" />
          </div>
          {/* --- User icon --- */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
