import { AlertToast } from "Components";
import { useAlert, useModal, useNetworkCalls } from "Context";
import { useState } from "react";
import { Button, IconButton } from "../Button";
import "./ResetPassword.css";
export const ResetPassword = () => {
  const { setShowResetPassword } = useModal();
  const { passwordResetEmailHandler } = useNetworkCalls();

  const [email, setEmail] = useState("");

  const sendResetClickHandler = () => {
    if (email.trim() === "") {
      AlertToast("info", "Enter a valid email");
    } else {
      passwordResetEmailHandler(email);
      setShowResetPassword(false);
    }
  };

  return (
    <div className="reset-password-container">
      <form onSubmit={sendResetClickHandler}>
        <IconButton
          onClick={() => setShowResetPassword(false)}
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
              required
              autoComplete="email"
              placeholder="enter email"
            />
          </label>
        </div>
        <Button
          type="submit"
          label="Send Reset Link"
          btnClassName="btn primary-btn-md"
        />
      </form>
    </div>
  );
};
