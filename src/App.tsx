import React from 'react';
import { CssBaseline, Box, Toolbar, Container } from '@mui/material';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout';
import Hospitals from './pages/Hospitals';
import Hospital from './components/hospitals/hospital/Hospital';
import Molecules from './pages/Molecules';
import Molecule from './components/molecules/molecule/Molecule';
import Projects from './pages/Projects';
import Project from './components/projects/project/Project';

const App: React.FC = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
        <CssBaseline />

        {/* Layout with AppBar and Drawer */}
        <Layout />

        {/* Main Content - Routing Components */}
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100vw - 240px)` } }}
        >
          <Toolbar />
          <Container sx={{ width: '100vw' }}>
            <Routes>
              <Route path="/" element={<Hospitals />} />
              <Route path="/hospitals/:hospitalName" element={<Hospital />} />
              <Route path="/molecules" element={<Molecules />} />
              <Route path="/molecules/:moleculeName" element={<Molecule />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:projectName" element={<Project />} />
            </Routes>
          </Container>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
