import { BrowserRouter } from "react-router-dom";
import {
  AnimationProvider,
  AlertProvider,
  ModalProvider,
  ScrollToTop,
  ThemeProvider,
} from "./index";

const PebbleQuizProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop>
          <AlertProvider>
            <AnimationProvider>
              <ModalProvider>{children}</ModalProvider>
            </AnimationProvider>
          </AlertProvider>
        </ScrollToTop>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export { PebbleQuizProvider };
