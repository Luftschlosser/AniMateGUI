import React, { FC } from 'react';
import { ThemedSwitch } from './ThemeSwitch.style.ts';
import { useTheme } from '../../contexts/ThemeContext.tsx';
export const ThemeSwitch: FC = () => {
  const { theme, toggleTheme } = useTheme();
  return <ThemedSwitch onClick={toggleTheme} sx={{ m: 1 }} checked={theme === 'dark'} />;
};
