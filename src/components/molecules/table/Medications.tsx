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
    Box,
} from '@mui/material';
import { SparkLineChart } from '@mui/x-charts';
import { useTranslation } from 'react-i18next';

import { Medication } from '../../../types/moleculeType';
import { useLanguage } from '../../../contexts/LanguageContext';

interface MedicationTableProps {
    medications: Medication[];
}

const MedicationsTable: React.FC<MedicationTableProps> = ({ medications }) => {
    const { language } = useLanguage();
    const { t } = useTranslation();

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant="h6">{t('molecule.medications.table.headers.name')}</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="h6">{t('molecule.medications.table.headers.dosage')}</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="h6">{t('molecule.medications.table.headers.priceHistory')}</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {medications.map((medication) => (
                        <TableRow key={medication.name}>
                            <TableCell>{medication.name}</TableCell>
                            <TableCell>{medication.dosage}</TableCell>
                            <TableCell>
                                <Box sx={{ flexGrow: 1 }}>
                                    <SparkLineChart
                                        data={medication.priceHistory.map((ph) => language === 'en' ? ph.priceUSD : ph.priceEUR)}
                                        xAxis={{
                                            scaleType: 'time',
                                            data: medication.priceHistory.map(
                                                (ph) => new Date(ph.date)
                                            ),
                                            valueFormatter: (value) =>
                                                value.toISOString().slice(0, 10),
                                        }}
                                        plotType="line"
                                        height={50}
                                        width={100}
                                        showTooltip
                                        showHighlight
                                    />
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MedicationsTable;
