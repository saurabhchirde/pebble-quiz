import "./AlertModal.css";
import { Button } from "Components";
import { useNavigate } from "react-router-dom";
import { useAuth, useNetworkCalls } from "Context";

export const ConfirmDeleteModal = ({ setShowDeleteModal }) => {
  const navigate = useNavigate();
  const {
    authState: { email },
    authDispatch,
  } = useAuth();
  const { accountDeleteHandler } = useNetworkCalls();

  const confirmAccountDeleteHandler = () => {
    accountDeleteHandler(email);
    authDispatch({ type: "LOGOUT" });
    setShowDeleteModal(false);
    navigate("/");
  };

  return (
    <>
      <div className="modal-backdrop"></div>
      <div className="discard-modal-md">
        <p>Are you sure, you want to delete your account?</p>
        <div className="error-modal-button">
          <Button
            onClick={() => {
              setShowDeleteModal(false);
            }}
            btnClassName="btn primary-btn-md"
            label="Cancel"
          />
          <Button
            onClick={confirmAccountDeleteHandler}
            btnClassName="btn secondary-outline-btn-md"
            label="Confirm"
          />
        </div>
      </div>
    </>
  );
};
