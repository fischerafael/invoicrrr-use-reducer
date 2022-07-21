import { DashboardTemplate } from "../../components/DashboardTemplate";
import { MainSection } from "../../components/MainSection";
import { SideBar } from "../../components/SideBar";

export const DashboardPage = () => {
  return <DashboardTemplate sidebar={<SideBar />} main={<MainSection />} />;
};
