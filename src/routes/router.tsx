import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import FileSystem from "../pages/File/page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/filesystem",
    element: <App />,
  },
  {
    path: "file",
    element: <FileSystem />,
  },
]);

export default router;
