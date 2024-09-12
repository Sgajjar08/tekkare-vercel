import { Card, CardContent, Typography } from '@mui/material';

interface Props {
  label: string;
  value: string | number;
}

const OverviewCard: React.FC<Props> = ({ label, value }: Props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" fontWeight={600}>
          {label}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
