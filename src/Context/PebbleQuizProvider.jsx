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
                  <NetworkProvider>
                    <QuizProvider>{children} </QuizProvider>
                  </NetworkProvider>
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
