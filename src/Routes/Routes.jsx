import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Admission from "../Pages/Admission/Admission";
import Colleges from "../Pages/Colleges/Colleges";
import MyCollege from "../Pages/MyCollege/MyCollege";
import CollegeCardDetails from "../Pages/CollegeCardDetails/CollegeCardDetails";
import Error from "../../Error";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUP";
import PrivateRoute from "./PrivateRoute";
import AdmissionForm from "../Pages/Admission/AdmissionForm";


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
        path: 'admission/:collegeId',
        element: <AdmissionForm></AdmissionForm>,
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
        element: <PrivateRoute><CollegeCardDetails></CollegeCardDetails></PrivateRoute>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>
      },
    ]
  },

  
  {
    path: '*',
    element: <Error></Error>
  }

]);