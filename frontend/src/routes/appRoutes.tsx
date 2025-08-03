import { Navigate } from "react-router-dom";
import { adminRoutes } from "./adminRoutes";
import { authRoute } from "./authRoute";
import { userRoutes } from "./userRoutes";
import { ROUTES } from "./routePaths";
import Nav from "../layout/Nav";
import RedirectByRole from "./RedirectByRole";
import Profile from "../pages/Profile";
import { ProtectedRoute } from "./ProtectedRoute";

export const appRoutes = [
    {
        path: ROUTES.BASE,
        element:
            <Nav />
        , children: [
            { index: true, element: <RedirectByRole /> },
            ...authRoute,
            ...userRoutes,
            ...adminRoutes,
            {
                path: '/profile',
                element: <ProtectedRoute allowedRoles={["Admin","User"]}>
                    <Profile />
                </ProtectedRoute>
            }
        ]
    }, {
        path: '*',
        element: <Navigate to={ROUTES.LOGIN} />
    }
]