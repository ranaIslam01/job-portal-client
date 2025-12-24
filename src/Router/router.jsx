import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import RootLayout from "../Layout/RootLayout";
import FindJob from "../Pages/FindJob";
import Companies from "../Pages/Companies";
import Salaries from "../Pages/Salaries";
import PostJob from "../Pages/PostJob";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
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
        path: "companies",
        Component: Companies,
      },
      {
        path: "salaries",
        Component: Salaries,
      },
      {
        path: "/post-job",
        Component: PostJob,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
    ],
  },
]);
