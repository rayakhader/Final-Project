import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { TokenContext } from '../context/TokenProvider';
import { UserTypeContext } from '../context/UserTypeProvider';


export const PublicOnlyRoute = ({ children }: { children: React.ReactNode }) => {
    const { token } = useContext(TokenContext)
    const { userType } = useContext(UserTypeContext)
    const BASE_PATH = userType === 'Admin' ? '/admin' : '/home'

    if (!token) {
        return <>{children}</>
    }
    if (userType) {
        return <Navigate to={BASE_PATH} replace />;
    }
    return <>{children}</>;
};
