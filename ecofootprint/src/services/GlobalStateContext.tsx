import React, { createContext, useState, useContext } from "react";

// Create a context with default value
const GlobalStateContext = createContext({
  csum: 0,
  setCsum: (csum: number) => {},
});

// Create a provider component
export const GlobalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [csum, setCsum] = useState<number | any>(0);

  return (
    <GlobalStateContext.Provider value={{ csum, setCsum }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Create a custom hook to use the GlobalStateContext
export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
