import type { Question } from '../types'

export const unit4Questions: Question[] = [
  // === SOC Engagement Types (Questions 1-7) ===
  {
    question:
      'Which type of SOC report is specifically designed to address controls at a service organization relevant to user entities\' internal control over financial reporting (ICFR)?',
    choices: {
      A: 'SOC 2',
      B: 'SOC 3',
      C: 'SOC 1',
      D: 'SOC for Cybersecurity',
    },
    correct: 'C',
    explanation:
      'A SOC 1 report focuses on controls at a service organization that are relevant to user entities\' internal control over financial reporting. SOC 2 reports address controls related to the Trust Services Criteria, not ICFR specifically.',
    unit: 4,
    topic: 'SOC Types',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A SOC 2 Type 1 report covers which of the following?',
    choices: {
      A: 'Design and implementation of controls at a specific point in time',
      B: 'Design, implementation, and operating effectiveness of controls over a period of time',
      C: 'Only the design of controls at a specific point in time',
      D: 'Operating effectiveness of controls at a specific point in time',
    },
    correct: 'A',
    explanation:
      'A Type 1 report covers the description of the system and the suitability of the design and implementation of controls at a specific point in time. A Type 2 report adds testing of operating effectiveness over a period of time.',
    unit: 4,
    topic: 'SOC Types',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which SOC report is a general-use report that provides a seal of assurance but contains less detail than a SOC 2 report?',
    choices: {
      A: 'SOC 1 Type 2',
      B: 'SOC for Cybersecurity',
      C: 'SOC 2 Type 1',
      D: 'SOC 3',
    },
    correct: 'D',
    explanation:
      'A SOC 3 report is a general-use report that includes a seal of assurance but does not contain the detailed description of tests and results found in a SOC 2 report. Unlike SOC 1 and SOC 2 reports, SOC 3 reports are not restricted-use.',
    unit: 4,
    topic: 'SOC Types',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A SOC for Supply Chain engagement is most appropriately used when:',
    choices: {
      A: 'A service organization processes financial transactions for user entities.',
      B: 'An organization wants to report on its entity-wide cybersecurity risk management program.',
      C: 'An organization needs to provide assurance over controls related to the production and distribution of goods.',
      D: 'A user entity\'s auditor requires a report on controls relevant to ICFR.',
    },
    correct: 'C',
    explanation:
      'SOC for Supply Chain engagements address controls related to the production and distribution of goods. SOC for Cybersecurity addresses entity-wide cybersecurity risk management, and SOC 1 addresses controls relevant to ICFR.',
    unit: 4,
    topic: 'SOC Types',
    skill: 'Application',
  },
  {
    question:
      'What is the primary distinction between a Type 1 and a Type 2 SOC engagement?',
    choices: {
      A: 'Type 1 reports cover Trust Services Criteria while Type 2 reports cover ICFR controls.',
      B: 'Type 1 reports are restricted-use while Type 2 reports are general-use.',
      C: 'Type 1 reports are performed by internal auditors while Type 2 reports require external auditors.',
      D: 'Type 1 reports address design and implementation at a point in time, while Type 2 reports also test operating effectiveness over a period.',
    },
    correct: 'D',
    explanation:
      'The key distinction is that a Type 1 report evaluates the design and implementation of controls as of a specific date, whereas a Type 2 report additionally tests operating effectiveness of controls over a specified period. Both Type 1 and Type 2 can apply to either SOC 1 or SOC 2.',
    unit: 4,
    topic: 'SOC Types',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A financial institution wants a report that evaluates its organization-wide cybersecurity risk management program and can be shared publicly with stakeholders. Which SOC engagement type should the institution\'s management select?',
    choices: {
      A: 'SOC 2 Type 2, because it addresses security controls comprehensively.',
      B: 'SOC 1 Type 2, because financial institutions require ICFR-related reports.',
      C: 'SOC for Cybersecurity, because it evaluates the entity-wide cybersecurity risk management program and produces a general-use report.',
      D: 'SOC 3, because it is a general-use report suitable for public distribution.',
    },
    correct: 'C',
    explanation:
      'SOC for Cybersecurity is designed to evaluate an organization\'s entity-wide cybersecurity risk management program and produces a general-use report. While SOC 3 is also general-use, it reports on Trust Services Criteria for a specific system rather than the overall cybersecurity program.',
    unit: 4,
    topic: 'SOC Types',
    skill: 'Application',
  },
  {
    question:
      'The intended users of a SOC 1 report are most accurately described as:',
    choices: {
      A: 'User entities and user auditors who need information about controls relevant to ICFR.',
      B: 'The general public and potential customers of the service organization.',
      C: 'Only the management of the service organization.',
      D: 'Regulators and governmental oversight bodies exclusively.',
    },
    correct: 'A',
    explanation:
      'SOC 1 reports are restricted-use reports intended for user entities and their auditors who rely on the service organization\'s controls relevant to financial reporting. The general public would be the intended audience for a SOC 3 report.',
    unit: 4,
    topic: 'SOC Types',
    skill: 'Remembering and Understanding',
  },

  // === Trust Services Criteria (Questions 8-14) ===
  {
    question:
      'Which Trust Services Criteria category is required for all SOC 2 engagements?',
    choices: {
      A: 'Availability',
      B: 'Confidentiality',
      C: 'Security',
      D: 'Privacy',
    },
    correct: 'C',
    explanation:
      'Security, represented by the common criteria (CC series), is required for all SOC 2 engagements. Availability, Processing Integrity, Confidentiality, and Privacy are additional categories that may be included based on the service commitments and system requirements.',
    unit: 4,
    topic: 'Trust Services',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'The Processing Integrity criteria (PI series) in the Trust Services Criteria address which of the following?',
    choices: {
      A: 'Protection of personal information throughout its lifecycle',
      B: 'Complete, valid, accurate, timely, and authorized processing',
      C: 'System uptime and business continuity/disaster recovery',
      D: 'Protection of data designated as confidential from unauthorized disclosure',
    },
    correct: 'B',
    explanation:
      'Processing Integrity criteria ensure that system processing is complete, valid, accurate, timely, and authorized. Privacy addresses personal information lifecycle, Availability addresses uptime and BCP/DR, and Confidentiality addresses data designated as confidential.',
    unit: 4,
    topic: 'Trust Services',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'How do the Trust Services Criteria common criteria (CC series) map to the COSO internal control framework?',
    choices: {
      A: 'CC1 maps to Control Environment, CC2 maps to Communication and Information, CC3 maps to Risk Assessment.',
      B: 'CC1 maps to Risk Assessment, CC2 maps to Control Environment, CC3 maps to Monitoring Activities.',
      C: 'CC1 maps to Control Activities, CC2 maps to Risk Assessment, CC3 maps to Control Environment.',
      D: 'CC1 maps to Monitoring Activities, CC2 maps to Control Environment, CC3 maps to Communication and Information.',
    },
    correct: 'A',
    explanation:
      'The common criteria map directly to COSO components: CC1 corresponds to Control Environment, CC2 to Communication and Information, CC3 to Risk Assessment, CC4 to Monitoring Activities, and CC5 to Control Activities (which also includes Logical and Physical Access, System Operations, and Change Management).',
    unit: 4,
    topic: 'Trust Services',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A cloud service provider commits to 99.9% uptime in its service level agreements. Which Trust Services Criteria category is most directly relevant to evaluating controls supporting this commitment?',
    choices: {
      A: 'Security',
      B: 'Processing Integrity',
      C: 'Availability',
      D: 'Confidentiality',
    },
    correct: 'C',
    explanation:
      'Availability criteria (A series) address system uptime, business continuity planning, and disaster recovery. A commitment to 99.9% uptime directly relates to the Availability category. While Security is always required, the specific uptime commitment aligns with Availability.',
    unit: 4,
    topic: 'Trust Services',
    skill: 'Application',
  },
  {
    question:
      'The Privacy criteria (P series) differ from the Confidentiality criteria (C series) primarily in that Privacy criteria:',
    choices: {
      A: 'Apply only to SOC 1 engagements.',
      B: 'Are required for all SOC 2 engagements, while Confidentiality is optional.',
      C: 'Focus on encryption standards, while Confidentiality focuses on access controls.',
      D: 'Address the lifecycle of personal information, while Confidentiality addresses data designated as confidential by the organization.',
    },
    correct: 'D',
    explanation:
      'Privacy criteria specifically address the collection, use, retention, disclosure, and disposal of personal information. Confidentiality criteria address data that the organization or its users designate as confidential, which may or may not include personal information.',
    unit: 4,
    topic: 'Trust Services',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'CC5 in the Trust Services Criteria common criteria encompasses which of the following components?',
    choices: {
      A: 'Control Environment and Communication and Information only',
      B: 'Risk Assessment and Monitoring Activities only',
      C: 'Control Activities, Logical and Physical Access, System Operations, and Change Management',
      D: 'Control Activities and Risk Assessment only',
    },
    correct: 'C',
    explanation:
      'CC5 maps to Control Activities and additionally encompasses supplemental criteria for Logical and Physical Access Controls, System Operations, and Change Management. These supplemental areas are specific to the Trust Services Criteria framework and extend beyond the base COSO components.',
    unit: 4,
    topic: 'Trust Services',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A service organization processes healthcare claims and stores protected health information. In scoping a SOC 2 engagement, which combination of Trust Services Criteria categories would most likely be included?',
    choices: {
      A: 'Security only',
      B: 'Security, Confidentiality, and Privacy',
      C: 'Security, Availability, and Processing Integrity',
      D: 'Security and Availability only',
    },
    correct: 'B',
    explanation:
      'Given that the organization stores protected health information, both Privacy (personal information lifecycle) and Confidentiality (data designated as confidential) would be relevant in addition to the required Security criteria. Processing Integrity and Availability may also be relevant but are less directly implicated by the PHI focus described in this scenario.',
    unit: 4,
    topic: 'Trust Services',
    skill: 'Application',
  },

  // === Planning SOC Engagements (Questions 15-20) ===
  {
    question:
      'In a SOC 1 engagement, materiality is best described as:',
    choices: {
      A: 'Quantitative, relating to the significance of misstatements in user entities\' financial statements.',
      B: 'Qualitative, relating to whether service commitments and system requirements are met.',
      C: 'Based solely on the service organization\'s revenue.',
      D: 'Not applicable because materiality is a concept limited to financial statement audits.',
    },
    correct: 'A',
    explanation:
      'In a SOC 1 engagement, materiality is quantitative and relates to the significance of misstatements in user entities\' financial statements because SOC 1 reports address controls relevant to ICFR. In contrast, SOC 2 materiality is qualitative, focusing on whether the system achieves its service commitments and system requirements.',
    unit: 4,
    topic: 'Planning',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which of the following is a precondition that must be established before accepting a SOC engagement?',
    choices: {
      A: 'The service auditor must have previously audited the service organization\'s financial statements.',
      B: 'All user entities must consent in writing to the engagement.',
      C: 'The engagement must cover a minimum reporting period of 12 months.',
      D: 'Management acknowledges its responsibility for the system description and the design and implementation of controls.',
    },
    correct: 'D',
    explanation:
      'A key precondition for a SOC engagement is management\'s acknowledgment of its responsibility for preparing the system description and for the design and implementation (and, for Type 2, operating effectiveness) of controls. There is no requirement for a prior financial statement audit or a minimum 12-month period.',
    unit: 4,
    topic: 'Planning',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A service auditor is engaged to perform both a SOC 1 and a SOC 2 engagement for the same service organization. When determining materiality for each engagement, the auditor notes that a control deficiency related to data input validation could result in a $50,000 error in user entities\' financial statements and also affects the completeness of data processing. How should the auditor evaluate materiality differently across the two engagements?',
    choices: {
      A: 'The $50,000 threshold applies equally to both SOC 1 and SOC 2 because the same control is involved.',
      B: 'For SOC 1, materiality is assessed quantitatively based on the financial statement impact; for SOC 2, materiality is assessed qualitatively based on whether the deficiency prevents the system from meeting its service commitments.',
      C: 'Materiality is only relevant to the SOC 2 engagement because SOC 1 engagements do not use a materiality concept.',
      D: 'The auditor should apply the higher materiality threshold from the SOC 1 engagement to both engagements for consistency.',
    },
    correct: 'B',
    explanation:
      'SOC 1 materiality is quantitative, focused on whether deficiencies could result in material misstatements in user entities\' financial statements. SOC 2 materiality is qualitative, focused on whether controls meet the service commitments and system requirements based on the Trust Services Criteria. The same deficiency may be material in one engagement but not the other.',
    unit: 4,
    topic: 'Planning',
    skill: 'Analysis',
  },
  {
    question:
      'A service auditor is planning a SOC 2 engagement. During risk assessment, the auditor should:',
    choices: {
      A: 'Rely exclusively on the prior year\'s SOC report without performing additional risk assessment procedures.',
      B: 'Assess inherent risk and control risk to determine the nature, timing, and extent of procedures.',
      C: 'Evaluate only the risks identified by the service organization\'s management.',
      D: 'Defer all risk assessment to the user auditors who will rely on the report.',
    },
    correct: 'B',
    explanation:
      'The service auditor must assess both inherent risk and control risk as part of planning to determine the appropriate nature, timing, and extent of further audit procedures. Relying solely on a prior year report or deferring risk assessment to user auditors would not satisfy professional standards.',
    unit: 4,
    topic: 'Planning',
    skill: 'Application',
  },
  {
    question:
      'Which of the following best describes the independence requirements for a service auditor performing a SOC engagement?',
    choices: {
      A: 'The service auditor must be independent of both the service organization and the user entities.',
      B: 'Independence is not required for SOC engagements because they are not financial statement audits.',
      C: 'The service auditor must be independent of the service organization but has no independence requirements with respect to user entities.',
      D: 'The service auditor must only be independent of the subservice organizations involved.',
    },
    correct: 'C',
    explanation:
      'The service auditor must be independent of the service organization, including its management. However, there is no requirement for the service auditor to be independent of the user entities. Independence from subservice organizations may be relevant when using the inclusive method.',
    unit: 4,
    topic: 'Planning',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'When planning a SOC 2 engagement, understanding the system and its boundaries requires the service auditor to consider all of the following EXCEPT:',
    choices: {
      A: 'The infrastructure, software, people, procedures, and data within the system.',
      B: 'The specific financial statement line items affected at user entities.',
      C: 'The services provided by subservice organizations.',
      D: 'The types of service commitments and system requirements.',
    },
    correct: 'B',
    explanation:
      'Understanding the system boundaries in a SOC 2 engagement involves evaluating infrastructure, software, people, procedures, data, subservice organizations, and service commitments. Specific financial statement line items at user entities are relevant to SOC 1, not SOC 2, engagements.',
    unit: 4,
    topic: 'Planning',
    skill: 'Remembering and Understanding',
  },

  // === Subservice Organizations (Questions 21-26) ===
  {
    question:
      'Under the carve-out method for subservice organizations, the service auditor\'s report:',
    choices: {
      A: 'Includes the subservice organization\'s controls within the scope and tests them.',
      B: 'Makes no reference to the subservice organization.',
      C: 'Requires the service auditor to obtain a separate SOC report on the subservice organization.',
      D: 'Excludes the subservice organization\'s controls from the scope but identifies the types of controls expected to be provided by the subservice organization.',
    },
    correct: 'D',
    explanation:
      'Under the carve-out method, the subservice organization\'s relevant controls are excluded from the system description and scope of the engagement. However, the description identifies the functions performed by the subservice organization and the controls that the subservice organization is expected to have in place.',
    unit: 4,
    topic: 'Subservice Orgs',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'When the inclusive method is used for a subservice organization, the service auditor:',
    choices: {
      A: 'Includes the subservice organization\'s controls within the scope of the examination and tests those controls.',
      B: 'Excludes the subservice organization\'s controls from testing but notes their existence.',
      C: 'Requires the subservice organization to issue its own independent SOC report.',
      D: 'Disclaims an opinion on the subservice organization\'s controls.',
    },
    correct: 'A',
    explanation:
      'Under the inclusive method, the subservice organization\'s controls are included within the scope of the engagement, and the service auditor tests those controls as part of the examination. This contrasts with the carve-out method, where the subservice organization\'s controls are excluded from scope.',
    unit: 4,
    topic: 'Subservice Orgs',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Complementary subservice organization controls (CSOCs) are best described as:',
    choices: {
      A: 'Controls implemented by user entities to complement the service organization\'s controls.',
      B: 'Additional controls the service auditor recommends that the service organization implement.',
      C: 'Controls at a subservice organization that are necessary, in combination with the service organization\'s controls, to achieve the control objectives or criteria.',
      D: 'Monitoring controls that the service auditor performs during the engagement.',
    },
    correct: 'C',
    explanation:
      'CSOCs are controls at a subservice organization that, together with the service organization\'s controls, are needed to achieve the stated control objectives or criteria. Controls implemented by user entities to complement the service organization\'s controls are called complementary user entity controls (CUECs).',
    unit: 4,
    topic: 'Subservice Orgs',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A service organization uses a third-party cloud infrastructure provider to host its application. The service organization has limited visibility into the cloud provider\'s internal controls and cannot facilitate testing of those controls. Which method for presenting the subservice organization would be most appropriate?',
    choices: {
      A: 'Inclusive method, because the cloud provider\'s controls are critical',
      B: 'Carve-out method, because testing the cloud provider\'s controls is not feasible',
      C: 'Neither method, because cloud providers cannot be subservice organizations',
      D: 'Inclusive method, but with a disclaimer on the cloud provider\'s controls',
    },
    correct: 'B',
    explanation:
      'The carve-out method is more appropriate when the service organization cannot facilitate testing of the subservice organization\'s controls, which is common with large cloud infrastructure providers. The inclusive method would require the service auditor to test the subservice organization\'s controls, which is not feasible in this scenario.',
    unit: 4,
    topic: 'Subservice Orgs',
    skill: 'Analysis',
  },
  {
    question:
      'Which of the following is a key factor in determining whether to use the carve-out or inclusive method for a subservice organization?',
    choices: {
      A: 'Whether the service auditor can access and test the subservice organization\'s controls',
      B: 'The size of the service organization\'s revenue',
      C: 'Whether the engagement is a SOC 1 or SOC 2',
      D: 'The number of user entities relying on the service organization',
    },
    correct: 'A',
    explanation:
      'The ability of the service auditor to access and test the subservice organization\'s controls is a primary factor in choosing between the carve-out and inclusive methods. If access is available and testing is feasible, the inclusive method may be used; otherwise, the carve-out method is typically employed.',
    unit: 4,
    topic: 'Subservice Orgs',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A service organization uses two subservice organizations: one for data backup and one for payment processing. The service auditor can access the data backup provider\'s controls but not the payment processor\'s controls. How should the service auditor most appropriately address this situation?',
    choices: {
      A: 'Use the inclusive method for both subservice organizations.',
      B: 'Use the carve-out method for both subservice organizations for consistency.',
      C: 'Use the inclusive method for the data backup provider and the carve-out method for the payment processor.',
      D: 'Decline the engagement because a mixed approach is not permitted.',
    },
    correct: 'C',
    explanation:
      'A service organization may use the inclusive method for some subservice organizations and the carve-out method for others within the same engagement. Since the auditor can access the data backup provider\'s controls but not the payment processor\'s, using different methods for each is appropriate and permitted.',
    unit: 4,
    topic: 'Subservice Orgs',
    skill: 'Analysis',
  },

  // === Performing SOC Engagements (Questions 27-32) ===
  {
    question:
      'In a SOC 2 Type 2 engagement, which of the following procedures is most appropriate for obtaining evidence about the operating effectiveness of controls?',
    choices: {
      A: 'Inquiry of management alone',
      B: 'Reperformance of the control by the service auditor',
      C: 'Inspection of the system description only',
      D: 'Review of the service organization\'s marketing materials',
    },
    correct: 'B',
    explanation:
      'Reperformance, along with sampling and inspection of records, provides the most persuasive evidence about operating effectiveness. Inquiry alone is insufficient to test operating effectiveness and is more appropriate for evaluating design, not for testing whether controls operated as designed over a period.',
    unit: 4,
    topic: 'Performing',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'During a SOC 2 Type 2 engagement, the service auditor performs a walk-through of the change management process and discovers that the actual approval workflow differs from what is described in management\'s system description. The service auditor should:',
    choices: {
      A: 'Disregard the discrepancy because walk-throughs do not constitute tests of operating effectiveness.',
      B: 'Discuss the discrepancy with management and evaluate whether the system description requires correction before completing the engagement.',
      C: 'Immediately issue a qualified opinion based on the walk-through finding alone.',
      D: 'Expand the walk-through to cover all controls in the system.',
    },
    correct: 'B',
    explanation:
      'When a walk-through reveals a discrepancy between the actual process and the system description, the service auditor should discuss it with management. If the description is inaccurate, it should be corrected, as an inaccurate description could affect the opinion. Walk-throughs do help confirm the accuracy of the description, so discrepancies cannot be disregarded.',
    unit: 4,
    topic: 'Performing',
    skill: 'Application',
  },
  {
    question:
      'Service commitments in a SOC 2 engagement are best described as:',
    choices: {
      A: 'Specifications that the system must meet, as defined by management.',
      B: 'Regulatory requirements imposed by governmental agencies.',
      C: 'Standards established by the AICPA for SOC reporting.',
      D: 'Promises made to user entities through service level agreements, contracts, or published statements.',
    },
    correct: 'D',
    explanation:
      'Service commitments are promises the service organization makes to user entities, typically through service level agreements, contracts, or other published statements. System requirements are the specifications the system must meet to achieve those commitments. These are distinct concepts in SOC 2 engagements.',
    unit: 4,
    topic: 'Performing',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'During a SOC 2 Type 2 engagement, the service auditor identifies three instances where a control did not operate as designed out of a sample of 40 items tested. The service auditor should:',
    choices: {
      A: 'Automatically issue an adverse opinion.',
      B: 'Exclude the exceptions from the report if management provides a reasonable explanation.',
      C: 'Document the exceptions and evaluate their nature, cause, and significance to determine the effect on the opinion.',
      D: 'Expand the sample size to 100 items before drawing any conclusion.',
    },
    correct: 'C',
    explanation:
      'When exceptions are identified, the service auditor must document them and evaluate their nature, cause, and significance to determine the impact on the engagement opinion. Exceptions do not automatically result in an adverse opinion, and they cannot be excluded merely because management provides an explanation.',
    unit: 4,
    topic: 'Performing',
    skill: 'Application',
  },
  {
    question:
      'Which of the following methods is appropriate for obtaining evidence about the design effectiveness of controls in a SOC engagement?',
    choices: {
      A: 'Inquiry, observation, and inspection of documentation',
      B: 'Statistical sampling of transaction records',
      C: 'Reperformance of the control procedure',
      D: 'Confirmation with user entities',
    },
    correct: 'A',
    explanation:
      'Evidence about design effectiveness is typically obtained through inquiry of appropriate personnel, observation of the control being performed, and inspection of relevant documentation. Reperformance and sampling are procedures more commonly used to test operating effectiveness in Type 2 engagements.',
    unit: 4,
    topic: 'Performing',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A service auditor evaluating management\'s system description in a SOC 1 engagement should assess whether the description is prepared in accordance with:',
    choices: {
      A: 'The Trust Services Criteria',
      B: 'Generally accepted accounting principles (GAAP)',
      C: 'The COSO Enterprise Risk Management framework',
      D: 'The description criteria (DC) specified in the AICPA\'s attestation standards for SOC 1',
    },
    correct: 'D',
    explanation:
      'In a SOC 1 engagement, the service auditor evaluates the system description against the DC (description criteria) specified in the applicable AICPA standards. The Trust Services Criteria are used for SOC 2 engagements, not SOC 1, and GAAP is not the applicable framework for evaluating system descriptions.',
    unit: 4,
    topic: 'Performing',
    skill: 'Remembering and Understanding',
  },

  // === CUECs and Management Assertions (Questions 33-39) ===
  {
    question:
      'Complementary user entity controls (CUECs) are controls that:',
    choices: {
      A: 'User entities are expected to implement for the service organization\'s controls to be fully effective.',
      B: 'The service auditor implements to supplement the service organization\'s controls.',
      C: 'Subservice organizations implement to complement the service organization\'s controls.',
      D: 'The service organization implements as alternatives to its primary controls.',
    },
    correct: 'A',
    explanation:
      'CUECs are controls that user entities are expected to implement to complement the service organization\'s controls. Without these controls in place at user entities, the service organization\'s controls alone may not be sufficient to achieve the stated control objectives or criteria. Controls at subservice organizations are called CSOCs.',
    unit: 4,
    topic: 'CUECs',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Management\'s assertion in a SOC 1 Type 2 engagement includes an assertion that:',
    choices: {
      A: 'The controls met the Trust Services Criteria throughout the examination period.',
      B: 'The system description is in accordance with description criteria and controls met the applicable Trust Services Criteria.',
      C: 'The organization\'s cybersecurity risk management program is effective.',
      D: 'The description fairly presents the system, controls were suitably designed, and controls operated effectively to achieve the related control objectives relevant to ICFR.',
    },
    correct: 'D',
    explanation:
      'In a SOC 1 Type 2 engagement, management asserts that the description fairly presents the system, that controls were suitably designed, and that controls operated effectively throughout the period to achieve control objectives related to ICFR. SOC 2 assertions focus on description criteria and Trust Services Criteria instead.',
    unit: 4,
    topic: 'Management Assertions',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'How does a management assertion for a SOC 2 Type 2 engagement differ from a SOC 1 Type 2 engagement?',
    choices: {
      A: 'SOC 2 assertions reference the Trust Services Criteria and description criteria, while SOC 1 assertions reference the fairness of the description and control objectives relevant to ICFR.',
      B: 'There is no difference; both use identical assertion language.',
      C: 'SOC 2 assertions do not address operating effectiveness, while SOC 1 assertions do.',
      D: 'SOC 1 assertions reference the Trust Services Criteria, while SOC 2 assertions reference ICFR.',
    },
    correct: 'A',
    explanation:
      'SOC 2 Type 2 management assertions state that the description is in accordance with the description criteria and that controls were effective in meeting the applicable Trust Services Criteria. SOC 1 Type 2 assertions instead focus on the fairness of the description and whether controls were suitably designed and operating effectively for control objectives relevant to ICFR.',
    unit: 4,
    topic: 'Management Assertions',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A user auditor reviewing a SOC 1 report notes that CUECs are identified for several control objectives. The user auditor should:',
    choices: {
      A: 'Ignore the CUECs because they are the service organization\'s responsibility.',
      B: 'Evaluate whether the user entity has implemented the identified CUECs to determine the overall effectiveness of controls.',
      C: 'Request that the service auditor test the CUECs in the next examination period.',
      D: 'Issue a qualified opinion on the user entity\'s financial statements due to the existence of CUECs.',
    },
    correct: 'B',
    explanation:
      'When CUECs are identified in a SOC report, the user auditor should evaluate whether the user entity has implemented those controls. Without the CUECs in place, the service organization\'s controls alone may not be sufficient, and this could affect the user auditor\'s assessment of control risk.',
    unit: 4,
    topic: 'CUECs',
    skill: 'Application',
  },
  {
    question:
      'Management representation letters in a SOC engagement should be:',
    choices: {
      A: 'Signed by the service auditor and provided to user entities.',
      B: 'Obtained from each user entity relying on the SOC report.',
      C: 'Signed by appropriate members of the service organization\'s management and dated as of the service auditor\'s report date.',
      D: 'Optional at the discretion of the service auditor.',
    },
    correct: 'C',
    explanation:
      'Management representation letters are signed by appropriate members of the service organization\'s management (those responsible for and knowledgeable about the matters covered) and are typically dated as of the service auditor\'s report date. They are required, not optional, and are obtained from the service organization, not user entities.',
    unit: 4,
    topic: 'Management Assertions',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A service organization is undergoing its first SOC 1 engagement and management is drafting its written assertion. Because the service organization has been in operation for only four months, a Type 1 report is being issued. Management\'s assertion should address:',
    choices: {
      A: 'The fairness of the description and the suitability of the design of controls as of a specified date, without reference to operating effectiveness.',
      B: 'The fairness of the description and the operating effectiveness of controls over the four-month period.',
      C: 'Whether the controls met the Trust Services Criteria as of the specified date.',
      D: 'Only the accuracy of the system description, since design suitability cannot be assessed for a new organization.',
    },
    correct: 'A',
    explanation:
      'For a SOC 1 Type 1 engagement, management asserts that the description fairly presents the system and that controls were suitably designed as of a specific date. Operating effectiveness is not addressed because Type 1 reports evaluate design and implementation at a point in time, not over a period. Trust Services Criteria apply to SOC 2, not SOC 1.',
    unit: 4,
    topic: 'Management Assertions',
    skill: 'Application',
  },
  {
    question:
      'A service organization\'s management refuses to include a specific CUEC in the SOC 2 report that the service auditor believes is necessary for user entities to achieve the control objectives. The service auditor should:',
    choices: {
      A: 'Accept management\'s decision because management controls the content of the system description.',
      B: 'Evaluate whether the omission results in a description that is not in accordance with the description criteria and consider the impact on the report.',
      C: 'Add the CUEC to the report without management\'s consent.',
      D: 'Withdraw from the engagement immediately.',
    },
    correct: 'B',
    explanation:
      'If a CUEC that the service auditor believes is necessary is omitted, the auditor should evaluate whether this omission causes the system description to be incomplete or not in accordance with the description criteria. This evaluation may affect the type of opinion issued but does not automatically require withdrawal from the engagement.',
    unit: 4,
    topic: 'CUECs',
    skill: 'Analysis',
  },

  // === Subsequent Events & Facts (Questions 40-42) ===
  {
    question:
      'Subsequent events in a SOC engagement are events that occur:',
    choices: {
      A: 'Between the end of the examination period and the date of the service auditor\'s report.',
      B: 'Before the beginning of the examination period.',
      C: 'After the service auditor\'s report has been issued to user entities.',
      D: 'During the examination period only.',
    },
    correct: 'A',
    explanation:
      'Subsequent events are events occurring between the end of the examination period and the date of the service auditor\'s report. These events must be evaluated and may require disclosure or modification of the report. Events after the report date are considered subsequently discovered facts, not subsequent events.',
    unit: 4,
    topic: 'Subsequent Events',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Subsequently discovered facts in a SOC engagement refer to facts that:',
    choices: {
      A: 'Were known to the service auditor during the engagement but not included in the report.',
      B: 'Are discovered by user entities during their own audit procedures.',
      C: 'Become known to the service auditor after the report date and may require notification, revision, or a supplemental report.',
      D: 'Relate to the service organization\'s financial performance after the examination period.',
    },
    correct: 'C',
    explanation:
      'Subsequently discovered facts are facts that become known to the service auditor after the report has been issued. These may require the auditor to take action such as notifying known users of the report, revising the report, or issuing a supplemental report. They differ from subsequent events, which occur before the report date.',
    unit: 4,
    topic: 'Subsequent Events',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'During the subsequent event period of a SOC 2 Type 2 engagement, the service auditor learns that the service organization experienced a significant data breach that compromised security controls. The service auditor should:',
    choices: {
      A: 'Ignore the breach because it occurred after the examination period ended.',
      B: 'Evaluate whether the event requires disclosure in the report or modification of the opinion.',
      C: 'Automatically issue an adverse opinion on the entire report.',
      D: 'Delay the report indefinitely until the breach is fully remediated.',
    },
    correct: 'B',
    explanation:
      'A significant data breach occurring during the subsequent event period must be evaluated by the service auditor. The auditor should determine whether the event requires disclosure in the report or modification of the opinion. The breach does not automatically result in an adverse opinion, and ignoring it would be inappropriate.',
    unit: 4,
    topic: 'Subsequent Events',
    skill: 'Application',
  },

  // === SOC Reporting and Opinions (Questions 43-50) ===
  {
    question:
      'A user auditor is reviewing a SOC 1 Type 2 report and needs to understand the specific tests the service auditor performed on controls related to transaction processing. In which section of the SOC 1 report would the user auditor find this information?',
    choices: {
      A: 'Section I — Independent service auditor\'s report',
      B: 'Section II — Management\'s description of the system',
      C: 'Section III — Description of tests of controls and results',
      D: 'Section IV — Other information provided by the service organization',
    },
    correct: 'C',
    explanation:
      'Section III of a SOC 1 report contains the description of tests of controls and results, including the specific procedures performed and exceptions noted. Section I contains the auditor\'s opinion, Section II contains management\'s system description, and Section IV contains supplementary information provided by management.',
    unit: 4,
    topic: 'Reporting',
    skill: 'Application',
  },
  {
    question:
      'An unmodified opinion in a SOC report indicates that:',
    choices: {
      A: 'The service auditor identified material exceptions but management has provided acceptable explanations.',
      B: 'The description is fairly presented and controls are suitably designed (and, for Type 2, operated effectively) without material exceptions.',
      C: 'The service auditor was unable to obtain sufficient evidence to form an opinion.',
      D: 'The controls were effective except for certain immaterial deviations.',
    },
    correct: 'B',
    explanation:
      'An unmodified (clean) opinion indicates that the system description is fairly presented and controls are suitably designed and, for Type 2, operated effectively throughout the period without material exceptions. A disclaimer would be issued when the auditor cannot obtain sufficient evidence.',
    unit: 4,
    topic: 'Opinions',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A service auditor performing a SOC 2 Type 2 engagement identifies a pervasive deficiency affecting multiple Trust Services Criteria, rendering the controls materially ineffective across the system. The most appropriate opinion is:',
    choices: {
      A: 'Unmodified opinion with an emphasis-of-matter paragraph',
      B: 'Qualified opinion',
      C: 'Adverse opinion',
      D: 'Disclaimer of opinion',
    },
    correct: 'C',
    explanation:
      'An adverse opinion is appropriate when control deficiencies are so pervasive and material that the controls are not fairly stated or not operating effectively in material respects. A qualified opinion would be used for less pervasive deficiencies affecting specific, isolated matters rather than the system broadly.',
    unit: 4,
    topic: 'Opinions',
    skill: 'Analysis',
  },
  {
    question:
      'During a SOC 2 Type 2 engagement, the service organization informs the service auditor that a critical database containing audit logs was inadvertently deleted three months into the six-month examination period and cannot be recovered. The audit logs were essential for testing access controls and monitoring activities. The service auditor should most likely issue:',
    choices: {
      A: 'An unmodified opinion because the controls may have operated effectively despite the lost evidence.',
      B: 'A qualified opinion addressing only the period for which evidence is unavailable.',
      C: 'An adverse opinion because the deletion indicates a fundamental control failure.',
      D: 'A disclaimer of opinion because the scope limitation prevents the auditor from obtaining sufficient evidence to form an opinion on the affected controls.',
    },
    correct: 'D',
    explanation:
      'When essential evidence is destroyed and cannot be recovered, the service auditor faces a scope limitation that may prevent forming an opinion. A disclaimer is appropriate when the limitation is sufficiently significant that the auditor cannot obtain sufficient appropriate evidence. A qualified opinion might be considered if the limitation is isolated, but losing audit logs covering half the period for critical controls likely warrants a disclaimer.',
    unit: 4,
    topic: 'Opinions',
    skill: 'Analysis',
  },
  {
    question:
      'During a SOC 1 Type 2 engagement, the service auditor determines that a control related to transaction authorization did not operate effectively for two months of the nine-month examination period due to a system configuration error. The error was corrected, and the control operated effectively for the remaining seven months. What is the most appropriate opinion?',
    choices: {
      A: 'Unmodified opinion because the control was effective for the majority of the period',
      B: 'Qualified opinion addressing the specific period during which the control was not operating effectively',
      C: 'Adverse opinion because any period of ineffectiveness renders the entire engagement adverse',
      D: 'Disclaimer of opinion due to the inability to test during the affected period',
    },
    correct: 'B',
    explanation:
      'A qualified ("except for") opinion is appropriate when a specific control did not operate effectively for a portion of the examination period but the deficiency is not pervasive enough to warrant an adverse opinion. An unmodified opinion would not be appropriate because the control was not effective for part of the period, and an adverse opinion would be disproportionate for a specific, isolated deficiency.',
    unit: 4,
    topic: 'Opinions',
    skill: 'Analysis',
  },
  {
    question:
      'SOC 1 and SOC 2 reports are classified as restricted-use reports, meaning they are intended for:',
    choices: {
      A: 'General distribution to any interested party, including the public.',
      B: 'Only internal use by the service organization\'s management.',
      C: 'Regulatory authorities exclusively.',
      D: 'Specified parties such as management, user entities, and user auditors (SOC 1) or management and specified parties (SOC 2).',
    },
    correct: 'D',
    explanation:
      'SOC 1 and SOC 2 reports are restricted-use reports intended for specified parties. SOC 1 reports are intended for the service organization\'s management, user entities, and their auditors. SOC 2 reports are similarly restricted. SOC 3 reports, by contrast, are general-use reports available to any interested party.',
    unit: 4,
    topic: 'Reporting',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A service auditor is preparing the test results section of a SOC 2 Type 2 report. The auditor identified five exceptions out of 30 items tested for a control related to access provisioning. The test results section should:',
    choices: {
      A: 'Omit the exceptions if they are deemed immaterial.',
      B: 'Describe the tests performed, the results including the exceptions, and the nature of the exceptions.',
      C: 'State only that exceptions were identified without providing details.',
      D: 'Include only the number of items tested with no reference to the exceptions.',
    },
    correct: 'B',
    explanation:
      'The test results section of a SOC report must describe the tests performed, the results of those tests including any exceptions identified, and the nature of the exceptions. Omitting exceptions or providing only summary counts without detail would not meet the reporting requirements for SOC engagements.',
    unit: 4,
    topic: 'Reporting',
    skill: 'Application',
  },
  {
    question:
      'A service organization wants to provide a report on its controls to prospective customers through its website. Which type of SOC report is most appropriate for this purpose?',
    choices: {
      A: 'SOC 1 Type 2',
      B: 'SOC 2 Type 2',
      C: 'SOC 3',
      D: 'SOC 1 Type 1',
    },
    correct: 'C',
    explanation:
      'A SOC 3 report is a general-use report that can be distributed freely, including on a website to prospective customers. SOC 1 and SOC 2 reports are restricted-use reports and should not be made publicly available on a website for general distribution.',
    unit: 4,
    topic: 'Reporting',
    skill: 'Application',
  },
]
