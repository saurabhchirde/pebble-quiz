import { createContext, useContext, useState } from "react";

const AnimationContext = createContext(null);

const AnimationProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);

  const showLoader = () => {
    setLoader((loader) => !loader);
  };

  return (
    <AnimationContext.Provider
      value={{
        loader,
        setLoader,
        showLoader,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

const useAnimation = () => useContext(AnimationContext);

export { AnimationProvider, useAnimation };
