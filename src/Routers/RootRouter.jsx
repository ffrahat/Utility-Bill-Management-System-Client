import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Auth/Login/Login";
import Registar from "../Auth/Registar/Registar";
import PrivateRoutes from "../Auth/PrivateRoutes/PrivateRoutes";
import Contact from "../Pages/Contact";
import Bills from "../Pages/Bills";


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'registar',
                Component: Registar
            },
            {
                path: 'contact',
                element: <PrivateRoutes> <Contact /> </PrivateRoutes>
            },
            {
                path: 'bills',
                Component: Bills
            }
        ]
    }
]);

export default router;