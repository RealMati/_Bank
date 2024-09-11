import Content from "@/components/Content";
import DashboardContent from "./DashboardContent";

export default function Home() {
  return <Content content={<DashboardContent />} title="Overview" />;
}
