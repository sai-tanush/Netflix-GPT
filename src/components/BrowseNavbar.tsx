import { Bell, Search } from "lucide-react";
import logo from "../assets/logo.png";

const BrowseNavbar = () => {
  return (
    <div className="w-screen z-30">
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
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>TV Shows</p>
            </li>
            <li>
              <p>Movies</p>
            </li>
            <li>
              <p>New & Popular</p>
            </li>
            <li>
              <p>My List</p>
            </li>
            <li>
              <p>Browse by Languages</p>
            </li>
          </ul>
        </div>
        <div className="mt-6 mr-6">
          <ul className="flex space-x-3 cursor-pointer">
            <li>
              <Search />
            </li>
            <li>
              <p>Children</p>
            </li>
            <li>
              <Bell />
            </li>
            <li className="mt-[-3px]">
              <img
                src="https://occ-0-2857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABStlS0MPUGcy6Ovyeia-3ddnnXNb2Lri4P4H4QCFuR_yaGs0umyqHUDOZcOBKF8MFUGHX07txAW70z7wq_S9AKGQ_MixrLQ.png?r=a4b"
                height={33}
                width={33}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BrowseNavbar;
