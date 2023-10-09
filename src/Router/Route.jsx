import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";
import ServicesDetails from "../components/Main/ServicesDetails/ServicesDetails";
import Booking from "../Pages/Booking/Booking";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Home/Register/Register";
import PrivateRoute from "./PrivateRoute";

import Faq from "../Pages/Gallery/Faq";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/event.json"),
      },
      {
        path: "/booking",
        element: <PrivateRoute><Booking></Booking></PrivateRoute>,
      },
      {
        path: "/contact",
        element: <PrivateRoute><Contact></Contact></PrivateRoute>,
      },
      {
        path: "/faq",
        element: <PrivateRoute><Faq></Faq></PrivateRoute>,
      },

      {
        path: "/cardDetails/:id",
        element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
        loader: () => fetch("/event.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default myCreatedRoute;
