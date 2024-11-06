import { MdOutlinePlayCircle } from "react-icons/md";
import { chapterPartContentProps } from "../../vite-env";
import { VscCopy, VscQuestion } from "react-icons/vsc";
import { IoCodeSlashOutline } from "react-icons/io5";
import { SlClock } from "react-icons/sl";

const ChapterPartContent = ({ content }: chapterPartContentProps) => {
  const getIconByType = (type: string) => {
    switch (type) {
      case "video":
        return <MdOutlinePlayCircle className="text-xl" />;
      case "quiz":
        return <VscQuestion className="text-xl" />;
      case "article":
        return <VscQuestion className="text-xl" />;
      case "code":
        return <IoCodeSlashOutline className="text-xl" />;
      case "combined":
        return <VscCopy className="text-xl" />;
    }
  };
  return (
    <>
      <div className="flex items-center justify-between p-3">
        <span className="flex gap-2 items-center">
          <span>{getIconByType(content.type)}</span>
          <span className="font-bold">{content.title}</span>
        </span>
        <span className="flex items-center gap-2 font-semibold text-gray-600">
          <SlClock />
          {content.length}
        </span>
      </div>
    </>
  );
};

export default ChapterPartContent;
