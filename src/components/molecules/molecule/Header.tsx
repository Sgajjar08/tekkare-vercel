import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface MoleculeHeaderProps {
  name: string;
  description: string;
}

const MoleculeHeader: React.FC<MoleculeHeaderProps> = ({
  name,
  description,
}) => {
  const navigate = useNavigate();
  return (
    <Box mb={2} sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box mb={2} sx={{ display: 'flex', flexDirection: 'row' }}>
        <IconButton onClick={() => navigate('/molecules')}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h4" sx={{ flexGrow: 1 }} pl={1}>
          {name}
        </Typography>
      </Box>
      <Typography variant="h6" mt={1}>
        {description}
      </Typography>
    </Box>
  );
};

export default MoleculeHeader;
