import type { Question } from '../types'

export const unit1Questions: Question[] = [
  // ── NIST CSF ──────────────────────────────────────────────────────────
  {
    question:
      'Which of the following is one of the six core functions introduced in the NIST Cybersecurity Framework (CSF) 2.0?',
    choices: {
      A: 'Authorize',
      B: 'Classify',
      C: 'Audit',
      D: 'Govern',
    },
    correct: 'D',
    explanation:
      'NIST CSF 2.0 added Govern as the sixth core function alongside Identify, Protect, Detect, Respond, and Recover. Authorize is a step in the NIST RMF, not a CSF function, and Classify and Audit are not CSF functions.',
    unit: 1,
    topic: 'NIST CSF',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'In the NIST Cybersecurity Framework, Implementation Tier 3 is characterized by which of the following descriptions?',
    choices: {
      A: 'Partial',
      B: 'Risk Informed',
      C: 'Repeatable',
      D: 'Adaptive',
    },
    correct: 'C',
    explanation:
      'NIST CSF Implementation Tiers range from Tier 1 (Partial) through Tier 4 (Adaptive). Tier 3 is Repeatable, meaning the organization has formally approved and expressed as policy its risk management practices. Risk Informed describes Tier 2, not Tier 3.',
    unit: 1,
    topic: 'NIST CSF',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'What is the primary purpose of Organizational Profiles within the NIST Cybersecurity Framework?',
    choices: {
      A: 'To describe the current and/or target cybersecurity posture of an organization',
      B: 'To assign maturity levels to individual controls',
      C: 'To mandate specific technologies for implementation',
      D: 'To rank organizations against industry competitors',
    },
    correct: 'A',
    explanation:
      'Organizational Profiles in the NIST CSF describe the current state and/or target state of an organization\'s cybersecurity posture aligned to CSF outcomes. They do not mandate specific technologies; rather, they help organizations identify gaps between current and target states.',
    unit: 1,
    topic: 'NIST CSF',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A financial services company has formalized its cybersecurity risk management practices into policy, but those practices are not yet dynamically adjusted based on threat intelligence. Under the NIST CSF Implementation Tiers, this organization would most likely be classified at which tier?',
    choices: {
      A: 'Tier 1 - Partial',
      B: 'Tier 2 - Risk Informed',
      C: 'Tier 3 - Repeatable',
      D: 'Tier 4 - Adaptive',
    },
    correct: 'C',
    explanation:
      'Tier 3 (Repeatable) describes organizations that have formally approved risk management practices expressed as policy. Tier 4 (Adaptive) requires that practices are dynamically adjusted based on lessons learned and threat intelligence, which this organization has not yet achieved.',
    unit: 1,
    topic: 'NIST CSF',
    skill: 'Application',
  },
  {
    question:
      'When comparing the NIST CSF Implementation Tiers with the COBIT 2019 capability levels, which of the following statements is most accurate?',
    choices: {
      A: 'Both use identical scales and can be directly substituted for one another',
      B: 'NIST CSF Tiers (1-4) characterize organizational risk management practices, while COBIT capability levels (0-5) measure process performance maturity',
      C: 'COBIT capability levels are less granular than NIST CSF Tiers',
      D: 'NIST CSF Tiers measure individual control effectiveness, while COBIT levels assess organizational strategy',
    },
    correct: 'B',
    explanation:
      'NIST CSF Implementation Tiers (1-4) characterize how an organization views cybersecurity risk and the processes in place to manage that risk, whereas COBIT 2019 capability levels (0-5) assess the performance maturity of individual governance and management processes. The scales are not identical and serve different purposes.',
    unit: 1,
    topic: 'NIST CSF',
    skill: 'Analysis',
  },

  // ── NIST Privacy Framework ────────────────────────────────────────────
  {
    question:
      'Which of the following is a core function unique to the NIST Privacy Framework and NOT found in the NIST Cybersecurity Framework?',
    choices: {
      A: 'Protect-P',
      B: 'Detect-P',
      C: 'Control-P',
      D: 'Respond-P',
    },
    correct: 'C',
    explanation:
      'Control-P is a core function unique to the NIST Privacy Framework. It addresses data processing management activities. While the Privacy Framework shares some similar function names (with the -P suffix) with the CSF, Control-P and Communicate-P are unique to the Privacy Framework.',
    unit: 1,
    topic: 'NIST Privacy',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'How does the NIST Privacy Framework relate to the NIST Cybersecurity Framework?',
    choices: {
      A: 'The Privacy Framework replaces the Cybersecurity Framework entirely',
      B: 'The Privacy Framework is a subset of the Cybersecurity Framework',
      C: 'The Privacy Framework is only applicable to government agencies, whereas the CSF is for the private sector',
      D: 'The two frameworks are complementary and can be used together to manage cybersecurity and privacy risks',
    },
    correct: 'D',
    explanation:
      'The NIST Privacy Framework is designed to be used alongside the Cybersecurity Framework. They share common elements (such as the Protect/Protect-P function overlap) and are complementary tools for managing both cybersecurity and privacy risks. The Privacy Framework does not replace the CSF.',
    unit: 1,
    topic: 'NIST Privacy',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'The Communicate-P function in the NIST Privacy Framework is primarily focused on which activity?',
    choices: {
      A: 'Enabling organizations and individuals to have a reliable understanding of data processing practices and associated privacy risks',
      B: 'Detecting unauthorized access to personal data',
      C: 'Encrypting data in transit between systems',
      D: 'Recovering from privacy breaches',
    },
    correct: 'A',
    explanation:
      'Communicate-P focuses on ensuring that organizations and individuals have a reliable understanding and dialogue about how data is processed and the associated privacy risks. Encrypting data in transit falls under security controls, not the Communicate-P function.',
    unit: 1,
    topic: 'NIST Privacy',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A technology company wants to assess and improve its privacy practices using the NIST Privacy Framework. The company should create profiles to represent which of the following?',
    choices: {
      A: 'The current privacy posture and the desired target privacy posture',
      B: 'The minimum regulatory requirements and the maximum feasible controls',
      C: 'The internal privacy risks and the external cybersecurity threats',
      D: 'The data classification levels and the associated retention periods',
    },
    correct: 'A',
    explanation:
      'Similar to the NIST CSF, the Privacy Framework uses Profiles to describe the current state and target state of privacy activities. Comparing these profiles enables the organization to identify and prioritize gaps. Profiles do not describe minimum regulatory requirements or data classification levels.',
    unit: 1,
    topic: 'NIST Privacy',
    skill: 'Application',
  },

  // ── NIST SP 800-53 ────────────────────────────────────────────────────
  {
    question:
      'What is the primary purpose of NIST Special Publication 800-53?',
    choices: {
      A: 'To provide a risk management framework for cloud computing',
      B: 'To define encryption standards for financial transactions',
      C: 'To establish a catalog of security and privacy controls for federal information systems',
      D: 'To set minimum cybersecurity requirements for critical infrastructure owners',
    },
    correct: 'C',
    explanation:
      'NIST SP 800-53 provides a comprehensive catalog of security and privacy controls designed primarily for federal information systems and organizations. While it is widely adopted by the private sector, its primary applicability is to federal systems as required by FISMA.',
    unit: 1,
    topic: 'NIST SP 800-53',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which of the following is a significant change introduced in NIST SP 800-53 Revision 5?',
    choices: {
      A: 'Removal of all privacy-related controls',
      B: 'Integration of privacy controls into the consolidated control catalog alongside security controls',
      C: 'Limitation of scope to only Department of Defense systems',
      D: 'Elimination of the control baseline concept',
    },
    correct: 'B',
    explanation:
      'A key change in Revision 5 was the integration of privacy controls directly into the SP 800-53 catalog, making it a unified set of security and privacy controls. Prior revisions maintained privacy controls in a separate appendix. Privacy controls were not removed; they were consolidated.',
    unit: 1,
    topic: 'NIST SP 800-53',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A federal agency is selecting security controls for a new information system. According to NIST guidance, which publication provides the catalog of controls from which the agency should select?',
    choices: {
      A: 'NIST SP 800-171',
      B: 'NIST CSF',
      C: 'NIST SP 800-30',
      D: 'NIST SP 800-53',
    },
    correct: 'D',
    explanation:
      'NIST SP 800-53 is the definitive catalog of security and privacy controls for federal information systems. SP 800-171 addresses protecting Controlled Unclassified Information in nonfederal systems, and SP 800-30 is a guide for conducting risk assessments.',
    unit: 1,
    topic: 'NIST SP 800-53',
    skill: 'Application',
  },

  // ── HIPAA / HITECH ────────────────────────────────────────────────────
  {
    question:
      'Under HIPAA, which of the following is considered a covered entity?',
    choices: {
      A: 'A software vendor that develops EHR systems',
      B: 'A cybersecurity consulting firm',
      C: 'A healthcare clearinghouse',
      D: 'An IT staffing agency',
    },
    correct: 'C',
    explanation:
      'HIPAA defines three types of covered entities: health plans, healthcare clearinghouses, and healthcare providers who transmit health information electronically. A software vendor developing EHR systems would typically be considered a business associate, not a covered entity.',
    unit: 1,
    topic: 'HIPAA',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Under HIPAA, the minimum necessary rule requires covered entities to do which of the following?',
    choices: {
      A: 'Encrypt all protected health information at rest',
      B: 'Notify patients within 24 hours of any data breach',
      C: 'Conduct annual penetration testing of all systems containing PHI',
      D: 'Limit the use, disclosure, and request of PHI to the minimum amount necessary to accomplish the intended purpose',
    },
    correct: 'D',
    explanation:
      'The minimum necessary rule is a key HIPAA principle requiring covered entities to make reasonable efforts to limit PHI access to the minimum necessary to accomplish the intended purpose. While encryption is a best practice, it is an addressable (not required) specification under the Security Rule.',
    unit: 1,
    topic: 'HIPAA',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which of the following is a permitted disclosure of protected health information (PHI) under HIPAA without patient authorization?',
    choices: {
      A: 'Treatment, payment, and healthcare operations',
      B: 'Marketing purposes',
      C: 'Sharing with an employer for employment decisions',
      D: 'Sale to a pharmaceutical company for research targeting',
    },
    correct: 'A',
    explanation:
      'HIPAA permits disclosure of PHI without individual authorization for treatment, payment, and healthcare operations (TPO). Marketing generally requires patient authorization, and the sale of PHI is prohibited without authorization under HITECH.',
    unit: 1,
    topic: 'HIPAA',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Under HITECH, within how many days of discovering a breach of unsecured PHI must a covered entity notify affected individuals?',
    choices: {
      A: '30 days',
      B: '60 days',
      C: '90 days',
      D: '120 days',
    },
    correct: 'B',
    explanation:
      'The HITECH Act requires covered entities to notify affected individuals of a breach of unsecured PHI without unreasonable delay and no later than 60 days after discovery of the breach. The 30-day timeframe is not the HITECH standard, though some state laws may impose shorter notification periods.',
    unit: 1,
    topic: 'HIPAA',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A hospital contracts with a cloud storage provider to store electronic protected health information (ePHI). Under HIPAA, the cloud storage provider is classified as which of the following?',
    choices: {
      A: 'A covered entity',
      B: 'A healthcare clearinghouse',
      C: 'A subcontractor exempt from HIPAA requirements',
      D: 'A business associate',
    },
    correct: 'D',
    explanation:
      'Under HIPAA, a business associate is any entity that performs functions or activities on behalf of a covered entity that involve the use or disclosure of PHI. A cloud storage provider storing ePHI qualifies as a business associate and must enter into a business associate agreement (BAA). Subcontractors of business associates are also subject to HIPAA, not exempt.',
    unit: 1,
    topic: 'HIPAA',
    skill: 'Application',
  },
  {
    question:
      'A physician practice discovers that an employee accessed the medical records of 600 patients without a legitimate work reason. Under HIPAA breach notification requirements, which of the following actions is required?',
    choices: {
      A: 'Notify affected individuals only; media notification is optional regardless of the number affected',
      B: 'Notify affected individuals, the Secretary of HHS, and prominent media outlets serving the state because the breach affects more than 500 individuals',
      C: 'Notify only the Secretary of HHS and log the breach internally',
      D: 'No notification is required because the breach was caused by an internal employee',
    },
    correct: 'B',
    explanation:
      'When a breach of unsecured PHI affects 500 or more individuals, HIPAA requires notification to affected individuals, the Secretary of HHS, and prominent media outlets serving the state or jurisdiction. The internal nature of the breach does not eliminate notification requirements.',
    unit: 1,
    topic: 'HIPAA',
    skill: 'Application',
  },
  {
    question:
      'An auditor is evaluating which framework would be most appropriate for a healthcare organization that needs to protect both patient health information and payment card data. Which combination of standards would most directly address both requirements?',
    choices: {
      A: 'NIST CSF and COBIT 2019',
      B: 'GDPR and CIS Controls',
      C: 'HIPAA and PCI DSS',
      D: 'NIST SP 800-53 and NIST Privacy Framework',
    },
    correct: 'C',
    explanation:
      'HIPAA directly governs the protection of patient health information (PHI), and PCI DSS governs the protection of payment card data. While NIST CSF and COBIT 2019 are valuable governance frameworks, they do not directly mandate specific protections for PHI or cardholder data the way HIPAA and PCI DSS do.',
    unit: 1,
    topic: 'HIPAA',
    skill: 'Analysis',
  },

  // ── GDPR ──────────────────────────────────────────────────────────────
  {
    question:
      'Under the GDPR, which of the following is one of the six principles relating to the processing of personal data?',
    choices: {
      A: 'Maximum retention',
      B: 'Data minimization',
      C: 'Unlimited purpose flexibility',
      D: 'Mandatory anonymization',
    },
    correct: 'B',
    explanation:
      'Data minimization is one of the six GDPR principles, requiring that personal data collected be adequate, relevant, and limited to what is necessary for the purposes for which it is processed. Maximum retention contradicts the storage limitation principle, which requires data be kept only as long as necessary.',
    unit: 1,
    topic: 'GDPR',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'What is the maximum administrative fine that can be imposed for the most serious infringements under the GDPR?',
    choices: {
      A: 'Up to 4% of annual global turnover or EUR 20 million, whichever is greater',
      B: 'Up to 2% of annual global turnover or EUR 10 million, whichever is greater',
      C: 'Up to 6% of annual global turnover or EUR 30 million, whichever is greater',
      D: 'Up to 10% of annual global turnover or EUR 50 million, whichever is greater',
    },
    correct: 'A',
    explanation:
      'The GDPR establishes two tiers of administrative fines. The upper tier, for the most serious infringements (such as violations of the basic principles of processing or data subject rights), allows fines of up to 4% of annual global turnover or EUR 20 million, whichever is greater. The 2%/EUR 10 million tier applies to less severe infringements.',
    unit: 1,
    topic: 'GDPR',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which of the following is a right granted to data subjects under the GDPR?',
    choices: {
      A: 'Right to data portability',
      B: 'Right to prevent all data processing under any circumstances',
      C: 'Right to sell personal data to third parties',
      D: 'Right to demand indefinite data retention',
    },
    correct: 'A',
    explanation:
      'The right to data portability allows data subjects to receive their personal data in a structured, commonly used, and machine-readable format and to transmit it to another controller. The GDPR does not grant a right to sell personal data or to prevent all processing under any circumstances, as some processing has legitimate legal bases.',
    unit: 1,
    topic: 'GDPR',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Under the GDPR, a Data Protection Officer (DPO) is required in which of the following situations?',
    choices: {
      A: 'Only for organizations with more than 500 employees',
      B: 'Only for government agencies within the European Union',
      C: 'Only when the organization has experienced a prior data breach',
      D: 'When the core activities of the controller or processor involve regular and systematic monitoring of data subjects on a large scale',
    },
    correct: 'D',
    explanation:
      'The GDPR requires a DPO when core activities involve regular and systematic monitoring of data subjects on a large scale, or large-scale processing of special categories of data. There is no employee-count threshold; the requirement is activity-based. Public authorities also require a DPO, but this is not limited to government agencies.',
    unit: 1,
    topic: 'GDPR',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A U.S.-based e-commerce company has no physical presence in the EU but sells products to customers in France and Germany, collecting their personal data. Does the GDPR apply to this company?',
    choices: {
      A: 'No, because the company is not established in the EU',
      B: 'Yes, because the GDPR applies to any organization that processes personal data of EU residents when offering goods or services to them',
      C: 'No, because the GDPR only applies to companies with annual revenue exceeding EUR 50 million',
      D: 'Yes, but only if the company has more than 250 employees',
    },
    correct: 'B',
    explanation:
      'The GDPR has extraterritorial scope and applies to organizations outside the EU that offer goods or services to, or monitor the behavior of, individuals in the EU. There is no revenue threshold or employee-count threshold for applicability. Physical presence in the EU is not required.',
    unit: 1,
    topic: 'GDPR',
    skill: 'Application',
  },
  {
    question:
      'A data subject requests that a data controller erase all personal data related to them. Under the GDPR, which of the following would be a valid reason for the controller to refuse the request?',
    choices: {
      A: 'The controller prefers to retain the data for potential future marketing',
      B: 'The controller has already shared the data with third parties',
      C: 'The erasure request was submitted electronically rather than in writing',
      D: 'The data is necessary for compliance with a legal obligation under EU or member state law',
    },
    correct: 'D',
    explanation:
      'The right to erasure (right to be forgotten) is not absolute. Controllers may refuse erasure when processing is necessary for compliance with a legal obligation, among other exceptions. Preference for future marketing is not a valid basis for refusal, and the GDPR does not require erasure requests to be submitted in any particular format.',
    unit: 1,
    topic: 'GDPR',
    skill: 'Application',
  },
  {
    question:
      'An auditor is evaluating an organization\'s data processing practices against GDPR requirements. The organization collects personal data for a stated purpose but routinely uses it for unrelated purposes without obtaining additional consent. Which GDPR principle is most directly violated?',
    choices: {
      A: 'Data minimization',
      B: 'Purpose limitation',
      C: 'Storage limitation',
      D: 'Integrity and confidentiality',
    },
    correct: 'B',
    explanation:
      'The purpose limitation principle requires that personal data be collected for specified, explicit, and legitimate purposes and not further processed in a manner incompatible with those purposes. While data minimization relates to the amount of data collected, purpose limitation specifically addresses using data beyond its original stated purpose.',
    unit: 1,
    topic: 'GDPR',
    skill: 'Analysis',
  },
  {
    question:
      'A multinational organization processes personal data of EU residents and also maintains federal information systems in the United States. An auditor determines that the organization must comply with both GDPR and NIST SP 800-53. Which of the following best describes the relationship between these two standards?',
    choices: {
      A: 'GDPR supersedes NIST SP 800-53 in all circumstances',
      B: 'NIST SP 800-53 includes all GDPR requirements, so separate GDPR compliance is unnecessary',
      C: 'They address different but overlapping concerns; GDPR focuses on data protection rights while NIST SP 800-53 provides a control catalog for information system security',
      D: 'They are mutually exclusive and cannot be implemented simultaneously',
    },
    correct: 'C',
    explanation:
      'GDPR is a regulation focused on the protection of personal data and data subject rights for EU residents, while NIST SP 800-53 is a security and privacy control catalog primarily for federal information systems. They have overlapping areas (particularly in security controls) but address fundamentally different regulatory requirements. Neither supersedes the other.',
    unit: 1,
    topic: 'GDPR',
    skill: 'Analysis',
  },
  {
    question:
      'In the context of the GDPR, the principle of "integrity and confidentiality" requires which of the following?',
    choices: {
      A: 'That personal data be processed in a manner ensuring appropriate security, including protection against unauthorized or unlawful processing and accidental loss',
      B: 'That personal data be publicly accessible to ensure transparency',
      C: 'That data subjects must verify the integrity of their own data annually',
      D: 'That all personal data be stored exclusively within EU borders',
    },
    correct: 'A',
    explanation:
      'The integrity and confidentiality principle (the sixth GDPR principle) requires appropriate security measures to protect personal data against unauthorized or unlawful processing and accidental loss, destruction, or damage. This does not mean data must be publicly accessible; transparency is a separate principle addressing how organizations communicate their processing activities.',
    unit: 1,
    topic: 'GDPR',
    skill: 'Remembering and Understanding',
  },

  // ── PCI DSS ───────────────────────────────────────────────────────────
  {
    question:
      'How many high-level requirements does the PCI Data Security Standard (PCI DSS) contain?',
    choices: {
      A: '6',
      B: '10',
      C: '12',
      D: '18',
    },
    correct: 'C',
    explanation:
      'PCI DSS contains 12 high-level requirements organized under 6 goals. The 6 goals include building and maintaining a secure network, protecting cardholder data, and others. The number 18 corresponds to CIS Controls, not PCI DSS requirements.',
    unit: 1,
    topic: 'PCI DSS',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which of the following is one of the six goals of the PCI Data Security Standard?',
    choices: {
      A: 'Maintain a vulnerability management program',
      B: 'Establish a privacy governance framework',
      C: 'Implement a data subject rights process',
      D: 'Conduct annual privacy impact assessments',
    },
    correct: 'A',
    explanation:
      'Maintaining a vulnerability management program is one of the six PCI DSS goals. The six goals are: build and maintain a secure network and systems, protect cardholder data, maintain a vulnerability management program, implement strong access control measures, regularly monitor and test networks, and maintain an information security policy. Privacy impact assessments relate to privacy frameworks, not PCI DSS.',
    unit: 1,
    topic: 'PCI DSS',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'In the context of PCI DSS, what does the cardholder data environment (CDE) refer to?',
    choices: {
      A: 'Any system that processes, stores, or transmits cardholder data and any connected system components',
      B: 'The geographical location where the card issuer is headquartered',
      C: 'Only the payment terminal hardware used at the point of sale',
      D: 'The cloud provider\'s data center where payment data is backed up',
    },
    correct: 'A',
    explanation:
      'The cardholder data environment encompasses the people, processes, and technology that store, process, or transmit cardholder data or sensitive authentication data, including any connected system components. It is not limited to point-of-sale terminals or specific physical locations.',
    unit: 1,
    topic: 'PCI DSS',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'What is the purpose of a Self-Assessment Questionnaire (SAQ) under PCI DSS?',
    choices: {
      A: 'To replace the need for any external security assessment',
      B: 'To enable qualifying merchants and service providers to self-evaluate their compliance with PCI DSS requirements',
      C: 'To certify that an organization meets HIPAA security requirements',
      D: 'To document an organization\'s NIST CSF Implementation Tier',
    },
    correct: 'B',
    explanation:
      'The SAQ is a validation tool for merchants and service providers who are eligible to self-assess their PCI DSS compliance. It does not replace all external assessment requirements; larger merchants (Level 1) still require an on-site assessment by a Qualified Security Assessor (QSA).',
    unit: 1,
    topic: 'PCI DSS',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A retail company processes credit card transactions both online and in its physical stores. The company wants to determine the scope of its PCI DSS compliance obligations. Which of the following best defines the scope?',
    choices: {
      A: 'Only the online payment system, because physical stores use chip-based terminals',
      B: 'Only systems that store cardholder data; systems that merely transmit data are out of scope',
      C: 'Only systems owned by the company; third-party processors are excluded from scope',
      D: 'All system components that are included in or connected to the cardholder data environment, regardless of channel',
    },
    correct: 'D',
    explanation:
      'PCI DSS scope includes all system components that are included in or connected to the cardholder data environment, spanning all channels (online and in-store). Systems that transmit or process cardholder data are in scope, not just those that store it, and third-party service providers have their own PCI DSS obligations.',
    unit: 1,
    topic: 'PCI DSS',
    skill: 'Application',
  },
  {
    question:
      'An organization is evaluating whether PCI DSS or HIPAA is the applicable standard for protecting certain data. The data in question includes credit card numbers used to pay for medical services. Which standard primarily governs the protection of this payment card data?',
    choices: {
      A: 'HIPAA, because the data was collected in a healthcare context',
      B: 'PCI DSS, because the data consists of payment card information regardless of the industry context',
      C: 'Neither standard applies because the data crosses regulatory boundaries',
      D: 'Both standards are equally applicable with identical requirements',
    },
    correct: 'B',
    explanation:
      'PCI DSS applies to all entities that store, process, or transmit payment card data, regardless of industry. While a healthcare organization must also comply with HIPAA for protected health information, credit card numbers are governed by PCI DSS. The standards are not identical in their requirements, though both may apply to the organization.',
    unit: 1,
    topic: 'PCI DSS',
    skill: 'Analysis',
  },
  {
    question:
      'Which of the following frameworks is primarily prescriptive in nature, specifying detailed technical and operational controls, rather than being a risk-based governance framework?',
    choices: {
      A: 'NIST CSF',
      B: 'COBIT 2019',
      C: 'NIST Privacy Framework',
      D: 'PCI DSS',
    },
    correct: 'D',
    explanation:
      'PCI DSS is the most prescriptive of the listed frameworks, specifying detailed technical and operational requirements (such as specific encryption standards, password policies, and firewall configurations). NIST CSF and COBIT 2019 are risk-based frameworks that provide guidance without mandating specific technical implementations.',
    unit: 1,
    topic: 'PCI DSS',
    skill: 'Analysis',
  },

  // ── CIS Controls ─────────────────────────────────────────────────────
  {
    question:
      'How many controls are defined in CIS Controls v8.1?',
    choices: {
      A: '12',
      B: '14',
      C: '18',
      D: '20',
    },
    correct: 'C',
    explanation:
      'CIS Controls v8.1 defines 18 controls, numbered from Control 1 (Inventory and Control of Enterprise Assets) through Control 18 (Penetration Testing). Earlier versions (v7 and prior) contained 20 controls, but the framework was consolidated to 18 in version 8.',
    unit: 1,
    topic: 'CIS Controls',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'In the CIS Controls framework, Implementation Group 1 (IG1) is best described as which of the following?',
    choices: {
      A: 'Advanced controls for organizations with dedicated security teams',
      B: 'Essential cyber hygiene that every organization should implement',
      C: 'Controls applicable only to government agencies',
      D: 'Penetration testing and red team exercises',
    },
    correct: 'B',
    explanation:
      'IG1 represents essential cyber hygiene -- a foundational set of safeguards that every enterprise should apply to defend against the most common attacks. IG2 and IG3 build upon IG1 with additional safeguards for organizations with greater resources and more complex risk profiles.',
    unit: 1,
    topic: 'CIS Controls',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which CIS Control v8.1 addresses the inventory and control of enterprise assets?',
    choices: {
      A: 'Control 1',
      B: 'Control 2',
      C: 'Control 3',
      D: 'Control 5',
    },
    correct: 'A',
    explanation:
      'CIS Control 1 is "Inventory and Control of Enterprise Assets," which focuses on actively managing all enterprise assets connected to the infrastructure. Control 2 addresses "Inventory and Control of Software Assets," which is related but distinct.',
    unit: 1,
    topic: 'CIS Controls',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A small business with limited IT resources wants to prioritize its cybersecurity investments. According to the CIS Controls framework, which Implementation Group should this organization focus on first?',
    choices: {
      A: 'IG1, because it represents essential cyber hygiene suitable for all organizations regardless of size',
      B: 'IG2, because it balances security with resource constraints',
      C: 'IG3, because it provides the most comprehensive protection',
      D: 'All three Implementation Groups should be implemented simultaneously',
    },
    correct: 'A',
    explanation:
      'IG1 is designed as the starting point for all organizations, especially those with limited resources. It contains the essential cyber hygiene safeguards that defend against the most common attacks. IG3 is intended for mature organizations with significant security resources and would be inappropriate as an initial focus for a small business.',
    unit: 1,
    topic: 'CIS Controls',
    skill: 'Application',
  },
  {
    question:
      'Which CIS Control v8.1 specifically addresses penetration testing?',
    choices: {
      A: 'Control 8',
      B: 'Control 14',
      C: 'Control 16',
      D: 'Control 18',
    },
    correct: 'D',
    explanation:
      'CIS Control 18 is "Penetration Testing," the last control in the framework. It focuses on testing the effectiveness and resiliency of enterprise assets through simulated attacks. Control 8 addresses "Audit Log Management," and Control 16 addresses "Application Software Security."',
    unit: 1,
    topic: 'CIS Controls',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'An organization has fully implemented all CIS Controls IG1 safeguards and wants to enhance its security posture. According to the CIS Controls framework, which of the following approaches is correct?',
    choices: {
      A: 'Skip IG2 and proceed directly to IG3 for maximum security',
      B: 'Implement IG2 safeguards next, as each Implementation Group builds upon the previous one',
      C: 'Re-implement IG1 safeguards using different technologies before advancing',
      D: 'Transition to a different framework because CIS Controls are only for initial implementation',
    },
    correct: 'B',
    explanation:
      'The CIS Implementation Groups are designed to be progressive: IG1 is a subset of IG2, and IG2 is a subset of IG3. Organizations should implement IG2 safeguards after completing IG1 before moving to IG3. Skipping IG2 would leave gaps in the organization\'s security posture.',
    unit: 1,
    topic: 'CIS Controls',
    skill: 'Application',
  },

  // ── COBIT 2019 ────────────────────────────────────────────────────────
  {
    question:
      'COBIT 2019 identifies how many governance system principles?',
    choices: {
      A: '3',
      B: '5',
      C: '6',
      D: '8',
    },
    correct: 'C',
    explanation:
      'COBIT 2019 defines six governance system principles: (1) Provide Stakeholder Value, (2) Holistic Approach, (3) Dynamic Governance System, (4) Governance Distinct from Management, (5) Tailored to Enterprise Needs, and (6) End-to-End Governance System. These principles guide the overall governance system design.',
    unit: 1,
    topic: 'COBIT 2019',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'In COBIT 2019, which domain focuses on evaluating, directing, and monitoring enterprise governance?',
    choices: {
      A: 'APO (Align, Plan and Organize)',
      B: 'EDM (Evaluate, Direct and Monitor)',
      C: 'BAI (Build, Acquire and Implement)',
      D: 'DSS (Deliver, Service and Support)',
    },
    correct: 'B',
    explanation:
      'EDM (Evaluate, Direct and Monitor) is the governance domain in COBIT 2019, focused on evaluating strategic options, directing management, and monitoring outcomes. APO (Align, Plan and Organize) is a management domain that addresses planning and organization, which is distinct from the governance function.',
    unit: 1,
    topic: 'COBIT 2019',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'How many design factors does COBIT 2019 define for tailoring the governance system to an enterprise\'s specific needs?',
    choices: {
      A: '5',
      B: '8',
      C: '11',
      D: '15',
    },
    correct: 'C',
    explanation:
      'COBIT 2019 defines 11 design factors that influence the design of an enterprise\'s governance system. These factors include enterprise strategy, enterprise goals, risk profile, IT-related issues, threat landscape, and others. They enable organizations to tailor the framework to their unique context.',
    unit: 1,
    topic: 'COBIT 2019',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'In COBIT 2019, the performance management scheme uses capability levels ranging from which of the following?',
    choices: {
      A: 'Levels 0 through 5',
      B: 'Levels 1 through 4',
      C: 'Levels 1 through 5',
      D: 'Levels 0 through 3',
    },
    correct: 'A',
    explanation:
      'COBIT 2019 uses capability levels 0 through 5 for assessing process performance: Level 0 (Incomplete), Level 1 (Performed), Level 2 (Managed), Level 3 (Defined), Level 4 (Quantitative), and Level 5 (Optimizing). Starting at Level 0 distinguishes it from frameworks that start at Level 1.',
    unit: 1,
    topic: 'COBIT 2019',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which COBIT 2019 management domain is responsible for the delivery of IT services and support to the business?',
    choices: {
      A: 'BAI (Build, Acquire and Implement)',
      B: 'APO (Align, Plan and Organize)',
      C: 'DSS (Deliver, Service and Support)',
      D: 'MEA (Monitor, Evaluate and Assess)',
    },
    correct: 'C',
    explanation:
      'DSS (Deliver, Service and Support) covers the operational delivery of IT services, including service delivery management, service requests, and problem management. BAI focuses on building and implementing solutions, while MEA covers monitoring and evaluation activities.',
    unit: 1,
    topic: 'COBIT 2019',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A large enterprise is implementing COBIT 2019 and wants to ensure that its IT governance is distinct from IT management. Which COBIT 2019 principle directly supports this distinction?',
    choices: {
      A: 'Holistic Approach',
      B: 'Dynamic Governance System',
      C: 'End-to-End Governance System',
      D: 'Governance Distinct from Management',
    },
    correct: 'D',
    explanation:
      'The "Governance Distinct from Management" principle explicitly recognizes that governance and management are different activities, require different structures, and serve different purposes. The Holistic Approach principle addresses using multiple enablers, not the governance-management distinction.',
    unit: 1,
    topic: 'COBIT 2019',
    skill: 'Application',
  },
  {
    question:
      'Which COBIT 2019 domain would an organization use to monitor compliance with internal policies and external regulations?',
    choices: {
      A: 'EDM (Evaluate, Direct and Monitor)',
      B: 'APO (Align, Plan and Organize)',
      C: 'DSS (Deliver, Service and Support)',
      D: 'MEA (Monitor, Evaluate and Assess)',
    },
    correct: 'D',
    explanation:
      'MEA (Monitor, Evaluate and Assess) is the COBIT 2019 domain responsible for monitoring performance, evaluating the adequacy of internal controls, and assessing compliance with policies and external requirements. While EDM includes monitoring at the governance level, MEA specifically handles operational compliance monitoring.',
    unit: 1,
    topic: 'COBIT 2019',
    skill: 'Application',
  },
  {
    question:
      'An organization is selecting a framework to establish an IT governance structure that aligns IT goals with business objectives. Which of the following frameworks is most specifically designed for this purpose?',
    choices: {
      A: 'COBIT 2019',
      B: 'HIPAA',
      C: 'PCI DSS',
      D: 'CIS Controls',
    },
    correct: 'A',
    explanation:
      'COBIT 2019 is specifically designed as an IT governance and management framework that aligns IT goals with business objectives. PCI DSS and HIPAA are regulatory/compliance standards for specific data types, and CIS Controls focuses on technical cybersecurity safeguards rather than governance alignment.',
    unit: 1,
    topic: 'COBIT 2019',
    skill: 'Analysis',
  },
  {
    question:
      'A COBIT 2019 design factor helps an organization tailor the governance system based on the enterprise\'s threat landscape. Which of the following best describes how design factors function?',
    choices: {
      A: 'They are mandatory controls that all organizations must implement identically',
      B: 'They are contextual factors that influence the priority and design of governance components for a specific enterprise',
      C: 'They are external audit requirements imposed by regulatory agencies',
      D: 'They replace the need for risk assessments in the governance design process',
    },
    correct: 'B',
    explanation:
      'Design factors in COBIT 2019 are contextual influences (such as threat landscape, enterprise strategy, IT-related issues, and risk profile) that help organizations tailor and prioritize governance components. They are not mandatory controls or audit requirements; they enable customization of the framework to the enterprise\'s specific context.',
    unit: 1,
    topic: 'COBIT 2019',
    skill: 'Application',
  },
]
