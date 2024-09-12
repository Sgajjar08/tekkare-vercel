import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Hospital } from '../../../types/hospitalType';

interface HospitalTableProps {
  hospitals: Hospital[];
}

const HospitalTable: React.FC<HospitalTableProps> = ({ hospitals }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleRowClick = (hospitalName: string) => {
    navigate(`/hospitals/${encodeURIComponent(hospitalName)}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">{t('hospital.table.headers.name')}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">{t('hospital.table.headers.location')}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">{t('hospital.table.headers.totalPatients')}</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hospitals.map((hospital) => (
            <TableRow
              key={hospital.name}
              hover
              onClick={() => handleRowClick(hospital.name)}
              style={{ cursor: 'pointer' }}
            >
              <TableCell>{hospital.name}</TableCell>
              <TableCell>{hospital.location}</TableCell>
              <TableCell>{hospital.overview.totalPatients}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HospitalTable;
