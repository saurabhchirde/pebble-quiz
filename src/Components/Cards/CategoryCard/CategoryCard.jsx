import "./CategoryCard.css";
export const CategoryCard = ({ cardSize, category, time, img }) => {
  const cardClass = `category-card ${cardSize}`;
  const showTime = time ? true : false;

  return (
    <div className={cardClass}>
      <img src={img} alt="category" className="category-card-image" />
      {showTime && (
        <span className="popular-card-section">
          <h3 className="card-title">{category}</h3>
          <h3 className="card-title">{time}</h3>
        </span>
      )}
      {!showTime && (
        <span>
          <h3 className="card-title">{category}</h3>
        </span>
      )}
    </div>
  );
};
