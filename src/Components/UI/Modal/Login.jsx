import { useModal, useNetworkCalls } from "Context";
import { Button, IconButton, InputTypeOne } from "Components";
import { useState } from "react";
import "./Login.css";
import { InputTypePassword } from "../Input";
import { LabelIconButton } from "../Button";

export const Login = () => {
  const {
    setShowLogin,
    setShowSignup,
    setAlertText,
    setShowAlert,
    setShowResetPassword,
  } = useModal();
  const {
    emailPasswordLoginHandler,
    googleLoginHandler,
    facebookLoginHandler,
  } = useNetworkCalls();

  const [showPassword, setShowPassword] = useState(false);
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const emailValidate =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onLoginClickFormHandler = () => {
    if (loginInput.email.trim() === "" || loginInput.password.trim() === "") {
      setAlertText("Input cannot be blank, try again");
      setShowAlert(true);
    } else {
      if (loginInput.email.match(emailValidate)) {
        emailPasswordLoginHandler(loginInput.email, loginInput.password);
      } else {
        setAlertText("Entered email is wrong, please try again");
        setShowAlert(true);
      }
    }
  };

  const onLoginSubmitHandler = (e) => {
    e.preventDefault();
    onLoginClickFormHandler();
  };

  const resetPasswordClickHandler = () => {
    setShowLogin(false);
    setShowResetPassword(true);
  };

  const onModalInputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setLoginInput((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div
        className="modal-backdrop"
        onClick={() => {
          setShowLogin(false);
        }}
      ></div>
      <div className="signin-modal">
        <h1>Welcome Back</h1>
        <p>Enter your credentials to access your account</p>{" "}
        <IconButton
          btnClassName="btn icon-btn-sm close-modal-btn"
          icon="fas fa-times"
          onClick={() => {
            setShowLogin(false);
            setShowSignup(false);
          }}
        />
        <form onSubmit={onLoginSubmitHandler}>
          <InputTypeOne
            type="email"
            name="email"
            required="required"
            placeholder="Enter your email *"
            iconWrapper="input-icon"
            icon="far fa-envelope"
            inputWrapper="outline-email-input"
            onChange={onModalInputHandler}
            value={loginInput.email}
          />
          <InputTypePassword
            type={showPassword ? "text" : "password"}
            name="password"
            required="required"
            placeholder="Enter your password *"
            iconWrapper="input-icon"
            icon="fas fa-key"
            eyeIcon={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
            inputWrapper="outline-password-input password-input-field"
            onChange={onModalInputHandler}
            onEyeClick={() => {
              setShowPassword((preData) => !preData);
            }}
            value={loginInput.password}
          />
          <Button
            btnWrapper="signin-btn"
            type="submit"
            label="Sign-In with Email"
            btnClassName="btn primary-btn-md"
            onClick={onLoginClickFormHandler}
          />
        </form>
        <hr className="section-break-line" />
        <LabelIconButton
          icon="fab fa-google"
          label="Continue with Google"
          btnClassName="btn label-icon-outline-btn-md google-login"
          onClick={googleLoginHandler}
        />
        <LabelIconButton
          icon="fab fa-facebook"
          label="Continue with Facebook"
          btnClassName="btn label-icon-outline-btn-md facebook-login"
          onClick={facebookLoginHandler}
        />
        <h3 className="title-sm-wt-5 mg-1-bot mg-point6-top password-reset">
          Forgot your password?
          <span onClick={resetPasswordClickHandler}>Reset Password</span>
        </h3>
        <button
          className="btn primary-text-btn-sm create-account-btn"
          onClick={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        >
          <h2>
            Create New Account <i className="fas fa-angle-right"></i>
          </h2>
        </button>
      </div>
    </>
  );
};
