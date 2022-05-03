import { useAlert } from "Context";
import "./Alert.css";

export const AlertWithCTA = () => {
  const {
    alertState: { alertText, alertType, alertIcon },
    alertDispatch,
  } = useAlert();

  const closeAlertHandler = () => {
    alertDispatch({ type: "HIDE_ALERT" });
  };

  return (
    <div className={alertType}>
      <div className="alert-text">
        <i className={alertIcon}></i>
        <span className="p-md">{alertText}</span>
      </div>
      <div onClick={closeAlertHandler} className="alert-close">
        <i className="fas fa-times-circle"></i>
      </div>
    </div>
  );
};
