import { createContext, useContext, useState } from "react";

const AnimationContext = createContext(null);

const AnimationProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  const showLoader = () => {
    setLoader((loader) => !loader);
  };

  const showCelebration = () => {
    setCelebrate((celebrate) => !celebrate);
  };

  return (
    <AnimationContext.Provider
      value={{
        loader,
        setLoader,
        showLoader,
        celebrate,
        setCelebrate,
        showCelebration,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

const useAnimation = () => useContext(AnimationContext);

export { AnimationProvider, useAnimation };
