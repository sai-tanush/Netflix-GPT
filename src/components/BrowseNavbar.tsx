import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Bell, ChevronDown, Search } from "lucide-react";
import logo from "../assets/logo.png";
import { auth } from "../utils/firebase";

const navItems = ["HomeTV", "Shows", "Movies", "New & Popular", "My List", "Browse by Languages"];

const BrowseNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log("error=", error);
      });
  }
  return (
    <div className="absolute w-screen z-50 text-white bg-gradient-to-b from-black">
      <div className="flex justify-between">
        <div className="flex">
          <div>
            <img
              src={logo}
              alt="logo"
              height={100}
              width={190}
              className="ml-10"
            />
          </div>
          <ul className="flex space-x-3 mt-6 ml-6 cursor-pointer">
            {navItems.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6 mr-10">
          <ul className="flex space-x-4 cursor-pointer">
            <li>
              <Search />
            </li>
            <li>
              <p>Children</p>
            </li>
            <li>
              <Bell />
            </li>
            <li className="flex">
              <img
                src="https://occ-0-2857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABStlS0MPUGcy6Ovyeia-3ddnnXNb2Lri4P4H4QCFuR_yaGs0umyqHUDOZcOBKF8MFUGHX07txAW70z7wq_S9AKGQ_MixrLQ.png?r=a4b"
                height={28}
                width={28}
              />
              <button
                onClick={toggleDropdown}
                className=" text-black rounded-md flex items-center focus:outline-none"
              >
                <ChevronDown stroke="white" className="w-5 h-5" />
              </button>
            </li>
            {isOpen && (
              <div className="absolute right-10 top-14 mt-2 w-40 bg-black border border-gray-200 shadow-lg z-10">
                <ul className="py-1 text-sm">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-gray-800"
                    >
                      Manage Profiles
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-gray-800"
                    >
                      Transfer Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-gray-800"
                    >
                      Account
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-gray-800"
                    >
                      Help Centre
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a
                      href="#"
                      onClick={handleSignOut}
                      className="block px-4 py-2 text-white hover:bg-gray-800"
                    >
                      Sign out of Netflix
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BrowseNavbar;
