import {
  Typography,
  Box,
  LinearProgress,
  LinearProgressProps,
} from '@mui/material';

interface Props extends LinearProgressProps {
  value: number;
}

const LinearProgressWithLabel: React.FC<Props> = ({ ...props }: Props) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};

export default LinearProgressWithLabel;
