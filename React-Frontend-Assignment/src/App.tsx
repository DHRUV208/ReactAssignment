import UserInfoForm from "./components/UserInfoForm";
import FamilyInfoForm from "./components/FamilyInfoForm";
import Header from "./components/Header";
import {createRoot} from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Success from "./components/Success";
import { Suspense, lazy } from "react";
import DataProvider from "./context/dataProvider";
import Error from "./components/Error";

const Task2 = lazy(()=>import ("./components/Task2"));

const AppLayout: React.FC = () => {
  return (
    <DataProvider>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </DataProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <UserInfoForm />,
      },
      {
        path: "/form",
        element: <FamilyInfoForm />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/task2",
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            {" "}
            <Task2 />{" "}
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />
  },
]);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<RouterProvider router={appRouter} />);
