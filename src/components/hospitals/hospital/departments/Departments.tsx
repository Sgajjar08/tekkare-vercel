import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Department } from '../../../../types/hospitalType';
import DepartmentCard from './DepartmentCard';

interface HospitalDepartmentsProps {
    departments: Department[];
}

const HospitalDepartments: React.FC<HospitalDepartmentsProps> = ({
    departments,
}) => {
    const { t } = useTranslation();

    return (
        <>
            <Typography variant="h5" mt={3} mb={2}>
                {t('hospital.department.title')}
            </Typography>
            <Grid container spacing={3}>
                {departments.map((department, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <DepartmentCard department={department} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default HospitalDepartments;
