import App from "@/App";
import Main from "@/components/layout/Main";
import Home from "@/pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default router;
