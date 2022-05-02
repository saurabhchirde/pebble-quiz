import { BrowserRouter } from "react-router-dom";
import {
  AnimationProvider,
  AlertProvider,
  ModalProvider,
  ScrollToTop,
  ThemeProvider,
  QuizProvider,
} from "./index";

const PebbleQuizProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop>
          <AlertProvider>
            <AnimationProvider>
              <ModalProvider>
                <QuizProvider>{children}</QuizProvider>
              </ModalProvider>
            </AnimationProvider>
          </AlertProvider>
        </ScrollToTop>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export { PebbleQuizProvider };
