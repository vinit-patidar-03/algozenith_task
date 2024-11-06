import { SlClock } from "react-icons/sl";
import { content } from "../../constants/Content";
import { useState } from "react";
import Chapterdetails from "./Chapterdetails";

const Upskill = () => {
  const [chapter, setChapter] = useState<number>(1);

  return (
    <>
      <div className="w-full p-5 mr-4 rounded-md border-[1px] border-[#a4e6ff]">
        <div className="flex gap-5">
          <div className="flex flex-col w-64  gap-2">
            {content.map((item, index) => {
              return (
                <>
                  <span
                    className={`p-2 rounded-md flex gap-2 items-center justify-between border-b-[1px] border-b-[rgba(164,230,255,1)] cursor-pointer hover:bg-[#eff5ff] hover:transition-all transition-all duration-500 ${
                      chapter === index + 1 ? "bg-[#eff5ff] font-bold" : ""
                    }`}
                    key={index}
                    onClick={() => setChapter(index + 1)}
                  >
                    {item.name[0].toUpperCase() + item.name.slice(1)}
                    <span
                      className={`flex items-center gap-2  ${
                        chapter === index + 1
                          ? "text-[#608ad2] block"
                          : "hidden"
                      } font-normal`}
                    >
                      <SlClock />
                      {item.length}
                    </span>
                  </span>
                </>
              );
            })}
          </div>
          <Chapterdetails chapter={chapter} />
        </div>
      </div>
    </>
  );
};

export default Upskill;
