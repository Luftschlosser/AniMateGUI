import { FC, useState } from 'react';
import { styled, TextField } from '@mui/material';
import { useConfigurations } from '../contexts/ConfigurationsContext.tsx';

const ConfigurationNameInput: FC = () => {
  const { activeConfiguration, setActiveConfiguration } = useConfigurations();

  const [currentValue, setCurrentValue] = useState(activeConfiguration?.name ?? '');

  const handleNameChange = (newValue: string): void => {
    setCurrentValue(newValue);
    setActiveConfiguration({ ...activeConfiguration, name: newValue });
  };

  return (
    <NameInput
      variant="standard"
      value={currentValue}
      onChange={(e) => handleNameChange(e.target.value)}
    />
  );
};

export default ConfigurationNameInput;

const NameInput = styled(TextField)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  '& .MuiInputBase-root ': {
    '&::before': {
      border: 'none',
    },
  },
}));
