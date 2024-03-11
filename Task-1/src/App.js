import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Header from "./components/Header";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Success from "./components/Success";

const AppLayout = () => {

    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Form1 />
            },
            {
                path: "/form",
                element: <Form2 />
            },
            {
                path: "/success",
                element: <Success />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
