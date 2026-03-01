import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import AddCoffe from "./Component/AddCoffe.jsx";
import Update from "./Component/Update.jsx";
import Home from "./Component/Home.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import CoffeeDetails from "./Component/CoffeeDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch(`http://localhost:8000/coffes`),
        // Component: Home,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home></Home>
          </Suspense>
        ),
      },
      {
        path: "addCoffe",
        Component: AddCoffe,
      },
      {
        path: "updateCoffe/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:8000/coffes/${params.id}`),
        Component: Update,
      },
      {
        path: `coffes/:id`,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/coffes/${params.id}`),
        Component: CoffeeDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
