import { FaCircleInfo } from "react-icons/fa6";
import { content } from "../../constants/Content";
import { chapterDetailsProps } from "../../vite-env";
import ChapterPart from "./ChapterPart";
import { CiCalendar } from "react-icons/ci";
import { PiToolbox } from "react-icons/pi";

const Chapterdetails = ({ chapter }: chapterDetailsProps) => {
  return (
    <>
      <div className=" w-full rounded-md flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 mb-2 bg-gradient-to-b from-[#EFF5FF] to-[rgba(239,245,255,0)] p-5 rounded-md">
            <button className="px-4 py-2 flex gap-2 items-center">
              <CiCalendar className="text-2xl" />
              Mentor Sessions
            </button>
            <button className="px-4 py-2 flex gap-2 items-center bg-white shadow-[0_2px_4px_0px_rgba(41,83,155,0.3)] rounded-md">
              <PiToolbox className="text-2xl" />
              Learning Material
            </button>
          </div>
          <button className="px-4 py-2 text-[rgba(23,43,77,1)] flex items-center gap-2 rounded-md border-[1px] border-[rgba(153,228,255,1)]">
            <FaCircleInfo /> How it works
          </button>
        </div>
        {content[chapter - 1].parts.map((item, index) => {
          return (
            <ChapterPart
              key={index}
              index={index}
              item={item}
              chapter={chapter}
            />
          );
        })}
      </div>
    </>
  );
};

export default Chapterdetails;
