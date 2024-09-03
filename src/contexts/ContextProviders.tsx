import { FC, ReactElement } from 'react';
import { CustomThemeProvider } from './ThemeContext.tsx';
import { ConfigurationDrawerContextProvider } from './ConfigurationDrawerContext.tsx';
import { ConfigurationsProvider } from './ConfigurationsContext.tsx';

export const ContextProviders: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <CustomThemeProvider>
      <ConfigurationsProvider>
        <ConfigurationDrawerContextProvider>{children}</ConfigurationDrawerContextProvider>
      </ConfigurationsProvider>
    </CustomThemeProvider>
  );
};
