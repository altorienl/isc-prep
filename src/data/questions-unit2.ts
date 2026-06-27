import type { Question } from '../types'

export const unit2Questions: Question[] = [
  // ─── IT Infrastructure (5 questions: 3 R&U, 1 App, 1 Analysis) ────
  {
    question:
      'Which layer of the OSI model is responsible for logical addressing and routing packets between networks?',
    choices: {
      A: 'Data link layer',
      B: 'Transport layer',
      C: 'Network layer',
      D: 'Session layer',
    },
    correct: 'C',
    explanation:
      'The network layer (Layer 3) handles logical addressing (e.g., IP addresses) and determines the best path for routing packets across interconnected networks. The data link layer (Layer 2) handles physical addressing (MAC addresses), not logical routing.',
    unit: 2,
    topic: 'IT Infrastructure',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which protocol operates at the application layer of the OSI model and is used to translate human-readable domain names into IP addresses?',
    choices: {
      A: 'DHCP',
      B: 'FTP',
      C: 'DNS',
      D: 'TCP',
    },
    correct: 'C',
    explanation:
      'DNS (Domain Name System) is an application-layer protocol that resolves domain names to IP addresses. DHCP also operates at the application layer but is used to dynamically assign IP addresses to devices, not to translate domain names.',
    unit: 2,
    topic: 'IT Infrastructure',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A next-generation firewall (NGFW) differs from a traditional stateful firewall primarily because it:',
    choices: {
      A: 'Operates only at the network layer of the OSI model.',
      B: 'Provides deep packet inspection, application awareness, and integrated intrusion prevention.',
      C: 'Filters traffic based solely on IP addresses and port numbers.',
      D: 'Functions exclusively as a proxy server.',
    },
    correct: 'B',
    explanation:
      'NGFWs go beyond traditional stateful inspection by performing deep packet inspection, identifying applications regardless of port, and integrating intrusion prevention capabilities. Filtering based solely on IP addresses and port numbers describes basic packet-filtering firewalls, which lack application-layer awareness.',
    unit: 2,
    topic: 'IT Infrastructure',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'An organization wants to allow remote employees to securely access the internal corporate network over the public internet. Which technology is most appropriate?',
    choices: {
      A: 'Demilitarized zone (DMZ)',
      B: 'Virtual private network (VPN)',
      C: 'Proxy server',
      D: 'Content delivery network (CDN)',
    },
    correct: 'B',
    explanation:
      'A VPN creates an encrypted tunnel over the public internet, allowing remote users to securely access internal network resources as if they were on-site. A DMZ is a network segment that hosts public-facing services, but it does not provide secure remote access for employees.',
    unit: 2,
    topic: 'IT Infrastructure',
    skill: 'Application',
  },
  {
    question:
      'A company hosts its public web server, email gateway, and DNS server in a single network segment behind one firewall that faces the internet, with no second firewall separating this segment from the internal network. An auditor reviewing this architecture should be most concerned that:',
    choices: {
      A: 'The web server cannot handle high traffic volumes without a load balancer.',
      B: 'A compromise of any public-facing server could provide direct access to the internal network due to the absence of a properly segmented DMZ.',
      C: 'The DNS server will not be able to resolve external domain names.',
      D: 'The email gateway requires a VPN connection to function properly.',
    },
    correct: 'B',
    explanation:
      'A properly designed DMZ uses two firewalls to isolate public-facing servers from the internal network. Without this second firewall, a compromised public server could provide attackers direct access to internal resources. Load balancing concerns (choice A) are operational, not security-architectural issues.',
    unit: 2,
    topic: 'IT Infrastructure',
    skill: 'Analysis',
  },

  // ─── Cloud Computing (5 questions: 3 R&U, 1 App, 1 Analysis) ──────
  {
    question:
      'Under which cloud service model does the provider manage the infrastructure, operating system, and runtime, while the customer is responsible for deploying and managing applications and data?',
    choices: {
      A: 'Infrastructure as a Service (IaaS)',
      B: 'Platform as a Service (PaaS)',
      C: 'Software as a Service (SaaS)',
      D: 'Business Process as a Service (BPaaS)',
    },
    correct: 'B',
    explanation:
      'In PaaS, the cloud provider manages infrastructure, OS, and runtime, while the customer deploys and manages applications and data. In IaaS, the customer also manages the OS and runtime, giving the customer more control but also more responsibility.',
    unit: 2,
    topic: 'Cloud Computing',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Under the shared responsibility model for IaaS, which of the following is typically the responsibility of the cloud service provider?',
    choices: {
      A: 'Operating system patching',
      B: 'Application-level access controls',
      C: 'Physical security of data centers',
      D: 'Data encryption at rest',
    },
    correct: 'C',
    explanation:
      'In IaaS, the cloud provider is responsible for physical security of the data centers and underlying hardware. Operating system patching is the customer\'s responsibility under IaaS, since the customer manages the virtual machines and their software stack.',
    unit: 2,
    topic: 'Cloud Computing',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A cloud deployment model in which the infrastructure is shared among several organizations with common concerns, such as regulatory requirements, is known as a:',
    choices: {
      A: 'Public cloud',
      B: 'Private cloud',
      C: 'Community cloud',
      D: 'Hybrid cloud',
    },
    correct: 'C',
    explanation:
      'A community cloud is shared by organizations with similar requirements (e.g., compliance, security, or industry standards). A public cloud is open to the general public and multi-tenant by default, without restriction to organizations sharing specific concerns.',
    unit: 2,
    topic: 'Cloud Computing',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'An organization is evaluating a move to cloud computing and wants to apply a risk management framework that addresses strategic, operational, and compliance risks. Which framework is most appropriate for governing cloud adoption at the enterprise level?',
    choices: {
      A: 'COBIT 2019',
      B: 'COSO ERM',
      C: 'NIST CSF',
      D: 'ISO 27001',
    },
    correct: 'B',
    explanation:
      'COSO ERM (Enterprise Risk Management) provides a comprehensive framework for identifying and managing strategic, operational, reporting, and compliance risks across the enterprise, including cloud governance. COBIT 2019 is an IT governance framework and, while relevant, does not address enterprise-wide strategic risk as broadly as COSO ERM.',
    unit: 2,
    topic: 'Cloud Computing',
    skill: 'Application',
  },
  {
    question:
      'An auditor is assessing a company\'s cloud environment and finds that the organization uses IaaS but has not implemented any operating system patches on its virtual machines. The auditor should conclude that:',
    choices: {
      A: 'The cloud provider has failed to meet its responsibility under the shared responsibility model.',
      B: 'The organization has failed to meet its responsibility under the shared responsibility model.',
      C: 'OS patching is not required in cloud environments because the provider manages the hypervisor.',
      D: 'The risk is mitigated because the cloud provider\'s firewall protects the virtual machines.',
    },
    correct: 'B',
    explanation:
      'Under the IaaS shared responsibility model, the customer is responsible for managing and patching the operating system on its virtual machines. Attributing this to the provider is incorrect because IaaS explicitly places OS-level management with the customer.',
    unit: 2,
    topic: 'Cloud Computing',
    skill: 'Analysis',
  },

  // ─── ERP/AIS (6 questions: 3 R&U, 2 App, 1 Analysis) ─────────────
  {
    question:
      'Which AIS subsystem captures and processes transactions related to purchasing goods and services, managing accounts payable, and disbursing cash?',
    choices: {
      A: 'Revenue cycle',
      B: 'Expenditure cycle',
      C: 'Production cycle',
      D: 'Financing cycle',
    },
    correct: 'B',
    explanation:
      'The expenditure cycle encompasses purchasing, receiving, accounts payable, and cash disbursements. The revenue cycle handles the opposite side—sales, accounts receivable, and cash receipts.',
    unit: 2,
    topic: 'ERP/AIS',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A key benefit of an enterprise resource planning (ERP) system is that it:',
    choices: {
      A: 'Eliminates the need for internal controls over transaction processing.',
      B: 'Uses a centralized database to integrate data across business functions.',
      C: 'Allows each department to maintain its own independent data store.',
      D: 'Replaces the need for a general ledger.',
    },
    correct: 'B',
    explanation:
      'ERP systems integrate data across business functions through a centralized database, ensuring consistency and reducing data redundancy. Rather than allowing independent data stores, ERP systems specifically aim to eliminate data silos through integration.',
    unit: 2,
    topic: 'ERP/AIS',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which emerging technology uses distributed ledger technology to record transactions in an immutable, decentralized manner?',
    choices: {
      A: 'Robotic process automation (RPA)',
      B: 'Natural language processing (NLP)',
      C: 'Blockchain',
      D: 'Artificial intelligence (AI)',
    },
    correct: 'C',
    explanation:
      'Blockchain is a distributed ledger technology that records transactions across multiple nodes in an immutable and transparent manner. RPA automates repetitive rule-based tasks but does not involve distributed ledger technology.',
    unit: 2,
    topic: 'ERP/AIS',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A manufacturing company wants to automate the process of extracting data from supplier invoices and entering it into the accounts payable module. Which technology is most appropriate?',
    choices: {
      A: 'Blockchain',
      B: 'Robotic process automation (RPA)',
      C: 'Data warehouse',
      D: 'Virtual private network (VPN)',
    },
    correct: 'B',
    explanation:
      'RPA is designed to automate repetitive, rule-based tasks such as extracting data from documents and entering it into systems. Blockchain provides a distributed ledger for recording transactions but does not automate data extraction and entry tasks.',
    unit: 2,
    topic: 'ERP/AIS',
    skill: 'Application',
  },
  {
    question:
      'A CPA firm currently manages its own email servers on-premises. The firm decides to migrate to a cloud-based email solution where the provider manages everything, and users simply access the application through a web browser. This arrangement is best classified as:',
    choices: {
      A: 'Infrastructure as a Service (IaaS)',
      B: 'Platform as a Service (PaaS)',
      C: 'Software as a Service (SaaS)',
      D: 'Business Process as a Service (BPaaS)',
    },
    correct: 'C',
    explanation:
      'SaaS provides fully managed applications accessed through a web browser, with the provider handling all infrastructure, platform, and application management. BPaaS goes beyond application delivery and outsources an entire business process (e.g., payroll processing), not just an application like email.',
    unit: 2,
    topic: 'ERP/AIS',
    skill: 'Application',
  },
  {
    question:
      'An organization is evaluating the risks of implementing a blockchain-based supply chain system. Using the COSO framework, which risk category is most directly relevant when considering the possibility that the consensus mechanism could be compromised by a majority attack?',
    choices: {
      A: 'Strategic risk',
      B: 'Operations risk',
      C: 'Reporting risk',
      D: 'Compliance risk',
    },
    correct: 'B',
    explanation:
      'A majority (51%) attack on a blockchain consensus mechanism is an operations risk because it directly threatens the integrity and reliability of ongoing transaction processing. Strategic risk relates to high-level business objectives and market positioning, not the operational vulnerability of a specific technology mechanism.',
    unit: 2,
    topic: 'ERP/AIS',
    skill: 'Analysis',
  },

  // ─── BCP/DR (6 questions: 3 R&U, 3 App) ───────────────────────────
  {
    question:
      'Which type of disaster recovery site contains the necessary hardware, software, and data replication to become operational within minutes or hours?',
    choices: {
      A: 'Cold site',
      B: 'Warm site',
      C: 'Hot site',
      D: 'Mobile site',
    },
    correct: 'C',
    explanation:
      'A hot site is a fully equipped facility with hardware, software, and near-real-time data replication, enabling rapid failover. A warm site has hardware and connectivity but typically requires data restoration before becoming operational, resulting in longer recovery times.',
    unit: 2,
    topic: 'BCP/DR',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'The maximum amount of data loss an organization can tolerate, measured in time, is known as the:',
    choices: {
      A: 'Recovery Time Objective (RTO)',
      B: 'Recovery Point Objective (RPO)',
      C: 'Maximum Tolerable Downtime (MTD)',
      D: 'Mean Time to Repair (MTTR)',
    },
    correct: 'B',
    explanation:
      'RPO defines the maximum acceptable amount of data loss measured in time (e.g., the organization can tolerate losing no more than 4 hours of data). RTO measures the maximum acceptable time to restore systems to operational status, not the amount of data loss.',
    unit: 2,
    topic: 'BCP/DR',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'The relationship RTO + WRT must not exceed which availability metric?',
    choices: {
      A: 'Recovery Point Objective (RPO)',
      B: 'Mean Time to Repair (MTTR)',
      C: 'Maximum Tolerable Downtime (MTD)',
      D: 'Annual Rate of Occurrence (ARO)',
    },
    correct: 'C',
    explanation:
      'MTD is the total maximum time a business function can be unavailable. It comprises the time to restore systems (RTO) plus the time to recover data and verify operations (WRT). MTTR measures the average repair time for a component and is not the overarching constraint that RTO + WRT must satisfy.',
    unit: 2,
    topic: 'BCP/DR',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A server is valued at $200,000. A risk assessment determines that a specific threat has an exposure factor (EF) of 25% and an annual rate of occurrence (ARO) of 0.5. What is the annualized loss expectancy (ALE)?',
    choices: {
      A: '$25,000',
      B: '$50,000',
      C: '$100,000',
      D: '$200,000',
    },
    correct: 'A',
    explanation:
      'ALE = SLE x ARO. SLE = Asset Value x EF = $200,000 x 0.25 = $50,000. ALE = $50,000 x 0.5 = $25,000. The most common error is computing SLE correctly ($50,000) but forgetting to multiply by ARO.',
    unit: 2,
    topic: 'BCP/DR',
    skill: 'Application',
  },
  {
    question:
      'A company performs a full backup every Sunday and incremental backups Monday through Saturday. A server failure occurs on Thursday morning. To restore the system, the administrator needs:',
    choices: {
      A: 'Only the most recent incremental backup (Wednesday).',
      B: 'Only the full backup from Sunday.',
      C: 'The full backup from Sunday plus all incremental backups from Monday through Wednesday.',
      D: 'The full backup from Sunday plus only the Wednesday incremental backup.',
    },
    correct: 'C',
    explanation:
      'Incremental backups capture only the data changed since the last backup of any type. Restoring requires the most recent full backup plus every subsequent incremental backup in sequence. Using only the Wednesday incremental would miss changes captured in the Monday and Tuesday backups.',
    unit: 2,
    topic: 'BCP/DR',
    skill: 'Application',
  },
  {
    question:
      'An asset valued at $80,000 faces a threat with an exposure factor of 50% and an annual rate of occurrence of 2. What is the single loss expectancy (SLE) and the annualized loss expectancy (ALE)?',
    choices: {
      A: 'SLE = $40,000; ALE = $80,000',
      B: 'SLE = $80,000; ALE = $160,000',
      C: 'SLE = $40,000; ALE = $20,000',
      D: 'SLE = $160,000; ALE = $80,000',
    },
    correct: 'A',
    explanation:
      'SLE = Asset Value x EF = $80,000 x 0.50 = $40,000. ALE = SLE x ARO = $40,000 x 2 = $80,000. A common error is confusing SLE and ALE or using the wrong formula order.',
    unit: 2,
    topic: 'BCP/DR',
    skill: 'Application',
  },

  // ─── Change Management (6 questions: 4 R&U, 1 App, 1 Analysis) ────
  {
    question:
      'Which system conversion method involves running both the old and new systems simultaneously until the new system is verified to function correctly?',
    choices: {
      A: 'Direct (big bang) conversion',
      B: 'Parallel conversion',
      C: 'Pilot conversion',
      D: 'Phased conversion',
    },
    correct: 'B',
    explanation:
      'Parallel conversion runs both old and new systems simultaneously, allowing output comparison before decommissioning the old system. Direct (big bang) conversion switches entirely to the new system at once, with no fallback to the old system.',
    unit: 2,
    topic: 'Change Management',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which testing type is performed by end users to verify that the system meets business requirements before it is deployed to production?',
    choices: {
      A: 'Unit testing',
      B: 'Integration testing',
      C: 'System testing',
      D: 'User acceptance testing (UAT)',
    },
    correct: 'D',
    explanation:
      'UAT is the final testing phase where end users validate that the system meets their business requirements and is ready for production. System testing is performed by the QA team to verify overall system functionality, not by end users for business requirement validation.',
    unit: 2,
    topic: 'Change Management',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A software development team releases code changes frequently and uses automated build, test, and deployment pipelines to push updates to production multiple times per day. This practice is best described as:',
    choices: {
      A: 'Waterfall development',
      B: 'Parallel conversion',
      C: 'CI/CD (Continuous Integration/Continuous Deployment)',
      D: 'Phased conversion',
    },
    correct: 'C',
    explanation:
      'CI/CD automates the build, test, and deployment process to enable frequent, reliable releases. Waterfall development follows a sequential, phase-based approach with a single deployment at the end, which is the opposite of continuous deployment.',
    unit: 2,
    topic: 'Change Management',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'In a change management process, the body responsible for reviewing, approving, and prioritizing change requests is the:',
    choices: {
      A: 'Quality assurance team',
      B: 'Change advisory board (CAB)',
      C: 'Project management office (PMO)',
      D: 'Internal audit department',
    },
    correct: 'B',
    explanation:
      'The CAB is a cross-functional group that evaluates change requests for risk, impact, and priority before approving or rejecting them. The QA team tests changes but does not have the authority to approve or prioritize change requests.',
    unit: 2,
    topic: 'Change Management',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A financial services company needs to deploy a critical security patch to its production servers. The correct sequence of steps in the patch management lifecycle is:',
    choices: {
      A: 'Deploy, test, identify, evaluate, verify',
      B: 'Identify, evaluate, test, deploy, verify',
      C: 'Test, identify, deploy, evaluate, verify',
      D: 'Identify, deploy, test, evaluate, verify',
    },
    correct: 'B',
    explanation:
      'The proper patch management lifecycle follows: identify the patch, evaluate its relevance and risk, test it in a non-production environment, deploy it to production, and verify successful installation. Deploying before testing risks introducing instability into the production environment.',
    unit: 2,
    topic: 'Change Management',
    skill: 'Application',
  },
  {
    question:
      'An auditor reviews a company\'s change management process and finds that developers have direct write access to the production environment. The primary risk associated with this finding is that:',
    choices: {
      A: 'Testing cycles will be shortened.',
      B: 'Unauthorized or untested changes could be introduced directly into production.',
      C: 'Development costs will increase due to duplicated environments.',
      D: 'Users will be required to participate in additional UAT sessions.',
    },
    correct: 'B',
    explanation:
      'Direct developer access to production bypasses change management controls, allowing unauthorized or untested changes that could cause outages or data corruption. Shortened testing cycles are a secondary concern; the primary risk is the lack of segregation between development and production.',
    unit: 2,
    topic: 'Change Management',
    skill: 'Analysis',
  },

  // ─── Data Lifecycle (6 questions: 4 R&U, 1 App, 1 Analysis) ───────
  {
    question:
      'The data lifecycle phase in which data is removed from active and archival storage in compliance with retention policies is known as:',
    choices: {
      A: 'Archiving',
      B: 'Publishing',
      C: 'Purging',
      D: 'Processing',
    },
    correct: 'C',
    explanation:
      'Purging is the final phase of the data lifecycle (DCPSAPAP: Define, Collect, Process, Store, Analyze, Publish, Archive, Purge) where data is permanently deleted. Archiving moves data to long-term storage but retains it, whereas purging eliminates it entirely.',
    unit: 2,
    topic: 'Data Lifecycle',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which data extraction method involves a three-step process of extracting data from source systems, converting it into a consistent format, and loading it into a target data store?',
    choices: {
      A: 'API extraction',
      B: 'Screen scraping',
      C: 'Web scraping',
      D: 'ETL (Extract, Transform, Load)',
    },
    correct: 'D',
    explanation:
      'ETL follows a structured three-step process: extract data from sources, transform it into a consistent format, and load it into a target repository such as a data warehouse. API extraction retrieves data programmatically from a specific interface but does not inherently include the transformation and loading steps.',
    unit: 2,
    topic: 'Data Lifecycle',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'An input validation control that verifies whether a value falls within a predetermined minimum and maximum is called a:',
    choices: {
      A: 'Format check',
      B: 'Range check',
      C: 'Check digit verification',
      D: 'Completeness check',
    },
    correct: 'B',
    explanation:
      'A range check validates that a data value falls between a specified minimum and maximum. A format check verifies the structure or pattern of data (e.g., date format MM/DD/YYYY) but does not evaluate whether numerical values fall within bounds.',
    unit: 2,
    topic: 'Data Lifecycle',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which data lifecycle phase involves defining data requirements, including what data to collect, its format, and applicable quality standards?',
    choices: {
      A: 'Collect',
      B: 'Define',
      C: 'Process',
      D: 'Analyze',
    },
    correct: 'B',
    explanation:
      'The Define phase is the first step in the DCPSAPAP lifecycle, where organizations establish what data is needed, its format, quality standards, and governance rules. The Collect phase follows Define and involves actually gathering the data according to the defined requirements.',
    unit: 2,
    topic: 'Data Lifecycle',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'An order entry system accepts a quantity field. A control is needed to reject entries where a user enters a negative number or a quantity exceeding 10,000 units. This control is best described as a:',
    choices: {
      A: 'Validity check',
      B: 'Completeness check',
      C: 'Limit check',
      D: 'Check digit verification',
    },
    correct: 'C',
    explanation:
      'A limit check tests whether a value exceeds a predetermined boundary (minimum or maximum threshold). A validity check compares input to a list of acceptable values (e.g., valid state codes) rather than testing against numerical thresholds.',
    unit: 2,
    topic: 'Data Lifecycle',
    skill: 'Application',
  },
  {
    question:
      'A company\'s data governance team discovers that customer records collected five years ago are still stored in the production database despite a retention policy requiring deletion after three years. The team also finds that no archival process was ever implemented. Which phases of the data lifecycle (DCPSAPAP) have most likely been neglected?',
    choices: {
      A: 'Define and Collect',
      B: 'Process and Store',
      C: 'Archive and Purge',
      D: 'Analyze and Publish',
    },
    correct: 'C',
    explanation:
      'The Archive phase moves data to long-term storage when it is no longer actively needed, and the Purge phase permanently deletes data according to retention policies. Both were neglected since no archival process existed and expired data was never removed. Define and Collect relate to the initial stages of data acquisition, not end-of-life management.',
    unit: 2,
    topic: 'Data Lifecycle',
    skill: 'Analysis',
  },

  // ─── Databases (6 questions: 4 R&U, 0 App, 2 Analysis) ────────────
  {
    question:
      'In a relational database, which type of key uniquely identifies each row in a table and cannot contain null values?',
    choices: {
      A: 'Foreign key',
      B: 'Composite key',
      C: 'Primary key',
      D: 'Candidate key',
    },
    correct: 'C',
    explanation:
      'A primary key uniquely identifies each record in a table and enforces entity integrity by prohibiting null values. A foreign key references a primary key in another table to establish relationships but is not required to be unique within its own table.',
    unit: 2,
    topic: 'Databases',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A data storage structure that consolidates historical data from multiple operational systems for enterprise-wide reporting and analysis is known as a:',
    choices: {
      A: 'Operational data store (ODS)',
      B: 'Data warehouse',
      C: 'Data lake',
      D: 'Data mart',
    },
    correct: 'B',
    explanation:
      'A data warehouse integrates historical data from multiple source systems into a structured format optimized for enterprise-wide analysis and reporting. An ODS holds current operational data for near-real-time reporting, not historical consolidated data.',
    unit: 2,
    topic: 'Databases',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A database schema design in which a central fact table is connected to multiple dimension tables, each of which is not further normalized, is called a:',
    choices: {
      A: 'Snowflake schema',
      B: 'Star schema',
      C: 'Normalized schema',
      D: 'Flat file schema',
    },
    correct: 'B',
    explanation:
      'A star schema has a central fact table connected to denormalized dimension tables, forming a star-like shape. A snowflake schema is similar but further normalizes the dimension tables, creating additional levels of related tables branching from dimensions.',
    unit: 2,
    topic: 'Databases',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Referential integrity in a relational database ensures that:',
    choices: {
      A: 'No two rows in a table have the same primary key value.',
      B: 'Every foreign key value matches an existing primary key value in the referenced table, or is null.',
      C: 'All columns have defined data types.',
      D: 'Data is stored without repeating groups.',
    },
    correct: 'B',
    explanation:
      'Referential integrity ensures that foreign key values in one table correspond to valid primary key values in the referenced table, maintaining consistent relationships. The constraint that no two rows share a primary key value describes entity integrity, not referential integrity.',
    unit: 2,
    topic: 'Databases',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A table contains the following columns: OrderID (primary key), CustomerName, CustomerAddress, ProductID, and ProductDescription. CustomerAddress is functionally dependent on CustomerName, and ProductDescription is functionally dependent on ProductID. This table violates:',
    choices: {
      A: 'First normal form (1NF)',
      B: 'Second normal form (2NF)',
      C: 'Third normal form (3NF)',
      D: 'No normal form is violated',
    },
    correct: 'C',
    explanation:
      'Third normal form requires that non-key attributes depend only on the primary key, not on other non-key attributes. CustomerAddress depends on CustomerName (a non-key attribute), creating a transitive dependency. This is not a 2NF violation because partial dependencies involve composite keys, and OrderID is a single-column primary key.',
    unit: 2,
    topic: 'Databases',
    skill: 'Analysis',
  },
  {
    question:
      'A table named ORDERS has the columns: OrderID, ProductID, ProductName, Quantity, and Price. OrderID and ProductID together form a composite primary key. ProductName depends only on ProductID, not on the full composite key. This table violates:',
    choices: {
      A: 'First normal form (1NF)',
      B: 'Second normal form (2NF)',
      C: 'Third normal form (3NF)',
      D: 'Boyce-Codd normal form (BCNF)',
    },
    correct: 'B',
    explanation:
      'Second normal form requires that all non-key attributes depend on the entire composite primary key, not just part of it. ProductName depends only on ProductID (a partial dependency), violating 2NF. A 3NF violation involves transitive dependencies among non-key attributes, which is a different issue.',
    unit: 2,
    topic: 'Databases',
    skill: 'Analysis',
  },

  // ─── SQL (6 questions: 3 R&U, 3 App) ──────────────────────────────
  {
    question:
      'Which SQL command is used to remove an entire table structure and all of its data from the database?',
    choices: {
      A: 'DELETE FROM table_name;',
      B: 'TRUNCATE TABLE table_name;',
      C: 'DROP TABLE table_name;',
      D: 'ALTER TABLE table_name REMOVE;',
    },
    correct: 'C',
    explanation:
      'DROP TABLE removes the table structure and all data permanently from the database. DELETE FROM removes all rows but preserves the table structure, allowing future inserts into the same table.',
    unit: 2,
    topic: 'SQL',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Which SQL clause is used to filter the results of aggregate functions such as SUM() or COUNT()?',
    choices: {
      A: 'WHERE',
      B: 'GROUP BY',
      C: 'HAVING',
      D: 'ORDER BY',
    },
    correct: 'C',
    explanation:
      'The HAVING clause filters groups based on aggregate function results, applied after GROUP BY. The WHERE clause filters individual rows before grouping occurs and cannot reference aggregate functions.',
    unit: 2,
    topic: 'SQL',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Given the following SQL query:\n\nSELECT c.customer_name, o.order_date, o.total_amount\nFROM customers c\nLEFT JOIN orders o ON c.customer_id = o.customer_id;\n\nWhat will the result set include?',
    choices: {
      A: 'Only customers who have placed at least one order.',
      B: 'All customers, including those who have never placed an order, with NULL values for order columns where no match exists.',
      C: 'All orders, including those with no matching customer record.',
      D: 'Only rows where both customer and order records exist.',
    },
    correct: 'B',
    explanation:
      'A LEFT JOIN returns all rows from the left table (customers) and matched rows from the right table (orders). Customers without orders appear with NULL values in the order columns. An INNER JOIN (choice D) would exclude customers without orders.',
    unit: 2,
    topic: 'SQL',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'Given the following SQL query:\n\nSELECT department, COUNT(*) AS emp_count\nFROM employees\nGROUP BY department\nHAVING COUNT(*) > 10\nORDER BY emp_count DESC;\n\nWhat does this query return?',
    choices: {
      A: 'All departments and the number of employees in each.',
      B: 'Only departments with more than 10 employees, sorted by employee count in descending order.',
      C: 'The top 10 departments by employee count.',
      D: 'All employees in departments with more than 10 members.',
    },
    correct: 'B',
    explanation:
      'The HAVING clause filters groups (departments) to include only those with more than 10 employees, and ORDER BY emp_count DESC sorts the results from highest to lowest count. Choice A would be correct without the HAVING clause, but the filter restricts the output to departments exceeding 10 employees.',
    unit: 2,
    topic: 'SQL',
    skill: 'Application',
  },
  {
    question:
      'Given the following SQL query:\n\nSELECT product_name, unit_price\nFROM products\nWHERE unit_price BETWEEN 10 AND 50\n  AND category_id IN (1, 3, 5)\nORDER BY unit_price ASC;\n\nWhich products are included in the result set?',
    choices: {
      A: 'Products with a price of exactly 10, 30, or 50 in categories 1, 3, or 5.',
      B: 'Products with a price from 10 to 50 (inclusive) that belong to category 1, 3, or 5, sorted by price ascending.',
      C: 'Products with a price greater than 10 and less than 50 in all categories.',
      D: 'Products with a price from 10 to 50 in categories other than 1, 3, and 5.',
    },
    correct: 'B',
    explanation:
      'BETWEEN is inclusive of both endpoints (10 and 50), and IN filters for rows matching any value in the list (1, 3, or 5). Choice C is incorrect because BETWEEN includes the boundary values and the query restricts categories to the specified set.',
    unit: 2,
    topic: 'SQL',
    skill: 'Application',
  },
  {
    question:
      'Given the following SQL query:\n\nSELECT department_id, AVG(salary) AS avg_salary\nFROM employees\nWHERE hire_date > \'2020-01-01\'\nGROUP BY department_id;\n\nWhat does this query return?',
    choices: {
      A: 'The average salary for all employees in each department.',
      B: 'The average salary for employees hired after January 1, 2020, grouped by department.',
      C: 'The total salary for employees hired after January 1, 2020.',
      D: 'All employees hired after January 1, 2020, along with their salaries.',
    },
    correct: 'B',
    explanation:
      'The WHERE clause first filters to employees hired after January 1, 2020, and then GROUP BY computes the average salary per department for that subset. Choice A would be correct only if the WHERE clause were removed, since it would then include all employees.',
    unit: 2,
    topic: 'SQL',
    skill: 'Application',
  },

  // ─── BPMN/DFD (4 questions: 3 R&U, 1 App) ────────────────────────
  {
    question:
      'In a data flow diagram (DFD), a rectangle represents a(n):',
    choices: {
      A: 'Process',
      B: 'Data store',
      C: 'External entity',
      D: 'Data flow',
    },
    correct: 'C',
    explanation:
      'In a DFD, a rectangle (or square) represents an external entity—a source or destination of data outside the system boundary. A process is represented by a circle (or rounded rectangle), not a square.',
    unit: 2,
    topic: 'BPMN/DFD',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'In BPMN, a diamond shape that routes the process flow along exactly one of several mutually exclusive paths based on a condition is called a(n):',
    choices: {
      A: 'Parallel gateway',
      B: 'Inclusive gateway',
      C: 'Exclusive gateway',
      D: 'Event-based gateway',
    },
    correct: 'C',
    explanation:
      'An exclusive gateway (XOR) directs the flow along exactly one outgoing path based on a condition. A parallel gateway (AND) activates all outgoing paths simultaneously, which is fundamentally different from choosing a single path.',
    unit: 2,
    topic: 'BPMN/DFD',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'In a BPMN diagram, horizontal subdivisions within a pool that organize activities by role or department are called:',
    choices: {
      A: 'Pools',
      B: 'Swim lanes',
      C: 'Sequence flows',
      D: 'Message flows',
    },
    correct: 'B',
    explanation:
      'Swim lanes are subdivisions within a pool that assign process activities to specific roles, departments, or systems. Pools represent entire participants (organizations or processes), while swim lanes partition activities within a single pool.',
    unit: 2,
    topic: 'BPMN/DFD',
    skill: 'Remembering and Understanding',
  },
  {
    question:
      'A business analyst is documenting an order fulfillment process. After receiving an order, the process must simultaneously initiate both a credit check and an inventory check before proceeding. Which BPMN gateway should be used to model this behavior?',
    choices: {
      A: 'Exclusive gateway',
      B: 'Parallel gateway',
      C: 'Inclusive gateway',
      D: 'Complex gateway',
    },
    correct: 'B',
    explanation:
      'A parallel gateway (AND) splits the process into concurrent paths that all execute simultaneously and must all complete before the process continues. An exclusive gateway would route the flow to only one path, which does not satisfy the requirement for both checks to occur concurrently.',
    unit: 2,
    topic: 'BPMN/DFD',
    skill: 'Application',
  },
]
