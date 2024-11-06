import { FaAngleDown } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { SlClock } from "react-icons/sl";
import { VscCopy } from "react-icons/vsc";
import { chapterPartProps } from "../../vite-env";
import { useEffect, useState } from "react";
import ChapterPartContent from "./ChapterPartContent";

const ChapterPart = ({ index, item, chapter }: chapterPartProps) => {
  const [toggleContent, setToggleContent] = useState<boolean>(false);

  useEffect(() => {
    setToggleContent(false);
  }, [chapter]);

  const handleToggle = () => {
    setToggleContent(!toggleContent);
  };

  // Extract numeric value from completed percentage string
  const completedPercentage = parseInt(item.completed.replace("%", ""));

  return (
    <>
      <div>
        <div className="p-2 h-24 border-[1px] rounded-md border-[#b6ebff] flex justify-between relative shadow-[0_4px_20px_0px_rgba(23,43,77,0.1)]">
          <div>
            <h3>PART {index + 1}</h3>
            <h3 className="font-bold">{item.title}</h3>
          </div>
          <div className="relative">
            <span className="font-normal flex gap-5 p-2 items-center">
              <span className="flex gap-2 items-center text-[#17384D]">
                <SlClock />
                {item.length}
              </span>
              <span className="flex gap-2 items-center text-[#17384D]">
                <GiProgression />
                {item.difficulty}
              </span>
              <span className="flex gap-2 items-center text-[#17384D]">
                <VscCopy />
                {item.content.length}
              </span>
              <FaAngleDown onClick={handleToggle} className=" cursor-pointer" />
            </span>
            <span className="absolute bottom-2 right-2 border-[1px] border-[#99E4FF] rounded-sm bg-[#EFF5FF] px-2 text-xs">
              {item.completed} Completed
            </span>
          </div>
          <div className="w-full h-2 absolute bottom-0 left-0 rounded-b-md overflow-hidden">
            <div
              style={{ width: `${completedPercentage}%` }}
              className="h-full bg-[#172B4DD9]"
            ></div>
          </div>
        </div>
        {toggleContent && (
          <div className="p-2 border-[1px] border-[#b6ebff] rounded-b-md flex flex-col gap-2 rounded-md">
            {item.content.map((content, index) => (
              <div key={index}>
                <ChapterPartContent content={content} />
                {index !== item.content.length - 1 && (
                  <hr className="h-[1px] bg-gradient-to-r from-transparent via-[#172B4D] to-transparent border-0" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ChapterPart;
