import {
  NavBar,
  NavBarBottom,
  NavBarTop,
  AccordionSummary,
  Footer,
  PageHeader,
} from "Components";
import { useAuth, useModal, useQuiz } from "Context";
import badges from "Data/Img/badges.png";
import "../CommonStyling.css";
import "./HelpPage.css";

export const HelpPage = () => {
  const { modalDispatch } = useModal();
  const {
    quizState: { allQuizQuestions },
  } = useQuiz();

  return (
    <div className="help-page-body">
      <NavBar />
      <NavBarBottom />
      <NavBarTop />
      <div
        className="help-page-content"
        onClick={() => {
          modalDispatch({ type: "SHOW_PROFILE_MENU", payload: false });
        }}
      >
        <div>
          <PageHeader title="FAQs" />
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
                  Yes, If you play one game as a guest, and then log in or
                  create an account without refreshing the page, then your
                  progress will be saved to your account.
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
                  <br /> That is, "Not a single Wrong answer while playing a
                  quiz, else the winning streak will break."
                  <br />
                  <br /> After successful 7 consecutive wins, You will receive a
                  similar badge shown below and it will be visible in your
                  account section.
                  <img src={badges} alt="badges" />
                </p>
              </div>
            </details>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
