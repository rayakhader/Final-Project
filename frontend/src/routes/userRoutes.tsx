import Checkout from "../pages/Checkout"
import Confirmation from "../pages/Confirmation"
import Home from "../pages/Home"
import Hotel from "../pages/Hotel"
import SearchResults from "../pages/SearchResults"
import { ProtectedRoute } from "./ProtectedRoute"
import { ROUTES } from "./routePaths"
import City from "../pages/City"
import Bookings from "../pages/Bookings"

export const userRoutes = [
    {
        path: ROUTES.HOME,
        element:
            <ProtectedRoute allowedRoles={["User"]}>
                <Home />
            </ProtectedRoute>
    }, {
        path: ROUTES.SEARCH_RESULTS,
        element:
            <ProtectedRoute allowedRoles={["User"]}>
                <SearchResults />
            </ProtectedRoute>
    }, {
        path: ROUTES.HOTEL,
        element:
            <ProtectedRoute allowedRoles={["User"]}>
                <Hotel />
            </ProtectedRoute>
    },
    {
        path: ROUTES.CHECKOUT,
        element:
            <ProtectedRoute allowedRoles={["User"]}>
                <Checkout />
            </ProtectedRoute>
    }, {
        path: ROUTES.CHECKOUT_CONFIRMATION,
        element: <Confirmation />
    },
    {
        path: ROUTES.CITY,
        element: <ProtectedRoute allowedRoles={["User"]}>
            <City />
        </ProtectedRoute>
    },
    {
        path: ROUTES.BOOKING,
        element: <ProtectedRoute allowedRoles={["User"]}>
            <Bookings />
        </ProtectedRoute>
    },
    

]