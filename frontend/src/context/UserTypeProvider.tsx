import { createContext, ReactNode, useState } from "react";
import { UserRole } from "../types/userRole";
type UserTypeContextType = {
    userType: UserRole | null;
    setUserType: React.Dispatch<React.SetStateAction<UserRole | null>>;
}
export const UserTypeContext = createContext<UserTypeContextType>({
    userType: null,
    setUserType: () => { }

});

export default function UserTypeProvider({ children }: { children: ReactNode }) {
    const storedUserType = localStorage.getItem('userType') as UserRole | null;
    const [userType, setUserType] = useState<UserRole | null>(storedUserType)
    return (
        <UserTypeContext.Provider value={{ userType, setUserType }}>
            {children}
        </UserTypeContext.Provider>
    )
}

