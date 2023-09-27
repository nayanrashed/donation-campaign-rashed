import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donations from "../Pages/Donations/Donations";
import Statistics from "../Pages/Statistics/Statistics";
import Donation from "../Pages/Donation/Donation";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('/data.json'),
      },
      {
        path: "/donations",
        element: <Donations></Donations>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader:()=>fetch('/data.json'),
      },
      {
        path:"/donation/:id",
        element:<Donation></Donation>,
        loader:()=>fetch('/data.json'),
      }
    ],
  },
]);
export default myCreatedRoute;
