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
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ResearchProject } from '../../../types/projects';

interface ProjectsTableProps {
  projects: ResearchProject[];
}

const ProjectsTable: React.FC<ProjectsTableProps> = ({ projects }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleRowClick = (projectName: string) => {
    navigate(`/projects/${encodeURIComponent(projectName)}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">{t('project.table.headers.name')}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">{t('project.table.headers.researchField')}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">{t('project.table.headers.leadInstitution')}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">{t('project.table.headers.startDate')}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">{t('project.table.headers.endDate')}</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow
              key={project.projectName}
              hover
              onClick={() => handleRowClick(project.projectName)}
              style={{ cursor: 'pointer' }}
            >
              <TableCell>{project.projectName}</TableCell>
              <TableCell>{project.researchField}</TableCell>
              <TableCell>{project.leadInstitution}</TableCell>
              <TableCell>{project.startDate}</TableCell>
              <TableCell>{project.endDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectsTable;
