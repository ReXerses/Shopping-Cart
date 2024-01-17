import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componenti/Home";
import Navbar from "./componenti/Navbar";
//import altre pagine
import Shop from "./componenti/Shop";
import ErrorPage from "./componenti/ErrorPage";
import { Children } from "react";
import OurBrand from "./componenti/OurBrand";

const Router = () => {
    const router = createBrowserRouter ([
        {
            path: '/',
            element: <Navbar/>,
            errorElement: <ErrorPage/>,
            children: [
                {index : true, element: <Home/>},
                {path:'/shop', element: <Shop /> },
                {path:'/ourBrand', element: <OurBrand /> },
            ]
        },
    ]);
    return <RouterProvider router={router}/>
}

export default Router;