import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Admission from "../Pages/Admission/Admission";
import Colleges from "../Pages/Colleges/Colleges";
import MyCollege from "../Pages/MyCollege/MyCollege";
import CollegeCardDetails from "../Pages/CollegeCardDetails/CollegeCardDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/admission',
        element: <Admission></Admission>
      },
      {
        path: '/colleges',
        element: <Colleges></Colleges>
      },
      {
        path: '/my-college',
        element: <MyCollege></MyCollege>
      },
      {
        path: 'college-card-details/:cardId',
        element: <CollegeCardDetails></CollegeCardDetails>,
      },
    ]
  },
]);