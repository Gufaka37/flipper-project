import React, {useContext, useEffect} from "react";
import M from "materialize-css";
import {AuthContext} from "../../context/authContext";
import './dropdownMenu.css';

export const DropdownMenu = ({action, target, content}) => {
    const auth = useContext(AuthContext);

    useEffect(() => {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225, closeOnClick: false});
    }, []);

    return (
        <div className={`card dropdown-content 
            ${auth.isAuthenticated ? "dropdownMenu_profile" : 
                action ? "dropdownMenu_login" : "dropdownMenu_registration"} dropdownMenu`}
             id={target}>
            <div className="card-content">
                { content }
            </div>
        </div>
    );
}