import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componenti/Home";
import Navbar from "./componenti/Navbar";
import Shop from "./componenti/Shop";
import ErrorPage from "./componenti/ErrorPage";
import OurBrand from "./componenti/OurBrand";
import LoginPage from "./componenti/LoginPage";
import CartPage from "./componenti/CartPage";

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
                {path:'/login', element: <LoginPage /> },
                {path:'/cart', element: <CartPage /> },
            ]
        },
    ]);
    return <RouterProvider router={router}/>
}

export default Router;