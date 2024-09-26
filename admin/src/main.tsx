import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Fillial from "./components/Fillial.tsx";
import Lavozim from "./components/Lavozim.tsx";
import { anketa, filial, lavozim } from "./constant/constant.ts";
import Anketa from "./components/Anketa.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: `/${filial}`,
        element: <Fillial />,
      },
      {
        path: `/${lavozim}`,
        element: <Lavozim />,
      },
      {
        path: `/${anketa}`,
        element: <Anketa />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
