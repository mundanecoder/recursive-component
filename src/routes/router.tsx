import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import FileSystem from "../pages/File/index";
import Payment from "../pages/PaymentPortal";
import FinanceModel from "../pages/finance-model";
import SSRComponent from "../pages/SSRinReact";
const router = createBrowserRouter([
  {
    path: "/ssr",
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
  {
    path: "payment",
    element: <Payment />,
  },
  {
    path: "fin",
    element: <FinanceModel />,
  },
  { path: "/", element: <SSRComponent /> },
]);

export default router;
