import React, {useContext, useState} from "react";
import "./navBar.css";
import {DropdownMenu} from "../dropdownMenu/DropdownMenu";
import {AuthComponent} from "../authorizationForms/AuthComponent";
import {AuthContext} from "../../context/authContext";
import {ProfileComponent} from "../profileComponent/ProfileComponent";

export const NavBar = () => {
    const [action, setAction] = useState("true");
    const auth = useContext(AuthContext);

    const updateAction = () => {
        setAction(!action);
    }

    return (
        <nav className="brown lighten-1">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Flipper</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {auth.isAuthenticated ? (<li><a className="navBarButtons">Score</a></li>) : ""}

                    <li>
                        <a
                            className="navBarButtons dropdown-trigger"
                            data-target="authorizationMenu"
                            href="#"
                        >
                            {auth.isAuthenticated ? "Profile" : "Login"}
                        </a>
                    </li>
                    <DropdownMenu
                        action={action}
                        target={"authorizationMenu"}
                        content={auth.isAuthenticated ? <ProfileComponent /> : <AuthComponent updateAction={updateAction} />}
                    />
                </ul>
            </div>
        </nav>

    );
}