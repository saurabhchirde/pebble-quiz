import {
  NavBar,
  NavBarBottom,
  NavBarTop,
  Button,
  ConfirmDeleteModal,
  InputTypePassword,
  Footer,
  AlertToast,
  PageHeader,
} from "Components";
import { useAuth, useModal, useNetworkCalls, useQuiz } from "Context";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CommonStyling.css";
import "./SettingPage.css";

export const SettingPage = () => {
  const { modalDispatch } = useModal();
  const {
    authState: { token, name, email },
    authDispatch,
  } = useAuth();
  const navigate = useNavigate();
  const {
    quizState: { userQuizData },
    quizDispatch,
  } = useQuiz();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [newName, setNewName] = useState(userQuizData?.name ?? name);
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {
    updateUserNameDBHandler,
    passwordChangeHandler,
    realTimeDataSnapshot,
  } = useNetworkCalls();

  const deleteAccountHandler = () => {
    setShowDeleteModal(true);
  };

  const changeNameHandler = () => {
    if (newName.trim() === "") {
      AlertToast("error", "Enter a valid Name");
    } else {
      updateUserNameDBHandler(email, newName);
    }
  };

  const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

  const changePasswordHandler = () => {
    if (newPassword.trim() === "") {
      AlertToast("info", "Enter a valid password");
    } else {
      if (newPassword.match(passwordValidate)) {
        passwordChangeHandler(newPassword);
        authDispatch({ type: "LOGOUT" });
        navigate("/");
        modalDispatch({ type: "SHOW_LOGIN", payload: true });
        setNewPassword("");
      } else {
        AlertToast(
          "info",
          "Password should be, Minimum 8 char, 1 Uppercase, 1 Lowercase, 1 number & 1 Special Character"
        );
      }
    }
  };

  useEffect(() => realTimeDataSnapshot(email, quizDispatch), []);

  return (
    <>
      {showDeleteModal && (
        <div
          className="modal-backdrop"
          onClick={() => {
            setShowDeleteModal(false);
          }}
        >
          <ConfirmDeleteModal setShowDeleteModal={setShowDeleteModal} />
        </div>
      )}
      <div className="setting-page-body">
        <NavBar />
        <NavBarBottom />
        <NavBarTop />

        <div
          className="setting-page-content"
          onClick={() => {
            modalDispatch({ type: "SHOW_PROFILE_MENU", payload: false });
          }}
        >
          <PageHeader title="Settings" />
          {token ? (
            <div className="setting-page-actions">
              <div className="delete-page-user-details">
                <h2 className="title-lg-wt-5 mg-1-top"> Change Name</h2>
                <div className="edit-user-name">
                  <div className="no-outline-text-input">
                    <input
                      type="text"
                      name="text"
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="Enter name"
                      value={newName}
                    />
                  </div>
                  <Button
                    onClick={changeNameHandler}
                    label="change name"
                    btnClassName="btn primary-outline-btn-md"
                  />
                </div>
                <h2 className="title-lg-wt-5 mg-1-top"> Change Password</h2>
                <div className="edit-user-password">
                  <InputTypePassword
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter new password"
                    iconWrapper="input-icon"
                    eyeIcon={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                    inputWrapper="no-outline-password-input password-input-field"
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                    onEyeClick={() => {
                      setShowPassword((preData) => !preData);
                    }}
                    value={newPassword}
                  />
                  <Button
                    onClick={changePasswordHandler}
                    label="change password"
                    btnClassName="btn primary-outline-btn-md"
                  />
                </div>
              </div>
              <Button
                onClick={deleteAccountHandler}
                label="Delete Account"
                btnClassName="btn secondary-outline-btn-md delete-account-btn"
              />
            </div>
          ) : (
            <p className="not-logged-message">Login to view Settings</p>
          )}
          <Footer />
        </div>
      </div>
    </>
  );
};
