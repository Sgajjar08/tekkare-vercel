import { molecules } from '../../../data/data_exemple2.json';
import MoleculesTable from '../table/MoleculesTable';

export const MoleculesDashboard = () => (
  <MoleculesTable molecules={molecules} />
);
