import { AlertToast } from "Components";
import { useModal, useNetworkCalls } from "Context";
import { firestore } from "firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { cleanErrorMessage } from "Utils/cleanErrorMessage";
import { Button, IconButton } from "../Button";
import "./ResetPassword.css";
export const ResetPassword = () => {
  const { modalDispatch } = useModal();
  const { passwordResetEmailHandler } = useNetworkCalls();

  const [email, setEmail] = useState("");

  // check if user is in database
  const getUserData = async () => {
    const selectUser = doc(firestore, `users/${email}`);
    try {
      const userResponse = await getDoc(selectUser);
      if (userResponse.exists()) {
        passwordResetEmailHandler(email);
        modalDispatch({ type: "SHOW_RESET_PASSWORD", payload: false });
      } else {
        setEmail("");
        AlertToast("error", "User not found, enter correct email");
      }
    } catch (error) {
      AlertToast("error", cleanErrorMessage(error.message));
    }
  };

  const delayFunction = (delay) => {
    let setTimer;
    return (e) => {
      clearTimeout(setTimer);
      setTimer = setTimeout(() => {
        setEmail(e.target.value);
      }, delay);
    };
  };

  const debounce = delayFunction(300);

  const sendResetClickHandler = () => {
    if (email.trim() === "") {
      AlertToast("info", "Enter a valid email");
    } else {
      getUserData();
    }
  };

  return (
    <div className="reset-password-container">
      <div>
        <IconButton
          onClick={() =>
            modalDispatch({ type: "SHOW_RESET_PASSWORD", payload: false })
          }
          icon="fas fa-times"
          btnClassName="btn icon-btn-sm close-btn"
        />
        <div className="no-outline-email-input">
          <label>
            Enter Email to reset your password
            <input
              type="email"
              onChange={(e) => debounce(e)}
              autoComplete="email"
              placeholder="enter email"
            />
          </label>
        </div>
        <Button
          onClick={sendResetClickHandler}
          label="Send Reset Link"
          btnClassName="btn primary-btn-md"
        />
      </div>
    </div>
  );
};
