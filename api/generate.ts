import Anthropic from '@anthropic-ai/sdk'

const UNIT_CONTENT: Record<number, string> = {
  1: `Unit 1: Regulations, Standards & Frameworks
- NIST Cybersecurity Framework (CSF): Core (6 functions: Govern, Identify, Protect, Detect, Respond, Recover), Implementation Tiers (1-4), Organizational Profiles, 5-step improvement approach
- NIST Privacy Framework: Core (Identify-P, Govern-P, Control-P, Communicate-P, Protect-P), Profiles, Implementation Tiers
- NIST SP 800-53: purpose, applicability, target audience, security and privacy control families
- HIPAA/HITECH: covered entities, business associates, permitted PHI disclosures, breach notification rules
- GDPR: scope, 6 principles (lawfulness/fairness/transparency, purpose limitation, data minimization, accuracy, storage limitation, integrity/confidentiality), data subject rights, penalties
- PCI DSS: 6 goals, 12 requirements, cardholder data environment, applicability
- CIS Controls v8.1: all 18 controls (inventory/control of enterprise assets, software assets, data protection, secure config of enterprise assets and software, account management, access control management, continuous vulnerability management, audit log management, email/web browser protections, malware defenses, data recovery, network infrastructure management, network monitoring/defense, security awareness training, service provider management, application software security, incident response management, penetration testing), implementation groups IG1-IG3
- COBIT 2019: governance system principles (Value, Holistic, Dynamic, Distinct, Tailored, End-to-end), governance framework principles, management domains (EDM, APO, BAI, DSS, MEA), design factors, focus areas, core model`,

  2: `Unit 2: Information Systems & Data Management
- IT Infrastructure: hardware components (servers, storage, end-user devices), network topologies (bus, star, ring, mesh, hybrid), OSI model 7 layers, network protocols (TCP/IP, HTTP/S, FTP, SMTP, DNS), firewall types (packet filtering, stateful, proxy, NGFW), cloud computing models (IaaS/PaaS/SaaS/BPaaS), deployment models (public/private/hybrid/community), COSO ERM for cloud governance
- Enterprise systems: ERP components and integration benefits, AIS subsystems (revenue cycle, expenditure cycle, production cycle, HR/payroll, financing cycle), transaction processing, process improvements (RPA, NLP, AI/ML), blockchain risks and COSO evaluation
- Availability/BCP/DR: BIA steps and formulas (ARO, EF, SLE=AV×EF, ALE=SLE×ARO), DR site types (cold/warm/hot), availability metrics (MTD, RPO, RTO, MTTR, WRT), backup types (full/incremental/differential), mirroring and replication objectives, RAID levels, system availability controls
- Change management: purpose and risks, environments (dev/test/staging/production/DR), test types (unit/integration/system/UAT), conversion methods (direct/parallel/pilot/phased), patch management lifecycle, CI/CD pipelines, change advisory board (CAB), rollback procedures, baseline configuration, version control
- Data lifecycle: DCPSAPAP (Define, Collect, Process, Store, Analyze, Publish, Archive, Purge)
- Data management: extraction methods (ETL, API, screen scraping, web scraping), storage types (ODS, data warehouse, data mart, data lake), database schemas (star/snowflake), relational databases (tables, primary/composite/foreign keys, data dictionary, entity integrity, referential integrity), normalization (1NF/2NF/3NF), conceptual/logical/physical data models
- SQL: commands (SELECT, INSERT, UPDATE, DELETE), clauses (FROM, WHERE, GROUP BY, ORDER BY, HAVING), operators (AND, OR, NOT, IN, BETWEEN, LIKE, IS NULL), aggregate functions (SUM, COUNT, AVG, MIN, MAX), string functions (CONCAT, SUBSTRING, TRIM, UPPER, LOWER), JOINs (INNER, LEFT, RIGHT, FULL OUTER)
- Business process modeling: BPMN elements (pools, lanes, events, tasks, gateways), data flow diagrams (processes, data stores, external entities, data flows), flowchart reconciliation techniques`,

  3: `Unit 3: Security, Confidentiality & Privacy
- Threats: threat agent types (internal/external, intentional/unintentional), network attacks (backdoor, buffer overflow, covert channel, DoS/DDoS, MITM, port scanning, ransomware, replay, return-oriented programming, spoofing), host attacks (brute force, keystroke logging, malware types, rogue applications), social engineering (phishing, spear phishing, BEC, pretexting, catfishing, pharming, vishing, whaling), application attacks (SQL injection, XSS, race condition), physical attacks (piggybacking/tailgating, tampering, theft, equipment interception), supply chain attacks, cloud/mobile/IoT-specific risks, threat modeling frameworks (PASTA, VAST, STRIDE), cyber-attack kill chain stages (reconnaissance through covering tracks)
- Mitigation: COSO framework for cyber risk assessment, security policies/standards/SOPs, network protection (segmentation, isolation, VPN, wireless security WPA2/WPA3, endpoint protection, system hardening), IPS vs IDS, vulnerability management and CVE, layered security/defense-in-depth, authorization models (discretionary/mandatory/role-based/rule-based/policy-based/risk-based), ACLs, zero trust architecture, least privilege, need-to-know, allowlisting/denylisting, acceptable use policy purpose and content, authentication techniques (password management, SSO, MFA, smart cards, biometrics, digital signatures, tokens), preventive/detective/corrective controls examples
- Confidentiality & Privacy: confidentiality vs privacy distinction, encryption fundamentals (symmetric AES/DES vs asymmetric RSA/ECC), hashing (SHA, MD5), cipher techniques (substitution, transposition, block, stream), data obfuscation/tokenization/data masking, DLP types (network/cloud/endpoint), data protection through lifecycle (collect/process/store/transmit/delete), secure deletion methods (overwriting, degaussing, physical destruction), financial and operational implications of data breach (fines, remediation costs, reputational damage, notification requirements)
- Incident response: events vs incidents hierarchy (event → cybersecurity event → adverse event → incident → computer security incident → cybersecurity incident), NIST IRP phases (preparation, detection/analysis, containment/eradication/recovery, post-incident activity), SANS IRP phases, team models (centralized/distributed/coordinating), IRP metrics (MTTD, MTTA, MTTC, MTTR, MTBF), cyber insurance types and requirements, testing methods (tabletop exercises, simulation, penetration testing), post-incident review and continuous monitoring`,

  4: `Unit 4: SOC Engagements
- SOC engagement types: SOC 1 (ICFR-related controls), SOC 2 (Trust Services Criteria), SOC 3 (general-use report), SOC for Cybersecurity (organization-wide), SOC for Supply Chain, Type 1 (design and implementation at a point in time) vs Type 2 (design, implementation, and operating effectiveness over a period)
- Trust Services Criteria: Security (CC series - common criteria), Availability (A series), Processing Integrity (PI series), Confidentiality (C series), Privacy (P series), COSO alignment with TSC common criteria, supplemental criteria vs additional specific criteria
- Planning: independence requirements (service auditor, service organization, subservice organization), materiality determination differences (SOC 1 vs SOC 2), risk assessment for service organization and service auditor, understanding SOC 2 system boundaries
- Subservice organizations: complementary subservice organization controls (CSOCs), carve-out method vs inclusive method, criteria for using each method
- Performing: responding to assessed risks, evaluating management's system description against suitable criteria, obtaining evidence on design effectiveness (inquiry, observation, inspection) and operating effectiveness (reperformance, sampling), walk-through procedures, testing controls
- Service commitments and system requirements in SOC 2, complementary user entity controls (CUECs) purpose and effect on report
- Management assertions for SOC 1/2/3 Type 1 and Type 2 (different assertion sets)
- Management representation letters requirements
- Subsequent events (before report date) vs subsequently discovered facts (after report date) and their impact
- Reporting: opinion types (unmodified, qualified, adverse, disclaimer of opinion) with specific language differences for SOC 1 vs SOC 2, report modifications when deficiencies exist, report sections and required content (SOC 1 vs SOC 2 differences), preparing and presenting test results including exceptions
- System description required contents for SOC 1 and SOC 2`,
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { apiKey, units, count } = req.body

  if (!apiKey || !units?.length || !count) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const topicContent = (units as number[])
    .map(u => UNIT_CONTENT[u])
    .filter(Boolean)
    .join('\n\n')

  const client = new Anthropic({ apiKey })

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 8192,
      system: `You are a CPA ISC (Information Systems and Controls) exam question writer. Create realistic, exam-quality multiple-choice questions matching the style and difficulty of the actual CPA ISC exam.

Guidelines:
- Each question has exactly 4 choices (A-D) with one correct answer
- Use plausible distractors reflecting common misconceptions
- Distribute questions proportionally across the provided topics
- Skill distribution: ~60% Remembering/Understanding, ~25% Application, ~15% Analysis
- Application questions should present realistic scenarios requiring professional judgment
- Analysis questions should require evaluating, comparing, or synthesizing information
- Vary question difficulty within each skill level
- Explanations should clarify why the correct answer is right AND why the most tempting distractor is wrong`,
      messages: [
        {
          role: 'user',
          content: `Generate exactly ${count} CPA ISC exam multiple-choice questions covering:\n\n${topicContent}\n\nDistribute questions across the listed topics. Use the submit_questions tool to return them.`,
        },
      ],
      tools: [
        {
          name: 'submit_questions',
          description: 'Submit the generated exam questions',
          input_schema: {
            type: 'object' as const,
            properties: {
              questions: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    question: { type: 'string' },
                    choices: {
                      type: 'object',
                      properties: {
                        A: { type: 'string' },
                        B: { type: 'string' },
                        C: { type: 'string' },
                        D: { type: 'string' },
                      },
                      required: ['A', 'B', 'C', 'D'],
                    },
                    correct: { type: 'string', enum: ['A', 'B', 'C', 'D'] },
                    explanation: { type: 'string' },
                    unit: { type: 'number' },
                    topic: { type: 'string' },
                    skill: {
                      type: 'string',
                      enum: [
                        'Remembering and Understanding',
                        'Application',
                        'Analysis',
                      ],
                    },
                  },
                  required: [
                    'question',
                    'choices',
                    'correct',
                    'explanation',
                    'unit',
                    'topic',
                    'skill',
                  ],
                },
              },
            },
            required: ['questions'],
          },
        },
      ],
      tool_choice: { type: 'tool' as const, name: 'submit_questions' },
    })

    const toolUse = message.content.find(
      (block: any) => block.type === 'tool_use'
    )
    if (!toolUse || toolUse.type !== 'tool_use') {
      return res.status(500).json({ error: 'Failed to generate questions' })
    }

    return res.status(200).json({
      questions: (toolUse as any).input.questions,
    })
  } catch (error: any) {
    const msg = error?.message || 'API call failed'
    const status = msg.includes('authentication') || msg.includes('api_key')
      ? 401
      : 500
    return res.status(status).json({ error: msg })
  }
}
