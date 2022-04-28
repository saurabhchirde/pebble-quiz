import {
  Button,
  CategoryCard,
  Footer,
  NavBarBottom,
  NavBarTop,
} from "Components";
import { NavBar } from "Components/UI/Navigation";
import { useModal } from "Context";
import { quizQuestions } from "Data/tempData";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export const LandingPage = () => {
  const { setProfileMenu } = useModal();

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
            <h1>Welcome, Saurabh</h1>
            <div className="flex-row login-btn-desktop">
              <Button
                label="Logout"
                btnClassName="btn primary-outline-btn-md"
              />
              <Link to="/category">
                <Button label="Start Quiz" btnClassName="btn primary-btn-md" />
              </Link>
            </div>
          </div>
          <div className="landing-page-popular">
            <h2>Popular</h2>
            <div>
              {quizQuestions
                .filter((cat) => cat.popular)
                .map((cat) => (
                  <CategoryCard
                    key={cat._id}
                    cardSize="card-square"
                    time="3 min"
                    category={cat}
                  />
                ))}
            </div>
          </div>
          <div className="landing-page-top-categories">
            <h2>Top Categories</h2>
            <div>
              {quizQuestions
                .filter((cat) => cat.topCategory)
                .map((cat) => (
                  <CategoryCard
                    key={cat._id}
                    cardSize="card-small"
                    category={cat}
                  />
                ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
