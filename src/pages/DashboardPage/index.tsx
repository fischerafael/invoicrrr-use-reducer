import { DashboardTemplate } from "../../src/components/DashboardTemplate";
import { MainSection } from "../../src/components/MainSection";
import { SideBar } from "../../src/components/SideBar";

export const DashboardPage = () => {
  return <DashboardTemplate sidebar={<SideBar />} main={<MainSection />} />;
};
