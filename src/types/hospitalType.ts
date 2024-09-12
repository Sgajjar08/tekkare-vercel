export interface MonthlyHospitalization {
  month: string;
  year: number;
  value: number;
}

export interface Overview {
  totalPatients: number;
  satisfactionRate: string;
  totalTreatments: number;
  numberOfDoctors: number;
  numberOfNurses: number;
}

export interface Speciality {
  specialty: string;
  satisfactionRate: string;
  numberOfDoctors: number;
}

export interface Department {
  department: string;
  averageWaitTime: string;
  patientsPerDay: number;
}

export interface ClinicalTrial {
  name: string;
  status: string;
  startDate: string;
  endDate: string;
  totalPatients: number;
}

export interface Hospital {
  name: string;
  location: string;
  overview: Overview;
  monthlyHospitalizations: MonthlyHospitalization[];
  doctorSpecialties: Speciality[];
  hospitalDepartments: Department[];
  clinicalTrials: ClinicalTrial[];
}
