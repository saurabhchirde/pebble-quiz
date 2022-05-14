import { InputTypeOne, Button } from "Components";
export const SignupInputForm = ({
  onSignupFormSubmitHandler,
  onInputChangeHandler,
  user,
  confirmPassword,
  onConfirmPasswordHandler,
}) => {
  return (
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
        btnWrapper="signup-btn"
        type="submit"
        btnClassName="btn primary-btn-md"
        label=" Sign Up"
      />
    </form>
  );
};
