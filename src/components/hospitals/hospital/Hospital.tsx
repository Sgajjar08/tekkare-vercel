import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

import hospitalData from '../../../data/data_exemple1.json';
import HospitalHeader from './Header';
import HospitalOverview from './overview/Overview';
import HospitalChart from './HospitalChart';
import HospitalSpecialities from './speciality/Speciality';
import HospitalDepartments from './departments/Departments';
import ClinicalTrialsTabs from './clinicalTrials/ClinicalTrials';

const Hospital: React.FC = () => {
  const { t } = useTranslation();
  const { hospitalName } = useParams();
  const hospital = hospitalData.find(
    (hospital) => hospital.name === hospitalName
  );

  if (!hospital) {
    return (
      <Container>
        <Typography variant="h6">{t('hospital.notFound')}</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <HospitalHeader name={hospital.name} location={hospital.location} />
      <HospitalOverview overview={hospital.overview} />
      <HospitalChart data={hospital.monthlyHospitalizations} />
      <HospitalSpecialities specialities={hospital.doctorSpecialties} />
      <ClinicalTrialsTabs trials={hospital.clinicalTrials} />
      <HospitalDepartments departments={hospital.hospitalDepartments} />
    </Container>
  );
};

export default Hospital;
