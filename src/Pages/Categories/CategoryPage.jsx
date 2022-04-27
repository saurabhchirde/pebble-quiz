import {
  NavBar,
  NavBarBottom,
  NavBarTop,
  Button,
  CategoryCard,
  Footer,
} from "Components";
import "./CategoryPage.css";
import { categories } from "Data/tempData";
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
          <div className="flex-row login-btn-desktop">
            <Button label="Logout" btnClassName="btn primary-outline-btn-md" />
            <Button label="Start Quiz" btnClassName="btn primary-btn-md" />
          </div>
          <div className="category-page-cards">
            <h2>All Categories</h2>
            <div>
              {categories.map((cat) => (
                <CategoryCard
                  key={cat.name}
                  cardSize="card-square"
                  category={cat.name}
                  img={cat.img}
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
