import React, { createContext, FC, ReactNode, useContext, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '../theme/Theme.ts';

interface ThemeContext {
  theme: string;
  toggleTheme: () => void;
}

const themeContext = createContext<ThemeContext | null>(null);

export const CustomThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

  const toggleTheme = () => {
    setTheme((prevMode) => {
      const newTheme = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>{children}</ThemeProvider>
    </themeContext.Provider>
  );
};

export const useTheme = (): ThemeContext => {
  const contextValue = useContext(themeContext);
  if (contextValue === null) {
    throw new Error('ThemeContext has not been provided!');
  }
  return contextValue;
};
