import { LabelIconButton } from "Components";
import { useNetworkCalls } from "Context";

export const GoogleFacebookHandler = ({ googleText, facebookText }) => {
  const { googleLoginHandler, facebookLoginHandler } = useNetworkCalls();
  return (
    <>
      <LabelIconButton
        icon="fab fa-google"
        label={googleText}
        btnClassName="btn label-icon-outline-btn-md google-login"
        onClick={googleLoginHandler}
      />
      <LabelIconButton
        icon="fab fa-facebook"
        label={facebookText}
        btnClassName="btn label-icon-outline-btn-md facebook-login"
        onClick={facebookLoginHandler}
      />
    </>
  );
};
