import {
  NavBar,
  NavBarBottom,
  NavBarTop,
  Button,
  AccordionSummary,
} from "Components";
import { useAuth, useModal, useQuiz } from "Context";
import badges from "Data/Img/badges.png";
import { Link } from "react-router-dom";
import "../CommonStyling.css";
import "./HelpPage.css";

export const HelpPage = () => {
  const { setProfileMenu, authClickHandler } = useModal();
  const {
    authState: { token },
  } = useAuth();
  const { allQuizQuestions } = useQuiz();

  return (
    <div className="help-page-body">
      <NavBar />
      <NavBarBottom />
      <NavBarTop />
      <div
        className="help-page-content"
        onClick={() => {
          setProfileMenu(false);
        }}
      >
        <div className="help-page-header">
          <h1>FAQs</h1>
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
        <div className="help-page-faq">
          <details>
            <AccordionSummary
              text="What games can I play? How many questions are there in a single
                quiz?"
            />
            <div className="help-faq-text">
              <p className="mg-1-bot">
                Currently, We have only {allQuizQuestions.length} categories,
                with average 3-4 questions per category.
              </p>
              <ol className="list-basic">
                {allQuizQuestions?.map((category) => (
                  <li key={category._id}>{category.name}</li>
                ))}
              </ol>
            </div>
          </details>
          <details>
            <AccordionSummary
              text=" What If I play as a Guest, and then create an account or log in
                with my credentials, will my progress be save in my account?"
            />
            <div className="help-faq-text">
              <p>
                Yes, If you play one game as a guest, and then log in or create
                an account without refreshing the page, then your progress will
                be saved to your account.
              </p>
            </div>
          </details>
          <details>
            <AccordionSummary
              text=" What are the achievements in my account section? How will I get
                them?"
            />
            <div className="help-faq-text">
              <p>
                Achievements are the badges you will receive. If you win 7
                consecutive games without losing your winning streak.
                <br /> That is, "Not a single Wrong answer while playing a quiz,
                else the winning streak will break."
                <br />
                <br /> After successful 7 consecutive wins, You will receive a
                similar badge shown below and it will be visible in your account
                section.
                <img src={badges} alt="badges" />
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};