import { FC, ReactElement } from 'react';
import { CustomThemeProvider } from './ThemeContext.tsx';
import { ConfigurationDrawerContextProvider } from './ConfigurationDrawerContext.tsx';

export const ContextProviders: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <CustomThemeProvider>
      <ConfigurationDrawerContextProvider>{children}</ConfigurationDrawerContextProvider>
    </CustomThemeProvider>
  );
};
