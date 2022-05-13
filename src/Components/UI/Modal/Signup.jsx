import { Button } from "../Button/Button";
import { AlertToast, IconButton, InputTypeOne } from "Components";
import "./Signup.css";
import { useModal, useNetworkCalls } from "Context";
import { useState } from "react";
import { LabelIconButton } from "../Button";

const initialSignupState = {
  email: "",
  password: "",
};

export const Signup = () => {
  const { setShowLogin, setShowSignup } = useModal();

  const [user, setUser] = useState(initialSignupState);
  const { userSignupHandler, googleLoginHandler, facebookLoginHandler } =
    useNetworkCalls();
  const [confirmPassword, setConfirmPassword] = useState("");

  const emailValidate =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

  const onSignupFormSubmitHandler = (e) => {
    e.preventDefault();
    if (user.email.trim() === "") {
      AlertToast("error", "Enter valid email");
    } else {
      if (
        user.password.match(passwordValidate) &&
        user.email.match(emailValidate)
      ) {
        if (user.password === confirmPassword) {
          userSignupHandler(user.email, user.password);
          setShowSignup(false);
          setUser(initialSignupState);
          setConfirmPassword("");
        } else {
          AlertToast("error", "Password Mismatched");
          setConfirmPassword("");
        }
      } else {
        AlertToast(
          "error",
          "Password should be, Minimum 8 char, 1 Uppercase, 1 Lowercase, 1 number & 1 Special Character"
        );
      }
    }
  };

  const onInputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onCloseClick = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const onLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  return (
    <>
      <div
        className="modal-backdrop"
        onClick={() => {
          setShowSignup(false);
        }}
      ></div>
      <div className="signup-modal-one">
        <h1>Sign Up</h1>
        <p>Please provide your details.</p>
        <IconButton
          btnClassName="btn icon-btn-sm close-modal-btn"
          icon="fas fa-times"
          onClick={onCloseClick}
        />

        <form onSubmit={onSignupFormSubmitHandler}>
          <InputTypeOne
            label="Email *"
            type="email"
            name="email"
            required="required"
            autoComplete="email"
            placeholder="Enter your email *"
            inputWrapper="outline-email-input"
            onChange={onInputChangeHandler}
            value={user.email}
          />
          <InputTypeOne
            label="Password *"
            type="password"
            name="password"
            required="required"
            autoComplete="current-password"
            placeholder="Enter your password"
            inputWrapper="outline-password-input"
            onChange={onInputChangeHandler}
            value={user.password}
          />
          <InputTypeOne
            label="Confirm Password *"
            type="text"
            name="confirm-password"
            required="required"
            placeholder="Confirm password"
            inputWrapper="outline-password-input"
            onChange={onConfirmPasswordHandler}
            value={confirmPassword}
          />
          <p>
            By continuing you agree to our Terms of Service and
            <span> Privacy Policy</span>
          </p>
          <Button
            onClick={onSignupFormSubmitHandler}
            btnWrapper="signup-btn"
            type="submit"
            btnClassName="btn primary-btn-md"
            label=" Sign Up"
          />{" "}
        </form>
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
        <div className="existing-account-btn" onClick={onLoginClick}>
          <h2>
            already have an account
            <span>Login</span>
            <i className="fas fa-angle-right"></i>
          </h2>
        </div>
      </div>
    </>
  );
};
