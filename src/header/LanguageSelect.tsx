import React, { FC } from 'react';
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import { menuSlotProps } from './Header.styles.ts';

export const LanguageSelect: FC = () => {
  const { t, i18n } = useTranslation();

  const languages = ['de', 'en'];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const changeLanguage = (newLanguage: string): void => {
    i18n.changeLanguage(newLanguage).then(() => {
      setAnchorEl(null);
    });
  };

  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <LanguageIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={() => setAnchorEl(null)}
        slotProps={menuSlotProps}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language}
            selected={language === i18n.language}
            onClick={() => changeLanguage(language)}
          >
            {t(`settings.${language}`)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
