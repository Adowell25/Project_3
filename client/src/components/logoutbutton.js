import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="LogOut" onClick={() => logout({ returnTo: window.location.origin })}><ExitToAppIcon />{'       '}
      Log Out
    </button>
  );
};

export default LogoutButton;