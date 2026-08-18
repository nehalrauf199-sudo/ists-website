// app/courses/data/courses.js
import {
    FaHeartbeat,      // First Aid
    FaFire,           // Fire Safety
    FaShieldAlt,      // Risk Management
    FaHardHat,        // Scaffolding
    FaTools,          // Rigger
    FaClipboardCheck, // OSHA
    FaUserTie,        // IOSH
    FaFlask,          // QA/QC
    FaMicroscope,     // NDT
    FaGraduationCap,  // Diploma HSE
    FaLeaf,           // Diploma Environment & Green Building
    FaBuilding,       // Diploma Civil
    FaBolt,           // Electrical
    FaCogs,           // Mechanical
    FaFileAlt,        // WPR
    FaCertificate,    // ISO
    FaBriefcase,      // Business Management
    FaLaptop,         // IT
    FaGavel,          // Law
    FaChalkboardTeacher, // Train the Trainer
    FaTruck,          // Transport
    FaStar,           // Quality Management
    FaRulerCombined,  // Architectural
    FaGlobe,          // Surveying
    FaAppleAlt,       // Food Safety
    FaProjectDiagram, // Project Management
    FaCar,            // Defence Driving
    FaFolderOpen,     // Document Controller
    FaWrench,         // Technical
    FaSun,            // Solar
    FaOilCan,         // Oil & Gas
    FaHospital        // Health & Safety
} from 'react-icons/fa';

export const categories = [
    {
        id: 'first-aid',
        name: 'First Aid',
        icon: FaHeartbeat,
        description: 'Emergency response, CPR, and life-saving skills certifications',
        courses: [
            {
                slug: 'cpr',
                name: 'CPR',
                duration: '1 Day',
                image: '/courses/cpr.jpg',
                entryRequirements: [
                    'No previous medical qualification is normally required for entry-level first-aid training.',
                    'Learners should be able to understand safety instructions and communicate with an emergency team.',
                    'Learners must be prepared for practical demonstrations involving CPR, recovery position and casualty assessment where applicable.',
                    'Basic physical ability to kneel, position a casualty and perform practical skills is recommended; reasonable adjustments may be considered.',
                    'For BLS/CPR/AED courses, healthcare workers should follow any additional requirements of their employer or certification body.',
                    'Wilderness First Aid normally benefits from outdoor experience and the ability to operate safely in remote environments.'
                ],
                studyUnits: [
                    'Emergency response sequence and scene safety',
                    'Primary assessment and recognition of cardiac arrest',
                    'Adult CPR: compressions, ventilation principles and quality control',
                    'Use of barrier devices and infection-control precautions',
                    'Recovery position and management of an unresponsive breathing casualty',
                    'Choking recognition and immediate response',
                    'Practical skills assessment and emergency communication'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with CPR.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in CPR through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to CPR.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'aed',
                name: 'AED',
                duration: '1 Day',
                image: '/courses/aed.jpg',
                entryRequirements: [
                    'No previous medical qualification is normally required for entry-level first-aid training.',
                    'Learners should be able to understand safety instructions and communicate with an emergency team.',
                    'Learners must be prepared for practical demonstrations involving CPR, recovery position and casualty assessment where applicable.',
                    'Basic physical ability to kneel, position a casualty and perform practical skills is recommended; reasonable adjustments may be considered.',
                    'For BLS/CPR/AED courses, healthcare workers should follow any additional requirements of their employer or certification body.',
                    'Wilderness First Aid normally benefits from outdoor experience and the ability to operate safely in remote environments.'
                ],
                studyUnits: [
                    'Cardiac arrest recognition and emergency activation',
                    'AED purpose, components and safety precautions',
                    'Pad placement and rhythm-analysis procedure',
                    'Safe shock delivery and "clear" protocols',
                    'CPR integration before, during and after AED analysis',
                    'Special considerations such as implanted devices and wet environments',
                    'Scenario-based AED/CPR practice and competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with AED.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in AED through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to AED.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'bls',
                name: 'BLS',
                duration: '2 Days',
                image: '/courses/bls.jpg',
                entryRequirements: [
                    'No previous medical qualification is normally required for entry-level first-aid training.',
                    'Learners should be able to understand safety instructions and communicate with an emergency team.',
                    'Learners must be prepared for practical demonstrations involving CPR, recovery position and casualty assessment where applicable.',
                    'Basic physical ability to kneel, position a casualty and perform practical skills is recommended; reasonable adjustments may be considered.',
                    'For BLS/CPR/AED courses, healthcare workers should follow any additional requirements of their employer or certification body.',
                    'Wilderness First Aid normally benefits from outdoor experience and the ability to operate safely in remote environments.'
                ],
                studyUnits: [
                    'Chain of survival and early recognition',
                    'High-quality adult CPR',
                    'Rescue breaths and ventilation alternatives',
                    'AED integration into BLS',
                    'Team-based resuscitation and role allocation',
                    'Choking and sudden deterioration response',
                    'Practical BLS scenarios and skills assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with BLS.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in BLS through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to BLS.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'heartsaver-first-aid',
                name: 'Heartsaver First Aid',
                duration: '1 Day',
                image: '/courses/heartsaver-first-aid.jpg',
                entryRequirements: [
                    'No previous medical qualification is normally required for entry-level first-aid training.',
                    'Learners should be able to understand safety instructions and communicate with an emergency team.',
                    'Learners must be prepared for practical demonstrations involving CPR, recovery position and casualty assessment where applicable.',
                    'Basic physical ability to kneel, position a casualty and perform practical skills is recommended; reasonable adjustments may be considered.',
                    'For BLS/CPR/AED courses, healthcare workers should follow any additional requirements of their employer or certification body.',
                    'Wilderness First Aid normally benefits from outdoor experience and the ability to operate safely in remote environments.'
                ],
                studyUnits: [
                    'Scene safety and first-aid priorities',
                    'Assessment of illness and injury',
                    'Bleeding, shock and wound management',
                    'Burns, fractures, sprains and soft-tissue injuries',
                    'Choking and other common emergencies',
                    'Recognition of life-threatening conditions and emergency activation',
                    'Hands-on first-aid scenarios and practical assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Heartsaver First Aid.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Heartsaver First Aid through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Heartsaver First Aid.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'wilderness-first-aid',
                name: 'Wilderness First Aid',
                duration: '3 Days',
                image: '/courses/wilderness-first-aid.jpg',
                entryRequirements: [
                    'No previous medical qualification is normally required for entry-level first-aid training.',
                    'Learners should be able to understand safety instructions and communicate with an emergency team.',
                    'Learners must be prepared for practical demonstrations involving CPR, recovery position and casualty assessment where applicable.',
                    'Basic physical ability to kneel, position a casualty and perform practical skills is recommended; reasonable adjustments may be considered.',
                    'For BLS/CPR/AED courses, healthcare workers should follow any additional requirements of their employer or certification body.',
                    'Wilderness First Aid normally benefits from outdoor experience and the ability to operate safely in remote environments.'
                ],
                studyUnits: [
                    'Remote incident assessment and scene management',
                    'Patient assessment in austere environments',
                    'Bleeding, wounds and musculoskeletal injuries',
                    'Environmental emergencies such as heat, cold and dehydration',
                    'Evacuation decisions, packaging and patient monitoring',
                    'Improvised first-aid resources and field communication',
                    'Scenario-based remote-care exercises and evacuation planning'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Wilderness First Aid.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Wilderness First Aid through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Wilderness First Aid.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'fire-safety',
        name: 'Fire Safety',
        icon: FaFire,
        description: 'Fire prevention, emergency response, and management certifications',
        courses: [
            {
                slug: 'fire-warden',
                name: 'Fire Warden',
                duration: '2 Days',
                image: '/courses/fire-warden.jpg',
                entryRequirements: [
                    'No formal fire qualification is normally required for basic fire-safety courses.',
                    'Learners should be able to understand alarms, emergency procedures, signs and site instructions.',
                    'Fire Warden/Fire Watch roles require readiness to follow organisational emergency procedures and report hazards promptly.',
                    'Industrial and firefighting courses may require additional PPE, medical fitness or practical-site prerequisites set by the provider.',
                    'Participants in practical fire drills must follow instructor instructions and site-specific control measures.',
                    'Where a course is intended for a statutory or client-required role, the employer should confirm any additional competency or refresher requirements.'
                ],
                studyUnits: [
                    'Fire science, ignition sources and fire growth',
                    'Workplace fire hazards and preventive controls',
                    'Alarm, evacuation and emergency communication procedures',
                    'Fire extinguisher awareness and safe selection principles',
                    'Fire doors, escape routes, assembly points and accessibility',
                    'Fire warden duties, sweeps, accountability and incident reporting',
                    'Emergency drill planning and practical scenario assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Fire Warden.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Fire Warden through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Fire Warden.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'industrial-fire-safety',
                name: 'Industrial Fire Safety',
                duration: '3 Days',
                image: '/courses/industrial-fire-safety.jpg',
                entryRequirements: [
                    'No formal fire qualification is normally required for basic fire-safety courses.',
                    'Learners should be able to understand alarms, emergency procedures, signs and site instructions.',
                    'Fire Warden/Fire Watch roles require readiness to follow organisational emergency procedures and report hazards promptly.',
                    'Industrial and firefighting courses may require additional PPE, medical fitness or practical-site prerequisites set by the provider.',
                    'Participants in practical fire drills must follow instructor instructions and site-specific control measures.',
                    'Where a course is intended for a statutory or client-required role, the employer should confirm any additional competency or refresher requirements.'
                ],
                studyUnits: [
                    'Industrial fire hazards and combustible materials',
                    'Permit-to-work, hot-work and ignition-source controls',
                    'Fire detection, alarms, suppression and emergency systems',
                    'Flammable liquids, gases and hazardous-area controls',
                    'Emergency response roles, evacuation and muster management',
                    'Inspection, housekeeping and fire-prevention programmes',
                    'Industrial fire scenarios, incident reporting and response exercises'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Industrial Fire Safety.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Industrial Fire Safety through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Industrial Fire Safety.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'fire-safety-emergency-response',
                name: 'Fire Safety & Emergency Response',
                duration: '3 Days',
                image: '/courses/fire-safety-emergency-response.jpg',
                entryRequirements: [
                    'No formal fire qualification is normally required for basic fire-safety courses.',
                    'Learners should be able to understand alarms, emergency procedures, signs and site instructions.',
                    'Fire Warden/Fire Watch roles require readiness to follow organisational emergency procedures and report hazards promptly.',
                    'Industrial and firefighting courses may require additional PPE, medical fitness or practical-site prerequisites set by the provider.',
                    'Participants in practical fire drills must follow instructor instructions and site-specific control measures.',
                    'Where a course is intended for a statutory or client-required role, the employer should confirm any additional competency or refresher requirements.'
                ],
                studyUnits: [
                    'Fire risk fundamentals and emergency planning',
                    'Alarm and detection systems',
                    'Evacuation, accountability and emergency communications',
                    'Initial response and extinguisher awareness',
                    'Coordination with emergency services',
                    'Incident command principles and post-incident reporting',
                    'Tabletop and practical emergency-response exercises'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Fire Safety & Emergency Response.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Fire Safety & Emergency Response through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Fire Safety & Emergency Response.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'fire-watch',
                name: 'Fire Watch',
                duration: '1 Day',
                image: '/courses/fire-watch.jpg',
                entryRequirements: [
                    'No formal fire qualification is normally required for basic fire-safety courses.',
                    'Learners should be able to understand alarms, emergency procedures, signs and site instructions.',
                    'Fire Warden/Fire Watch roles require readiness to follow organisational emergency procedures and report hazards promptly.',
                    'Industrial and firefighting courses may require additional PPE, medical fitness or practical-site prerequisites set by the provider.',
                    'Participants in practical fire drills must follow instructor instructions and site-specific control measures.',
                    'Where a course is intended for a statutory or client-required role, the employer should confirm any additional competency or refresher requirements.'
                ],
                studyUnits: [
                    'Fire-watch responsibilities and authority',
                    'Hot-work hazards and permit controls',
                    'Continuous monitoring of sparks, heat and combustibles',
                    'Fire extinguishing equipment awareness and emergency activation',
                    'Work-area preparation, housekeeping and post-work monitoring',
                    'Communication, escalation and stop-work criteria',
                    'Practical fire-watch scenarios and inspection documentation'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Fire Watch.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Fire Watch through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Fire Watch.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'fire-fighter',
                name: 'Fire Fighter',
                duration: '5 Days',
                image: '/courses/fire-fighter.jpg',
                entryRequirements: [
                    'No formal fire qualification is normally required for basic fire-safety courses.',
                    'Learners should be able to understand alarms, emergency procedures, signs and site instructions.',
                    'Fire Warden/Fire Watch roles require readiness to follow organisational emergency procedures and report hazards promptly.',
                    'Industrial and firefighting courses may require additional PPE, medical fitness or practical-site prerequisites set by the provider.',
                    'Participants in practical fire drills must follow instructor instructions and site-specific control measures.',
                    'Where a course is intended for a statutory or client-required role, the employer should confirm any additional competency or refresher requirements.'
                ],
                studyUnits: [
                    'Fire behaviour and firefighter safety',
                    'Personal protective equipment and breathing apparatus awareness',
                    'Fireground search, rescue and emergency response principles',
                    'Hose, nozzle, extinguisher and basic firefighting equipment',
                    'Incident command, communication and team tactics',
                    'Hazardous atmospheres, collapse and exposure awareness',
                    'Practical drills, decontamination and competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Fire Fighter.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Fire Fighter through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Fire Fighter.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'risk-management',
        name: 'Risk Management',
        icon: FaShieldAlt,
        description: 'Occupational risk assessment, HAZOP, and safety management',
        courses: [
            {
                slug: 'occupational-risk-management',
                name: 'Occupational Risk Management',
                duration: '3 Days',
                image: '/courses/occupational-risk-management.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Risk-management principles and terminology',
                    'Hazard identification and risk assessment methods',
                    'Hierarchy of controls and preventive strategies',
                    'Legal, organisational and operational risk considerations',
                    'Risk registers, action tracking and review',
                    'Incident, near-miss and trend analysis',
                    'Practical workplace risk assessment and improvement plan'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Occupational Risk Management.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Occupational Risk Management through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Occupational Risk Management.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'construction-risk-management',
                name: 'Construction Risk Management',
                duration: '3 Days',
                image: '/courses/construction-risk-management.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Construction hazard identification',
                    'Excavation, lifting, work-at-height and temporary works risks',
                    'Plant, traffic and site-interface controls',
                    'Contractor and subcontractor risk management',
                    'Task risk assessments and method statements',
                    'Emergency planning and incident learning',
                    'Construction risk register and practical case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Construction Risk Management.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Construction Risk Management through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Construction Risk Management.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'industrial-risk-management',
                name: 'Industrial Risk Management',
                duration: '3 Days',
                image: '/courses/industrial-risk-management.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Industrial hazard identification',
                    'Machinery, process, energy and chemical risks',
                    'Permit-to-work and isolation controls',
                    'Operational risk assessment and management of change',
                    'Inspection, monitoring and incident learning',
                    'Contractor and maintenance risk controls',
                    'Industrial risk-management case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Industrial Risk Management.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Industrial Risk Management through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Industrial Risk Management.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'hira',
                name: 'HIRA (Hazard Identification & Risk Assessment)',
                duration: '2 Days',
                image: '/courses/hira.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Hazard identification methods',
                    'Risk matrix, likelihood and consequence assessment',
                    'Hierarchy of controls',
                    'Task risk assessment and JSA integration',
                    'Risk-register development and ownership',
                    'Residual-risk evaluation and monitoring',
                    'Practical HIRA workshop using workplace scenarios'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with HIRA (Hazard Identification & Risk Assessment).',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in HIRA (Hazard Identification & Risk Assessment) through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to HIRA (Hazard Identification & Risk Assessment).',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'hazop',
                name: 'HAZOP',
                duration: '3 Days',
                image: '/courses/hazop.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'HAZOP principles and guidewords',
                    'Process design information and node selection',
                    'Deviation identification and cause analysis',
                    'Consequences, safeguards and protection layers',
                    'Recommendation recording and action tracking',
                    'Team roles, facilitation and documentation',
                    'Practical HAZOP worksheet and scenario exercise'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with HAZOP.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in HAZOP through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to HAZOP.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'hazcom',
                name: 'HAZCOM',
                duration: '2 Days',
                image: '/courses/hazcom.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Hazard communication principles',
                    'Chemical labels, pictograms and safety data sheets',
                    'Chemical inventory and workplace information',
                    'Exposure controls and safe handling',
                    'Employee information, training and emergency communication',
                    'Storage, segregation and spill information',
                    'Practical SDS/label interpretation exercises'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with HAZCOM.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in HAZCOM through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to HAZCOM.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'hazmat',
                name: 'HAZMAT',
                duration: '3 Days',
                image: '/courses/hazmat.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Hazardous-material classification and identification',
                    'Packaging, labelling and safe handling principles',
                    'Storage and segregation controls',
                    'Spill response and emergency procedures',
                    'PPE and exposure prevention',
                    'Transport/interface considerations and documentation',
                    'Scenario-based hazardous-material response'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with HAZMAT.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in HAZMAT through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to HAZMAT.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'chmm',
                name: 'CHMM',
                duration: '4 Days',
                image: '/courses/chmm.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Hazardous-material management systems',
                    'Chemical lifecycle, storage and inventory control',
                    'Regulatory and compliance management principles',
                    'Waste, pollution and emergency management',
                    'Risk assessment and control strategies',
                    'Auditing, records and performance indicators',
                    'Applied hazardous-material management case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with CHMM.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in CHMM through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to CHMM.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'hmp',
                name: 'HMP',
                duration: '2 Days',
                image: '/courses/hmp.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Hazard management planning',
                    'Hazard identification and risk evaluation',
                    'Control measures and responsible persons',
                    'Emergency and contingency arrangements',
                    'Monitoring, inspections and review',
                    'Documentation, reporting and corrective action',
                    'Development of a practical hazard-management plan'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with HMP.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in HMP through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to HMP.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'scaffolding',
        name: 'Scaffolding',
        icon: FaHardHat,
        description: 'Scaffolding inspection, supervision, and training certifications',
        courses: [
            {
                slug: 'scaffolding-inspector',
                name: 'Scaffolding Inspector',
                duration: '3 Days',
                image: '/courses/scaffolding-inspector.jpg',
                entryRequirements: [
                    'Basic literacy and numeracy are recommended for reading scaffold drawings, tags, inspection forms and load information.',
                    'Construction or site experience is beneficial for supervisor and inspector pathways.',
                    'Learners should be prepared for practical observation, inspection and site-based exercises where included.',
                    'Inspector-level training normally benefits from prior exposure to scaffold components, erection methods and safe-use controls.',
                    'Learners must follow work-at-height, PPE and site-access requirements during practical sessions.',
                    'The provider should confirm any local statutory, client or manufacturer-specific competency requirements before certification.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Scaffolding Inspector.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Scaffolding Inspector through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Scaffolding Inspector.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'scaffolding-supervisor',
                name: 'Scaffolding Supervisor',
                duration: '3 Days',
                image: '/courses/scaffolding-supervisor.jpg',
                entryRequirements: [
                    'Basic literacy and numeracy are recommended for reading scaffold drawings, tags, inspection forms and load information.',
                    'Construction or site experience is beneficial for supervisor and inspector pathways.',
                    'Learners should be prepared for practical observation, inspection and site-based exercises where included.',
                    'Inspector-level training normally benefits from prior exposure to scaffold components, erection methods and safe-use controls.',
                    'Learners must follow work-at-height, PPE and site-access requirements during practical sessions.',
                    'The provider should confirm any local statutory, client or manufacturer-specific competency requirements before certification.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Scaffolding Supervisor.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Scaffolding Supervisor through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Scaffolding Supervisor.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'train-the-trainer-scaffold',
                name: 'Train the Trainer Scaffold',
                duration: '5 Days',
                image: '/courses/train-the-trainer-scaffold.jpg',
                entryRequirements: [
                    'Basic literacy and numeracy are recommended for reading scaffold drawings, tags, inspection forms and load information.',
                    'Construction or site experience is beneficial for supervisor and inspector pathways.',
                    'Learners should be prepared for practical observation, inspection and site-based exercises where included.',
                    'Inspector-level training normally benefits from prior exposure to scaffold components, erection methods and safe-use controls.',
                    'Learners must follow work-at-height, PPE and site-access requirements during practical sessions.',
                    'The provider should confirm any local statutory, client or manufacturer-specific competency requirements before certification.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Train the Trainer Scaffold.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Train the Trainer Scaffold through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Train the Trainer Scaffold.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'rigger',
        name: 'Rigger',
        icon: FaTools,
        description: 'Lifting operations, rigging, and load handling certifications',
        courses: [
            {
                slug: 'lifting-operations',
                name: 'Lifting Operations',
                duration: '3 Days',
                image: '/courses/lifting-operations.jpg',
                entryRequirements: [
                    'Basic literacy and numeracy are recommended for understanding load charts, lifting plans and inspection records.',
                    'Relevant lifting, rigging, construction, warehouse or industrial experience is beneficial, especially at advanced levels.',
                    'Learners should be physically able to participate in practical rigging activities, subject to reasonable adjustments and site rules.',
                    'Prior awareness of lifting equipment, slings, shackles and hand signals is useful but not always mandatory for introductory levels.',
                    'Advanced courses should normally be taken after foundational rigging knowledge and supervised practical exposure.',
                    'Where third-party certification is required, the training provider should verify the certification body\'s current prerequisites and assessment scheme.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Lifting Operations.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Lifting Operations through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Lifting Operations.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'rigging-lifting-sling-operations',
                name: 'Rigging, Lifting & Sling Operations',
                duration: '3 Days',
                image: '/courses/rigging-lifting-sling-operations.jpg',
                entryRequirements: [
                    'Basic literacy and numeracy are recommended for understanding load charts, lifting plans and inspection records.',
                    'Relevant lifting, rigging, construction, warehouse or industrial experience is beneficial, especially at advanced levels.',
                    'Learners should be physically able to participate in practical rigging activities, subject to reasonable adjustments and site rules.',
                    'Prior awareness of lifting equipment, slings, shackles and hand signals is useful but not always mandatory for introductory levels.',
                    'Advanced courses should normally be taken after foundational rigging knowledge and supervised practical exposure.',
                    'Where third-party certification is required, the training provider should verify the certification body\'s current prerequisites and assessment scheme.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Rigging, Lifting & Sling Operations.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Rigging, Lifting & Sling Operations through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Rigging, Lifting & Sling Operations.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'rigger-lifting-safety',
                name: 'Rigger & Lifting Safety',
                duration: '2 Days',
                image: '/courses/rigger-lifting-safety.jpg',
                entryRequirements: [
                    'Basic literacy and numeracy are recommended for understanding load charts, lifting plans and inspection records.',
                    'Relevant lifting, rigging, construction, warehouse or industrial experience is beneficial, especially at advanced levels.',
                    'Learners should be physically able to participate in practical rigging activities, subject to reasonable adjustments and site rules.',
                    'Prior awareness of lifting equipment, slings, shackles and hand signals is useful but not always mandatory for introductory levels.',
                    'Advanced courses should normally be taken after foundational rigging knowledge and supervised practical exposure.',
                    'Where third-party certification is required, the training provider should verify the certification body\'s current prerequisites and assessment scheme.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Rigger & Lifting Safety.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Rigger & Lifting Safety through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Rigger & Lifting Safety.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'rigger-banksman-lifting-operations',
                name: 'Rigger, Banksman & Lifting Operations',
                duration: '3 Days',
                image: '/courses/rigger-banksman-lifting-operations.jpg',
                entryRequirements: [
                    'Basic literacy and numeracy are recommended for understanding load charts, lifting plans and inspection records.',
                    'Relevant lifting, rigging, construction, warehouse or industrial experience is beneficial, especially at advanced levels.',
                    'Learners should be physically able to participate in practical rigging activities, subject to reasonable adjustments and site rules.',
                    'Prior awareness of lifting equipment, slings, shackles and hand signals is useful but not always mandatory for introductory levels.',
                    'Advanced courses should normally be taken after foundational rigging knowledge and supervised practical exposure.',
                    'Where third-party certification is required, the training provider should verify the certification body\'s current prerequisites and assessment scheme.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Rigger, Banksman & Lifting Operations.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Rigger, Banksman & Lifting Operations through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Rigger, Banksman & Lifting Operations.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'industrial-rigging-lifting-operation',
                name: 'Industrial Rigging & Lifting Operation',
                duration: '3 Days',
                image: '/courses/industrial-rigging-lifting-operation.jpg',
                entryRequirements: [
                    'Basic literacy and numeracy are recommended for understanding load charts, lifting plans and inspection records.',
                    'Relevant lifting, rigging, construction, warehouse or industrial experience is beneficial, especially at advanced levels.',
                    'Learners should be physically able to participate in practical rigging activities, subject to reasonable adjustments and site rules.',
                    'Prior awareness of lifting equipment, slings, shackles and hand signals is useful but not always mandatory for introductory levels.',
                    'Advanced courses should normally be taken after foundational rigging knowledge and supervised practical exposure.',
                    'Where third-party certification is required, the training provider should verify the certification body\'s current prerequisites and assessment scheme.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Industrial Rigging & Lifting Operation.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Industrial Rigging & Lifting Operation through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Industrial Rigging & Lifting Operation.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'advanced-rigging-lifting-operation',
                name: 'Advanced Rigging & Lifting Operation',
                duration: '5 Days',
                image: '/courses/advanced-rigging-lifting-operation.jpg',
                entryRequirements: [
                    'Basic literacy and numeracy are recommended for understanding load charts, lifting plans and inspection records.',
                    'Relevant lifting, rigging, construction, warehouse or industrial experience is beneficial, especially at advanced levels.',
                    'Learners should be physically able to participate in practical rigging activities, subject to reasonable adjustments and site rules.',
                    'Prior awareness of lifting equipment, slings, shackles and hand signals is useful but not always mandatory for introductory levels.',
                    'Advanced courses should normally be taken after foundational rigging knowledge and supervised practical exposure.',
                    'Where third-party certification is required, the training provider should verify the certification body\'s current prerequisites and assessment scheme.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Advanced Rigging & Lifting Operation.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Advanced Rigging & Lifting Operation through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Advanced Rigging & Lifting Operation.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'rigger-slinging-load-handling',
                name: 'Rigger, Slinging & Load Handling',
                duration: '2 Days',
                image: '/courses/rigger-slinging-load-handling.jpg',
                entryRequirements: [
                    'Basic literacy and numeracy are recommended for understanding load charts, lifting plans and inspection records.',
                    'Relevant lifting, rigging, construction, warehouse or industrial experience is beneficial, especially at advanced levels.',
                    'Learners should be physically able to participate in practical rigging activities, subject to reasonable adjustments and site rules.',
                    'Prior awareness of lifting equipment, slings, shackles and hand signals is useful but not always mandatory for introductory levels.',
                    'Advanced courses should normally be taken after foundational rigging knowledge and supervised practical exposure.',
                    'Where third-party certification is required, the training provider should verify the certification body\'s current prerequisites and assessment scheme.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Rigger, Slinging & Load Handling.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Rigger, Slinging & Load Handling through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Rigger, Slinging & Load Handling.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'professional-rigging-lifting-safety',
                name: 'Professional Rigging & Lifting Safety',
                duration: '4 Days',
                image: '/courses/professional-rigging-lifting-safety.jpg',
                entryRequirements: [
                    'Basic literacy and numeracy are recommended for understanding load charts, lifting plans and inspection records.',
                    'Relevant lifting, rigging, construction, warehouse or industrial experience is beneficial, especially at advanced levels.',
                    'Learners should be physically able to participate in practical rigging activities, subject to reasonable adjustments and site rules.',
                    'Prior awareness of lifting equipment, slings, shackles and hand signals is useful but not always mandatory for introductory levels.',
                    'Advanced courses should normally be taken after foundational rigging knowledge and supervised practical exposure.',
                    'Where third-party certification is required, the training provider should verify the certification body\'s current prerequisites and assessment scheme.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Professional Rigging & Lifting Safety.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Professional Rigging & Lifting Safety through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Professional Rigging & Lifting Safety.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'rigger-level-1',
                name: 'Rigger Level 1 Certification',
                duration: '3 Days',
                image: '/courses/rigger-level-1.jpg',
                entryRequirements: [
                    'Basic literacy and numeracy are recommended for understanding load charts, lifting plans and inspection records.',
                    'Relevant lifting, rigging, construction, warehouse or industrial experience is beneficial, especially at advanced levels.',
                    'Learners should be physically able to participate in practical rigging activities, subject to reasonable adjustments and site rules.',
                    'Prior awareness of lifting equipment, slings, shackles and hand signals is useful but not always mandatory for introductory levels.',
                    'Advanced courses should normally be taken after foundational rigging knowledge and supervised practical exposure.',
                    'Where third-party certification is required, the training provider should verify the certification body\'s current prerequisites and assessment scheme.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Rigger Level 1 Certification.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Rigger Level 1 Certification through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Rigger Level 1 Certification.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'rigger-level-2',
                name: 'Rigger Level 2 Certification',
                duration: '3 Days',
                image: '/courses/rigger-level-2.jpg',
                entryRequirements: [
                    'Basic literacy and numeracy are recommended for understanding load charts, lifting plans and inspection records.',
                    'Relevant lifting, rigging, construction, warehouse or industrial experience is beneficial, especially at advanced levels.',
                    'Learners should be physically able to participate in practical rigging activities, subject to reasonable adjustments and site rules.',
                    'Prior awareness of lifting equipment, slings, shackles and hand signals is useful but not always mandatory for introductory levels.',
                    'Advanced courses should normally be taken after foundational rigging knowledge and supervised practical exposure.',
                    'Where third-party certification is required, the training provider should verify the certification body\'s current prerequisites and assessment scheme.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Rigger Level 2 Certification.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Rigger Level 2 Certification through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Rigger Level 2 Certification.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'rigger-level-3',
                name: 'Rigger Level 3',
                duration: '4 Days',
                image: '/courses/rigger-level-3.jpg',
                entryRequirements: [
                    'Basic literacy and numeracy are recommended for understanding load charts, lifting plans and inspection records.',
                    'Relevant lifting, rigging, construction, warehouse or industrial experience is beneficial, especially at advanced levels.',
                    'Learners should be physically able to participate in practical rigging activities, subject to reasonable adjustments and site rules.',
                    'Prior awareness of lifting equipment, slings, shackles and hand signals is useful but not always mandatory for introductory levels.',
                    'Advanced courses should normally be taken after foundational rigging knowledge and supervised practical exposure.',
                    'Where third-party certification is required, the training provider should verify the certification body\'s current prerequisites and assessment scheme.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Rigger Level 3.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Rigger Level 3 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Rigger Level 3.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'osha',
        name: 'OSHA 30/40 Hours',
        icon: FaClipboardCheck,
        description: 'OSHA safety training for construction, oil & gas, and general industry',
        courses: [
            {
                slug: 'osha-construction-safety',
                name: 'Construction Safety',
                duration: '30 Hours',
                image: '/courses/osha-construction-safety.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Construction Safety.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Construction Safety through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Construction Safety.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'osha-general-industrial-safety',
                name: 'General Industrial Safety',
                duration: '30 Hours',
                image: '/courses/osha-general-industrial-safety.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with General Industrial Safety.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in General Industrial Safety through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to General Industrial Safety.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'osha-oil-gas',
                name: 'Oil & Gas',
                duration: '40 Hours',
                image: '/courses/osha-oil-gas.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Oil & Gas.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Oil & Gas through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Oil & Gas.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'osha-workplace-safety',
                name: 'Workplace Safety',
                duration: '30 Hours',
                image: '/courses/osha-workplace-safety.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Workplace Safety.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Workplace Safety through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Workplace Safety.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'iosh',
        name: 'IOSH',
        icon: FaUserTie,
        description: 'IOSH Managing Safely and working safely certifications',
        courses: [
            {
                slug: 'iosh-managing-safely',
                name: 'IOSH Managing Safely',
                duration: '5 Days',
                image: '/courses/iosh-managing-safely.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with IOSH Managing Safely.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in IOSH Managing Safely through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to IOSH Managing Safely.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'qaqc',
        name: 'QA/QC',
        icon: FaFlask,
        description: 'Quality assurance and quality control in various industries',
        courses: [
            {
                slug: 'qaqc-civil',
                name: 'Civil',
                duration: '5 Days',
                image: '/courses/qaqc-civil.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Quality planning for civil works',
                    'Concrete, aggregates, cement and material controls',
                    'Earthworks, foundations and structural checks',
                    'Inspection and test plans (ITPs)',
                    'Non-conformance, corrective action and records',
                    'Drawings, specifications, method statements and approvals',
                    'Site inspection, documentation and quality reporting'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Civil.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Civil through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Civil.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'qaqc-electrical',
                name: 'Electrical',
                duration: '5 Days',
                image: '/courses/qaqc-electrical.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Electrical material and installation quality controls',
                    'Cable, containment and termination inspection',
                    'Testing, commissioning and test-record review',
                    'Inspection and test plans for electrical works',
                    'Drawing, specification and material-submittal verification',
                    'Non-conformance and corrective-action processes',
                    'Electrical QA/QC reporting and handover documentation'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Electrical.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Electrical through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Electrical.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'qaqc-mechanical',
                name: 'Mechanical',
                duration: '5 Days',
                image: '/courses/qaqc-mechanical.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Mechanical equipment and installation quality',
                    'Material certificates and traceability',
                    'Alignment, fit-up, torque and dimensional checks',
                    'Pressure/testing and commissioning documentation',
                    'Inspection and test plans and hold points',
                    'Non-conformance and corrective action',
                    'Mechanical quality dossiers and handover records'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Mechanical.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Mechanical through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Mechanical.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'qaqc-oil-gas',
                name: 'Oil & Gas',
                duration: '5 Days',
                image: '/courses/qaqc-oil-gas.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Oil and gas project quality plans',
                    'Materials, traceability and certification',
                    'Welding, piping, equipment and construction inspection',
                    'ITPs, hold/witness points and inspection release',
                    'NCR, punch lists and corrective action',
                    'Vendor, contractor and documentation control',
                    'Quality dossier, turnover and handover requirements'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Oil & Gas.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Oil & Gas through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Oil & Gas.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'qaqc-telecom',
                name: 'Telecom',
                duration: '5 Days',
                image: '/courses/qaqc-telecom.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Telecom installation quality requirements',
                    'Cable, fibre, antenna and equipment inspection',
                    'Testing, measurement and commissioning records',
                    'Site acceptance and quality checklists',
                    'Drawing and configuration verification',
                    'Defect, NCR and corrective-action management',
                    'Telecom handover and as-built documentation'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Telecom.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Telecom through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Telecom.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'qaqc-solar-inspector',
                name: 'Solar Inspector',
                duration: '4 Days',
                image: '/courses/qaqc-solar-inspector.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Solar project quality plans and inspection stages',
                    'PV module, structure and mounting inspection',
                    'DC/AC cabling, connectors and earthing checks',
                    'Inverter, protection and commissioning inspection',
                    'Testing records and performance verification',
                    'Defect identification, NCR and punch-list management',
                    'Solar inspection reporting and handover'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Solar Inspector.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Solar Inspector through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Solar Inspector.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'qaqc-welding-inspector',
                name: 'Welding Inspector',
                duration: '5 Days',
                image: '/courses/qaqc-welding-inspector.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Welding procedures and qualification records',
                    'Welder qualification and material traceability',
                    'Joint preparation, fit-up and preheat controls',
                    'Visual inspection and weld acceptance principles',
                    'NDT coordination and weld documentation',
                    'Repair, NCR and weld-map control',
                    'Inspection reports and final weld dossier'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Welding Inspector.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Welding Inspector through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Welding Inspector.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'qaqc-piping-fabrication',
                name: 'Piping & Fabrication',
                duration: '5 Days',
                image: '/courses/qaqc-piping-fabrication.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Piping material control and traceability',
                    'Fabrication, fit-up and dimensional inspection',
                    'Welding, heat treatment and inspection records',
                    'Pressure testing and line-check procedures',
                    'Coating, cleanliness and preservation controls',
                    'NCR, punch list and corrective action',
                    'Piping turnover dossier and as-built records'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Piping & Fabrication.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Piping & Fabrication through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Piping & Fabrication.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'qaqc-lifting',
                name: 'Lifting QA/QC',
                duration: '3 Days',
                image: '/courses/qaqc-lifting.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Lifting-equipment quality documentation',
                    'Inspection and certification of lifting accessories',
                    'Lifting-plan and engineering-document checks',
                    'Load-test and examination records',
                    'Traceability, tagging and register control',
                    'Non-conformance and corrective actions',
                    'Lifting QA/QC reporting and audit preparation'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Lifting QA/QC.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Lifting QA/QC through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Lifting QA/QC.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'qaqc-chemical',
                name: 'Chemical',
                duration: '5 Days',
                image: '/courses/qaqc-chemical.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Chemical-process equipment and material quality',
                    'Sampling, testing and laboratory interfaces',
                    'Piping, tanks, vessels and instrumentation quality',
                    'Inspection/test plans and documentation',
                    'Process safety interfaces and change control',
                    'NCR, corrective action and traceability',
                    'Quality dossier and commissioning support'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Chemical.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Chemical through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Chemical.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'qaqc-painting-coating',
                name: 'Painting & Coating',
                duration: '4 Days',
                image: '/courses/qaqc-painting-coating.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Surface preparation and cleanliness',
                    'Coating systems, specifications and material control',
                    'Environmental condition monitoring',
                    'Application, thickness and holiday testing',
                    'Defect identification, repair and re-inspection',
                    'Inspection records, reports and acceptance documentation',
                    'Coating quality dossier and handover'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Painting & Coating.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Painting & Coating through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Painting & Coating.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'ndt',
        name: 'NDT',
        icon: FaMicroscope,
        description: 'Non-Destructive Testing methods and certifications',
        courses: [
            {
                slug: 'ndt-rt',
                name: 'RT (Radiographic Testing)',
                duration: '5 Days',
                image: '/courses/ndt-rt.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Radiographic testing principles and applications',
                    'Radiation safety and controlled-area requirements',
                    'Equipment, source and exposure fundamentals',
                    'Image quality, sensitivity and basic technique selection',
                    'Film/digital image processing and viewing',
                    'Indication interpretation and reporting principles',
                    'Practical RT workflow and assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with RT.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in RT through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to RT.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'ndt-ut',
                name: 'UT (Ultrasonic Testing)',
                duration: '5 Days',
                image: '/courses/ndt-ut.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Ultrasonic testing principles',
                    'Equipment, probes and calibration',
                    'Couplant, scanning and test sensitivity',
                    'Thickness measurement and flaw detection',
                    'Indication interpretation and evaluation',
                    'Test procedures, records and reporting',
                    'Practical UT demonstrations and assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with UT.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in UT through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to UT.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'ndt-mpt',
                name: 'MPT (Magnetic Particle Testing)',
                duration: '3 Days',
                image: '/courses/ndt-mpt.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Magnetic particle testing principles',
                    'Magnetic materials and magnetisation methods',
                    'Surface preparation and test equipment',
                    'Particle application and indication formation',
                    'Interpretation of relevant and non-relevant indications',
                    'Demagnetisation, cleaning and reporting',
                    'Practical MPT inspection and assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with MPT.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in MPT through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to MPT.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'ndt-vt',
                name: 'VT (Visual Testing)',
                duration: '2 Days',
                image: '/courses/ndt-vt.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Visual testing principles and inspection planning',
                    'Lighting, access and visual aids',
                    'Surface condition and dimensional checks',
                    'Weld and component visual examination',
                    'Acceptance criteria and defect identification',
                    'Inspection records, photographs and reporting',
                    'Practical visual inspection exercises'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with VT.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in VT through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to VT.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'ndt-et',
                name: 'ET (Eddy Current Testing)',
                duration: '4 Days',
                image: '/courses/ndt-et.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Eddy-current testing principles',
                    'Electrical conductivity and electromagnetic response',
                    'Probe types, frequencies and calibration',
                    'Surface and near-surface defect detection',
                    'Signal interpretation and interference control',
                    'Reporting and equipment checks',
                    'Practical ET demonstrations and assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ET.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ET through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ET.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'ndt-pt',
                name: 'PT (Penetrant Testing)',
                duration: '3 Days',
                image: '/courses/ndt-pt.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Penetrant testing principles',
                    'Surface preparation and cleaning',
                    'Penetrant application, dwell and removal',
                    'Developer application and indication development',
                    'Evaluation of surface-breaking indications',
                    'Post-cleaning, records and reporting',
                    'Practical PT inspection and assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with PT.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in PT through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to PT.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'diploma-hse',
        name: 'Diploma in HSE',
        icon: FaGraduationCap,
        description: 'Diploma in Occupational Health & Safety Management',
        courses: [
            {
                slug: 'diploma-hse-level-6',
                name: 'Level 6 Diploma in Occupational Health & Safety Management',
                duration: '12 Months',
                image: '/courses/diploma-hse-level-6.jpg',
                entryRequirements: [
                    'A relevant Level 4/5 qualification, diploma, technical qualification or equivalent professional experience is normally recommended.',
                    'Learners should have a working understanding of the relevant industry or be able to demonstrate suitable prior learning.',
                    'Good written and spoken English or the programme language is recommended for technical reports and assessments.',
                    'Learners should be comfortable with independent research, evidence gathering and structured assignments.',
                    'Access to a relevant workplace, project or realistic case-study environment is beneficial for applied learning.',
                    'Final eligibility should be checked against the specific awarding body\'s current Level 6 requirements.'
                ],
                studyUnits: [
                    'HSE leadership, policy and organisational governance',
                    'Hazard identification, risk assessment and hierarchy of controls',
                    'Occupational health, environmental and emergency controls',
                    'Incident investigation, reporting and corrective action',
                    'Legal compliance, inspections, audits and performance indicators',
                    'Contractor, workforce and behavioural safety management',
                    'Applied HSE management project and case-study assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 6 Diploma in Occupational Health & Safety Management.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 6 Diploma in Occupational Health & Safety Management through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 6 Diploma in Occupational Health & Safety Management.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'diploma-hse-level-7',
                name: 'Level 7 Diploma in Occupational Health & Safety Management',
                duration: '12 Months',
                image: '/courses/diploma-hse-level-7.jpg',
                entryRequirements: [
                    'A relevant Level 6 qualification, bachelor\'s degree, professional qualification or substantial industry experience is normally recommended.',
                    'Learners should understand the fundamentals of the subject area before starting advanced management or technical units.',
                    'Strong written communication is expected for analytical assignments, reports and project work.',
                    'Learners should be capable of independent research, critical evaluation and evidence-based decision making.',
                    'Relevant managerial, supervisory or professional experience is advantageous for applied assessments.',
                    'The exact entry route should be confirmed with the awarding body because Level 7 requirements vary between qualifications.'
                ],
                studyUnits: [
                    'HSE leadership, policy and organisational governance',
                    'Hazard identification, risk assessment and hierarchy of controls',
                    'Occupational health, environmental and emergency controls',
                    'Incident investigation, reporting and corrective action',
                    'Legal compliance, inspections, audits and performance indicators',
                    'Contractor, workforce and behavioural safety management',
                    'Applied HSE management project and case-study assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 7 Diploma in Occupational Health & Safety Management.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 7 Diploma in Occupational Health & Safety Management through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 7 Diploma in Occupational Health & Safety Management.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'diploma-hse-level-8',
                name: 'Level 8 Diploma in HSE',
                duration: '18 Months',
                image: '/courses/diploma-hse-level-8.jpg',
                entryRequirements: [
                    'Advanced prior learning in occupational health, safety, environment or a closely related discipline is normally expected.',
                    'A relevant higher-level qualification and substantial professional experience are strongly recommended.',
                    'Learners should be able to analyse complex organisational and regulatory issues independently.',
                    'Advanced written communication and research skills are required for strategic assignments.',
                    'Access to organisational data, policies or realistic case studies is useful for applied projects.',
                    'The awarding body\'s formal entry, recognition-of-prior-learning and assessment requirements must be confirmed before enrolment.'
                ],
                studyUnits: [
                    'HSE leadership, policy and organisational governance',
                    'Hazard identification, risk assessment and hierarchy of controls',
                    'Occupational health, environmental and emergency controls',
                    'Incident investigation, reporting and corrective action',
                    'Legal compliance, inspections, audits and performance indicators',
                    'Contractor, workforce and behavioural safety management',
                    'Applied HSE management project and case-study assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 8 Diploma in HSE.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 8 Diploma in HSE through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 8 Diploma in HSE.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'diploma-environment',
        name: 'Diploma in Environment',
        icon: FaLeaf,
        description: 'Diploma in Environmental Sustainability Management',
        courses: [
            {
                slug: 'diploma-environment-level-7',
                name: 'Level 7 Diploma Environmental Sustainability Management',
                duration: '12 Months',
                image: '/courses/diploma-environment-level-7.jpg',
                entryRequirements: [
                    'A relevant Level 6 qualification, bachelor\'s degree, professional qualification or substantial industry experience is normally recommended.',
                    'Learners should understand the fundamentals of the subject area before starting advanced management or technical units.',
                    'Strong written communication is expected for analytical assignments, reports and project work.',
                    'Learners should be capable of independent research, critical evaluation and evidence-based decision making.',
                    'Relevant managerial, supervisory or professional experience is advantageous for applied assessments.',
                    'The exact entry route should be confirmed with the awarding body because Level 7 requirements vary between qualifications.'
                ],
                studyUnits: [
                    'Environmental sustainability principles and organisational context',
                    'Environmental aspects, impacts and risk evaluation',
                    'Resource efficiency, waste and pollution prevention',
                    'Climate change, carbon and sustainability performance',
                    'Environmental management systems and compliance',
                    'Monitoring, reporting, audit and stakeholder engagement',
                    'Sustainability improvement project and implementation plan'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 7 Diploma Environmental Sustainability Management.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 7 Diploma Environmental Sustainability Management through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 7 Diploma Environmental Sustainability Management.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'diploma-civil',
        name: 'Diploma in Civil',
        icon: FaBuilding,
        description: 'Civil engineering, construction management, and site supervision',
        courses: [
            {
                slug: 'diploma-civil-level-6',
                name: 'Level 6 Diploma in Civil Engineering',
                duration: '12 Months',
                image: '/courses/diploma-civil-level-6.jpg',
                entryRequirements: [
                    'A relevant Level 4/5 qualification, diploma, technical qualification or equivalent professional experience is normally recommended.',
                    'Learners should have a working understanding of the relevant industry or be able to demonstrate suitable prior learning.',
                    'Good written and spoken English or the programme language is recommended for technical reports and assessments.',
                    'Learners should be comfortable with independent research, evidence gathering and structured assignments.',
                    'Access to a relevant workplace, project or realistic case-study environment is beneficial for applied learning.',
                    'Final eligibility should be checked against the specific awarding body\'s current Level 6 requirements.'
                ],
                studyUnits: [
                    'Civil engineering principles and construction methods',
                    'Engineering drawings, specifications and quantity information',
                    'Materials, concrete, earthworks and structural works',
                    'Site planning, temporary works and construction safety interfaces',
                    'Quality assurance, inspection and testing',
                    'Project planning, cost, resources and progress control',
                    'Applied civil/construction project case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 6 Diploma in Civil Engineering.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 6 Diploma in Civil Engineering through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 6 Diploma in Civil Engineering.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'diploma-civil-level-7',
                name: 'Level 7 Diploma in Civil Engineering',
                duration: '12 Months',
                image: '/courses/diploma-civil-level-7.jpg',
                entryRequirements: [
                    'A relevant Level 6 qualification, bachelor\'s degree, professional qualification or substantial industry experience is normally recommended.',
                    'Learners should understand the fundamentals of the subject area before starting advanced management or technical units.',
                    'Strong written communication is expected for analytical assignments, reports and project work.',
                    'Learners should be capable of independent research, critical evaluation and evidence-based decision making.',
                    'Relevant managerial, supervisory or professional experience is advantageous for applied assessments.',
                    'The exact entry route should be confirmed with the awarding body because Level 7 requirements vary between qualifications.'
                ],
                studyUnits: [
                    'Civil engineering principles and construction methods',
                    'Engineering drawings, specifications and quantity information',
                    'Materials, concrete, earthworks and structural works',
                    'Site planning, temporary works and construction safety interfaces',
                    'Quality assurance, inspection and testing',
                    'Project planning, cost, resources and progress control',
                    'Applied civil/construction project case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 7 Diploma in Civil Engineering.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 7 Diploma in Civil Engineering through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 7 Diploma in Civil Engineering.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'diploma-civil-level-3',
                name: 'Level 3 Diploma in Civil',
                duration: '6 Months',
                image: '/courses/diploma-civil-level-3.jpg',
                entryRequirements: [
                    'Learners should normally have basic secondary-school education or equivalent practical experience.',
                    'Basic ability to read, understand and record technical or workplace information is recommended.',
                    'Learners should be able to participate in classroom, workshop or site-based activities as required.',
                    'Basic computer literacy is useful where assignments, reports or digital records are used.',
                    'Relevant work experience is helpful but is not normally essential for an introductory Level 3 programme.',
                    'Where the programme is regulated by an awarding body, the provider should verify the awarding body\'s formal entry criteria before enrolment.'
                ],
                studyUnits: [
                    'Civil engineering principles and construction methods',
                    'Engineering drawings, specifications and quantity information',
                    'Materials, concrete, earthworks and structural works',
                    'Site planning, temporary works and construction safety interfaces',
                    'Quality assurance, inspection and testing',
                    'Project planning, cost, resources and progress control',
                    'Applied civil/construction project case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 3 Diploma in Civil.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 3 Diploma in Civil through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 3 Diploma in Civil.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'diploma-construction-site-management-level-6',
                name: 'Level 6 Diploma in Construction Site Management',
                duration: '12 Months',
                image: '/courses/diploma-construction-site-management-level-6.jpg',
                entryRequirements: [
                    'A relevant Level 4/5 qualification, diploma, technical qualification or equivalent professional experience is normally recommended.',
                    'Learners should have a working understanding of the relevant industry or be able to demonstrate suitable prior learning.',
                    'Good written and spoken English or the programme language is recommended for technical reports and assessments.',
                    'Learners should be comfortable with independent research, evidence gathering and structured assignments.',
                    'Access to a relevant workplace, project or realistic case-study environment is beneficial for applied learning.',
                    'Final eligibility should be checked against the specific awarding body\'s current Level 6 requirements.'
                ],
                studyUnits: [
                    'Civil engineering principles and construction methods',
                    'Engineering drawings, specifications and quantity information',
                    'Materials, concrete, earthworks and structural works',
                    'Site planning, temporary works and construction safety interfaces',
                    'Quality assurance, inspection and testing',
                    'Project planning, cost, resources and progress control',
                    'Applied civil/construction project case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 6 Diploma in Construction Site Management.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 6 Diploma in Construction Site Management through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 6 Diploma in Construction Site Management.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'construction-project-management-level-7',
                name: 'Construction Project Management Level 7',
                duration: '12 Months',
                image: '/courses/construction-project-management-level-7.jpg',
                entryRequirements: [
                    'A relevant Level 6 qualification, bachelor\'s degree, professional qualification or substantial industry experience is normally recommended.',
                    'Learners should understand the fundamentals of the subject area before starting advanced management or technical units.',
                    'Strong written communication is expected for analytical assignments, reports and project work.',
                    'Learners should be capable of independent research, critical evaluation and evidence-based decision making.',
                    'Relevant managerial, supervisory or professional experience is advantageous for applied assessments.',
                    'The exact entry route should be confirmed with the awarding body because Level 7 requirements vary between qualifications.'
                ],
                studyUnits: [
                    'Civil engineering principles and construction methods',
                    'Engineering drawings, specifications and quantity information',
                    'Materials, concrete, earthworks and structural works',
                    'Site planning, temporary works and construction safety interfaces',
                    'Quality assurance, inspection and testing',
                    'Project planning, cost, resources and progress control',
                    'Applied civil/construction project case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Construction Project Management Level 7.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Construction Project Management Level 7 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Construction Project Management Level 7.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'construction-senior-management',
                name: 'Construction Senior Management',
                duration: '12 Months',
                image: '/courses/construction-senior-management.jpg',
                entryRequirements: [
                    'No specific prior qualification is normally required unless a provider or awarding body states otherwise.',
                    'Learners should have basic literacy and numeracy appropriate to the technical content of the course.',
                    'Relevant workplace experience is helpful and may be required for advanced or competency-based courses.',
                    'Learners should be physically and practically able to participate in demonstrations where the course involves equipment or site activities.',
                    'Basic English or the language used for instruction is recommended for manuals, procedures, assessments and safety instructions.',
                    'Where certification is regulated or linked to an external body, the provider should verify the current official prerequisites before enrolment.'
                ],
                studyUnits: [
                    'Civil engineering principles and construction methods',
                    'Engineering drawings, specifications and quantity information',
                    'Materials, concrete, earthworks and structural works',
                    'Site planning, temporary works and construction safety interfaces',
                    'Quality assurance, inspection and testing',
                    'Project planning, cost, resources and progress control',
                    'Applied civil/construction project case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Construction Senior Management.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Construction Senior Management through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Construction Senior Management.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'electrical',
        name: 'Electrical',
        icon: FaBolt,
        description: 'Electrical engineering diplomas and certifications',
        courses: [
            {
                slug: 'electrical-level-6',
                name: 'Level 6 Diploma in Electrical',
                duration: '12 Months',
                image: '/courses/electrical-level-6.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Electrical engineering fundamentals',
                    'Electrical drawings, circuits and equipment',
                    'Installation, testing and commissioning principles',
                    'Protection, earthing and electrical safety',
                    'Power systems, distribution and relevant controls',
                    'Maintenance, fault diagnosis and documentation',
                    'Applied electrical engineering project'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 6 Diploma in Electrical.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 6 Diploma in Electrical through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 6 Diploma in Electrical.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'electrical-level-7',
                name: 'Level 7 Diploma in Electrical',
                duration: '12 Months',
                image: '/courses/electrical-level-7.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Electrical engineering fundamentals',
                    'Electrical drawings, circuits and equipment',
                    'Installation, testing and commissioning principles',
                    'Protection, earthing and electrical safety',
                    'Power systems, distribution and relevant controls',
                    'Maintenance, fault diagnosis and documentation',
                    'Applied electrical engineering project'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 7 Diploma in Electrical.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 7 Diploma in Electrical through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 7 Diploma in Electrical.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'mechanical',
        name: 'Mechanical',
        icon: FaCogs,
        description: 'Mechanical engineering diplomas and certifications',
        courses: [
            {
                slug: 'mechanical-level-6',
                name: 'Level 6 Diploma in Mechanical',
                duration: '12 Months',
                image: '/courses/mechanical-level-6.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Mechanical engineering fundamentals',
                    'Engineering materials and manufacturing processes',
                    'Mechanical systems, equipment and maintenance',
                    'Engineering drawings and dimensional control',
                    'Thermal/fluid or machinery principles relevant to the programme',
                    'Testing, troubleshooting and safe work practices',
                    'Applied mechanical engineering project'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 6 Diploma in Mechanical.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 6 Diploma in Mechanical through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 6 Diploma in Mechanical.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'wpr',
        name: 'WPR',
        icon: FaFileAlt,
        description: 'Work Permit Receiver and safety permit certifications',
        courses: [
            {
                slug: 'wpr-certification',
                name: 'Work Permit Receiver Certificate',
                duration: '2 Days',
                image: '/courses/wpr-certification.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Course fundamentals, terminology and scope',
                    'Relevant technical or operational procedures',
                    'Risk, quality and compliance requirements',
                    'Tools, documents, records and workplace controls',
                    'Practical scenarios, case studies or demonstrations',
                    'Assessment, reporting and corrective/improvement activities',
                    'Applied project or competency assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Work Permit Receiver Certificate.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Work Permit Receiver Certificate through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Work Permit Receiver Certificate.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'iso',
        name: 'ISO',
        icon: FaCertificate,
        description: 'ISO standards, auditing, and implementation certifications',
        courses: [
            {
                slug: 'iso-lead-auditor',
                name: 'Lead Auditor',
                duration: '5 Days',
                image: '/courses/iso-lead-auditor.jpg',
                entryRequirements: [
                    'Learners should understand basic management-system concepts and organisational processes.',
                    'Prior knowledge of the relevant ISO standard is beneficial but can be covered during foundation-oriented delivery.',
                    'Audit-track learners should have good analytical, interview and report-writing skills.',
                    'Implementation-track learners should understand process ownership, documentation and organisational change.',
                    'Professional experience in quality, HSE, IT, information security or another relevant management function is advantageous.',
                    'The certification body\'s current examination, experience and audit-log requirements should be checked separately where applicable.'
                ],
                studyUnits: [
                    'Audit principles and ISO management-system concepts',
                    'Audit programme planning and scope',
                    'Evidence collection through interviews, observation and document review',
                    'Audit findings, nonconformity classification and evidence',
                    'Opening/closing meetings and audit-team management',
                    'Audit reporting, corrective-action follow-up and impartiality',
                    'Full audit simulation and audit-report exercise'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Lead Auditor.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Lead Auditor through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Lead Auditor.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-lead-implementation',
                name: 'Lead Implementation',
                duration: '5 Days',
                image: '/courses/iso-lead-implementation.jpg',
                entryRequirements: [
                    'Learners should understand basic management-system concepts and organisational processes.',
                    'Prior knowledge of the relevant ISO standard is beneficial but can be covered during foundation-oriented delivery.',
                    'Audit-track learners should have good analytical, interview and report-writing skills.',
                    'Implementation-track learners should understand process ownership, documentation and organisational change.',
                    'Professional experience in quality, HSE, IT, information security or another relevant management function is advantageous.',
                    'The certification body\'s current examination, experience and audit-log requirements should be checked separately where applicable.'
                ],
                studyUnits: [
                    'Management-system context and scope',
                    'Leadership, policy and process ownership',
                    'Risk/opportunity assessment and control planning',
                    'Documented information and implementation controls',
                    'Performance monitoring, internal audit and management review',
                    'Corrective action and continual improvement',
                    'Implementation project and readiness assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Lead Implementation.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Lead Implementation through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Lead Implementation.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-27001',
                name: 'ISO 27001',
                duration: '5 Days',
                image: '/courses/iso-27001.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'ISMS context and scope',
                    'Leadership, policy and organisational roles',
                    'Information-security risk assessment and treatment',
                    'Statement of Applicability and control implementation',
                    'Documented information, monitoring and internal audit',
                    'Corrective action and continual improvement',
                    'Implementation/audit case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 27001.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 27001 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 27001.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-27018',
                name: 'ISO 27018',
                duration: '3 Days',
                image: '/courses/iso-27018.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Cloud privacy principles',
                    'Personally identifiable information in public-cloud environments',
                    'Controller/processor responsibilities',
                    'Privacy controls, consent and disclosure',
                    'Access, deletion, retention and incident controls',
                    'Supplier and cloud-service governance',
                    'Practical cloud-privacy control assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 27018.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 27018 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 27018.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-27019',
                name: 'ISO 27019',
                duration: '3 Days',
                image: '/courses/iso-27019.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Information-security risks in energy utility environments',
                    'Operational technology and industrial-control interfaces',
                    'Asset, access and communication controls',
                    'Physical and environmental protection',
                    'Incident management and continuity',
                    'Supplier and system-change controls',
                    'Energy-sector security case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 27019.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 27019 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 27019.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-27032',
                name: 'ISO 27032',
                duration: '3 Days',
                image: '/courses/iso-27032.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Cybersecurity concepts and ecosystem risks',
                    'Internet security threats and attack surfaces',
                    'Stakeholder coordination and information sharing',
                    'Technical and organisational security controls',
                    'Incident response and cyber-resilience',
                    'Privacy and responsible information handling',
                    'Cybersecurity scenario assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 27032.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 27032 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 27032.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-27033',
                name: 'ISO 27033',
                duration: '3 Days',
                image: '/courses/iso-27033.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Network security architecture',
                    'Network segmentation and trust boundaries',
                    'Secure network design principles',
                    'Network access and communication controls',
                    'Monitoring, logging and protection mechanisms',
                    'Security assessment and improvement',
                    'Network-security design case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 27033.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 27033 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 27033.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-27034',
                name: 'ISO 27034',
                duration: '3 Days',
                image: '/courses/iso-27034.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Application-security governance',
                    'Application development lifecycle security',
                    'Security requirements and control objectives',
                    'Secure design, coding and testing interfaces',
                    'Application vulnerability and change management',
                    'Operational application-security monitoring',
                    'Secure application lifecycle case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 27034.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 27034 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 27034.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-27035',
                name: 'ISO 27035',
                duration: '3 Days',
                image: '/courses/iso-27035.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Incident management policy and roles',
                    'Incident detection and reporting',
                    'Assessment, prioritisation and response',
                    'Containment, eradication and recovery',
                    'Evidence, communication and escalation',
                    'Lessons learned and corrective actions',
                    'Incident-response exercise and report'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 27035.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 27035 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 27035.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-27036',
                name: 'ISO 27036',
                duration: '3 Days',
                image: '/courses/iso-27036.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Supplier relationship security',
                    'Supplier due diligence and security requirements',
                    'Contractual controls and responsibilities',
                    'Supply-chain risk assessment',
                    'Monitoring, review and change management',
                    'Offboarding and information-return controls',
                    'Third-party security assessment case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 27036.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 27036 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 27036.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-27037',
                name: 'ISO 27037',
                duration: '3 Days',
                image: '/courses/iso-27037.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Digital evidence identification and collection',
                    'Evidence handling and preservation principles',
                    'Integrity, authenticity and chain of custody',
                    'Collection planning and documentation',
                    'Storage and transfer of evidence',
                    'Reporting and evidential quality',
                    'Digital-evidence handling scenario'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 27037.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 27037 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 27037.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-27040',
                name: 'ISO 27040',
                duration: '3 Days',
                image: '/courses/iso-27040.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Storage-security risks and architectures',
                    'Storage access control and segregation',
                    'Encryption and key-management interfaces',
                    'Backup, replication and media protection',
                    'Monitoring, retention and disposal',
                    'Availability and resilience considerations',
                    'Storage-security assessment case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 27040.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 27040 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 27040.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-27041',
                name: 'ISO 27041',
                duration: '3 Days',
                image: '/courses/iso-27041.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Investigation process assurance principles',
                    'Planning and validation of investigative methods',
                    'Evidence integrity and quality controls',
                    'Tool and procedure validation',
                    'Documentation and repeatability',
                    'Review and assurance of investigation activities',
                    'Investigation-quality case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 27041.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 27041 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 27041.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-27043',
                name: 'ISO 27043',
                duration: '3 Days',
                image: '/courses/iso-27043.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Incident investigation principles',
                    'Investigation preparation and coordination',
                    'Evidence identification and analysis',
                    'Timeline and event reconstruction',
                    'Documentation, reporting and review',
                    'Legal/organisational interfaces and confidentiality',
                    'Investigation scenario and final report'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 27043.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 27043 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 27043.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-27071',
                name: 'ISO 27071',
                duration: '3 Days',
                image: '/courses/iso-27071.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Relevant ISO standard purpose, context and terminology',
                    'Organisational scope and stakeholder requirements',
                    'Risk, control and documented-information principles',
                    'Operational implementation and evidence',
                    'Performance evaluation and internal review',
                    'Corrective action and continual improvement',
                    'Practical standard-to-workplace mapping exercise'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 27071.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 27071 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 27071.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-10001',
                name: 'ISO 10001',
                duration: '3 Days',
                image: '/courses/iso-10001.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Customer-satisfaction codes of conduct',
                    'Code development and stakeholder needs',
                    'Customer communication and commitments',
                    'Monitoring code performance',
                    'Complaint prevention and corrective action',
                    'Review and continual improvement',
                    'Code-of-conduct implementation case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 10001.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 10001 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 10001.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-10004',
                name: 'ISO 10004',
                duration: '3 Days',
                image: '/courses/iso-10004.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Customer satisfaction monitoring principles',
                    'Customer feedback and measurement methods',
                    'Data collection and analysis',
                    'Satisfaction indicators and reporting',
                    'Corrective action based on customer feedback',
                    'Management review and improvement',
                    'Customer-satisfaction measurement case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 10004.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 10004 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 10004.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-10005',
                name: 'ISO 10005',
                duration: '3 Days',
                image: '/courses/iso-10005.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Quality plans and planning principles',
                    'Inputs, objectives and responsibilities',
                    'Process and resource planning',
                    'Inspection, testing and acceptance controls',
                    'Documented information and change control',
                    'Monitoring and review of quality plans',
                    'Quality-plan development workshop'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 10005.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 10005 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 10005.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-10006',
                name: 'ISO 10006',
                duration: '3 Days',
                image: '/courses/iso-10006.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Quality management in projects',
                    'Project quality objectives and planning',
                    'Stakeholder, resource and process controls',
                    'Risk, communication and procurement quality',
                    'Monitoring, review and corrective action',
                    'Project lessons learned and continual improvement',
                    'Project-quality case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 10006.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 10006 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 10006.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-10007',
                name: 'ISO 10007',
                duration: '3 Days',
                image: '/courses/iso-10007.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Configuration-management principles',
                    'Configuration identification and baselines',
                    'Change control and status accounting',
                    'Configuration verification and audit',
                    'Records and traceability',
                    'Roles, responsibilities and governance',
                    'Configuration-management case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 10007.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 10007 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 10007.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-10012',
                name: 'ISO 10012',
                duration: '3 Days',
                image: '/courses/iso-10012.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Measurement-management principles',
                    'Metrological confirmation and measurement processes',
                    'Equipment identification and calibration controls',
                    'Measurement uncertainty and traceability concepts',
                    'Records, status and handling of equipment',
                    'Monitoring and improvement of measurement systems',
                    'Measurement-management case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 10012.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 10012 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 10012.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-13485',
                name: 'ISO 13485',
                duration: '5 Days',
                image: '/courses/iso-13485.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Medical-device quality-management principles',
                    'Regulatory and customer requirements',
                    'Risk-based processes and product controls',
                    'Design/development and supplier controls',
                    'Production, traceability and validation',
                    'CAPA, complaints and internal audit',
                    'Medical-device QMS implementation case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 13485.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 13485 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 13485.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'iso-1720',
                name: 'ISO 1720',
                duration: '3 Days',
                image: '/courses/iso-1720.jpg',
                entryRequirements: [
                    'Basic understanding of management systems, organisational processes or the relevant technical discipline is recommended.',
                    'Learners should be able to read standards, policies, procedures and documented information.',
                    'Basic computer skills are useful for documentation, risk registers and evidence management.',
                    'Relevant work experience is beneficial for applying standard requirements to real organisations.',
                    'Learners should be prepared for scenario-based exercises, internal controls and evidence-review activities.',
                    'Any formal ISO personnel certification requirements should be verified with the selected certification body.'
                ],
                studyUnits: [
                    'Relevant ISO standard purpose, context and terminology',
                    'Organisational scope and stakeholder requirements',
                    'Risk, control and documented-information principles',
                    'Operational implementation and evidence',
                    'Performance evaluation and internal review',
                    'Corrective action and continual improvement',
                    'Practical standard-to-workplace mapping exercise'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with ISO 1720.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in ISO 1720 through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to ISO 1720.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'business-management',
        name: 'Business Management',
        icon: FaBriefcase,
        description: 'Business administration, leadership, and management diplomas',
        courses: [
            {
                slug: 'business-level-6',
                name: 'Level 6 Diploma',
                duration: '12 Months',
                image: '/courses/business-level-6.jpg',
                entryRequirements: [
                    'A relevant Level 4/5 qualification, diploma, technical qualification or equivalent professional experience is normally recommended.',
                    'Learners should have a working understanding of the relevant industry or be able to demonstrate suitable prior learning.',
                    'Good written and spoken English or the programme language is recommended for technical reports and assessments.',
                    'Learners should be comfortable with independent research, evidence gathering and structured assignments.',
                    'Access to a relevant workplace, project or realistic case-study environment is beneficial for applied learning.',
                    'Final eligibility should be checked against the specific awarding body\'s current Level 6 requirements.'
                ],
                studyUnits: [
                    'Business environment and organisational strategy',
                    'Leadership, management and organisational behaviour',
                    'Marketing, customer value and business development',
                    'Finance, budgeting and performance indicators',
                    'Operations, people and resource management',
                    'Risk, change and continuous improvement',
                    'Applied business-management project'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 6 Diploma.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 6 Diploma through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 6 Diploma.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'business-level-5',
                name: 'Level 5 Diploma',
                duration: '9 Months',
                image: '/courses/business-level-5.jpg',
                entryRequirements: [
                    'A relevant Level 3/4 qualification, equivalent education, or suitable professional experience is normally recommended.',
                    'Learners should have sufficient English or programme-language ability to understand technical documents and complete assessments.',
                    'Relevant workplace experience is advantageous, particularly for management or technical assignments.',
                    'Basic digital skills are expected for research, document preparation and evidence submission.',
                    'Learners should be prepared for independent study, written assignments and applied workplace activities.',
                    'Final admission should follow the selected awarding body\'s published entry and recognition-of-prior-learning rules.'
                ],
                studyUnits: [
                    'Business environment and organisational strategy',
                    'Leadership, management and organisational behaviour',
                    'Marketing, customer value and business development',
                    'Finance, budgeting and performance indicators',
                    'Operations, people and resource management',
                    'Risk, change and continuous improvement',
                    'Applied business-management project'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 5 Diploma.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 5 Diploma through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 5 Diploma.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'business-level-6-extended',
                name: 'Level 6 Extended',
                duration: '15 Months',
                image: '/courses/business-level-6-extended.jpg',
                entryRequirements: [
                    'A relevant Level 4/5 qualification, diploma, technical qualification or equivalent professional experience is normally recommended.',
                    'Learners should have a working understanding of the relevant industry or be able to demonstrate suitable prior learning.',
                    'Good written and spoken English or the programme language is recommended for technical reports and assessments.',
                    'Learners should be comfortable with independent research, evidence gathering and structured assignments.',
                    'Access to a relevant workplace, project or realistic case-study environment is beneficial for applied learning.',
                    'Final eligibility should be checked against the specific awarding body\'s current Level 6 requirements.'
                ],
                studyUnits: [
                    'Business environment and organisational strategy',
                    'Leadership, management and organisational behaviour',
                    'Marketing, customer value and business development',
                    'Finance, budgeting and performance indicators',
                    'Operations, people and resource management',
                    'Risk, change and continuous improvement',
                    'Applied business-management project'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 6 Extended.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 6 Extended through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 6 Extended.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'business-level-3',
                name: 'Level 3 Diploma',
                duration: '6 Months',
                image: '/courses/business-level-3.jpg',
                entryRequirements: [
                    'Learners should normally have basic secondary-school education or equivalent practical experience.',
                    'Basic ability to read, understand and record technical or workplace information is recommended.',
                    'Learners should be able to participate in classroom, workshop or site-based activities as required.',
                    'Basic computer literacy is useful where assignments, reports or digital records are used.',
                    'Relevant work experience is helpful but is not normally essential for an introductory Level 3 programme.',
                    'Where the programme is regulated by an awarding body, the provider should verify the awarding body\'s formal entry criteria before enrolment.'
                ],
                studyUnits: [
                    'Business environment and organisational strategy',
                    'Leadership, management and organisational behaviour',
                    'Marketing, customer value and business development',
                    'Finance, budgeting and performance indicators',
                    'Operations, people and resource management',
                    'Risk, change and continuous improvement',
                    'Applied business-management project'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 3 Diploma.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 3 Diploma through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 3 Diploma.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'it',
        name: 'IT',
        icon: FaLaptop,
        description: 'Information technology diplomas and certifications',
        courses: [
            {
                slug: 'it-level-6',
                name: 'Level 6 Diploma',
                duration: '12 Months',
                image: '/courses/it-level-6.jpg',
                entryRequirements: [
                    'A relevant Level 4/5 qualification, diploma, technical qualification or equivalent professional experience is normally recommended.',
                    'Learners should have a working understanding of the relevant industry or be able to demonstrate suitable prior learning.',
                    'Good written and spoken English or the programme language is recommended for technical reports and assessments.',
                    'Learners should be comfortable with independent research, evidence gathering and structured assignments.',
                    'Access to a relevant workplace, project or realistic case-study environment is beneficial for applied learning.',
                    'Final eligibility should be checked against the specific awarding body\'s current Level 6 requirements.'
                ],
                studyUnits: [
                    'IT fundamentals and digital systems',
                    'Programming/software or information-systems principles',
                    'Databases, networks or cloud concepts as relevant',
                    'Cybersecurity, data protection and operational controls',
                    'IT project/service management',
                    'Testing, documentation and troubleshooting',
                    'Applied IT project and professional development'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 6 Diploma.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 6 Diploma through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 6 Diploma.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'it-level-5-extended',
                name: 'Level 5 Extended',
                duration: '9 Months',
                image: '/courses/it-level-5-extended.jpg',
                entryRequirements: [
                    'A relevant Level 3/4 qualification, equivalent education, or suitable professional experience is normally recommended.',
                    'Learners should have sufficient English or programme-language ability to understand technical documents and complete assessments.',
                    'Relevant workplace experience is advantageous, particularly for management or technical assignments.',
                    'Basic digital skills are expected for research, document preparation and evidence submission.',
                    'Learners should be prepared for independent study, written assignments and applied workplace activities.',
                    'Final admission should follow the selected awarding body\'s published entry and recognition-of-prior-learning rules.'
                ],
                studyUnits: [
                    'IT fundamentals and digital systems',
                    'Programming/software or information-systems principles',
                    'Databases, networks or cloud concepts as relevant',
                    'Cybersecurity, data protection and operational controls',
                    'IT project/service management',
                    'Testing, documentation and troubleshooting',
                    'Applied IT project and professional development'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 5 Extended.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 5 Extended through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 5 Extended.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'it-level-3',
                name: 'Level 3 Diploma',
                duration: '6 Months',
                image: '/courses/it-level-3.jpg',
                entryRequirements: [
                    'Learners should normally have basic secondary-school education or equivalent practical experience.',
                    'Basic ability to read, understand and record technical or workplace information is recommended.',
                    'Learners should be able to participate in classroom, workshop or site-based activities as required.',
                    'Basic computer literacy is useful where assignments, reports or digital records are used.',
                    'Relevant work experience is helpful but is not normally essential for an introductory Level 3 programme.',
                    'Where the programme is regulated by an awarding body, the provider should verify the awarding body\'s formal entry criteria before enrolment.'
                ],
                studyUnits: [
                    'IT fundamentals and digital systems',
                    'Programming/software or information-systems principles',
                    'Databases, networks or cloud concepts as relevant',
                    'Cybersecurity, data protection and operational controls',
                    'IT project/service management',
                    'Testing, documentation and troubleshooting',
                    'Applied IT project and professional development'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 3 Diploma.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 3 Diploma through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 3 Diploma.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'law',
        name: 'Law',
        icon: FaGavel,
        description: 'Legal studies, law, and legal assistant certifications',
        courses: [
            {
                slug: 'law-level-3-1',
                name: 'Level 3 Diploma',
                duration: '6 Months',
                image: '/courses/law-level-3.jpg',
                entryRequirements: [
                    'Learners should normally have basic secondary-school education or equivalent practical experience.',
                    'Basic ability to read, understand and record technical or workplace information is recommended.',
                    'Learners should be able to participate in classroom, workshop or site-based activities as required.',
                    'Basic computer literacy is useful where assignments, reports or digital records are used.',
                    'Relevant work experience is helpful but is not normally essential for an introductory Level 3 programme.',
                    'Where the programme is regulated by an awarding body, the provider should verify the awarding body\'s formal entry criteria before enrolment.'
                ],
                studyUnits: [
                    'Legal systems and sources of law',
                    'Legal terminology, principles and interpretation',
                    'Contract and civil/commercial law foundations',
                    'Employment, regulatory or organisational legal issues',
                    'Legal research, evidence and case analysis',
                    'Professional ethics, confidentiality and documentation',
                    'Applied legal scenario analysis and progression planning'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 3 Diploma.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 3 Diploma through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 3 Diploma.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'train-the-trainer',
        name: 'Train the Trainer',
        icon: FaChalkboardTeacher,
        description: 'Trainer qualifications across HSE, Construction, Oil & Gas, and more',
        courses: [
            {
                slug: 'trainer-hse',
                name: 'HSE',
                duration: '5 Days',
                image: '/courses/trainer-hse.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Training needs analysis and learning objectives',
                    'Adult-learning principles and learner engagement',
                    'Session planning, lesson structures and training materials',
                    'Demonstration, questioning, facilitation and feedback',
                    'Assessment of learner competence and evidence',
                    'Training evaluation, records and continual improvement',
                    'Micro-teaching session and trainer performance assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with HSE.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in HSE through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to HSE.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'trainer-construction',
                name: 'Construction – Engineering',
                duration: '5 Days',
                image: '/courses/trainer-construction.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Training needs analysis and learning objectives',
                    'Adult-learning principles and learner engagement',
                    'Session planning, lesson structures and training materials',
                    'Demonstration, questioning, facilitation and feedback',
                    'Assessment of learner competence and evidence',
                    'Training evaluation, records and continual improvement',
                    'Micro-teaching session and trainer performance assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Construction – Engineering.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Construction – Engineering through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Construction – Engineering.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'trainer-oil-gas',
                name: 'Oil & Gas / Fire',
                duration: '5 Days',
                image: '/courses/trainer-oil-gas.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Training needs analysis and learning objectives',
                    'Adult-learning principles and learner engagement',
                    'Session planning, lesson structures and training materials',
                    'Demonstration, questioning, facilitation and feedback',
                    'Assessment of learner competence and evidence',
                    'Training evaluation, records and continual improvement',
                    'Micro-teaching session and trainer performance assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Oil & Gas / Fire.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Oil & Gas / Fire through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Oil & Gas / Fire.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'trainer-quality',
                name: 'Quality / ISO',
                duration: '5 Days',
                image: '/courses/trainer-quality.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Training needs analysis and learning objectives',
                    'Adult-learning principles and learner engagement',
                    'Session planning, lesson structures and training materials',
                    'Demonstration, questioning, facilitation and feedback',
                    'Assessment of learner competence and evidence',
                    'Training evaluation, records and continual improvement',
                    'Micro-teaching session and trainer performance assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Quality / ISO.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Quality / ISO through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Quality / ISO.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'trainer-professional',
                name: 'Professional Training',
                duration: '5 Days',
                image: '/courses/trainer-professional.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Training needs analysis and learning objectives',
                    'Adult-learning principles and learner engagement',
                    'Session planning, lesson structures and training materials',
                    'Demonstration, questioning, facilitation and feedback',
                    'Assessment of learner competence and evidence',
                    'Training evaluation, records and continual improvement',
                    'Micro-teaching session and trainer performance assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Professional Training.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Professional Training through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Professional Training.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'trainer-hr',
                name: 'HR',
                duration: '5 Days',
                image: '/courses/trainer-hr.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Training needs analysis and learning objectives',
                    'Adult-learning principles and learner engagement',
                    'Session planning, lesson structures and training materials',
                    'Demonstration, questioning, facilitation and feedback',
                    'Assessment of learner competence and evidence',
                    'Training evaluation, records and continual improvement',
                    'Micro-teaching session and trainer performance assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with HR.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in HR through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to HR.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'trainer-teaching',
                name: 'Teaching / Learning',
                duration: '5 Days',
                image: '/courses/trainer-teaching.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Training needs analysis and learning objectives',
                    'Adult-learning principles and learner engagement',
                    'Session planning, lesson structures and training materials',
                    'Demonstration, questioning, facilitation and feedback',
                    'Assessment of learner competence and evidence',
                    'Training evaluation, records and continual improvement',
                    'Micro-teaching session and trainer performance assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Teaching / Learning.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Teaching / Learning through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Teaching / Learning.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'trainer-scaffolding',
                name: 'Scaffolding',
                duration: '5 Days',
                image: '/courses/trainer-scaffolding.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Training needs analysis and learning objectives',
                    'Adult-learning principles and learner engagement',
                    'Session planning, lesson structures and training materials',
                    'Demonstration, questioning, facilitation and feedback',
                    'Assessment of learner competence and evidence',
                    'Training evaluation, records and continual improvement',
                    'Micro-teaching session and trainer performance assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Scaffolding.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Scaffolding through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Scaffolding.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'trainer-wpr',
                name: 'WPR',
                duration: '3 Days',
                image: '/courses/trainer-wpr.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Training needs analysis and learning objectives',
                    'Adult-learning principles and learner engagement',
                    'Session planning, lesson structures and training materials',
                    'Demonstration, questioning, facilitation and feedback',
                    'Assessment of learner competence and evidence',
                    'Training evaluation, records and continual improvement',
                    'Micro-teaching session and trainer performance assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with WPR.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in WPR through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to WPR.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'trainer-level-3-construction',
                name: 'Level 3 Construction',
                duration: '5 Days',
                image: '/courses/trainer-level-3-construction.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Training needs analysis and learning objectives',
                    'Adult-learning principles and learner engagement',
                    'Session planning, lesson structures and training materials',
                    'Demonstration, questioning, facilitation and feedback',
                    'Assessment of learner competence and evidence',
                    'Training evaluation, records and continual improvement',
                    'Micro-teaching session and trainer performance assessment'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 3 Construction.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 3 Construction through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 3 Construction.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'green-building',
        name: 'Green Building',
        icon: FaLeaf,
        description: 'Sustainable building, LEED, and green construction certifications',
        courses: [
            {
                slug: 'green-building-level-3',
                name: 'Level 3 Diploma',
                duration: '6 Months',
                image: '/courses/green-building-level-3.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Green-building principles and sustainability goals',
                    'Energy efficiency and building performance',
                    'Water efficiency and sustainable materials',
                    'Indoor environmental quality and occupant wellbeing',
                    'Site, waste and lifecycle considerations',
                    'Green-building assessment and certification concepts',
                    'Applied green-building improvement case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Level 3 Diploma.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Level 3 Diploma through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Level 3 Diploma.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'leed-green-building',
                name: 'LEED Green Building',
                duration: '5 Days',
                image: '/courses/leed-green-building.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Green-building principles and sustainability goals',
                    'Energy efficiency and building performance',
                    'Water efficiency and sustainable materials',
                    'Indoor environmental quality and occupant wellbeing',
                    'Site, waste and lifecycle considerations',
                    'Green-building assessment and certification concepts',
                    'Applied green-building improvement case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with LEED Green Building.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in LEED Green Building through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to LEED Green Building.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'leed-green-building-certification',
                name: 'LEED Green Building Certification',
                duration: '3 Days',
                image: '/courses/leed-green-building-certification.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Green-building principles and sustainability goals',
                    'Energy efficiency and building performance',
                    'Water efficiency and sustainable materials',
                    'Indoor environmental quality and occupant wellbeing',
                    'Site, waste and lifecycle considerations',
                    'Green-building assessment and certification concepts',
                    'Applied green-building improvement case study'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with LEED Green Building Certification.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in LEED Green Building Certification through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to LEED Green Building Certification.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'project-management',
        name: 'Project Management',
        icon: FaProjectDiagram,
        description: 'Construction project management, PRINCE2, and P6 certifications',
        courses: [
            {
                slug: 'construction-project-management',
                name: 'Construction Project Management',
                duration: '5 Days',
                image: '/courses/construction-project-management.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Project lifecycle and governance',
                    'Scope, requirements and work breakdown',
                    'Scheduling, resources and cost control',
                    'Risk, quality, procurement and stakeholder management',
                    'Progress monitoring and change control',
                    'Project reporting, closeout and lessons learned',
                    'Applied project-management plan'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Construction Project Management.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Construction Project Management through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Construction Project Management.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'project-management-level-7',
                name: 'Project Management Level 7 Diploma',
                duration: '12 Months',
                image: '/courses/project-management-level-7.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Project lifecycle and governance',
                    'Scope, requirements and work breakdown',
                    'Scheduling, resources and cost control',
                    'Risk, quality, procurement and stakeholder management',
                    'Progress monitoring and change control',
                    'Project reporting, closeout and lessons learned',
                    'Applied project-management plan'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Project Management Level 7 Diploma.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Project Management Level 7 Diploma through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Project Management Level 7 Diploma.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'prince2-p6',
                name: 'PRINCE2 P6 / P6 Certification',
                duration: '5 Days',
                image: '/courses/prince2-p6.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'PRINCE2 principles and project governance',
                    'Project organisation, roles and responsibilities',
                    'Business case, plans and stage controls',
                    'Risk, issue, quality and change management',
                    'Progress reporting and management products',
                    'Closing projects and lessons learned',
                    'PRINCE2-style scenario and examination preparation'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with PRINCE2 P6 / P6 Certification.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in PRINCE2 P6 / P6 Certification through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to PRINCE2 P6 / P6 Certification.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'defence-driving',
        name: 'Defence Driving Certificate',
        icon: FaCar,
        description: 'Specialised defence transport and driving certifications',
        courses: [
            {
                slug: 'defence-driving-certificate',
                name: 'Specialised Defence Transport',
                duration: '3 Days',
                image: '/courses/defence-driving-certificate.jpg',
                entryRequirements: [
                    'No specific prior qualification is normally required unless the selected awarding body states otherwise.',
                    'Basic literacy, numeracy and communication skills are recommended.',
                    'Relevant work experience is helpful for applying the course to real workplace situations.',
                    'Learners should be willing to complete practical exercises, case studies or assessments.',
                    'Basic computer literacy is useful for reports, records and digital learning materials.',
                    'The provider should confirm any external certification or employer-specific prerequisites before enrolment.'
                ],
                studyUnits: [
                    'Defensive and specialised driving principles',
                    'Vehicle checks, readiness and safety equipment',
                    'Hazard perception and risk-based decision making',
                    'Convoy, secure-route or specialised transport principles as applicable',
                    'Emergency procedures and incident response',
                    'Journey planning, fatigue and environmental considerations',
                    'Practical driving assessment and post-drive review'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Specialised Defence Transport.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Specialised Defence Transport through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Specialised Defence Transport.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'document-controller',
        name: 'Document Controller',
        icon: FaFolderOpen,
        description: 'Document control, management, and certification programs',
        courses: [
            {
                slug: 'lead-document-controller',
                name: 'Lead Document Controller',
                duration: '5 Days',
                image: '/courses/lead-document-controller.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Document-control principles and workflows',
                    'Document numbering, revision and status control',
                    'Transmittals, registers and distribution',
                    'Review, approval and workflow tracking',
                    'Electronic document-management systems',
                    'Records, retention, archiving and audit trails',
                    'Practical document-control register and workflow exercise'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Lead Document Controller.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Lead Document Controller through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Lead Document Controller.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'diploma-document-controller',
                name: 'Diploma in Document Controller',
                duration: '12 Months',
                image: '/courses/diploma-document-controller.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Document-control principles and workflows',
                    'Document numbering, revision and status control',
                    'Transmittals, registers and distribution',
                    'Review, approval and workflow tracking',
                    'Electronic document-management systems',
                    'Records, retention, archiving and audit trails',
                    'Practical document-control register and workflow exercise'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Diploma in Document Controller.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Diploma in Document Controller through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Diploma in Document Controller.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'certified-document-controller',
                name: 'Certified Document Controller',
                duration: '3 Days',
                image: '/courses/certified-document-controller.jpg',
                entryRequirements: [
                    'No specialist qualification is normally required unless the selected programme specifies a prerequisite.',
                    'Relevant workplace experience is strongly recommended because learning is designed to be applied to real organisational situations.',
                    'Learners should have sufficient language ability to understand procedures, standards, case studies and assessments.',
                    'Basic computer skills are useful for completing assignments, reports, registers and digital training records.',
                    'Participants should be able to contribute to discussions, practical exercises and workplace case studies.',
                    'Where a branded or regulated certificate is intended, the training centre should confirm the current awarding body\'s eligibility requirements.'
                ],
                studyUnits: [
                    'Document-control principles and workflows',
                    'Document numbering, revision and status control',
                    'Transmittals, registers and distribution',
                    'Review, approval and workflow tracking',
                    'Electronic document-management systems',
                    'Records, retention, archiving and audit trails',
                    'Practical document-control register and workflow exercise'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Certified Document Controller.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Certified Document Controller through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Certified Document Controller.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
        id: 'technical',
        name: 'Technical',
        icon: FaWrench,
        description: 'HVAC, wall and floor tiles, and technical certifications',
        courses: [
            {
                slug: 'hvac-diploma',
                name: 'HVAC Diploma',
                duration: '12 Months',
                image: '/courses/hvac-diploma.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'HVAC fundamentals and system components',
                    'Heating, ventilation and air-conditioning systems',
                    'Ductwork, piping and equipment installation concepts',
                    'Controls, balancing and commissioning principles',
                    'Maintenance, fault diagnosis and safe work practices',
                    'Energy efficiency and indoor environmental considerations',
                    'Applied HVAC system project'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with HVAC Diploma.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in HVAC Diploma through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to HVAC Diploma.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'diploma-wall-floor-tiles',
                name: 'Diploma in Wall and Floor Tiles',
                duration: '6 Months',
                image: '/courses/diploma-wall-floor-tiles.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Wall and floor tile materials and selection',
                    'Substrate preparation and moisture considerations',
                    'Setting out, levels and layout',
                    'Adhesives, grouting and installation methods',
                    'Cuts, edges, joints and finishing',
                    'Defect prevention, repair and quality checks',
                    'Practical tiling project and inspection'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Diploma in Wall and Floor Tiles.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Diploma in Wall and Floor Tiles through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Diploma in Wall and Floor Tiles.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    },
    {
    id: 'b-gas-cpd',
    name: 'B Gas CPD',
    icon: FaFire,
    description: 'Painting coating inspector and gas certifications',
    courses: [
        {
            slug: 'painting-coating-inspector',
            name: 'Painting Coating Inspector',
            duration: '4 Days',
            image: '/courses/painting-coating-inspector.jpg',
            entryRequirements: [
                'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                'Learners should understand basic workplace safety and be able to follow technical instructions.',
                'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
            ],
            studyUnits: [
                'Coating inspection principles',
                'Surface preparation and cleanliness',
                'Environmental condition checks',
                'Coating application and thickness inspection',
                'Defect identification and corrective action',
                'Inspection records and acceptance documentation',
                'Practical coating inspection exercise'
            ],
            learningOutcomes: [
                'Explain the purpose, scope and key terminology associated with Painting Coating Inspector.',
                'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                'Demonstrate practical or analytical competence in Painting Coating Inspector through exercises, scenarios, assignments or an appropriate final assessment.'
            ],
            futureProgression: [
                'Apply the learning in an entry-level or existing workplace role related to Painting Coating Inspector.',
                'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                'Progress to a higher-level, specialist or advanced version of the subject where available.',
                'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
            ]
        },
        {
            slug: 'g1',
            name: 'G1',
            duration: '3 Days',
            image: '/courses/g1.jpg',
            entryRequirements: [
                'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                'Learners should understand basic workplace safety and be able to follow technical instructions.',
                'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
            ],
            studyUnits: [
                'Gas-system fundamentals relevant to the selected CPD module',
                'Safety, hazards and risk controls',
                'Relevant components, installation or operational principles',
                'Inspection, testing and documentation',
                'Fault awareness and emergency response',
                'Compliance and professional responsibilities',
                'Practical scenario review and CPD assessment'
            ],
            learningOutcomes: [
                'Explain the purpose, scope and key terminology associated with G1.',
                'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                'Demonstrate practical or analytical competence in G1 through exercises, scenarios, assignments or an appropriate final assessment.'
            ],
            futureProgression: [
                'Apply the learning in an entry-level or existing workplace role related to G1.',
                'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                'Progress to a higher-level, specialist or advanced version of the subject where available.',
                'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
            ]
        },
        {
            slug: 'g2',
            name: 'G2',
            duration: '3 Days',
            image: '/courses/g2.jpg',
            entryRequirements: [
                'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                'Learners should understand basic workplace safety and be able to follow technical instructions.',
                'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
            ],
            studyUnits: [
                'Gas-system fundamentals relevant to the selected CPD module',
                'Safety, hazards and risk controls',
                'Relevant components, installation or operational principles',
                'Inspection, testing and documentation',
                'Fault awareness and emergency response',
                'Compliance and professional responsibilities',
                'Practical scenario review and CPD assessment'
            ],
            learningOutcomes: [
                'Explain the purpose, scope and key terminology associated with G2.',
                'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                'Demonstrate practical or analytical competence in G2 through exercises, scenarios, assignments or an appropriate final assessment.'
            ],
            futureProgression: [
                'Apply the learning in an entry-level or existing workplace role related to G2.',
                'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                'Progress to a higher-level, specialist or advanced version of the subject where available.',
                'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
            ]
        }
    ]
},
    {
        id: 'solar',
        name: 'Solar',
        icon: FaSun,
        description: 'Solar inspection, supervision, and installation certifications',
        courses: [
            {
                slug: 'solar-inspector',
                name: 'Diploma in Solar Inspector',
                duration: '6 Months',
                image: '/courses/solar-inspector.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Solar project quality and inspection planning',
                    'PV modules, structures and mounting inspection',
                    'DC/AC wiring, connectors and protection checks',
                    'Inverters, earthing and safety inspection',
                    'Testing, commissioning and performance documentation',
                    'Defect, NCR and punch-list management',
                    'Solar inspection report and handover dossier'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Diploma in Solar Inspector.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Diploma in Solar Inspector through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Diploma in Solar Inspector.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'solar-supervisor',
                name: 'Diploma in Solar Supervisor',
                duration: '6 Months',
                image: '/courses/solar-supervisor.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Solar project planning and site supervision',
                    'Crew coordination, permits and safe work',
                    'Module, mounting and electrical installation supervision',
                    'Quality inspections and progress measurement',
                    'Material, tools and resource control',
                    'Testing, commissioning and handover coordination',
                    'Applied solar-site supervision plan'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Diploma in Solar Supervisor.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Diploma in Solar Supervisor through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Diploma in Solar Supervisor.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'solar-pv-installer',
                name: 'Diploma in Solar PV Installer',
                duration: '6 Months',
                image: '/courses/solar-pv-installer.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'PV system fundamentals and components',
                    'Site survey, orientation and system layout',
                    'Mounting structures and module installation',
                    'DC cabling, connectors, isolation and protection',
                    'Inverter, AC interface and earthing principles',
                    'Testing, commissioning and fault checks',
                    'Practical PV installation exercise'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Diploma in Solar PV Installer.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Diploma in Solar PV Installer through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Diploma in Solar PV Installer.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            },
            {
                slug: 'solar-technician',
                name: 'Diploma in Solar Technician',
                duration: '6 Months',
                image: '/courses/solar-technician.jpg',
                entryRequirements: [
                    'A relevant technical background, vocational qualification or practical experience is recommended for specialist study.',
                    'Learners should understand basic workplace safety and be able to follow technical instructions.',
                    'Basic mathematics, measurement and technical-document reading may be required depending on the course.',
                    'Practical courses may require PPE, site access, tools, instruments or supervised workshop participation.',
                    'Advanced inspection and technical certification routes normally benefit from prior field experience.',
                    'Final eligibility should be checked against the provider\'s equipment, practical assessment and certification requirements.'
                ],
                studyUnits: [
                    'Solar PV system operation and maintenance',
                    'Electrical and mechanical components',
                    'Inspection, testing and preventive maintenance',
                    'Performance monitoring and fault diagnosis',
                    'Battery/storage interface where applicable',
                    'Safety, isolation and maintenance records',
                    'Practical troubleshooting and maintenance plan'
                ],
                learningOutcomes: [
                    'Explain the purpose, scope and key terminology associated with Diploma in Solar Technician.',
                    'Identify the principal workplace hazards, quality requirements, legal/compliance interfaces or operational controls relevant to the subject.',
                    'Apply recognised procedures, checklists, standards or good-practice methods to routine workplace situations.',
                    'Select appropriate controls, tools, documents or evidence and use them in a structured and safe manner.',
                    'Interpret relevant records, measurements, drawings, reports, inspection findings or case-study information.',
                    'Identify nonconformities, risks, errors or improvement opportunities and recommend proportionate corrective actions.',
                    'Demonstrate practical or analytical competence in Diploma in Solar Technician through exercises, scenarios, assignments or an appropriate final assessment.'
                ],
                futureProgression: [
                    'Apply the learning in an entry-level or existing workplace role related to Diploma in Solar Technician.',
                    'Build a documented portfolio of workplace evidence, projects, assessments or supervised experience.',
                    'Progress to a higher-level, specialist or advanced version of the subject where available.',
                    'Add complementary safety, quality, technical or management qualifications to broaden professional capability.',
                    'Move toward supervisory, coordinator, inspector, auditor, technician or management responsibilities where experience supports progression.',
                    'Maintain competence through CPD, refresher training, workplace practice and current industry requirements.',
                    'For regulated or third-party credentials, complete any separate experience, examination, logbook or certification requirements set by the relevant body.'
                ]
            }
        ]
    }
];

export const getAllCategories = () => categories;
export const getCategoryById = (id) => categories.find(cat => cat.id === id);
export const getCourseBySlug = (categoryId, slug) => {
    const category = getCategoryById(categoryId);
    if (!category) return null;
    return category.courses.find(course => course.slug === slug);
};
export const getAllCourses = () => categories.flatMap(cat =>
    cat.courses.map(course => ({ ...course, category: cat.id, categoryName: cat.name }))
);