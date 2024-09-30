import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Bell, ChevronDown, Search } from "lucide-react";
import logo from "../assets/logo.png";
import { auth } from "../utils/firebase";
import { PROFILE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView, clearGptMovies } from "../utils/gptSlice";
import { RootState } from "../utils/appStore";
import { SUPPORTED_LANGUAGES } from "../utils/languageConstant";
import { changeLanguage } from "../utils/configSlice";

const navItems = [
  "Home",
  "TV Shows",
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
  const dispatch = useDispatch();
  const gptPage = useSelector((store: RootState) => store.gpt?.showGptSearch);

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

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log("error=", error);
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
    dispatch(clearGptMovies());
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen z-50 text-white bg-gradient-to-b from-black">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="flex justify-center md:justify-start">
          <div>
            <img
              src={logo}
              alt="logo"
              height={100}
              width={190}
              className="md:ml-10"
            />
          </div>
          <ul className="hidden space-x-3 mt-6 ml-6 cursor-pointer lg:flex">
            {navItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-0 ml-4 md:mt-6 md:ml-0 mr-10">
          <ul className="flex space-x-3 cursor-pointer justify-end md:justify-start">
            <li>
              {!gptPage ? (
                <button
                  className="py-1 px-4 bg-purple-700 rounded"
                  onClick={handleGptSearch}
                >
                  GPT Search
                </button>
              ) : (
                <>
                  <select
                    className="bg-black ml-2 text-white px-1 py-1 mr-3
                   border border-gray-600 md:ml-0"
                    onChange={handleLanguageChange}
                  >
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <option key={lang.identifier} value={lang.identifier}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                  <button
                    className="py-1 px-4 bg-red-700 rounded text-sm md:text-md md:h-[2.25rem]"
                    onClick={handleGptSearch}
                  >
                    Back to Home
                  </button>
                </>
              )}
            </li>
            <li className="hidden md:block">
              <Search />
            </li>
            <li className="hidden md:block">
              <p>Children</p>
            </li>
            <li className="hidden md:block">
              <Bell />
            </li>
            <li className="flex" onClick={toggleDropdown}>
              <img src={PROFILE_URL} width={32} />
              <button className=" text-black rounded-md flex items-center focus:outline-none">
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
