import {
  NavBar,
  NavBarBottom,
  NavBarTop,
  Button,
  CategoryCard,
  Footer,
} from "Components";
import "../CommonStyling.css";
import "./CategoryPage.css";
import { useAuth, useModal, useQuiz } from "Context";

export const CategoryPage = () => {
  const { setProfileMenu, authClickHandler } = useModal();
  const {
    authState: { token },
  } = useAuth();
  const { allQuizQuestions } = useQuiz();

  const showCategories = allQuizQuestions.map((cat) => (
    <CategoryCard key={cat.name} category={cat} cardSize="card-square" />
  ));

  return (
    <div className="category-page-body">
      <NavBar />
      <NavBarBottom />
      <NavBarTop />
      <div
        className="category-page-content"
        onClick={() => {
          setProfileMenu(false);
        }}
      >
        <div>
          <div className="category-page-header">
            <h1>Select category to start</h1>
            <div className="flex-row login-btn-desktop">
              <Button
                onClick={authClickHandler}
                label={token ? "Logout" : "Login"}
                btnClassName="btn primary-outline-btn-md"
              />
            </div>
          </div>
          <div className="category-page-cards">
            <h2>All Categories</h2>
            <div>{showCategories}</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
