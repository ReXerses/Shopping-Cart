import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
//import altre pagine
import Shop from "./componenti/Shop";
import ErrorPage from "./componenti/ErrorPage";
import { Children } from "react";

const Router = () => {
    const router = createBrowserRouter ([
        {
            path: '/',
            element: <App/>,
            errorElement: <ErrorPage/>,
        },
        {
            path:'/shop',
            element:<Shop />
        },
    ]);
    return <RouterProvider router={router}/>
}

export default Router;