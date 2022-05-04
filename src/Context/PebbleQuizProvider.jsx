import { BrowserRouter } from "react-router-dom";
import {
  AnimationProvider,
  AlertProvider,
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
          <AlertProvider>
            <AnimationProvider>
              <AuthProvider>
                <ModalProvider>
                  <QuizProvider>
                    <NetworkProvider>{children}</NetworkProvider>
                  </QuizProvider>
                </ModalProvider>
              </AuthProvider>
            </AnimationProvider>
          </AlertProvider>
        </ScrollToTop>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export { PebbleQuizProvider };
