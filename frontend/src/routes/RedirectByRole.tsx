import React, { useContext } from 'react'
import { UserTypeContext } from '../context/UserTypeProvider'
import { Navigate } from 'react-router-dom'
import { ROUTES } from './routePaths'

function RedirectByRole() {
    const { userType } = useContext(UserTypeContext)

    if (userType === 'Admin') {
        return <Navigate to={ROUTES.ADMIN} replace />
    }
    if (userType === 'User') {
        return <Navigate to={ROUTES.HOME} replace />
    }

    return <Navigate to={ROUTES.LOGIN} replace />;

}

export default RedirectByRole
