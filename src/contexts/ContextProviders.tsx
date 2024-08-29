import React, { FC } from 'react';
import { CustomThemeProvider } from './ThemeContext.tsx';

export const ContextProviders: FC = ({ children }) => {
  return <CustomThemeProvider>{children}</CustomThemeProvider>;
};
