import "./NotificationCard.css";

export const NotificationCard = ({ notification }) => {
  return (
    <li
      className={`list-stacked list-close-btn ${
        notification.unRead ? "un-read" : ""
      }`}
    >
      <div className="list-body">
        <div className="avatar avatar-sm-round">
          <img loading="lazy" src={notification.icon} alt="avatar-image" />
        </div>
        <div className="list-text">
          <h1>You earned a new badge</h1>
          <p> {notification.date}</p>
        </div>
      </div>
    </li>
  );
};
