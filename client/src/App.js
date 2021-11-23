import React from "react";
import {NavBar} from "./components/navBar/NavBar";
import {useAuth} from "./hooks/auth.hook";
import {useRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from "./context/authContext";
import "materialize-css";

function App() {
    const { login, logout, token, userId } = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    return (
        <AuthContext.Provider value={{token, userId, login, logout, isAuthenticated}}>
            <BrowserRouter>
                <NavBar />
                <div className="container">
                    {routes}
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
