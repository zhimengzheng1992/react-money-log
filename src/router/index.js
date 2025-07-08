import { createBrowserRouter } from "react-router-dom";
import Layout from "@/page/Layout/index";
import Month from "@/page/Month/index";
import Year from "@/page/Year/index";
import New from "@/page/New/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Month />,
      },
      {
        path: "month",
        element: <Month />,
      },
      {
        path: "year",
        element: <Year />,
      },
    ],
  },
  {
    path: "/new",
    element: <New />,
  },
]);

export default router;
