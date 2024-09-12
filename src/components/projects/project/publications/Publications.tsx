import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Publication } from '../../../../types/projects';

interface ProjectOverviewProps {
    publications: Publication[];
}

const ProjectPublications: React.FC<ProjectOverviewProps> = ({
    publications,
}) => {
    const { t } = useTranslation();

    return (
        <>
            <Typography variant="h5" mb={2} mt={3}>
                {t('project.publications.title')}
            </Typography>
            <Grid container spacing={3}>
                {publications.map((publication) => (
                    <Grid item xs={12} sm={6} md={4} key={publication.title}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" fontWeight={600}>
                                    {publication.title}
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    {publication.publicationDate}
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    {publication.doi}
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    {publication.journal}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default ProjectPublications;
