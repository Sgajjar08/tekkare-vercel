import projectData from '../../../data/data_exemple3.json';
import ProjectsTable from '../table/ProjectTable';

export const ProjectsDashboard = () => <ProjectsTable projects={projectData} />;
