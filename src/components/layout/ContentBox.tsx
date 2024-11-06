import Dashboard from "./Dashboard";
import Learn from "./Learn";
import Forums from "./Forums";
import Upskill from "./Upskill";
import Contest from "./Contest";
import Leaderboard from "./Leaderboard";
import { contentBoxProps } from "../../vite-env";

const ContentBox = ({ activeTab }: contentBoxProps) => {
  if (activeTab === "Dashboard") {
    return <Dashboard />;
  }

  if (activeTab === "Learn") {
    return <Learn />;
  }

  if (activeTab === "Forums") {
    return <Forums />;
  }

  if (activeTab === "Upskill") {
    return <Upskill />;
  }

  if (activeTab === "Contest") {
    return <Contest />;
  }

  if (activeTab === "Leaderboard") {
    return <Leaderboard />;
  }
  return null;
};

export default ContentBox;
