import { FC } from 'react';
import { Button, ButtonGroup, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SaveIcon from '@mui/icons-material/Save';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import { saveConfiguration } from '../services/fetch.ts';
import { useConfigurations } from '../contexts/ConfigurationsContext.tsx';

const SaveAndBurn: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { activeConfiguration } = useConfigurations();

  const handleSave = (): void => {
    saveConfiguration(activeConfiguration);
  };

  return (
    <div style={{ marginLeft: theme.spacing(2) }}>
      <ButtonGroup variant="contained">
        <Button onClick={handleSave} startIcon={<SaveIcon />}>
          {t('save')}
        </Button>
        <Button disabled endIcon={<SettingsInputComponentIcon />}>
          {t('burn')}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default SaveAndBurn;
