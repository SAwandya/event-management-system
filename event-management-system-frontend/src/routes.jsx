import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import EventDetails from "./pages/EventDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "/eventdetails",
        element: <EventDetails/>,
      },
    ],
  },
]);

export default router;
