import {
  NavBar,
  NavBarBottom,
  NavBarTop,
  Button,
  CategoryCard,
  Footer,
} from "Components";
import "./CategoryPage.css";
import { quizQuestions } from "Data/tempData";
import { useModal } from "Context";

export const CategoryPage = () => {
  const { setProfileMenu } = useModal();

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
                label="Logout"
                btnClassName="btn primary-outline-btn-md"
              />
            </div>
          </div>
          <div className="category-page-cards">
            <h2>All Categories</h2>
            <div>
              {quizQuestions.map((cat) => (
                <CategoryCard
                  key={cat.name}
                  category={cat}
                  cardSize="card-square"
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
