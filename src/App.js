import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenu from "./components/RestaurantMenu";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About />,
      },,
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading</h1>}>
                    <Grocery/>
                 </Suspense>
      }

    ],
    errorElement: <ErrorComponent/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
