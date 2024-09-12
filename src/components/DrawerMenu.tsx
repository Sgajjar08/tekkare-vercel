import React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface DrawerMenuProps {
  mobileOpen: boolean;
  onDrawerToggle: () => void;
}

const drawerWidth = 240;

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  mobileOpen,
  onDrawerToggle,
}) => {
  const { t } = useTranslation();

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem component={Link} to="/" key="hospitals">
          <ListItemText primary={t('hospitals') as string} />
        </ListItem>
        <ListItem component={Link} to="/molecules" key="molecules">
          <ListItemText primary={t('molecules') as string} />
        </ListItem>
        <ListItem component={Link} to="/projects" key="projects">
          <ListItemText primary={t('projects') as string} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      {/* Permanent Drawer for Desktop */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      {/* Temporary Drawer for Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{ keepMounted: true }} // Better performance on mobile
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default DrawerMenu;
