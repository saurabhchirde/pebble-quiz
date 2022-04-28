import { Link } from "react-router-dom";
import "./CategoryCard.css";

export const CategoryCard = ({ cardSize, category, time }) => {
  const cardClass = `category-card ${cardSize}`;
  const showTime = time ? true : false;

  return (
    <div className={cardClass}>
      <Link to={`/category/${category._id}`}>
        <img
          src={category.img}
          alt="category"
          className="category-card-image"
        />
      </Link>
      {showTime && (
        <span className="popular-card-section">
          <h3 className="card-title">{category.name}</h3>
          <h3 className="card-title">{time}</h3>
        </span>
      )}
      {!showTime && (
        <span>
          <h3 className="card-title">{category.name}</h3>
        </span>
      )}
    </div>
  );
};
