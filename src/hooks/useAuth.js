import { useContext } from "react"
import { AuthContext } from "../utilities/AuthProvider"



export const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;