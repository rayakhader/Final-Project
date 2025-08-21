import Login from "../pages/Login";
import { PublicOnlyRoute } from "./PublicOnlyRoute";
import { ROUTES } from "./routePaths";
export const authRoute = [
    {
        path: ROUTES.LOGIN,
        element: (
            <PublicOnlyRoute>
                <Login />
            </PublicOnlyRoute>
        )
    }

]