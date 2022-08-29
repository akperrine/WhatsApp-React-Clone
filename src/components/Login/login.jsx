import "./login.css";
import { useContext, useRef } from "react";

import GoogleIcon from "../../images/google-logo.svg";
import WhatsappLogo from "../../images/whatsapp-logo.svg";
import { FaPhone } from "react-icons/fa";
import { InputLabel } from "@mui/material";

import { signInWithGooglePopup } from "../../utils/firebase.utils";
import { UserContext } from "../../Contexts/user.context";

const Login = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const formRef = useRef();
  const containerRef = useRef();

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user);
  };

  const signInWithPhone = () => {
    formRef.current.style.display = "flex";
    containerRef.current.style.display = "none";
  };

  const cancelPhoneVerify = (event) => {
    event.preventDefault();

    formRef.current.style.display = "none";
    containerRef.current.style.display = "flex";
  };

  return (
    <div className="login">
      <div ref={containerRef} className="login-container">
        <img src={WhatsappLogo} alt="whatsapp logo" />
        <h2 className="signin-header">Sign In To WhatsApp</h2>
        <button
          className="btn signin-btn google-btn"
          onClick={signInWithGoogle}
        >
          <img src={GoogleIcon} alt="google logo" className="google-logo" />
          <span className="signin-btn-content">Sign in with Google</span>
        </button>
        <button className="btn signin-btn phone-btn" onClick={signInWithPhone}>
          <FaPhone className="phone" />
          <span className="signin-btn-content">Sign in with phone </span>
        </button>
      </div>
      <form ref={formRef} className="login-form">
        <h3>Please enter your phone number</h3>
        <div className="login-phonenumber">
          <span className="phone-input-container">
            <input className="code-input" />
            <input className="number-input" />
          </span>
          <span className="phone-label-container">
            <InputLabel className="code-label">Code</InputLabel>
            <InputLabel className="number-label">Phone Number</InputLabel>
          </span>
        </div>
        <div className="phone-btn-container">
          <button className="phone-verify-btn">Verify</button>
          <button className="phone-verify-btn" onClick={cancelPhoneVerify}>
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
