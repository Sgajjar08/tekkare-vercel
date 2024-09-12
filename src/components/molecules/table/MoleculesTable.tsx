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

import { Molecule } from '../../../types/moleculeType';

interface MoleculeTableProps {
  molecules: Molecule[];
}

const MoleculesTable: React.FC<MoleculeTableProps> = ({ molecules }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleRowClick = (moleculeName: string) => {
    navigate(`/molecules/${encodeURIComponent(moleculeName)}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">{t('molecule.table.headers.name')}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">{t('molecule.table.headers.description')}</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {molecules.map((molecule) => (
            <TableRow
              key={molecule.name}
              hover
              onClick={() => handleRowClick(molecule.name)}
              style={{ cursor: 'pointer' }}
            >
              <TableCell>{molecule.name}</TableCell>
              <TableCell>{molecule.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MoleculesTable;
