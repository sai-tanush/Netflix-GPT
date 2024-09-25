import NETFLIX_BG from "../utils/constants";
import GptMovieSuggesstions from "./GptMovieSuggesstions";
import GptSearchBar from "./GptSearchBar";

const GptPage: React.FC = () => {
  return (
    <div className="w-screen min-h-screen">
      <div className="absolute -z-30">
        <img
          src={NETFLIX_BG}
          alt="background_img"
          height="100vh"
          className="relative bg-gradient-to-b from-black"
        />
        <div className="absolute top-0 left-0 w-screen h-[100%] bg-black bg-opacity-70"></div>
      </div>
      <GptSearchBar />
      <GptMovieSuggesstions />
    </div>
  );
};

export default GptPage;
