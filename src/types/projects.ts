export interface FundingSource {
  name: string;
  amount: number;
}

export interface Funding {
  totalAmount: number;
  sources: FundingSource[];
}

export interface ResearchTeamMember {
  name: string;
  role: string;
  specialty: string;
}

export interface Milestone {
  name: string;
  completionDate: string;
  status: string;
}

export interface Publication {
  title: string;
  journal: string;
  publicationDate: string;
  doi: string;
}

export interface ClinicalTrial {
  trialName: string;
  phase: string;
  startDate: string;
  endDate: string;
  totalParticipants: number;
  status: string;
}

export interface ResearchProject {
  projectName: string;
  researchField: string;
  leadInstitution: string;
  startDate: string;
  endDate: string;
  funding: Funding;
  researchTeam: ResearchTeamMember[];
  milestones: Milestone[];
  publications: Publication[];
  clinicalTrials: ClinicalTrial[];
}
