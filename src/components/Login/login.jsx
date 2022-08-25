import "./login.css";

import GoogleIcon from "../../images/google-logo.svg";
import WhatsappLogo from "../../images/whatsapp-logo.svg";
import { FaPhone } from "react-icons/fa";

import { signInWithGooglePopup } from "../../utils/firebase.utils";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <img src={WhatsappLogo} alt="whatsapp logo" />
        <h2 className="signin-header">Sign In To WhatsApp</h2>
        <button
          className="btn signin-btn google-btn"
          onClick={signInWithGooglePopup}
        >
          <img src={GoogleIcon} alt="google logo" className="google-logo" />
          <span className="signin-btn-content">Sign in with Google</span>
        </button>
        <button className="btn signin-btn phone-btn">
          <FaPhone className="phone" />
          <span className="signin-btn-content">Sign in with phone </span>
        </button>
      </div>
    </div>
  );
};

export default Login;
