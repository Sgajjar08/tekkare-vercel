import HospitalTable from '../table/HospitalsTable';
import hospitalData from '../../../data/data_exemple1.json';

export const HospitalDashboard = () => (
  <HospitalTable hospitals={hospitalData} />
);
