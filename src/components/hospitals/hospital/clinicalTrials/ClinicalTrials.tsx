import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { ClinicalTrial } from '../../../../types/hospitalType';
import { useTranslation } from 'react-i18next';

interface ClinicalTrialsTabsProps {
  trials: ClinicalTrial[];
}

const ClinicalTrialsTabs: React.FC<ClinicalTrialsTabsProps> = ({ trials }) => {
  const [selectedStatus, setSelectedStatus] = useState<string>('En cours');
  const { t } = useTranslation();

  // Get unique statuses
  const statuses = Array.from(new Set(trials.map((trial) => trial.status)));

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    event.preventDefault();
    setSelectedStatus(newValue);
  };

  const filteredTrials = trials.filter(
    (trial) => trial.status === selectedStatus
  );

  return (
    <Box>
      <Typography variant="h5" mt={3} mb={2}>
        {t('hospital.clinicalTrials.title')}
      </Typography>
      <Tabs
        value={selectedStatus}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        {statuses.map((status) => (
          <Tab key={status} label={status} value={status} />
        ))}
      </Tabs>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle1">{t('hospital.clinicalTrials.table.headers.name')}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">{t('hospital.clinicalTrials.table.headers.startDate')}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">{t('hospital.clinicalTrials.table.headers.endDate')}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">{t('hospital.clinicalTrials.table.headers.totalPatients')}</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTrials.map((trial) => (
              <TableRow key={trial.name}>
                <TableCell>{trial.name}</TableCell>
                <TableCell>{trial.startDate}</TableCell>
                <TableCell>{trial.endDate}</TableCell>
                <TableCell>{trial.totalPatients}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ClinicalTrialsTabs;
