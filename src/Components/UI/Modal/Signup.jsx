import { AlertToast, IconButton } from "Components";
import "./Signup.css";
import { useModal, useNetworkCalls } from "Context";
import { useState } from "react";
import { GoogleFacebookHandler } from "./GoogleFacebookHandler/GoogleFacebookHandler";
import { SignupInputForm } from "./SignupInputForm/SignupInputForm";

const initialSignupState = {
  email: "",
  password: "",
};

export const Signup = () => {
  const { modalDispatch } = useModal();

  const [user, setUser] = useState(initialSignupState);
  const { userSignupHandler } = useNetworkCalls();
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
          modalDispatch({ type: "SHOW_SIGNUP", payload: false });
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
    modalDispatch({ type: "SHOW_LOGIN", payload: false });
    modalDispatch({ type: "SHOW_SIGNUP", payload: false });
  };

  const onLoginClick = () => {
    modalDispatch({ type: "SHOW_LOGIN", payload: true });
    modalDispatch({ type: "SHOW_SIGNUP", payload: false });
  };

  return (
    <>
      <div
        className="modal-backdrop"
        onClick={() => {
          modalDispatch({ type: "SHOW_SIGNUP", payload: false });
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
        <SignupInputForm
          onSignupFormSubmitHandler={onSignupFormSubmitHandler}
          onInputChangeHandler={onInputChangeHandler}
          user={user}
          confirmPassword={confirmPassword}
          onConfirmPasswordHandler={onConfirmPasswordHandler}
        />
        <GoogleFacebookHandler
          googleText="Continue with Google"
          facebookText="Continue with Facebook"
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
