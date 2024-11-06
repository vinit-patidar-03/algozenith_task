import { GiProgression } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { IoIosStarOutline } from "react-icons/io";
import { IoClipboardOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { TbBulb } from "react-icons/tb";
import { sidebarProps } from "../../vite-env";

const Sidebar = ({ activeTab, setActiveTab }: sidebarProps) => {
  console.log(activeTab);

  const getActiveClass = (tabName: string) => {
    return activeTab === tabName ? "bg-[#e7f8ff] text-[#172B4D] font-bold" : "";
  };
  return (
    <>
      <div className="w-44 flex flex-col bg-gradient-to-b from-[#feffff] to-[#f6fdff]">
        <nav className="flex-1">
          <ul className="ml-4">
            <li className="mb-2">
              <span
                className={`flex gap-2 items-center p-2 ${getActiveClass(
                  "Dashboard"
                )}  rounded-md hover:bg-[#e7f8ff] cursor-pointer transition-all duration-500`}
                onClick={() => setActiveTab("Dashboard")}
              >
                <RxDashboard className={`${getActiveClass("Dashboard")}`} />
                <span>Dashboard</span>
              </span>
            </li>
            <li className="mb-2">
              <span
                className={`flex gap-2 items-center p-2 ${getActiveClass(
                  "Learn"
                )}    rounded-md hover:bg-[#e7f8ff] cursor-pointer transition-all duration-500`}
                onClick={() => setActiveTab("Learn")}
              >
                <TbBulb className={`${getActiveClass("Learn")}`} />
                <span>Learn</span>
              </span>
            </li>
            <li className="mb-2">
              <span
                className={`flex gap-2 items-center p-2  ${getActiveClass(
                  "Forums"
                )}    rounded-md hover:bg-[#e7f8ff] cursor-pointer transition-all duration-500`}
                onClick={() => setActiveTab("Forums")}
              >
                <GrGroup className={`${getActiveClass("Formus")}`} />
                <span>Forums</span>
              </span>
            </li>
            <li className="mb-2">
              <span
                className={`flex gap-2 items-center p-2 ${getActiveClass(
                  "Upskill"
                )}  rounded-md hover:bg-[#e7f8ff] cursor-pointer transition-all duration-500`}
                onClick={() => setActiveTab("Upskill")}
              >
                <IoClipboardOutline
                  className={`${getActiveClass("Upskill")}`}
                />
                <span>Upskill</span>
              </span>
            </li>
            <li className="mb-2">
              <span
                className={`flex gap-2 items-center p-2 ${getActiveClass(
                  "Contest"
                )}  rounded-md hover:bg-[#e7f8ff] cursor-pointer transition-all duration-500`}
                onClick={() => setActiveTab("Contest")}
              >
                <GiProgression className={`${getActiveClass("Contest")}`} />
                <span>Contest</span>
              </span>
            </li>
            <li className="mb-2">
              <span
                className={`flex gap-2 items-center p-2 ${getActiveClass(
                  "Leaderboard"
                )}    rounded-md hover:bg-[#e7f8ff] cursor-pointer transition-all duration-500`}
                onClick={() => setActiveTab("Leaderboard")}
              >
                <IoIosStarOutline
                  className={`${getActiveClass("Leaderboard")}`}
                />
                <span>Leaderboard</span>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
