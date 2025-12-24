import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import RootLayout from "../Layout/RootLayout";
import FindJob from "../Pages/FindJob";
import Companies from "../Pages/Companies";

export const router = createBrowserRouter([
   {
      path:"/",
      Component: RootLayout,
      children:[
         {
            index: true,
            Component: Home
         },
         {
            path: "find-jobs",
            Component: FindJob,
         },
         {
            path:"companies",
            component: Companies,
         },
         {
            path:"salaries",
            component: Companies,
         }
      ]
   }
])