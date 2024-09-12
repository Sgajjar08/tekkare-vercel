import { Box, Card, CardContent, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import { useTranslation } from 'react-i18next';

import { MonthlyHospitalization } from '../../../types/hospitalType';

interface HospitalChartProps {
  data: MonthlyHospitalization[];
}

const HospitalChart: React.FC<HospitalChartProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h5" mt={3} mb={2}>
        {t('hospital.chart.title')}
      </Typography>
      <Card>
        <CardContent>
          <Box sx={{ height: 400, width: '100%' }}>
            <BarChart
              series={[{ data: data.map((d) => d.value) }]}
              xAxis={[
                {
                  id: 'barCategories',
                  data: data.map((d) => d.month + d.year),
                  scaleType: 'band',
                },
              ]}
            />
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default HospitalChart;
