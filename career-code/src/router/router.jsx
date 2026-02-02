import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/register/Register";
import Login from "../pages/Auth/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ApplyJob from "../pages/JOB/ApplyJob";


export const router = createBrowserRouter([
  {
    path: "/",
    Component : RootLayout,
    children :[
        { index: true,
          Component : Home
        },
        {path : "/register",
          Component :Register,
        },
        {path : "/login",
          Component :Login,
        },
        {path : "/applyJob/:id",
         element: <PrivateRoute><ApplyJob/></PrivateRoute> ,
        },
    ]
  },
]);

export default router
