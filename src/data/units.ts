export interface UnitInfo {
  id: number
  name: string
  area: string
  weight: string
  topics: string[]
}

export const UNITS: UnitInfo[] = [
  {
    id: 1,
    name: 'Regulations, Standards & Frameworks',
    area: 'Area II-A',
    weight: '35-45%',
    topics: [
      'NIST CSF (Core, Tiers, Profiles)',
      'NIST Privacy Framework',
      'NIST SP 800-53',
      'HIPAA/HITECH',
      'GDPR',
      'PCI DSS',
      'CIS Controls v8.1',
      'COBIT 2019',
    ],
  },
  {
    id: 2,
    name: 'Information Systems & Data Management',
    area: 'Area I',
    weight: '35-45%',
    topics: [
      'IT Infrastructure & Cloud',
      'ERP & AIS',
      'BCP/DR & Availability',
      'Change Management',
      'Data Lifecycle & Governance',
      'Databases & SQL',
      'BPMN & Data Flow Diagrams',
    ],
  },
  {
    id: 3,
    name: 'Security, Confidentiality & Privacy',
    area: 'Area II-B/C/D',
    weight: '35-45%',
    topics: [
      'Threats & Attacks',
      'Mitigation & Controls',
      'Encryption & DLP',
      'Authorization Models',
      'Incident Response',
    ],
  },
  {
    id: 4,
    name: 'SOC Engagements',
    area: 'Area III',
    weight: '15-25%',
    topics: [
      'SOC 1/2/3 Types',
      'Trust Services Criteria',
      'Planning & Performing',
      'Reporting & Opinions',
      'Subservice Organizations',
    ],
  },
]
