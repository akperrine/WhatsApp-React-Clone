import "./login.css";
import { useContext, useRef, useState } from "react";

import GoogleIcon from "../../images/google-logo.svg";
import WhatsappLogo from "../../images/whatsapp-logo.svg";
import { FaPhone } from "react-icons/fa";
import { InputLabel } from "@mui/material";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromGoogle,
} from "../../utils/firebase.utils";
import { UserContext } from "../../Contexts/user.context";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const Login = () => {
  const [areaCode, setAreaCode] = useState("");
  const [number, setNumber] = useState(0);
  // const { currentUser, setCurrentUser } = useContext(UserContext);
  const formRef = useRef();
  const containerRef = useRef();

  const handleCodeInput = (e) => {
    setAreaCode(e.target.value);
  };

  const handleNumberInput = (e) => {
    setNumber(e.target.value);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    // setCurrentUser(user);
    const userDocRef = await createUserDocumentFromGoogle(user);
  };

  const generateRecaptcha = () => {
    return (window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha",
      {},
      auth
    ));
  };

  const handlePhoneLogin = (e) => {
    e.preventDefault();

    generateRecaptcha();
    let phonenumber = `${areaCode}-${number}`;
    console.log(typeof phonenumber, phonenumber);
    let appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phonenumber, appVerifier)
      .then((confrimationResult) => {
        window.confrimationResult = confrimationResult;
        let code = prompt("Please Enter the OTP: ");
        if (code === null) return;
        confrimationResult
          .confirm(code)
          .then((authUser) => {
            const username = prompt("Enter a username");
            console.log(username);
          })
          .catch((error) => {
            console.log("ERROR at username", error);
          });
      })
      .catch((error) => {
        console.log("ERROR!!", error);
      });
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
      <form ref={formRef} className="login-form" onSubmit={handlePhoneLogin}>
        <h3>Please enter your phone number</h3>
        <div className="login-phonenumber">
          <span className="phone-input-container">
            <input className="code-input" onChange={handleCodeInput} />
            <input className="number-input" onChange={handleNumberInput} />
          </span>
          <span className="phone-label-container">
            <InputLabel className="code-label">Code</InputLabel>
            <InputLabel className="number-label">Phone Number</InputLabel>
          </span>
        </div>
        <div className="recaptcha" id="recaptcha"></div>
        <div className="phone-btn-container">
          <button className="phone-verify-btn" type="submit">
            Verify
          </button>
          <button className="phone-verify-btn" onClick={cancelPhoneVerify}>
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
