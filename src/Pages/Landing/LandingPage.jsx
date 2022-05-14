import {
  CategoryCard,
  Footer,
  NavBarBottom,
  NavBarTop,
  PageHeader,
} from "Components";
import { NavBar } from "Components/UI/Navigation";
import { useAuth, useModal, useQuiz } from "Context";
import "../CommonStyling.css";
import "./LandingPage.css";

export const LandingPage = () => {
  const { modalDispatch } = useModal();
  const {
    authState: { name },
  } = useAuth();
  const {
    quizState: { allQuizQuestions, userQuizData },
  } = useQuiz();

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

  const userName = userQuizData?.name ? userQuizData?.name : name;

  return (
    <div className="landing-page-body">
      <NavBar />
      <NavBarBottom />
      <NavBarTop />
      <div
        className="landing-page-content"
        onClick={() => {
          modalDispatch({ type: "SHOW_PROFILE_MENU", payload: false });
        }}
      >
        <div>
          <PageHeader
            title={`Hi, ${userName ? userName.split(" ")[0] : "Guest"}`}
          />
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
