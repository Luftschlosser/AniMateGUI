import { Configuration } from '../models/Configuration.ts';

const { app } = require('electron');

export const saveConfiguration = (saveData: Configuration): void => {
  // TODO: load all data, set data in the map by ID, save everything again
  localStorage.setItem('saveData', JSON.stringify(saveData));
};

// export const fetchAllConfigurations = (): Configurations => {};
