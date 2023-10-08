import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";
import ServicesDetails from "../components/Main/ServicesDetails/ServicesDetails";
import Booking from "../Pages/Booking/Booking";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Home/Register/Register";

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
        element: <Booking></Booking>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/cardDetails/:id",
        element: <ServicesDetails></ServicesDetails>,
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
