import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Speciality } from '../../../../types/hospitalType';
import SpecialityCard from './SpecialityCard';

interface HospitalSpecialityProps {
    specialities: Speciality[];
}

const HospitalSpecialities: React.FC<HospitalSpecialityProps> = ({
    specialities,
}) => {
    const { t } = useTranslation();

    return (
        <>
            <Typography variant="h5" mt={3} mb={2}>
                {t('hospital.speciality.title')}
            </Typography>
            <Grid container spacing={3}>
                {specialities.map((speciality, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <SpecialityCard speciality={speciality} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default HospitalSpecialities;
