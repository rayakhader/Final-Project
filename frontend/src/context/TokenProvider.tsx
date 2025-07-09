import { createContext, ReactNode, useState } from "react";

type TokenContextType = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
} 
export const TokenContext = createContext<TokenContextType>({
    token: null,
    setToken : ()=>{}

});

export default function TokenProvider({children}:{children:ReactNode}){
    const [token, setToken] = useState(localStorage.getItem('token'))
    return (
        <TokenContext.Provider value={{token, setToken}}>
            {children}
        </TokenContext.Provider>
    )
}

