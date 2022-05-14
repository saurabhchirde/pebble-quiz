import { useModal } from "Context";
import "./AlertModal.css";
import { Button } from "Components";

export const AlertModal = ({ buttonAction, onConfirm }) => {
  const {
    modalState: { alertText },
    modalDispatch,
  } = useModal();

  const closeClickHandler = () => {
    modalDispatch({ type: "SHOW_ALERT", payload: false });
    modalDispatch({ type: "ALERT_TEXT", payload: "" });
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
