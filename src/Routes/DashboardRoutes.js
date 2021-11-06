import Bills from "../pages/dashboard/Bills/Bills";
import DashboardMain from "../pages/dashboard/dashboard/DashboardMain";
import EditProfile from "../pages/dashboard/EditProfile/EditProfile";
import Followers from "../pages/dashboard/Followers/Followers";
import Followings from "../pages/dashboard/Followings/Followings";
import Inbox from "../pages/dashboard/Inbox/Inbox";
import Profile from "../pages/dashboard/Profile/Profile";
import ProjectManagement from "../pages/dashboard/ProjectManagement/ProjectManagement";
import Resume from "../pages/dashboard/Resume/Resume";
import StatisticsFreelancer from "../pages/dashboard/statistics/StatisticsFreelancer";
import MembershipUpgrade from "../pages/dashboard/MembershipUpgrade/MembershipUpgrade";
import PricingTable from "../pages/dashboard/MembershipUpgrade/PricingTable";
import FitsSkill from "../pages/FitsSkill/FitsSkill";
import AllProject from "../pages/dashboard/AllProject/AllProject";
const dashboardRoutes = [
  { path: "/dashboard", exact: true, Component: DashboardMain },
  { path: "/dashboard/bills", exact: true, Component: Bills },
  { path: "/dashboard/editprofile", exact: true, Component: EditProfile },
  { path: "/dashboard/profile", exact: true, Component: Profile },
  { path: "/dashboard/followers", exact: true, Component: Followers },
  { path: "/dashboard/followings", exact: true, Component: Followings },
  {
    path: "/dashboard/projectmanagement",
    exact: false,
    Component: ProjectManagement,
  },
  { path: "/dashboard/resume", exact: true, Component: Resume },
  {
    path: "/dashboard/StatisticsFreelancer",
    exact: true,
    Component: StatisticsFreelancer,
  },
  { path: "/dashboard/Inbox", exact: true, Component: Inbox },
  {
    path: "/dashboard/MembershipUpgrade",
    exact: true,
    Component: MembershipUpgrade,
  },
  { path: "/dashboard/PricingTable", exact: true, Component: PricingTable },
  { path: "/dashboard/FitsSkill", exact: true, Component: FitsSkill },
  { path: "/dashboard/AllProject", exact: true, Component: AllProject },
];
export default dashboardRoutes;
