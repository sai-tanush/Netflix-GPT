import { Info, Play } from "lucide-react";

const VideoTitle = ({
  title,
  overview,
}: {
  title: string;
  overview: string;
}) => {
  return (
    <div className="absolute flex flex-col pt-[20%] px-16 w-screen aspect-video text-white bg-gradient-to-r from-black z-10">
      <div className="w-1/3">
        <p className="text-6xl font-bold mb-3 overflow-hidden">{title}</p>
        <p className="text-md">{overview}</p>
        <div className="flex items-center justify-start space-x-4 cursor-pointer mt-4">
          <div className="flex justify-center gap-2 w-[8rem] bg-white rounded-md py-2.5 px-4 hover:bg-opacity-70">
            <Play fill="black" />
            <button className="text-black"> Play</button>
          </div>
          <div className="flex justify-center gap-2 w-[10rem] bg-gray-600 rounded-md py-2.5 px-4">
            <Info stroke="white" />
            <button className="text-white"> More info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
