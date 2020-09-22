import React from "react";
import { useAuth0} from "@auth0/auth0-react";
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="LogIn" onClick={() => loginWithRedirect()}><VpnKeyIcon />{'       '}Log In</button>;
};

export default LoginButton;