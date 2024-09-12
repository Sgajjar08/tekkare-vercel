import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface HospitalHeaderProps {
  name: string;
  location: string;
}

const HospitalHeader: React.FC<HospitalHeaderProps> = ({ name, location }) => {
  const navigate = useNavigate();
  return (
    <Box mb={2} sx={{ display: 'flex', flexDirection: 'row' }}>
      <IconButton onClick={() => navigate('/')}>
        <ArrowBack />
      </IconButton>
      <Typography variant="h4" sx={{ flexGrow: 1 }} pl={1}>
        {name}
      </Typography>
      <Typography variant="h6" mt={1}>
        {location}
      </Typography>
    </Box>
  );
};

export default HospitalHeader;
