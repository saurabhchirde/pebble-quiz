import { AlertToast } from "Components";
import { useModal, useNetworkCalls } from "Context";
import { useState } from "react";
import { Button, IconButton } from "../Button";
import "./ResetPassword.css";
export const ResetPassword = () => {
  const { modalDispatch } = useModal();
  const { passwordResetEmailHandler } = useNetworkCalls();

  const [email, setEmail] = useState("");

  const sendResetClickHandler = () => {
    if (email.trim() === "") {
      AlertToast("info", "Enter a valid email");
    } else {
      passwordResetEmailHandler(email);
      modalDispatch({ type: "SHOW_RESET_PASSWORD", payload: false });
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
              name="email"
              onChange={(e) => setEmail(e.target.value)}
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
