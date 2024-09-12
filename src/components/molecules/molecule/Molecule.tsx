import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { molecules } from '../../../data/data_exemple2.json';
import MoleculeHeader from './Header';
import MedicationsTable from '../table/Medications';

const Molecule: React.FC = () => {
  const { moleculeName } = useParams();
  const { t } = useTranslation();
  const molecule = molecules.find((molecule) => molecule.name === moleculeName);

  if (!molecule) {
    return (
      <Container>
        <Typography variant="h6">{t('molecule.notFound')}</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <MoleculeHeader name={molecule.name} description={molecule.description} />
      <MedicationsTable medications={molecule.medications} />
    </Container>
  );
};

export default Molecule;
