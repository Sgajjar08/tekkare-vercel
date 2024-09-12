import React, { useState } from 'react';
import AppBar from './AppBar';
import DrawerMenu from './DrawerMenu';

const Layout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Top Navigation */}
      <AppBar onDrawerToggle={handleDrawerToggle} />

      {/* Drawer (for both mobile and desktop) */}
      <DrawerMenu mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle} />
    </>
  );
};

export default Layout;
