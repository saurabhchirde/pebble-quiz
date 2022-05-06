import { useQuiz } from "Context";
import "./BadgeModal.css";

export const BadgeModal = () => {
  const { earnedBadge } = useQuiz();

  console.log(earnedBadge);

  return (
    <div className="badge-modal-container">
      <div>
        <h1 className="title-xxl-wt-5 mg-2-bot">New Achievement!</h1>
        <img src={earnedBadge} alt="badge-icon" />
      </div>
    </div>
  );
};
