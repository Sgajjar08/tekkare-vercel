import React from 'react';
import { Box, Button, Paper, Popper, Typography } from '@mui/material';
import { Info } from '@mui/icons-material';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { Funding } from '../../../../types/projects';

interface ProjectOverviewProps {
    startDate: string;
    endDate: string;
    researchField: string;
    funding: Funding;
}

const PopupBody = styled('div')(
    () => `
    width: max-content;
    padding: 12px 16px;
    margin: 8px;
    border-radius: 8px;
    border: 1px solid #434D5B;
    background-color: #1976d2;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 0.7);
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    z-index: 1;
    color: '#fff'
  `
);

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
    startDate,
    endDate,
    researchField,
    funding,
}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const { t } = useTranslation();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <>
            <Paper
                sx={{
                    padding: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Typography>{t('project.overview.startDate')}: {startDate}</Typography>
                <Typography>{t('project.overview.endDate')}: {endDate}</Typography>
                <Typography>{t('project.overview.researchField')}: {researchField}</Typography>
            </Paper>
            <Paper sx={{ padding: 2, marginTop: 2 }}>
                <Typography>
                    {t('project.overview.totalFunding')}: {funding.totalAmount}{' '}
                    <Button onClick={handleClick} aria-describedby={id}>
                        <Info />
                    </Button>
                </Typography>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <PopupBody>
                        <Box color={'white'}>
                            {funding.sources.map((source) => (
                                <div key={source.name}>
                                    <Typography variant="body1">
                                        {source.name}:{' '}
                                        <span style={{ fontWeight: 'bold' }}>{source.amount}</span>
                                    </Typography>
                                </div>
                            ))}
                        </Box>
                    </PopupBody>
                </Popper>
            </Paper>
        </>
    );
};

export default ProjectOverview;
