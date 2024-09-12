import { Card, CardContent, Typography } from '@mui/material';
import { Department } from '../../../../types/hospitalType';
import { useTranslation } from 'react-i18next';

interface Props {
    department: Department;
}

const SpecialityCard: React.FC<Props> = ({ department }: Props) => {
    const { t } = useTranslation();
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" fontWeight={600}>
                    {department.department}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {t('hospital.department.patientsPerDay')}: {department.patientsPerDay}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {t('hospital.department.averageWaitTime')}: {department.averageWaitTime}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SpecialityCard;
