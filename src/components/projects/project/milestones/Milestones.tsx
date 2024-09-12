import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, HourglassBottom, Work } from '@mui/icons-material';

import { Milestone } from '../../../../types/projects';

interface MilestonesProps {
    milestones: Milestone[];
}

export default function Milestones({ milestones }: MilestonesProps) {
    const { t } = useTranslation();
    const icon = useCallback((status: string) => {
        switch (status) {
            case 'Completed':
                return <Check />;
            case 'Pending':
                return <HourglassBottom />;
            case 'Ongoing':
                return <Work />;
        }
    }, []);

    return (
        <>
            <Typography variant="h5" mb={2} mt={3}>
                {t('project.milestones.title')}
            </Typography>
            <Timeline position="alternate">
                {milestones.map((milestone, index) => {
                    return (
                        <TimelineItem key={milestone.name}>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align={index % 2 !== 0 ? 'right' : 'left'}
                                variant="body2"
                                color="text.secondary"
                            >
                                {milestone.completionDate}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>{icon(milestone.status)}</TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    {milestone.name}
                                </Typography>
                                <Typography>{t('project.milestones.status')}: {milestone.status}</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    );
                })}
            </Timeline>
        </>
    );
}
