import { useModal } from "Context";
import "./AlertModal.css";
import { Button } from "Components";

export const AlertModal = ({ buttonAction, onConfirm }) => {
  const { alertText, setAlertText, setShowAlert } = useModal();

  const closeClickHandler = () => {
    setShowAlert(false);
    setAlertText("");
  };

  return (
    <>
      <div className="modal-backdrop"></div>
      <div className="discard-modal-md">
        <p>{alertText}</p>
        <div className="error-modal-button">
          <Button
            onClick={onConfirm ? onConfirm : closeClickHandler}
            btnClassName="btn primary-outline-btn-md"
            label={buttonAction ? buttonAction : "Close"}
          />
        </div>
      </div>
    </>
  );
};
