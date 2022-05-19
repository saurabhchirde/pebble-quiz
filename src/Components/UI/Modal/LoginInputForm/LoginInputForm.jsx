import { InputTypeOne, InputTypePassword, Button } from "Components";
export const LoginInputForm = ({
  onLoginSubmitHandler,
  onModalInputHandler,
  loginInput,
  showPassword,
  setShowPassword,
}) => {
  return (
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
      />
    </form>
  );
};
