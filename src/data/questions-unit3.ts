import type { Question } from '../types'

export const unit3Questions: Question[] = [
  // === REMEMBERING AND UNDERSTANDING (30 questions) ===

  // 1. Threat Agents & Attack Types
  {
    question:
      'Which of the following best describes a "threat agent" classified as internal, unintentional, and unskilled?',
    choices: {
      A: 'A disgruntled employee who deliberately exfiltrates proprietary data',
      B: 'An employee who accidentally clicks a phishing link due to lack of security training',
      C: 'A nation-state hacker who breaches the network through a zero-day exploit',
      D: 'A contractor who intentionally installs a backdoor for future access',
    },
    correct: 'B',
    explanation:
      'An internal, unintentional, unskilled threat agent is someone within the organization who causes harm without malicious intent and without technical expertise. A disgruntled employee (A) would be intentional, and a nation-state hacker (C) would be external and skilled.',
    unit: 3,
    topic: 'Threats/Attacks',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'In a denial-of-service (DoS) attack, what is the primary objective of the attacker?',
    choices: {
      A: 'To steal sensitive data from the target system',
      B: 'To gain unauthorized administrative access to the network',
      C: 'To make a system or network resource unavailable to its intended users',
      D: 'To install persistent malware on the target server',
    },
    correct: 'C',
    explanation:
      'A DoS attack aims to disrupt availability by overwhelming a system or network so legitimate users cannot access it. While attackers may pursue data theft (A) or administrative access (B) through other attack types, the defining characteristic of a DoS attack is disruption of service availability.',
    unit: 3,
    topic: 'Threats/Attacks',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which type of malware is designed to replicate itself and spread to other systems without requiring user interaction or a host program?',
    choices: {
      A: 'Virus',
      B: 'Trojan horse',
      C: 'Worm',
      D: 'Logic bomb',
    },
    correct: 'C',
    explanation:
      'A worm is self-replicating malware that spreads across networks independently, without needing to attach to a host file or require user action. A virus (A) requires a host program and typically needs user action to propagate, making it the most tempting incorrect answer.',
    unit: 3,
    topic: 'Threats/Attacks',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'What distinguishes spear phishing from general phishing attacks?',
    choices: {
      A: 'Spear phishing uses phone calls rather than email',
      B: 'Spear phishing targets specific individuals or organizations with personalized content',
      C: 'Spear phishing only targets C-suite executives',
      D: 'Spear phishing redirects users to fraudulent websites through DNS manipulation',
    },
    correct: 'B',
    explanation:
      'Spear phishing is a targeted form of phishing that uses personalized information to make the attack more convincing for specific individuals or organizations. Attacks targeting only C-suite executives (C) would be classified as whaling, which is a subset of spear phishing.',
    unit: 3,
    topic: 'Threats/Attacks',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which application-level attack involves inserting malicious database commands into input fields to manipulate or extract data from a backend database?',
    choices: {
      A: 'Cross-site scripting (XSS)',
      B: 'Cross-site request forgery (CSRF)',
      C: 'SQL injection',
      D: 'Buffer overflow',
    },
    correct: 'C',
    explanation:
      'SQL injection exploits improperly validated input fields by inserting malicious SQL statements that the database executes. Cross-site scripting (A) involves injecting malicious scripts into web pages viewed by other users, not directly targeting the database.',
    unit: 3,
    topic: 'Threats/Attacks',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'In a supply chain attack, what does the term "watering hole" refer to?',
    choices: {
      A: 'Compromising a vendor\'s software update mechanism to distribute malware',
      B: 'Infecting a website frequently visited by a targeted group to deliver malware',
      C: 'Embedding malicious code into hardware components during manufacturing',
      D: 'Intercepting equipment shipments to install surveillance tools',
    },
    correct: 'B',
    explanation:
      'A watering hole attack compromises a website that a targeted group is known to visit, similar to a predator waiting at a watering hole in nature. Compromising a vendor\'s update mechanism (A) describes a different supply chain attack vector, such as the SolarWinds attack.',
    unit: 3,
    topic: 'Threats/Attacks',
    skill: 'Remembering and Understanding',
  },

  // 2. Cyber-Attack Lifecycle
  {
    question:
      'In the cyber-attack lifecycle, which phase involves the attacker gathering information about the target, such as IP addresses, employee names, and network topology?',
    choices: {
      A: 'Scanning and enumeration',
      B: 'Reconnaissance',
      C: 'Gaining access',
      D: 'Covering tracks',
    },
    correct: 'B',
    explanation:
      'Reconnaissance is the initial phase where attackers passively or actively collect information about the target before launching an attack. Scanning and enumeration (A) is a more active follow-up phase that probes for specific vulnerabilities and open ports after initial information gathering.',
    unit: 3,
    topic: 'Threats/Attacks',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which phase of the cyber kill chain focuses on the attacker establishing a persistent presence on the compromised system to ensure continued access?',
    choices: {
      A: 'Gaining access',
      B: 'Covering tracks',
      C: 'Maintaining access',
      D: 'Reconnaissance',
    },
    correct: 'C',
    explanation:
      'The maintaining access phase involves installing backdoors, rootkits, or other persistence mechanisms to ensure the attacker can return even if the initial entry point is closed. Gaining access (A) refers to the initial exploitation, not the establishment of persistence.',
    unit: 3,
    topic: 'Threats/Attacks',
    skill: 'Remembering and Understanding',
  },

  // 3. Cloud/Mobile/IoT Risks
  {
    question:
      'Which of the following is a risk specific to cloud computing environments that arises from multiple tenants sharing the same physical infrastructure?',
    choices: {
      A: 'Vendor lock-in',
      B: 'Data residency noncompliance',
      C: 'Side-channel attacks on shared infrastructure',
      D: 'Firmware vulnerability exploitation',
    },
    correct: 'C',
    explanation:
      'Shared infrastructure in cloud environments creates the risk of side-channel attacks where one tenant could potentially access another tenant\'s data through the shared physical resources. Vendor lock-in (A) is a cloud risk but relates to dependency on a provider, not to shared infrastructure.',
    unit: 3,
    topic: 'Cloud/Mobile/IoT',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'What is a primary security concern associated with Internet of Things (IoT) devices in an enterprise environment?',
    choices: {
      A: 'IoT devices typically use strong authentication by default',
      B: 'IoT devices often ship with default credentials and have limited ability to receive security updates',
      C: 'IoT devices are isolated from enterprise networks and pose minimal risk',
      D: 'IoT devices exclusively communicate using encrypted protocols',
    },
    correct: 'B',
    explanation:
      'IoT devices frequently ship with default or weak credentials, have limited processing power for security features, and may lack mechanisms for firmware updates, creating a large attack surface. The claim that IoT devices are isolated (C) is incorrect; they are often connected to enterprise networks, which amplifies their risk.',
    unit: 3,
    topic: 'Cloud/Mobile/IoT',
    skill: 'Remembering and Understanding',
  },

  // 4. Threat Modeling
  {
    question:
      'The STRIDE threat modeling framework categorizes threats into six categories. Which of the following is NOT one of the STRIDE categories?',
    choices: {
      A: 'Spoofing',
      B: 'Tampering',
      C: 'Reconnaissance',
      D: 'Elevation of privilege',
    },
    correct: 'C',
    explanation:
      'STRIDE stands for Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege. Reconnaissance is a phase of the cyber-attack lifecycle, not a STRIDE category. Spoofing (A) and Tampering (B) are both legitimate STRIDE categories.',
    unit: 3,
    topic: 'Threat Modeling',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which threat modeling methodology is specifically designed to simulate real-world attack scenarios through a seven-stage process that aligns business objectives with technical requirements?',
    choices: {
      A: 'STRIDE',
      B: 'VAST (Visual, Agile, and Simple Threat)',
      C: 'PASTA (Process for Attack Simulation and Threat Analysis)',
      D: 'COSO',
    },
    correct: 'C',
    explanation:
      'PASTA is a seven-stage, risk-centric threat modeling methodology that simulates attack scenarios and aligns business objectives with technical requirements. STRIDE (A) categorizes threat types but does not follow a multi-stage attack simulation process like PASTA.',
    unit: 3,
    topic: 'Threat Modeling',
    skill: 'Remembering and Understanding',
  },

  // 5. COSO & Policies
  {
    question:
      'In the context of the COSO framework applied to cybersecurity risk management (CRIME), which component addresses how the organization identifies and evaluates potential cybersecurity threats?',
    choices: {
      A: 'Control Environment',
      B: 'Risk Assessment',
      C: 'Monitoring',
      D: 'Information and Communication',
    },
    correct: 'B',
    explanation:
      'The Risk Assessment component of COSO/CRIME focuses on identifying, analyzing, and evaluating cybersecurity risks. The Control Environment (A) establishes the organizational tone and structure for internal controls but does not specifically address the identification and evaluation of threats.',
    unit: 3,
    topic: 'COSO/Policies',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'What is the primary distinction between a security policy and a security standard within an organization?',
    choices: {
      A: 'Policies are optional guidelines; standards are mandatory requirements',
      B: 'Policies provide high-level direction and intent; standards specify mandatory requirements for implementing those policies',
      C: 'Policies are technical documents; standards are management-level documents',
      D: 'Policies change frequently; standards are permanent and never updated',
    },
    correct: 'B',
    explanation:
      'Security policies establish high-level goals and management intent, while standards define the specific, mandatory requirements and configurations needed to implement those policies. The description that policies are optional (A) is incorrect because policies are also mandatory directives set by management.',
    unit: 3,
    topic: 'COSO/Policies',
    skill: 'Remembering and Understanding',
  },

  // 6. Network & Device Protection
  {
    question:
      'What is the primary purpose of network segmentation in an organization\'s security architecture?',
    choices: {
      A: 'To increase network speed by reducing the number of connected devices',
      B: 'To isolate sensitive systems and limit lateral movement in the event of a breach',
      C: 'To eliminate the need for firewalls between network zones',
      D: 'To reduce the cost of network hardware and cabling',
    },
    correct: 'B',
    explanation:
      'Network segmentation divides a network into smaller, isolated zones to contain breaches and prevent attackers from moving laterally to access sensitive systems. While segmentation can have performance benefits (A), its primary security purpose is containment and access restriction.',
    unit: 3,
    topic: 'Network Security',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which of the following correctly distinguishes an intrusion detection system (IDS) from an intrusion prevention system (IPS)?',
    choices: {
      A: 'An IDS actively blocks malicious traffic, while an IPS only monitors and alerts',
      B: 'An IDS monitors and alerts on suspicious activity, while an IPS can actively block or prevent malicious traffic',
      C: 'An IDS is deployed on individual hosts, while an IPS is always network-based',
      D: 'An IDS uses signature-based detection only, while an IPS uses anomaly-based detection only',
    },
    correct: 'B',
    explanation:
      'An IDS passively monitors network traffic or host activity and generates alerts, while an IPS sits inline and can actively block or drop malicious traffic. The reversed description (A) is the most common misconception about these two technologies.',
    unit: 3,
    topic: 'Network Security',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'The defense-in-depth security strategy is best described as which of the following?',
    choices: {
      A: 'Deploying a single, highly advanced firewall at the network perimeter',
      B: 'Implementing multiple layers of security controls so that if one layer fails, others continue to provide protection',
      C: 'Relying exclusively on endpoint detection and response (EDR) tools',
      D: 'Concentrating all security budget on employee security awareness training',
    },
    correct: 'B',
    explanation:
      'Defense-in-depth uses multiple overlapping security layers across the technology stack so that the failure of any single control does not compromise the entire environment. Relying on a single advanced firewall (A) represents a single point of failure, which is the opposite of defense-in-depth.',
    unit: 3,
    topic: 'Network Security',
    skill: 'Remembering and Understanding',
  },

  // 7. Access Control
  {
    question:
      'In role-based access control (RBAC), access permissions are assigned based on which of the following?',
    choices: {
      A: 'The sensitivity level of the data being accessed',
      B: 'The user\'s job function or organizational role',
      C: 'The discretion of the data owner',
      D: 'Real-time risk scoring of the access request',
    },
    correct: 'B',
    explanation:
      'RBAC assigns permissions based on the user\'s role within the organization, such as "accounts payable clerk" or "IT administrator." Assigning based on data sensitivity (A) describes mandatory access control (MAC), not RBAC.',
    unit: 3,
    topic: 'Access Control',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which access control principle requires that no single individual has sufficient access or authority to complete a critical process from start to finish without oversight?',
    choices: {
      A: 'Least privilege',
      B: 'Need-to-know',
      C: 'Separation of duties',
      D: 'Zero trust',
    },
    correct: 'C',
    explanation:
      'Separation of duties divides critical tasks among multiple individuals to prevent fraud and errors. Least privilege (A) limits users to the minimum access needed for their job but does not specifically require dividing a single process among multiple people.',
    unit: 3,
    topic: 'Access Control',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which authentication method combines something the user knows with something the user has or something the user is?',
    choices: {
      A: 'Single sign-on (SSO)',
      B: 'Multi-factor authentication (MFA)',
      C: 'Biometric authentication',
      D: 'Password-based authentication',
    },
    correct: 'B',
    explanation:
      'MFA requires two or more distinct authentication factors from different categories: knowledge (something you know), possession (something you have), and inherence (something you are). Single sign-on (A) provides convenience by using one credential across multiple systems but does not inherently require multiple factors.',
    unit: 3,
    topic: 'Access Control',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A zero trust architecture operates on which fundamental assumption?',
    choices: {
      A: 'All internal network traffic is inherently trustworthy',
      B: 'Trust is established once at the perimeter and maintained throughout the session',
      C: 'No user, device, or network is inherently trusted, and verification is required for every access request',
      D: 'External traffic is always untrusted, but internal traffic requires no additional verification',
    },
    correct: 'C',
    explanation:
      'Zero trust assumes that threats can originate from both inside and outside the network, so every access request must be verified regardless of source. The assumption that internal traffic is trustworthy (A) reflects the traditional perimeter-based model that zero trust explicitly rejects.',
    unit: 3,
    topic: 'Access Control',
    skill: 'Remembering and Understanding',
  },

  // 8. Controls Classification
  {
    question:
      'Firewalls, encryption, and access control mechanisms are examples of which type of security control?',
    choices: {
      A: 'Detective controls',
      B: 'Corrective controls',
      C: 'Preventive controls',
      D: 'Compensating controls',
    },
    correct: 'C',
    explanation:
      'Preventive controls are designed to stop security incidents before they occur. Firewalls block unauthorized traffic, encryption protects data confidentiality, and access controls restrict who can access resources. Detective controls (A) identify incidents after they occur rather than preventing them.',
    unit: 3,
    topic: 'Controls',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Log analysis, SIEM monitoring, and audit trails are best classified as which type of security control?',
    choices: {
      A: 'Preventive controls',
      B: 'Detective controls',
      C: 'Corrective controls',
      D: 'Directive controls',
    },
    correct: 'B',
    explanation:
      'Detective controls identify and alert on security events and anomalies that have already occurred or are in progress. Preventive controls (A) aim to stop incidents from happening in the first place, while these technologies are designed to detect activity after it begins.',
    unit: 3,
    topic: 'Controls',
    skill: 'Remembering and Understanding',
  },

  // 9. Encryption & Confidentiality
  {
    question:
      'Which characteristic best distinguishes symmetric encryption from asymmetric encryption?',
    choices: {
      A: 'Symmetric encryption uses two different keys; asymmetric encryption uses one shared key',
      B: 'Symmetric encryption uses the same key for both encryption and decryption; asymmetric encryption uses a public-private key pair',
      C: 'Symmetric encryption is always slower than asymmetric encryption',
      D: 'Symmetric encryption provides non-repudiation; asymmetric encryption does not',
    },
    correct: 'B',
    explanation:
      'Symmetric encryption uses a single shared key for both encryption and decryption, while asymmetric encryption uses a mathematically related public-private key pair. The reversed description (A) is incorrect, and symmetric encryption is actually faster, not slower (C), than asymmetric encryption.',
    unit: 3,
    topic: 'Encryption',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which of the following is a one-way function used to verify data integrity rather than to encrypt data?',
    choices: {
      A: 'AES-256',
      B: 'RSA',
      C: 'SHA-256',
      D: 'ECC',
    },
    correct: 'C',
    explanation:
      'SHA-256 is a cryptographic hash function that produces a fixed-length digest and cannot be reversed to recover the original input. AES-256 (A) is a symmetric encryption algorithm designed for encrypting and decrypting data, not a one-way integrity verification function.',
    unit: 3,
    topic: 'Encryption',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Data loss prevention (DLP) solutions can be deployed at which of the following levels?',
    choices: {
      A: 'Network, cloud, and endpoint',
      B: 'Endpoint only',
      C: 'Cloud and network only',
      D: 'Physical perimeter only',
    },
    correct: 'A',
    explanation:
      'DLP solutions operate at three primary levels: network DLP monitors data in transit, cloud DLP protects data in cloud services, and endpoint DLP monitors data on individual devices. Limiting DLP to endpoint only (B) overlooks the critical network and cloud deployment points.',
    unit: 3,
    topic: 'DLP',
    skill: 'Remembering and Understanding',
  },

  // 10. Data Protection & Breach
  {
    question:
      'Which secure data destruction method renders data unrecoverable by exposing magnetic storage media to a strong magnetic field?',
    choices: {
      A: 'Crypto-shredding',
      B: 'Degaussing',
      C: 'Data masking',
      D: 'Overwriting',
    },
    correct: 'B',
    explanation:
      'Degaussing uses a powerful magnetic field to erase data on magnetic media by disrupting the magnetic domains. Crypto-shredding (A) destroys the encryption key rather than the media, making it effective for encrypted data but not dependent on magnetism.',
    unit: 3,
    topic: 'Data Protection',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Crypto-shredding is a data destruction technique that achieves secure deletion by performing which action?',
    choices: {
      A: 'Overwriting the data multiple times with random patterns',
      B: 'Physically shredding the storage device',
      C: 'Destroying the encryption keys used to protect the data, rendering the encrypted data unreadable',
      D: 'Exposing the storage device to extreme heat',
    },
    correct: 'C',
    explanation:
      'Crypto-shredding makes data permanently unrecoverable by destroying the encryption keys, so even though the encrypted data may still exist on the storage medium, it cannot be decrypted. Overwriting (A) is a different technique that replaces data with random values rather than relying on encryption key destruction.',
    unit: 3,
    topic: 'Data Protection',
    skill: 'Remembering and Understanding',
  },

  // 11. Incident Response
  {
    question:
      'According to the NIST incident response framework, what are the four phases of the incident response process in correct order?',
    choices: {
      A: 'Identification, Containment, Eradication, Recovery',
      B: 'Preparation, Detection and Analysis, Containment/Eradication/Recovery, Post-Incident Activity',
      C: 'Planning, Response, Remediation, Reporting',
      D: 'Prevention, Detection, Response, Lessons Learned',
    },
    correct: 'B',
    explanation:
      'The NIST SP 800-61 framework defines four phases: Preparation; Detection and Analysis; Containment, Eradication, and Recovery; and Post-Incident Activity. Option A lists phases from the SANS framework and omits Preparation, which is the critical first phase in the NIST model.',
    unit: 3,
    topic: 'Incident Response',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which incident response metric measures the average time elapsed between the occurrence of a security incident and the moment it is detected?',
    choices: {
      A: 'MTTR (Mean Time to Recover)',
      B: 'MTTD (Mean Time to Detect)',
      C: 'MTTC (Mean Time to Contain)',
      D: 'MTBF (Mean Time Between Failures)',
    },
    correct: 'B',
    explanation:
      'MTTD measures the average duration between when an incident occurs and when the security team becomes aware of it. MTTR (A) measures the average time to fully recover from an incident, which occurs much later in the response process.',
    unit: 3,
    topic: 'Incident Response',
    skill: 'Remembering and Understanding',
  },

  // === APPLICATION (13 questions) ===

  // 1. Threats/Attacks - Application
  {
    question:
      'An organization discovers that an attacker intercepted network communications between two internal servers and altered the transmitted data before forwarding it to the intended recipient. Which type of attack does this scenario describe?',
    choices: {
      A: 'Replay attack',
      B: 'Man-in-the-middle attack',
      C: 'Denial-of-service attack',
      D: 'Port scanning',
    },
    correct: 'B',
    explanation:
      'A man-in-the-middle (MitM) attack involves an attacker positioning themselves between two communicating parties to intercept and potentially alter data in transit. A replay attack (A) captures and retransmits legitimate traffic without modifying it, which is the key distinction from a MitM attack.',
    unit: 3,
    topic: 'Threats/Attacks',
    skill: 'Application',
  },
  {
    question:
      'A security analyst observes that a user received an email appearing to come from the CEO, requesting an urgent wire transfer to an unfamiliar bank account. The email address closely mimics the CEO\'s address but uses a slightly different domain. This scenario is most consistent with which type of attack?',
    choices: {
      A: 'Vishing',
      B: 'Pharming',
      C: 'Business email compromise (BEC)',
      D: 'Smishing',
    },
    correct: 'C',
    explanation:
      'Business email compromise (BEC) involves impersonating executives or trusted parties via email to trick employees into making unauthorized financial transactions. Pharming (B) involves redirecting website traffic through DNS manipulation, which is a different attack vector entirely.',
    unit: 3,
    topic: 'Threats/Attacks',
    skill: 'Application',
  },
  {
    question:
      'A web application allows users to enter search terms that are reflected back in the results page without sanitization. An attacker crafts a URL containing embedded JavaScript that executes when a victim clicks the link. This attack is best classified as which of the following?',
    choices: {
      A: 'SQL injection',
      B: 'Cross-site scripting (XSS)',
      C: 'Cross-site request forgery (CSRF)',
      D: 'Race condition',
    },
    correct: 'B',
    explanation:
      'Cross-site scripting (XSS) occurs when an application includes unvalidated user input in its output, allowing an attacker to inject and execute malicious scripts in another user\'s browser. SQL injection (A) targets backend databases rather than injecting client-side scripts into web pages.',
    unit: 3,
    topic: 'Threats/Attacks',
    skill: 'Application',
  },

  // 2. Cyber-Attack Lifecycle - Application
  {
    question:
      'An organization\'s security team discovers that an attacker has been using legitimate system administration tools and clearing event logs after each session. In the cyber-attack lifecycle, which phase does this activity represent?',
    choices: {
      A: 'Reconnaissance',
      B: 'Scanning and enumeration',
      C: 'Maintaining access',
      D: 'Covering tracks',
    },
    correct: 'D',
    explanation:
      'Covering tracks involves the attacker erasing evidence of their presence, such as clearing logs, modifying timestamps, or using legitimate tools to avoid detection. Maintaining access (C) focuses on ensuring continued access through backdoors, while covering tracks specifically addresses evidence destruction.',
    unit: 3,
    topic: 'Threats/Attacks',
    skill: 'Application',
  },

  // 3. Cloud/Mobile/IoT - Application
  {
    question:
      'An organization allows employees to use personal smartphones to access corporate email and cloud applications. A risk assessment reveals that several employee devices are running outdated operating systems with known vulnerabilities. Which risk category does this scenario primarily represent?',
    choices: {
      A: 'Cloud vendor lock-in risk',
      B: 'IoT default credential risk',
      C: 'BYOD mobile security risk',
      D: 'Data residency compliance risk',
    },
    correct: 'C',
    explanation:
      'Bring Your Own Device (BYOD) policies introduce risks because the organization has limited control over the security posture of personal devices, including operating system patching. IoT default credential risk (B) relates to device manufacturers shipping products with weak defaults, not employee-owned mobile devices.',
    unit: 3,
    topic: 'Cloud/Mobile/IoT',
    skill: 'Application',
  },

  // 4. COSO/Policies - Application
  {
    question:
      'An organization creates a document that specifies employees must not use company email for personal communications, must not install unauthorized software, and must lock workstations when unattended. This document is best described as which of the following?',
    choices: {
      A: 'Security standard',
      B: 'Acceptable use policy',
      C: 'Standard operating procedure',
      D: 'Risk assessment report',
    },
    correct: 'B',
    explanation:
      'An acceptable use policy defines the permitted and prohibited uses of organizational IT resources by employees. A security standard (A) specifies mandatory technical configurations and requirements rather than behavioral expectations for IT resource usage.',
    unit: 3,
    topic: 'COSO/Policies',
    skill: 'Application',
  },

  // 5. Network Security - Application
  {
    question:
      'A security analyst configures a network device that monitors traffic passing through a choke point and automatically drops packets matching known attack signatures. This device is best described as which of the following?',
    choices: {
      A: 'Network-based intrusion detection system (NIDS)',
      B: 'Network-based intrusion prevention system (NIPS)',
      C: 'Host-based intrusion detection system (HIDS)',
      D: 'Security information and event management (SIEM) system',
    },
    correct: 'B',
    explanation:
      'A network-based IPS sits inline with network traffic and can actively block or drop malicious packets based on signature matches. A network-based IDS (A) monitors traffic passively and generates alerts but does not actively drop packets, which is the critical functional difference.',
    unit: 3,
    topic: 'Network Security',
    skill: 'Application',
  },

  // 6. Access Control - Application
  {
    question:
      'A healthcare organization requires that access to patient records be determined by the employee\'s department and job title rather than by individual user assignment. New employees automatically receive appropriate access upon being assigned to a role. Which access control model best fits this requirement?',
    choices: {
      A: 'Discretionary access control (DAC)',
      B: 'Mandatory access control (MAC)',
      C: 'Role-based access control (RBAC)',
      D: 'Risk-based access control',
    },
    correct: 'C',
    explanation:
      'RBAC assigns permissions based on predefined organizational roles, enabling automatic provisioning when users are assigned to a role. Discretionary access control (A) allows individual resource owners to grant access at their discretion, which does not provide the systematic role-based provisioning described.',
    unit: 3,
    topic: 'Access Control',
    skill: 'Application',
  },

  // 7. Encryption - Application
  {
    question:
      'An organization needs to encrypt large volumes of data at rest on its database servers with minimal performance impact. Which encryption approach is most appropriate for this use case?',
    choices: {
      A: 'Asymmetric encryption using RSA-4096',
      B: 'Symmetric encryption using AES-256',
      C: 'Hashing using SHA-512',
      D: 'Asymmetric encryption using elliptic curve cryptography (ECC)',
    },
    correct: 'B',
    explanation:
      'AES-256 symmetric encryption is the standard choice for encrypting data at rest because it offers strong security with significantly better performance than asymmetric algorithms. RSA-4096 (A) is computationally expensive and designed for encrypting small amounts of data such as keys, not bulk data encryption.',
    unit: 3,
    topic: 'Encryption',
    skill: 'Application',
  },

  // 8. Data Protection - Application
  {
    question:
      'A financial services firm suffers a data breach exposing customer Social Security numbers. Under applicable regulations, the firm faces potential regulatory fines, mandatory customer notification costs, legal liability, and reputational damage. Which of the following additional financial consequences is the firm most likely to experience?',
    choices: {
      A: 'Increased stock price due to media visibility',
      B: 'Decline in stock price and loss of investor confidence',
      C: 'Reduction in regulatory scrutiny going forward',
      D: 'Automatic qualification for reduced cyber insurance premiums',
    },
    correct: 'B',
    explanation:
      'Data breaches typically cause stock price declines, loss of investor confidence, and increased scrutiny. The notion that media visibility would increase stock price (A) is incorrect because breach-related publicity is overwhelmingly negative and erodes market confidence.',
    unit: 3,
    topic: 'Data Protection',
    skill: 'Application',
  },

  // 9. Incident Response - Application
  {
    question:
      'During a cybersecurity incident, the response team isolates the affected systems from the network, removes the malware, and restores systems from clean backups. According to the NIST framework, these actions fall within which phase?',
    choices: {
      A: 'Preparation',
      B: 'Detection and Analysis',
      C: 'Containment, Eradication, and Recovery',
      D: 'Post-Incident Activity',
    },
    correct: 'C',
    explanation:
      'Isolation (containment), malware removal (eradication), and restoration from backups (recovery) are all activities within the NIST Containment, Eradication, and Recovery phase. Detection and Analysis (B) involves identifying and investigating the incident, which precedes these response actions.',
    unit: 3,
    topic: 'Incident Response',
    skill: 'Application',
  },
  {
    question:
      'An organization conducts a facilitated discussion where key stakeholders walk through a simulated ransomware scenario, discussing their roles, responsibilities, and decision-making processes without actually executing any technical response actions. This exercise is best described as which of the following?',
    choices: {
      A: 'Penetration test',
      B: 'Functional simulation exercise',
      C: 'Tabletop exercise',
      D: 'Vulnerability assessment',
    },
    correct: 'C',
    explanation:
      'A tabletop exercise is a discussion-based walkthrough of an incident scenario where participants verbally describe their responses without performing actual technical actions. A functional simulation (B) involves actively executing response procedures in a controlled environment, which goes beyond verbal discussion.',
    unit: 3,
    topic: 'Incident Response',
    skill: 'Application',
  },
  {
    question:
      'An organization\'s cyber insurance policy covers costs incurred by the organization itself for breach investigation, data recovery, business interruption losses, and ransomware payments. This type of coverage is best classified as which of the following?',
    choices: {
      A: 'Third-party cyber insurance coverage',
      B: 'First-party cyber insurance coverage',
      C: 'General liability insurance',
      D: 'Errors and omissions insurance',
    },
    correct: 'B',
    explanation:
      'First-party cyber insurance covers the policyholder\'s own losses from a cyber incident, including investigation, recovery, and business interruption costs. Third-party coverage (A) protects against claims made by others, such as lawsuits from affected customers or regulatory fines.',
    unit: 3,
    topic: 'Incident Response',
    skill: 'Application',
  },

  // === ANALYSIS (7 questions) ===

  // 1. Threats/Attacks - Analysis
  {
    question:
      'An organization experiences a security incident in which an attacker gains access to a web server, installs a rootkit for persistence, exfiltrates customer data, and then clears all server logs. A forensic analyst is reconstructing the attack timeline. Which phase of the cyber-attack lifecycle should the analyst focus on first to determine how the attacker initially compromised the server?',
    choices: {
      A: 'Maintaining access',
      B: 'Covering tracks',
      C: 'Gaining access',
      D: 'Reconnaissance',
    },
    correct: 'C',
    explanation:
      'To determine the initial compromise vector, the analyst should focus on the gaining access phase, which encompasses exploitation of vulnerabilities or misconfigurations. Reconnaissance (D) occurs before the actual breach and would reveal how the attacker identified the target, but the gaining access phase reveals the specific method of entry.',
    unit: 3,
    topic: 'Threats/Attacks',
    skill: 'Analysis',
  },

  // 2. Network Security - Analysis
  {
    question:
      'A company has implemented a firewall at the network perimeter, antivirus software on all endpoints, and encryption for data at rest. However, the company lacks network monitoring capabilities and does not review security logs. Which critical gap exists in the organization\'s security posture?',
    choices: {
      A: 'The organization lacks sufficient preventive controls',
      B: 'The organization lacks detective controls needed to identify breaches that bypass preventive measures',
      C: 'The organization has excessive corrective controls',
      D: 'The organization needs to replace its preventive controls with detective controls',
    },
    correct: 'B',
    explanation:
      'The organization has preventive controls (firewall, antivirus, encryption) but no detective controls (monitoring, log review) to identify threats that bypass those preventive measures. Suggesting that preventive controls are insufficient (A) misdiagnoses the gap, since the real deficiency is the absence of visibility into the environment.',
    unit: 3,
    topic: 'Controls',
    skill: 'Analysis',
  },

  // 3. Access Control - Analysis
  {
    question:
      'A financial institution allows individual database administrators to grant access to financial records at their own discretion. An audit reveals that several unauthorized users have been granted access to sensitive financial data. Which access control weakness is most directly responsible for this finding?',
    choices: {
      A: 'The organization is using mandatory access control (MAC) incorrectly',
      B: 'The discretionary access control (DAC) model allows data owners too much autonomy in granting access',
      C: 'Role-based access control (RBAC) has not been properly configured',
      D: 'The organization lacks multi-factor authentication (MFA)',
    },
    correct: 'B',
    explanation:
      'DAC allows resource owners to grant or revoke access at their discretion, which can lead to inconsistent or unauthorized access when individuals make poor judgment calls. While MFA (D) is an important authentication control, the root cause here is the access authorization model, not the authentication mechanism.',
    unit: 3,
    topic: 'Access Control',
    skill: 'Analysis',
  },

  // 4. Encryption - Analysis
  {
    question:
      'An organization uses a single symmetric encryption key to encrypt all customer data across its entire database environment. A security consultant identifies several risks with this approach. Which of the following represents the most significant risk?',
    choices: {
      A: 'Symmetric encryption is too slow for database encryption',
      B: 'If the single key is compromised, all customer data across the entire environment is exposed',
      C: 'Symmetric encryption cannot be used to encrypt data at rest',
      D: 'The organization should use hashing instead of encryption for customer data',
    },
    correct: 'B',
    explanation:
      'Using a single key for the entire environment creates a catastrophic single point of failure: if that key is compromised, every piece of encrypted data becomes accessible. The claim that symmetric encryption is too slow (A) is incorrect since symmetric algorithms like AES are specifically designed for high-performance bulk encryption.',
    unit: 3,
    topic: 'Encryption',
    skill: 'Analysis',
  },

  // 5. Threat Modeling - Analysis
  {
    question:
      'An organization is evaluating threat modeling methodologies and needs one that integrates closely with agile development workflows and scales across multiple teams building different application components. Which methodology is most appropriate?',
    choices: {
      A: 'PASTA',
      B: 'STRIDE',
      C: 'VAST',
      D: 'COSO',
    },
    correct: 'C',
    explanation:
      'VAST (Visual, Agile, and Simple Threat) is specifically designed to integrate with agile and DevOps workflows and to scale across large organizations with multiple development teams. STRIDE (B) categorizes threat types effectively but was not designed to integrate with agile methodologies or scale across multiple teams.',
    unit: 3,
    topic: 'Threat Modeling',
    skill: 'Analysis',
  },

  // 6. Data Protection - Analysis
  {
    question:
      'An organization stores sensitive customer data encrypted with AES-256 on solid-state drives (SSDs). When decommissioning these drives, the IT team proposes degaussing as the secure data destruction method. A security auditor raises concerns about this approach. Why is the auditor\'s concern valid?',
    choices: {
      A: 'Degaussing is not strong enough to erase AES-256 encrypted data',
      B: 'Degaussing is ineffective on SSDs because SSDs store data using electronic charges in flash memory, not magnetic fields',
      C: 'Degaussing is only approved for destroying paper documents',
      D: 'Degaussing takes too long to be practical for large numbers of drives',
    },
    correct: 'B',
    explanation:
      'Degaussing works by disrupting magnetic fields on magnetic media such as hard disk drives or tapes. SSDs use NAND flash memory chips that store data as electronic charges, making degaussing completely ineffective. The claim about AES-256 strength (A) is misleading because degaussing destroys the physical medium regardless of encryption.',
    unit: 3,
    topic: 'Data Protection',
    skill: 'Analysis',
  },

  // 7. Incident Response - Analysis
  {
    question:
      'After a major security breach, an organization reviews its incident response performance and finds the following metrics: MTTD of 197 days, MTTA of 4 hours, MTTC of 48 hours, and MTTR of 30 days. Which metric indicates the most critical area for improvement and why?',
    choices: {
      A: 'MTTA, because acknowledging incidents faster would prevent more damage',
      B: 'MTTC, because 48 hours to contain is excessively long',
      C: 'MTTD, because a 197-day detection gap allows attackers extensive time to operate undetected and expand their access',
      D: 'MTTR, because 30 days to recover is unreasonable for any organization',
    },
    correct: 'C',
    explanation:
      'An MTTD of 197 days means attackers operated undetected for over six months, during which they could exfiltrate vast amounts of data and establish deep persistence. While the MTTA of 4 hours (A) might seem concerning, it is actually a reasonable response time, and reducing detection time from 197 days would yield the greatest improvement in overall security posture.',
    unit: 3,
    topic: 'Incident Response',
    skill: 'Analysis',
  },
]
