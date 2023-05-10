import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AddCoffee from "./components/AddCoffee/AddCoffee.jsx";
import Coffee from "./components/Coffee/Coffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee/UpdateCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://cofee-house-server-nuruddinmd509-gmailcom.vercel.app/coffee/${params.id}`),
  },
  {
    path: "/coffee",
    element: <Coffee></Coffee>,
    loader: () => fetch("https://cofee-house-server-nuruddinmd509-gmailcom.vercel.app/coffee"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
