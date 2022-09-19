import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/Api";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [auth, setAuth] = useState(true)

    useEffect(() => {
        getUserLogin()
    }, [])

    useEffect(() => {
        getUserLogin()
    }, [auth])

    const getUserLogin = async () => {
        try {
            const response = await axios.get(API_URL + "auth/user", {
                withCredentials: true
            })
            console.log(response);

            setUser(response.data)
            setAuth(true)

        } catch (error) {
            setAuth(false)
        }
    }

    const onLogout = async () => {
        try {
            const response = await axios.get(API_URL + "auth/logout", {
                withCredentials: true
            })

            setAuth(false)

        } catch (error) {
            console.log(error.response.data);
            setAuth(false)
        }
    }

    const value = {
        user,
        auth,
        setAuth,
        onLogout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;