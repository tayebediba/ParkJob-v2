import EndedProjectTable from "../components/EndedProjectTable/EndedProjectTable";
import InProgressTable from "../components/inProcrsessTable/InProgressTable";
import ManagementTable from "../components/managementTable/ManagementTable";

const manageProjectRouts = [
  {
    path: "/dashboard/projectmanagement",
    exact: true,
    Component: ManagementTable,
  },
  {
    path: "/dashboard/projectmanagement/inprogress",
    exact: true,
    Component: InProgressTable,
  },
  {
    path: "/dashboard/projectmanagement/ended",
    exact: true,
    Component: EndedProjectTable,
  },
];
export default manageProjectRouts;
