import React from "react";
import { useAuth0} from "@auth0/auth0-react";
import EventIcon from '@material-ui/icons/AcUnit';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="LogIn" onClick={() => loginWithRedirect()}><EventIcon />{'       '}Log In</button>;
};

export default LoginButton;