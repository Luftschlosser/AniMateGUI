import { Configuration, Configurations } from '../models/Configuration.ts';
import { SAVE_LOCATION } from '../Constants.ts';
import { defaultConfiguration } from '../contexts/ConfigurationsContext.tsx';

export const saveConfiguration = (configurationToSave: Configuration): void => {
  const saveData = fetchAllConfigurations();
  saveData[configurationToSave.id] = configurationToSave;
  localStorage.setItem(SAVE_LOCATION, JSON.stringify(saveData));
};

export const fetchAllConfigurations = (): Configurations => {
  const saveData = localStorage.getItem(SAVE_LOCATION);

  if (!saveData) {
    return { [defaultConfiguration.id]: defaultConfiguration };
  }

  try {
    const saved = JSON.parse(saveData) as Configurations;
    if (Object.values(saved).length > 0) {
      return saved;
    }
    return { [defaultConfiguration.id]: defaultConfiguration };
  } catch (e) {
    console.error('Error parsing saved data: ', e);
    return {};
  }
};
