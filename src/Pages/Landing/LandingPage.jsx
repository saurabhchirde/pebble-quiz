import {
  Button,
  CategoryCard,
  Footer,
  NavBarBottom,
  NavBarTop,
} from "Components";
import { NavBar } from "Components/UI/Navigation";
import { useAuth, useModal, useQuiz } from "Context";
import { Link } from "react-router-dom";
import "../CommonStyling.css";
import "./LandingPage.css";

export const LandingPage = () => {
  const { setProfileMenu, authClickHandler } = useModal();
  const {
    authState: { token, name },
  } = useAuth();
  const { allQuizQuestions } = useQuiz();
  const popularQuiz = allQuizQuestions
    .filter((cat) => cat.popular)
    .map((cat) => (
      <CategoryCard
        key={cat._id}
        cardSize="card-square"
        time="3 min"
        category={cat}
      />
    ));

  const topCategoryQuiz = allQuizQuestions
    .filter((cat) => cat.topCategory)
    .map((cat) => (
      <CategoryCard key={cat._id} cardSize="card-small" category={cat} />
    ));

  return (
    <div className="landing-page-body">
      <NavBar />
      <NavBarBottom />
      <NavBarTop />
      <div
        className="landing-page-content"
        onClick={() => {
          setProfileMenu(false);
        }}
      >
        <div>
          <div className="landing-page-header">
            <h1>Hi, {name ? name.split(" ")[0] : "Guest"}</h1>
            <div className="flex-row login-btn-desktop">
              <Button
                onClick={authClickHandler}
                label={token ? "Logout" : "Login"}
                btnClassName="btn primary-outline-btn-md"
              />
              <Link to="/category">
                <Button label="Start Quiz" btnClassName="btn primary-btn-md" />
              </Link>
            </div>
          </div>
          <div className="landing-page-popular">
            <h2>Popular</h2>
            <div>{popularQuiz}</div>
          </div>
          <div className="landing-page-top-categories">
            <h2>Top Categories</h2>
            <div>{topCategoryQuiz}</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
