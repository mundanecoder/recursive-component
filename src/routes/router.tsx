import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import FileSystem from "../pages/File/index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/filesystem",
  //   element: <App />,
  // },
  {
    path: "filesystem",
    element: <FileSystem />,
  },
]);

export default router;
