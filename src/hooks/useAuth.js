import { useContext } from "react"
import { AuthContext } from "../utilities/fakeData/AuthProvider";



export const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;