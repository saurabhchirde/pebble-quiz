import { Button } from "Components/UI/Button";
import { useAuth, useModal } from "Context";
import { Link, useLocation } from "react-router-dom";
import "./PageHeader.css";

export const PageHeader = ({ title }) => {
  const {
    authState: { token },
  } = useAuth();
  const { authClickHandler } = useModal();
  const { pathname } = useLocation();

  const hideStartBtn = pathname === "/category" ? false : true;

  return (
    <div className="page-header">
      <h1>{title}</h1>
      <div className="flex-row login-btn-desktop">
        <Button
          onClick={authClickHandler}
          label={token ? "Logout" : "Login"}
          btnClassName="btn primary-outline-btn-md"
        />
        {hideStartBtn && (
          <Link to="/category">
            <Button label="Start Quiz" btnClassName="btn primary-btn-md" />
          </Link>
        )}
      </div>
    </div>
  );
};
