import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import { Configuration, Configurations } from '../models/Configuration.ts';
import { fetchAllConfigurations } from '../services/fetch.ts';
import Loading from '../components/Loading.tsx';
import { v4 as uuidv4 } from 'uuid';

export const defaultConfiguration: Configuration = {
  id: uuidv4(),
  name: 'Default configuration',
};

interface ConfigurationsContext {
  configurations: Configurations;
  reloadConfigurations: () => Configurations;
  activeConfiguration: Configuration;
  setActiveConfiguration: (updateConfiguration: Configuration) => void;
}

const configurationsContext = createContext<ConfigurationsContext | null>(null);

export const ConfigurationsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isInitializing, setIsInitializing] = useState(true);
  const [savedConfigurations, setSavedConfigurations] = useState<Configurations>({});
  const [activeConfiguration, setActiveConfiguration] =
    useState<Configuration>(defaultConfiguration);

  useEffect(() => {
    reload();
    setIsInitializing(false);
  }, []);

  const reload = (): Configurations => {
    const savedConfigs = fetchAllConfigurations();
    setSavedConfigurations(savedConfigs);
    setActiveConfiguration(Object.values(savedConfigs)[0]);
    return savedConfigs;
  };

  return (
    <configurationsContext.Provider
      value={{
        configurations: savedConfigurations,
        reloadConfigurations: reload,
        activeConfiguration,
        setActiveConfiguration: (updateConfiguration) =>
          setActiveConfiguration(updateConfiguration),
      }}
    >
      <>{isInitializing ? <Loading /> : children}</>
    </configurationsContext.Provider>
  );
};

export const useConfigurations = (): ConfigurationsContext => {
  const contextValue = useContext(configurationsContext);
  if (contextValue === null) {
    throw new Error('ConfigurationsContext has not been provided!');
  }
  return contextValue;
};
