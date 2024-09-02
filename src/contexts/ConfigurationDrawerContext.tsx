import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface ConfigurationDrawerContext {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const configurationDrawerContext = createContext<ConfigurationDrawerContext | null>(null);

export const ConfigurationDrawerContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <configurationDrawerContext.Provider value={{ open, setOpen }}>
      {children}
    </configurationDrawerContext.Provider>
  );
};

export const useConfigurationDrawerState = (): ConfigurationDrawerContext => {
  const contextValue = useContext(configurationDrawerContext);
  if (contextValue === null) {
    throw new Error('ThemeContext has not been provided!');
  }
  return contextValue;
};
