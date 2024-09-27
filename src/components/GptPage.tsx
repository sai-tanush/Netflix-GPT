import NETFLIX_BG from "../utils/constants";
import GptMovieSuggesstions from "./GptMovieSuggesstions";
import GptSearchBar from "./GptSearchBar";

const GptPage: React.FC = () => {
  return (
    <>
      <div className="fixed -z-30 md:fixed">
        <img
          src={NETFLIX_BG}
          alt="background_img"
          height="100vh"
          className="relative bg-gradient-to-b from-black 
          h-screen object-cover md:object-cover md:h-auto"
        />
        <div className="absolute top-0 left-0 w-screen h-[100%] bg-black bg-opacity-70"></div>
      </div>
      <div className="w-screen min-h-screen">
        <GptSearchBar />
        <GptMovieSuggesstions />
      </div>
    </>
  );
};

export default GptPage;
