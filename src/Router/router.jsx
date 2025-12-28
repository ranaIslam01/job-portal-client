import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import RootLayout from "../Layout/RootLayout";
import FindJob from "../Pages/FindJob";
import Companies from "../Pages/Companies";
import Salaries from "../Pages/Salaries";
import PostJob from "../Pages/PostJob";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import Loading from "../Components/Loading";
import JobDetails from "../Components/JobDetails";
import JobApply from "../Components/JobApply";
import PrivateRoute from "../PrivateRoute.jsx/PrivateRoute";
import SalaryTips from "../Components/SalaryTips";
import SalaryCalculator from "../Components/SalaryCalculator";
import SalaryLayout from "../Layout/SalaryLayout";
import Errorpage from "../Pages/Errorpage";
import MyPostedJobs from "../Components/MyPostedJobs/MyPostedJobs";
import MyApplications from "../Components/MyApplication";
import UpdatePostJob from "../Components/UpdatePostJob";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "find-jobs",
        Component: FindJob,
      },
      {
        path: "jobs/:id",
        Component: JobDetails,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://job-portal-server-y6ck.onrender.com/jobs/${params.id}`
          );
          if (!res.ok) {
            throw new Response("Not Found", { status: 404 });
          }
          return res.json();
        },
        errorElement: (
          <div className="p-10 text-center text-red-500">
            জবটি খুঁজে পাওয়া যায়নি!
          </div>
        ),
        HydrateFallback: Loading,
      },
      {
        path: "companies",
        Component: Companies,
      },
      {
        path: "salary-tips",
        Component: SalaryTips,
      },
      {
        path: "my-jobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "my-applications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "post-job",
        element: (
          <PrivateRoute>
            <PostJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-job/:id",
        element: (
          <PrivateRoute>
            <UpdatePostJob />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://job-portal-server-y6ck.onrender.com/job-post/${params.id}`
          ),
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "job-apply/:id",
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch(
            `https://job-portal-server-y6ck.onrender.com/jobs/${params.id}`
          );
          if (!res.ok) {
            throw new Response("Not Found", { status: 404 });
          }
          return res.json();
        },
        errorElement: (
          <div className="p-10 text-center text-red-500">
            জবটি খুঁজে পাওয়া যায়নি!
          </div>
        ),
        HydrateFallback: Loading,
      },
    ],
  },

  {
    path: "/salaries",
    Component: SalaryLayout,
    children: [
      {
        index: true,
        Component: Salaries,
      },
      {
        path: "salary-tips",
        Component: SalaryTips,
      },
      {
        path: "salary-calculator",
        Component: SalaryCalculator,
      },
    ],
  },
]);
