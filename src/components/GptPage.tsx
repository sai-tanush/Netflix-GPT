import GptMovieSuggesstions from "./GptMovieSuggesstions"
import GptSearchBar from "./GptSearchBar"

const GptPage:React.FC = () => {
  return (
    <div className="w-screen bg-black">
        <GptSearchBar />
        <GptMovieSuggesstions />
    </div>
  )
}

export default GptPage