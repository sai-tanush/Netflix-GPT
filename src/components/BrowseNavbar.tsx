import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Bell, ChevronDown, Search } from "lucide-react";
import logo from "../assets/logo.png";
import { auth } from "../utils/firebase";
import { PROFILE_URL } from "../utils/constants";

const navItems = [
  "HomeTV",
  "Shows",
  "Movies",
  "New & Popular",
  "My List",
  "Browse by Languages",
];
const profileItems = [
  "Manage Profiles",
  "Transfer Profile",
  "Account",
  "Help Centre",
];

const BrowseNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
              <li key={item}>{item}</li>
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
              <img src={PROFILE_URL} height={28} width={28} />
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
                  {profileItems.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-white hover:bg-gray-800"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
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
