import { useState } from "react";
import { FaBars, FaRegUserCircle } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  const [icon, setIcon] = useState<boolean>(false);
  const handleMouse = () => {
    setIcon(!icon);
  };
  return (
    <>
      <nav className="flex justify-between items-center p-4">
        <div className="flex gap-2 items-center">
          <FaBars className="text-2xl cursor-pointer" />
          <span
            className="flex gap-2 items-center"
            onMouseEnter={handleMouse}
            onMouseLeave={handleMouse}
          >
            <img
              src="./logo.jpg"
              alt="logo"
              className={`w-10 ${
                icon ? "opacity-100" : "opacity-0"
              } transition-all duration-500`}
            />
            <span
              className={`text-[#234a8b] font-bold text-xl ${
                icon ? "translate-x-0" : "-translate-x-10"
              } transition-all duration-500`}
            >
              AlgoZenith
            </span>
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="p-2 bg-[#e7f8ff] rounded-md hover:bg-slate-100 hover:transition-all transition-all duration-500 cursor-pointer">
            <IoNotifications className="text-2xl" />
          </span>
          <span className="p-4 cursor-pointer">
            <FaRegUserCircle className="text-3xl" />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
