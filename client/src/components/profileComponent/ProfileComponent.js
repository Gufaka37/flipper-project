import React, {useContext} from "react";
import {AuthContext} from "../../context/authContext";

export const ProfileComponent = () => {
    const auth = useContext(AuthContext);

    return (
      <div>
          <button onClick={auth.logout}>Logout</button>
      </div>
    );
}