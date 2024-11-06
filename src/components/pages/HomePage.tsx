import { useState } from "react";
import ContentBox from "../layout/ContentBox";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<string>("Upskill");
  return (
    <>
      <Navbar />
      <div className="flex gap-5">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <ContentBox activeTab={activeTab} />
      </div>
    </>
  );
};

export default HomePage;
