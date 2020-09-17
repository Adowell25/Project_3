import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import EventIcon from '@material-ui/icons/AcUnit';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="LogOut" onClick={() => logout({ returnTo: window.location.origin })}><EventIcon />{'       '}
      Log Out
    </button>
  );
};

export default LogoutButton;