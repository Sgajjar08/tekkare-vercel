import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ResearchTeamMember } from '../../../../types/projects';

interface ProjectOverviewProps {
  researchTeams: ResearchTeamMember[];
}

const ProjectResearchTeams: React.FC<ProjectOverviewProps> = ({
  researchTeams,
}) => {
  const { t } = useTranslation();
  
  return (
    <>
      <Typography variant="h5" mb={2} mt={3}>
        {t('project.researchTeam.title')}
      </Typography>
      <Grid container spacing={3}>
        {researchTeams.map((team) => (
          <Grid item xs={12} sm={6} md={4} key={team.name}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={600}>
                  {team.name}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {team.role}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {team.specialty}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProjectResearchTeams;
