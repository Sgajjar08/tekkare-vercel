import React from 'react';
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

interface AppBarProps {
  onDrawerToggle: () => void;
}

const AppBar: React.FC<AppBarProps> = ({ onDrawerToggle }) => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  const changeLanguage = (lng: string) => {
    setLanguage(lng);
  };

  return (
    <MuiAppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {t('appTitle')}
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {/* Language Switcher */}
        <Button
          color="inherit"
          onClick={() => changeLanguage('en')}
          disabled={language === 'en'}
        >
          EN
        </Button>
        <Button
          color="inherit"
          onClick={() => changeLanguage('fr')}
          disabled={language === 'fr'}
        >
          FR
        </Button>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
