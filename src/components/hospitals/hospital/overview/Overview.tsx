import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Overview } from '../../../../types/hospitalType';
import OverviewCard from './OverviewCard';
import LinearProgressWithLabel from '../../../../common/LinearProgressBar';

interface HospitalOverviewProps {
  overview: Overview;
}

const HospitalOverview: React.FC<HospitalOverviewProps> = ({ overview }) => {
  const { t } = useTranslation();

  const satisfactionRate = parseFloat(
    overview.satisfactionRate.replace('%', '')
  );

  return (
    <Grid container spacing={3} mt={2}>
      <Grid item xs={12} sm={6} md={4}>
        <OverviewCard label={t('hospital.overview.totalPatients')} value={overview.totalPatients} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <OverviewCard
          label={t('hospital.overview.totalTreatments')}
          value={overview.totalTreatments}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <OverviewCard
          label={t('hospital.overview.numberOfDoctors')}
          value={overview.numberOfDoctors}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <OverviewCard
          label={t('hospital.overview.numberOfNurses')}
          value={overview.numberOfNurses}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight={600}>
              {t('hospital.overview.satisfactionRate')}
            </Typography>
            <Box sx={{ width: '100%' }}>
              <LinearProgressWithLabel value={satisfactionRate} />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HospitalOverview;
