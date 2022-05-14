import {
  NavBar,
  NavBarBottom,
  NavBarTop,
  CategoryCard,
  Footer,
  PageHeader,
} from "Components";
import "../CommonStyling.css";
import "./CategoryPage.css";
import { useModal, useQuiz } from "Context";

export const CategoryPage = () => {
  const { modalDispatch } = useModal();
  const {
    quizState: { allQuizQuestions },
  } = useQuiz();

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
          modalDispatch({ type: "SHOW_PROFILE_MENU", payload: false });
        }}
      >
        <div>
          <PageHeader title="Select category to start" />
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
