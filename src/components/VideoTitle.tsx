import { Info, Play } from "lucide-react";

const VideoTitle = ({
  title,
  overview,
}: {
  title: string;
  overview: string;
}) => {
  return (
    <div className=" flex flex-col pt-40 px-16 w-2/5 z-10">
      <p className="text-6xl font-bold mb-3 overflow-hidden">{title}</p>
      <p className="text-md">{overview}</p>
      <div className="flex items-center justify-start space-x-4 cursor-pointer mt-4">
        <div className="flex justify-center gap-2 w-[8rem] border border-black rounded-md py-2.5 px-4">
          <Play fill="black" />
          <button className=""> Play</button>
        </div>
        <div className="flex justify-center gap-2 w-[10rem] bg-gray-600 rounded-md py-2.5 px-4">
          <Info stroke="white" />
          <button className="text-white"> More info</button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
