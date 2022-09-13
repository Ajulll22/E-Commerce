import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/Api";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        getUserLogin()
    }, [auth])

    const getUserLogin = async () => {
        const response = await axios.get(API_URL + "auth/user", {
            withCredentials: true
        })
        console.log(response);
        if (response.status === 200) {
            setUser(response.data)
            setAuth(true)
        } else {
            setAuth(false)
        }
    }

    const value = {
        user,
        auth
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;