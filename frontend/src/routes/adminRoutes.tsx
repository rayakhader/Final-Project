import path from "path"
import MainLayout from "../layout/Index"
import Cities from "../pages/Cities"
import Hotels from "../pages/Hotels"
import Rooms from "../pages/Rooms"
import { ROUTES } from "./routePaths"
import NotFound from "../features/error/NotFound"
import { ProtectedRoute } from "./ProtectedRoute"
import Dashboard from "../pages/Dashboard"
import { Navigate } from "react-router-dom"

export const adminRoutes = [
    {
        path: ROUTES.ADMIN,
        element: 
        <ProtectedRoute allowedRoles={["Admin"]}>
            <MainLayout />
        </ProtectedRoute>,
        children: [
            { index: true, element: <Navigate to={ROUTES.ADMIN_DASHBOARD} /> },
            {
                path:'dashboard',
                element:<Dashboard />

            },
            {
                path: 'cities',
                element: <Cities />
            },
            {
                path: 'rooms',
                element: <Rooms />
            },
            {
                path:'hotels',
                element: <Hotels />
            },
            {
                path:'*',
                element:<NotFound />
            }

]
    }
]
