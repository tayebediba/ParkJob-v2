import Auth from "../components/auth/Auth/Auth";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import ProjectManagement from "../pages/dashboard/ProjectManagement/ProjectManagement";
import Category from "../pages/home/category/Category";
import ViewProject from "../pages/home/viewProject/ViewProject";
import QuestionsLayout from "../pages/home/howitWorksFreelancer/QuestionsLayout";
import HomeAboutUs from "../pages/home/HomeAboutUs/HomeAboutUs";
import PricingTableCommonPage from "../pages/home/PricingTableCommonPage/PricingTableCommonPage";
import TermsAndConditions from "../pages/home/TermsََAndConditions/TermsAndConditions";
import ProjectsList from "../pages/home/projectsList/ProjectsList";
import Freelancers from "../pages/home/Freelancers/Freelancers";
import FreelancerRate from "../pages/home/FreelancerRate/FreelancerRate";
import PricingTableHome from "../pages/home/PricingTableCommonPage/PricingTableHome";

const mainRoutes = [
  { path: "/", exact: true, Component: Home },
  { path: "/login", exact: true, Component: Auth },
  { path: "/signup", exact: true, Component: Auth },
  { path: "/dashboard", exact: false, Component: Dashboard },
  { path: "/manageProjectRouts", exact: true, Component: ProjectManagement },
  { path: "/manageProjectRouts", exact: true, Component: ProjectManagement },
  { path: "/Category", exact: true, Component: Category },
  { path: "/viewProject", exact: true, Component: ViewProject },
  { path: "/QuestionsLayout", exact: true, Component: QuestionsLayout },
  { path: "/HomeAboutUs", exact: true, Component: HomeAboutUs },
  {
    path: "/PricingTableCommonPage",
    exact: true,
    Component: PricingTableCommonPage,
  },
  { path: "/TermsAndConditions", exact: true, Component: TermsAndConditions },
  { path: "/ProjectsList", exact: true, Component: ProjectsList },
  { path: "/Freelancers", exact: true, Component: Freelancers },
  { path: "/FreelancerRate", exact: true, Component: FreelancerRate },
  { path: "/PricingTableHome", exact: true, Component: PricingTableHome },
];
export default mainRoutes;
