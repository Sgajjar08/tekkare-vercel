import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

import projectData from '../../../data/data_exemple3.json';
import ProjectHeader from './Header';
import ProjectOverview from './overview/Overview';
import ProjectResearchTeams from './projectResearchTeam/ProjectResearchTeam';
import Milestones from './milestones/Milestones';
import ProjectPublications from './publications/Publications';

const Project: React.FC = () => {
  const { projectName } = useParams();
  const { t } = useTranslation();
  
  const project = projectData.find(
    (project) => project.projectName === projectName
  );

  if (!project) {
    return (
      <Container>
        <Typography variant="h6">{t('project.notFound')}</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <ProjectHeader
        name={project.projectName}
        description={project.leadInstitution}
      />
      <ProjectOverview
        startDate={project.startDate}
        endDate={project.endDate}
        researchField={project.researchField}
        funding={project.funding}
      />
      <ProjectResearchTeams researchTeams={project.researchTeam} />
      <Milestones milestones={project.milestones} />
      <ProjectPublications publications={project.publications} />
    </Container>
  );
};

export default Project;
