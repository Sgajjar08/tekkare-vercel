import { Card, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Speciality } from '../../../../types/hospitalType';
import LinearProgressWithLabel from '../../../../common/LinearProgressBar';

interface Props {
    speciality: Speciality;
}

const SpecialityCard: React.FC<Props> = ({ speciality }: Props) => {
    const { t } = useTranslation();

    const satisfactionRate = parseFloat(
        speciality.satisfactionRate.replace('%', '')
    );
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" fontWeight={600}>
                    {speciality.specialty}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {t('hospital.speciality.numberOfDoctors')}: {speciality.numberOfDoctors}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {t('hospital.speciality.satisfactionRate')}:{' '}
                    <LinearProgressWithLabel value={satisfactionRate} />
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SpecialityCard;
