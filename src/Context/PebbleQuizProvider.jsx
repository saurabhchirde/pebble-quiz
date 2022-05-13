import { BrowserRouter } from "react-router-dom";
import {
  AnimationProvider,
  ModalProvider,
  ScrollToTop,
  ThemeProvider,
  QuizProvider,
  AuthProvider,
  NetworkProvider,
} from "./index";

const PebbleQuizProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop>
          <AnimationProvider>
            <AuthProvider>
              <ModalProvider>
                <NetworkProvider>
                  <QuizProvider>{children} </QuizProvider>
                </NetworkProvider>
              </ModalProvider>
            </AuthProvider>
          </AnimationProvider>
        </ScrollToTop>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export { PebbleQuizProvider };
