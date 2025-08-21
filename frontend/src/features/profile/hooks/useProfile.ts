import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../../../context/TokenProvider";
import { jwtDecode } from "jwt-decode";
import { TokenPayload } from "../types";


export const useProfile = () => {
    const { token } = useContext(TokenContext);
    const [profileDetails, setProfileDetails] = useState<TokenPayload | null>(null);

    useEffect(() => {
        if (token) {
            const decoded = jwtDecode<TokenPayload>(token);
            setProfileDetails(decoded);
        }
    }, [token]);

    return{profileDetails}
}