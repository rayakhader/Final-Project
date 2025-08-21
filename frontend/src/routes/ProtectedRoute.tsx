import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { TokenContext } from '../context/TokenProvider';
import { UserTypeContext } from '../context/UserTypeProvider';
import { UserRole } from '../types/userRole';

type ProtectedRouteProps = {
    children: React.ReactNode;
    allowedRoles: UserRole[];
};

export const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
    const { token } = useContext(TokenContext)
    const { userType } = useContext(UserTypeContext)
    const BASE_PATH = userType === 'Admin' ? '/admin' : '/home'


    if (!token) {
        return <Navigate to="/login" replace />;
    }
    if (userType && !allowedRoles.includes(userType)) {
        return <Navigate to={BASE_PATH} replace />;
    }
    return <>{children}</>;
};
