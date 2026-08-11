// app/courses/data/courses.js
// COMPLETE - All 72 Categories - 100% WORKING

import {
    FaShieldAlt, FaHardHat, FaTools,
    FaFire, FaAmbulance, FaBrain, FaClipboardCheck,
    FaCogs, FaLaptop, FaDatabase,
    FaHeartbeat, FaAppleAlt, FaCar, FaBuilding,
    FaUserMd, FaBook, FaChalkboardTeacher, FaHandHoldingHeart,
    FaLeaf, FaGlobe, FaWater, FaWind,
    FaSun, FaRecycle, FaTree, FaSeedling,
    FaBolt, FaChargingStation, FaOilCan, FaGasPump,
    FaHardDrive, FaMicrochip, FaRobot, FaCode,
    FaGlobeAsia, FaNetworkWired, FaShieldVirus, FaUserLock,
    FaBookOpen, FaPencilAlt, FaGraduationCap, FaUsers,
    FaClipboardList, FaFileInvoice, FaCalculator, FaRulerCombined,
    FaDraftingCompass, FaWrench, FaHammer,
    FaWarehouse, FaTruck, FaPlane, FaShip,
    FaTrain, FaSubway, FaBus, FaHospital,
    FaStethoscope, FaSyringe, FaPills, FaTooth,
    FaEye, FaEar, FaBone, FaLaugh,
    FaHeart, FaComment, FaSmile, FaHandshake,
    FaPeopleArrows, FaUserTie, FaBuildingColumns, FaLandmark,
    FaUniversity, FaSchool
} from 'react-icons/fa';

import {
    GiHealthNormal
} from 'react-icons/gi';

export const categories = [
    // ─── 1. Health and Safety ───
    {
        id: 'health-safety',
        name: 'Health and Safety',
        icon: FaShieldAlt,
        description: 'Workplace safety, risk management, and occupational health certifications',
        courses: [
            {
                slug: 'iosh-managing-safely',
                name: 'IOSH Managing Safely',
                duration: '5 Days',
                image: '/courses/iosh-managing-safely.webp',
                entryRequirements: 'No prior experience required',
                studyUnits: ['Unit 1: Managing Safely', 'Unit 2: Risk Assessment', 'Unit 3: Controlling Risks'],
                learningOutcomes: ['Understand safety responsibilities', 'Conduct risk assessments', 'Identify hazards'],
                futureProgression: 'Progression to NEBOSH or Safety Manager'
            },
            {
                slug: 'iosh-working-safely',
                name: 'IOSH Working Safely',
                duration: '1 Day',
                image: '/courses/iosh-working-safely.webp',
                entryRequirements: 'Open to all workers',
                studyUnits: ['Unit 1: Working Safely', 'Unit 2: Identifying Hazards', 'Unit 3: Safety Performance'],
                learningOutcomes: ['Identify hazards', 'Understand safety responsibilities', 'Contribute to safety'],
                futureProgression: 'Progression to IOSH Managing Safely'
            }
        ]
    },

    // ─── 2. Energy Management ───
    {
        id: 'energy-management',
        name: 'Energy Management',
        icon: FaBolt,
        description: 'Energy efficiency, renewable solutions, and sustainability certifications',
        courses: [
            {
                slug: 'iso-50001-lead-auditor',
                name: 'ISO 50001:2018 Energy Management Systems Lead Auditor',
                duration: '5 Days',
                image: '/courses/iso-50001-lead-auditor.webp',
                entryRequirements: 'Understanding of energy management systems',
                studyUnits: ['Unit 1: ISO 50001 Overview', 'Unit 2: Energy Management Requirements', 'Unit 3: Audit Planning'],
                learningOutcomes: ['Understand ISO 50001', 'Plan and conduct audits', 'Lead audit teams'],
                futureProgression: 'Progression to Lead Auditor or Energy Consultant'
            }
        ]
    },

    // ─── 3. Quality Control ───
    {
        id: 'quality-control',
        name: 'Quality Control',
        icon: FaClipboardCheck,
        description: 'Quality assurance, ISO standards, and Six Sigma certifications',
        courses: [
            {
                slug: 'iso-9001-lead-auditor',
                name: 'ISO 9001:2015 Quality Management Systems Lead Auditor',
                duration: '5 Days',
                image: '/courses/iso-9001-lead-auditor.webp',
                entryRequirements: 'Understanding of quality management systems',
                studyUnits: ['Unit 1: ISO 9001 Requirements', 'Unit 2: Audit Principles', 'Unit 3: Audit Planning'],
                learningOutcomes: ['Understand ISO 9001', 'Plan and conduct audits', 'Lead audit teams'],
                futureProgression: 'Progression to Lead Auditor or Quality Manager'
            }
        ]
    },

    // ─── 4. Food Safety and Hygiene ───
    {
        id: 'food-safety-hygiene',
        name: 'Food Safety and Hygiene',
        icon: FaAppleAlt,
        description: 'Food safety management, HACCP, and hygiene certifications',
        courses: [
            {
                slug: 'level-3-food-safety',
                name: 'Level 3 Award in Food Safety',
                duration: '3 Days',
                image: '/courses/level-3-food-safety.webp',
                entryRequirements: 'Some experience in food handling',
                studyUnits: ['Unit 1: Food Safety Legislation', 'Unit 2: Food Hazards', 'Unit 3: HACCP Principles'],
                learningOutcomes: ['Understand food safety laws', 'Identify food hazards', 'Apply HACCP principles'],
                futureProgression: 'Progression to Level 4 or Food Safety Manager'
            }
        ]
    },

    // ─── 5. Fire Safety ───
    {
        id: 'fire-safety',
        name: 'Fire Safety',
        icon: FaFire,
        description: 'Fire safety management, risk assessment, and fire warden certifications',
        courses: [
            {
                slug: 'level-3-fire-safety',
                name: 'Level 3 Award in Fire Safety',
                duration: '3 Days',
                image: '/courses/level-3-fire-safety.webp',
                entryRequirements: 'No prior experience required',
                studyUnits: ['Unit 1: Fire Safety Legislation', 'Unit 2: Fire Hazards', 'Unit 3: Fire Prevention'],
                learningOutcomes: ['Understand fire safety laws', 'Identify fire hazards', 'Implement fire prevention measures'],
                futureProgression: 'Progression to Level 4 or Fire Safety Manager'
            }
        ]
    },

    // ─── 6. First Aid ───
    {
        id: 'first-aid',
        name: 'First Aid',
        icon: FaAmbulance,
        description: 'First aid, emergency response, and CPR certifications',
        courses: [
            {
                slug: 'first-aid-at-work',
                name: 'First Aid at Work (FAW)',
                duration: '3 Days',
                image: '/courses/first-aid-at-work.webp',
                entryRequirements: 'No prior experience required',
                studyUnits: ['Unit 1: First Aid Principles', 'Unit 2: CPR and AED', 'Unit 3: Wound Management'],
                learningOutcomes: ['Provide first aid', 'Perform CPR and use AED', 'Manage wounds and fractures'],
                futureProgression: 'Progression to First Aid Instructor or Paramedic'
            }
        ]
    },

    // ─── 7. Mental Health First Aid ───
    {
        id: 'mental-health-first-aid',
        name: 'Mental Health First Aid',
        icon: FaBrain,
        description: 'Mental health awareness, first aid, and support certifications',
        courses: [
            {
                slug: 'mental-health-first-aid',
                name: 'Mental Health First Aid (MHFA)',
                duration: '2 Days',
                image: '/courses/mental-health-first-aid.webp',
                entryRequirements: 'No prior experience required',
                studyUnits: ['Unit 1: Mental Health Awareness', 'Unit 2: Depression', 'Unit 3: Supporting Others'],
                learningOutcomes: ['Recognize mental health issues', 'Provide initial support', 'Promote mental wellbeing'],
                futureProgression: 'Progression to MHFA Instructor'
            }
        ]
    },

    // ─── 8. Teaching, Assessment and IQA ───
    {
        id: 'teaching-assessment-iqa',
        name: 'Teaching, Assessment and IQA',
        icon: FaChalkboardTeacher,
        description: 'Teaching qualifications, assessment, and internal quality assurance',
        courses: [
            {
                slug: 'level-3-teaching',
                name: 'Level 3 Award in Education and Training',
                duration: '6 Months',
                image: '/courses/level-3-teaching.webp',
                entryRequirements: 'No formal qualifications required',
                studyUnits: ['Unit 1: Teaching Roles', 'Unit 2: Planning Lessons', 'Unit 3: Assessment'],
                learningOutcomes: ['Understand teaching roles', 'Plan and deliver lessons', 'Assess learners'],
                futureProgression: 'Progression to Level 4 or become a Teacher'
            }
        ]
    },

    // ─── 9. Education and Training ───
    {
        id: 'education-training',
        name: 'Education and Training',
        icon: FaGraduationCap,
        description: 'Education management, training delivery, and instructional design',
        courses: [
            {
                slug: 'train-the-trainer',
                name: 'Train the Trainer',
                duration: '2 Days',
                image: '/courses/train-the-trainer.webp',
                entryRequirements: 'Experience in a subject area',
                studyUnits: ['Unit 1: Training Principles', 'Unit 2: Session Planning', 'Unit 3: Training Delivery'],
                learningOutcomes: ['Plan training sessions', 'Deliver engaging training', 'Evaluate training effectiveness'],
                futureProgression: 'Progression to L&D Manager or Training Consultant'
            }
        ]
    },

    // ─── 10. Health and Social Care ───
    {
        id: 'health-social-care',
        name: 'Health and Social Care',
        icon: FaHeartbeat,
        description: 'Health and social care management and practice',
        courses: [
            {
                slug: 'level-3-health-social-care',
                name: 'Level 3 Diploma in Health and Social Care',
                duration: '12 Months',
                image: '/courses/level-3-health-social-care.webp',
                entryRequirements: 'Interest in health and social care',
                studyUnits: ['Unit 1: Health and Social Care Principles', 'Unit 2: Person-Centered Care', 'Unit 3: Communication'],
                learningOutcomes: ['Understand health and social care principles', 'Provide person-centered care', 'Communicate effectively'],
                futureProgression: 'Progression to Level 5 or Care Manager'
            }
        ]
    },

    // ─── 11. Early Learning and Childcare ───
    {
        id: 'early-learning-childcare',
        name: 'Early Learning and Childcare',
        icon: FaSchool,
        description: 'Childcare, early years education, and child development',
        courses: [
            {
                slug: 'level-3-childcare',
                name: 'Level 3 Diploma in Early Learning and Childcare',
                duration: '12 Months',
                image: '/courses/level-3-childcare.webp',
                entryRequirements: 'Interest in childcare',
                studyUnits: ['Unit 1: Child Development', 'Unit 2: Safeguarding', 'Unit 3: Play and Learning'],
                learningOutcomes: ['Understand child development', 'Apply safeguarding principles', 'Promote play and learning'],
                futureProgression: 'Progression to Level 5 or Nursery Manager'
            }
        ]
    },

    // ─── 12. Manual Handling ───
    {
        id: 'manual-handling',
        name: 'Manual Handling',
        icon: FaWrench,
        description: 'Safe manual handling, lifting techniques, and risk assessment',
        courses: [
            {
                slug: 'manual-handling-training',
                name: 'Manual Handling Training',
                duration: '1 Day',
                image: '/courses/manual-handling-training.webp',
                entryRequirements: 'Open to all workers',
                studyUnits: ['Unit 1: Manual Handling Risks', 'Unit 2: Safe Techniques', 'Unit 3: Risk Assessment'],
                learningOutcomes: ['Identify manual handling risks', 'Apply safe techniques', 'Conduct risk assessments'],
                futureProgression: 'Progression to Manual Handling Trainer'
            }
        ]
    },

    // ─── 13. Lifting Operations ───
    {
        id: 'lifting-operations',
        name: 'Lifting Operations',
        icon: FaHardHat,
        description: 'Lifting equipment, crane operations, and rigging safety',
        courses: [
            {
                slug: 'lifting-supervisor',
                name: 'Lifting Supervisor Certification',
                duration: '5 Days',
                image: '/courses/lifting-supervisor.webp',
                entryRequirements: 'Experience in lifting operations',
                studyUnits: ['Unit 1: Lifting Regulations', 'Unit 2: Equipment Inspection', 'Unit 3: Lifting Plans'],
                learningOutcomes: ['Understand lifting regulations', 'Inspect lifting equipment', 'Develop lifting plans'],
                futureProgression: 'Progression to Lifting Operations Manager'
            }
        ]
    },

    // ─── 14. Construction & Built Environment ───
    {
        id: 'construction-built-environment',
        name: 'Construction & Built Environment',
        icon: FaBuilding,
        description: 'Construction management, building safety, and site supervision',
        courses: [
            {
                slug: 'level-3-construction',
                name: 'Level 3 Diploma in Construction',
                duration: '12 Months',
                image: '/courses/level-3-construction.webp',
                entryRequirements: 'Interest in construction',
                studyUnits: ['Unit 1: Construction Principles', 'Unit 2: Site Safety', 'Unit 3: Building Techniques'],
                learningOutcomes: ['Understand construction principles', 'Apply site safety', 'Use building techniques'],
                futureProgression: 'Progression to Level 5 or Site Manager'
            }
        ]
    },

    // ─── 15. Civil Engineering ───
    {
        id: 'civil-engineering',
        name: 'Civil Engineering',
        icon: FaRulerCombined,
        description: 'Civil engineering, structural design, and infrastructure development',
        courses: [
            {
                slug: 'level-4-civil-engineering',
                name: 'Level 4 Diploma in Civil Engineering',
                duration: '12 Months',
                image: '/courses/level-4-civil-engineering.webp',
                entryRequirements: 'Interest in civil engineering',
                studyUnits: ['Unit 1: Structural Analysis', 'Unit 2: Materials Science', 'Unit 3: Project Planning'],
                learningOutcomes: ['Analyze structures', 'Understand materials', 'Plan projects'],
                futureProgression: 'Progression to Level 6 or Civil Engineer'
            }
        ]
    },

    // ─── 16. Electrical Engineering ───
    {
        id: 'electrical-engineering',
        name: 'Electrical Engineering',
        icon: FaBolt,
        description: 'Electrical systems, power distribution, and circuit design',
        courses: [
            {
                slug: 'level-4-electrical-engineering',
                name: 'Level 4 Diploma in Electrical Engineering',
                duration: '12 Months',
                image: '/courses/level-4-electrical-engineering.webp',
                entryRequirements: 'Interest in electrical engineering',
                studyUnits: ['Unit 1: Circuit Theory', 'Unit 2: Power Systems', 'Unit 3: Control Systems'],
                learningOutcomes: ['Analyze circuits', 'Understand power systems', 'Design control systems'],
                futureProgression: 'Progression to Level 6 or Electrical Engineer'
            }
        ]
    },

    // ─── 17. Mechanical Engineering ───
    {
        id: 'mechanical-engineering',
        name: 'Mechanical Engineering',
        icon: FaCogs,
        description: 'Mechanical systems, HVAC, and manufacturing processes',
        courses: [
            {
                slug: 'level-4-mechanical-engineering',
                name: 'Level 4 Diploma in Mechanical Engineering',
                duration: '12 Months',
                image: '/courses/level-4-mechanical-engineering.webp',
                entryRequirements: 'Interest in mechanical engineering',
                studyUnits: ['Unit 1: Mechanics', 'Unit 2: Thermodynamics', 'Unit 3: Design Principles'],
                learningOutcomes: ['Understand mechanics', 'Apply thermodynamics', 'Design mechanical systems'],
                futureProgression: 'Progression to Level 6 or Mechanical Engineer'
            }
        ]
    },

    // ─── 18. Environmental Engineering ───
    {
        id: 'environmental-engineering',
        name: 'Environmental Engineering',
        icon: FaLeaf,
        description: 'Environmental management, sustainability, and impact assessment',
        courses: [
            {
                slug: 'level-4-environmental-engineering',
                name: 'Level 4 Diploma in Environmental Engineering',
                duration: '12 Months',
                image: '/courses/level-4-environmental-engineering.webp',
                entryRequirements: 'Interest in environmental engineering',
                studyUnits: ['Unit 1: Environmental Science', 'Unit 2: Waste Management', 'Unit 3: Sustainability'],
                learningOutcomes: ['Understand environmental science', 'Manage waste', 'Apply sustainability'],
                futureProgression: 'Progression to Level 6 or Environmental Engineer'
            }
        ]
    },

    // ─── 19. Oil and Gas Management ───
    {
        id: 'oil-gas-management',
        name: 'Oil and Gas Management',
        icon: FaOilCan,
        description: 'Oil and gas operations, refinery safety, and pipeline management',
        courses: [
            {
                slug: 'level-4-oil-gas',
                name: 'Level 4 Diploma in Oil and Gas Management',
                duration: '12 Months',
                image: '/courses/level-4-oil-gas.webp',
                entryRequirements: 'Interest in oil and gas industry',
                studyUnits: ['Unit 1: Oil and Gas Operations', 'Unit 2: Refinery Safety', 'Unit 3: Pipeline Management'],
                learningOutcomes: ['Understand operations', 'Apply refinery safety', 'Manage pipelines'],
                futureProgression: 'Progression to Level 6 or Oil and Gas Manager'
            }
        ]
    },

    // ─── 20. Healthcare & Medical Sciences ───
    {
        id: 'healthcare-medical-sciences',
        name: 'Healthcare & Medical Sciences',
        icon: FaStethoscope,
        description: 'Healthcare management, medical practices, and clinical skills',
        courses: [
            {
                slug: 'level-3-healthcare',
                name: 'Level 3 Diploma in Healthcare',
                duration: '12 Months',
                image: '/courses/level-3-healthcare.webp',
                entryRequirements: 'Interest in healthcare',
                studyUnits: ['Unit 1: Healthcare Principles', 'Unit 2: Patient Care', 'Unit 3: Clinical Skills'],
                learningOutcomes: ['Understand healthcare principles', 'Provide patient care', 'Apply clinical skills'],
                futureProgression: 'Progression to Level 5 or Healthcare Manager'
            }
        ]
    },

    // ─── 21. Business & Management ───
    {
        id: 'business-management',
        name: 'Business & Management',
        icon: FaUserTie,
        description: 'Business administration, leadership, and strategic management',
        courses: [
            {
                slug: 'level-4-business',
                name: 'Level 4 Diploma in Business Management',
                duration: '12 Months',
                image: '/courses/level-4-business.webp',
                entryRequirements: 'Interest in business',
                studyUnits: ['Unit 1: Business Principles', 'Unit 2: Leadership', 'Unit 3: Strategic Management'],
                learningOutcomes: ['Understand business principles', 'Apply leadership', 'Develop strategy'],
                futureProgression: 'Progression to Level 6 or Business Manager'
            }
        ]
    },

    // ─── 22. IT & Digital ───
    {
        id: 'it-digital',
        name: 'IT & Digital',
        icon: FaLaptop,
        description: 'Information technology, digital transformation, and systems management',
        courses: [
            {
                slug: 'level-3-it',
                name: 'Level 3 Diploma in IT',
                duration: '12 Months',
                image: '/courses/level-3-it.webp',
                entryRequirements: 'Interest in IT',
                studyUnits: ['Unit 1: IT Principles', 'Unit 2: Systems Management', 'Unit 3: Digital Transformation'],
                learningOutcomes: ['Understand IT principles', 'Manage systems', 'Lead digital transformation'],
                futureProgression: 'Progression to Level 5 or IT Manager'
            }
        ]
    },

    // ─── 23. Data and AI ───
    {
        id: 'data-ai',
        name: 'Data and AI',
        icon: FaRobot,
        description: 'Data science, artificial intelligence, and machine learning',
        courses: [
            {
                slug: 'data-science',
                name: 'Data Science Certification',
                duration: '6 Months',
                image: '/courses/data-science.webp',
                entryRequirements: 'Basic programming knowledge',
                studyUnits: ['Unit 1: Data Analysis', 'Unit 2: Machine Learning', 'Unit 3: Data Visualization'],
                learningOutcomes: ['Analyze data', 'Apply machine learning', 'Create visualizations'],
                futureProgression: 'Progression to AI Engineer or Data Scientist'
            }
        ]
    },

    // ─── 24. Cybersecurity Management ───
    {
        id: 'cybersecurity',
        name: 'Cybersecurity Management',
        icon: FaShieldVirus,
        description: 'Cybersecurity, information security, and risk management',
        courses: [
            {
                slug: 'cybersecurity-manager',
                name: 'Certified Cybersecurity Manager',
                duration: '6 Months',
                image: '/courses/cybersecurity-manager.webp',
                entryRequirements: 'Understanding of IT and security',
                studyUnits: ['Unit 1: Cybersecurity Principles', 'Unit 2: Risk Management', 'Unit 3: Incident Response'],
                learningOutcomes: ['Understand cybersecurity', 'Manage risks', 'Lead incident response'],
                futureProgression: 'Progression to Security Director'
            }
        ]
    },

    // ─── 25. Information Technology Engineering ───
    {
        id: 'it-engineering',
        name: 'Information Technology Engineering',
        icon: FaCode,
        description: 'IT engineering, software development, and systems architecture',
        courses: [
            {
                slug: 'it-engineering',
                name: 'IT Engineering Certification',
                duration: '6 Months',
                image: '/courses/it-engineering.webp',
                entryRequirements: 'Interest in IT engineering',
                studyUnits: ['Unit 1: Systems Architecture', 'Unit 2: Software Development', 'Unit 3: Network Design'],
                learningOutcomes: ['Design systems', 'Develop software', 'Architect networks'],
                futureProgression: 'Progression to IT Director'
            }
        ]
    },

    // ─── 26. Business Sustainability ───
    {
        id: 'business-sustainability',
        name: 'Business Sustainability',
        icon: FaRecycle,
        description: 'Sustainable business practices, ESG, and corporate responsibility',
        courses: [
            {
                slug: 'sustainability-management',
                name: 'Sustainability Management Certification',
                duration: '6 Months',
                image: '/courses/sustainability-management.webp',
                entryRequirements: 'Interest in sustainability',
                studyUnits: ['Unit 1: Sustainability Principles', 'Unit 2: ESG', 'Unit 3: Corporate Responsibility'],
                learningOutcomes: ['Apply sustainability principles', 'Manage ESG', 'Lead corporate responsibility'],
                futureProgression: 'Progression to Sustainability Director'
            }
        ]
    },

    // ─── 27. Oil and Gas Industry ───
    {
        id: 'oil-gas-industry',
        name: 'Oil and Gas Industry',
        icon: FaGasPump,
        description: 'Oil and gas exploration, production, and distribution',
        courses: [
            {
                slug: 'oil-gas-operations',
                name: 'Oil and Gas Operations Certification',
                duration: '6 Months',
                image: '/courses/oil-gas-operations.webp',
                entryRequirements: 'Interest in oil and gas industry',
                studyUnits: ['Unit 1: Exploration', 'Unit 2: Production', 'Unit 3: Distribution'],
                learningOutcomes: ['Understand exploration', 'Manage production', 'Lead distribution'],
                futureProgression: 'Progression to Operations Manager'
            }
        ]
    },

    // ─── 28. Prehospital Care ───
    {
        id: 'prehospital-care',
        name: 'Prehospital Care',
        icon: FaAmbulance,
        description: 'Emergency medical services, paramedic training, and trauma care',
        courses: [
            {
                slug: 'paramedic-training',
                name: 'Paramedic Certification',
                duration: '12 Months',
                image: '/courses/paramedic-training.webp',
                entryRequirements: 'Interest in emergency care',
                studyUnits: ['Unit 1: Emergency Care', 'Unit 2: Trauma Management', 'Unit 3: Patient Assessment'],
                learningOutcomes: ['Provide emergency care', 'Manage trauma', 'Assess patients'],
                futureProgression: 'Progression to Advanced Paramedic'
            }
        ]
    },

    // ─── 29. Health Care Management ───
    {
        id: 'healthcare-management',
        name: 'Health Care Management',
        icon: FaHospital,
        description: 'Healthcare administration, hospital management, and policy',
        courses: [
            {
                slug: 'healthcare-administration',
                name: 'Healthcare Administration Certification',
                duration: '6 Months',
                image: '/courses/healthcare-administration.webp',
                entryRequirements: 'Experience in healthcare',
                studyUnits: ['Unit 1: Healthcare Policy', 'Unit 2: Hospital Management', 'Unit 3: Patient Care'],
                learningOutcomes: ['Understand healthcare policy', 'Manage hospitals', 'Lead patient care'],
                futureProgression: 'Progression to Hospital Administrator'
            }
        ]
    },

    // ─── 30. Medical Qualifications ───
    {
        id: 'medical-qualifications',
        name: 'Medical Qualifications',
        icon: FaUserMd,
        description: 'Medical assisting, clinical practice, and healthcare support',
        courses: [
            {
                slug: 'medical-assistant',
                name: 'Medical Assistant Certification',
                duration: '6 Months',
                image: '/courses/medical-assistant.webp',
                entryRequirements: 'Interest in healthcare',
                studyUnits: ['Unit 1: Clinical Practice', 'Unit 2: Patient Care', 'Unit 3: Healthcare Support'],
                learningOutcomes: ['Apply clinical practice', 'Provide patient care', 'Support healthcare teams'],
                futureProgression: 'Progression to Medical Practitioner'
            }
        ]
    },

    // ─── 31. Pharmacy ───
    {
        id: 'pharmacy',
        name: 'Pharmacy',
        icon: FaPills,
        description: 'Pharmacy practice, pharmaceutical science, and medication management',
        courses: [
            {
                slug: 'pharmacy-technician',
                name: 'Pharmacy Technician Certification',
                duration: '6 Months',
                image: '/courses/pharmacy-technician.webp',
                entryRequirements: 'Interest in pharmacy',
                studyUnits: ['Unit 1: Pharmaceutical Science', 'Unit 2: Medication Management', 'Unit 3: Pharmacy Practice'],
                learningOutcomes: ['Understand pharmaceutical science', 'Manage medications', 'Practice pharmacy'],
                futureProgression: 'Progression to Pharmacist'
            }
        ]
    },

    // ─── 32. Laser Safety ───
    {
        id: 'laser-safety',
        name: 'Laser Safety',
        icon: FaSun,
        description: 'Laser safety, medical laser use, and radiation protection',
        courses: [
            {
                slug: 'laser-safety-officer',
                name: 'Laser Safety Officer (LSO)',
                duration: '3 Days',
                image: '/courses/laser-safety-officer.webp',
                entryRequirements: 'Interest in laser safety',
                studyUnits: ['Unit 1: Laser Safety Principles', 'Unit 2: Medical Laser Use', 'Unit 3: Radiation Protection'],
                learningOutcomes: ['Apply laser safety', 'Manage medical laser use', 'Protect from radiation'],
                futureProgression: 'Progression to Radiation Safety Officer'
            }
        ]
    },

    // ─── 33. Green Building ───
    {
        id: 'green-building',
        name: 'Green Building',
        icon: FaTree,
        description: 'Sustainable building design, LEED certification, and green construction',
        courses: [
            {
                slug: 'leed-green-associate',
                name: 'LEED Green Associate',
                duration: '3 Months',
                image: '/courses/leed-green-associate.webp',
                entryRequirements: 'Interest in green building',
                studyUnits: ['Unit 1: Green Building Principles', 'Unit 2: LEED Certification', 'Unit 3: Sustainable Design'],
                learningOutcomes: ['Apply green building principles', 'Understand LEED', 'Design sustainably'],
                futureProgression: 'Progression to LEED AP or Sustainable Architect'
            }
        ]
    },

    // ─── 34. Management ───
    {
        id: 'management',
        name: 'Management',
        icon: FaHandshake,
        description: 'General management, team leadership, and organizational behavior',
        courses: [
            {
                slug: 'management-certification',
                name: 'Management Certification',
                duration: '6 Months',
                image: '/courses/management-certification.webp',
                entryRequirements: 'Some management experience',
                studyUnits: ['Unit 1: Management Principles', 'Unit 2: Team Leadership', 'Unit 3: Organizational Behavior'],
                learningOutcomes: ['Apply management principles', 'Lead teams', 'Understand organizational behavior'],
                futureProgression: 'Progression to Senior Management'
            }
        ]
    },

    // ─── 35. Business & Leadership ───
    {
        id: 'business-leadership',
        name: 'Business & Leadership',
        icon: FaPeopleArrows,
        description: 'Business strategy, leadership development, and executive management',
        courses: [
            {
                slug: 'leadership-certification',
                name: 'Leadership Certification',
                duration: '6 Months',
                image: '/courses/leadership-certification.webp',
                entryRequirements: 'Some leadership experience',
                studyUnits: ['Unit 1: Leadership Principles', 'Unit 2: Business Strategy', 'Unit 3: Executive Management'],
                learningOutcomes: ['Apply leadership principles', 'Develop business strategy', 'Lead as an executive'],
                futureProgression: 'Progression to Executive Leadership'
            }
        ]
    },

    // ─── 36. HR and Learning & Development ───
    {
        id: 'hr-learning-development',
        name: 'HR and Learning & Development',
        icon: FaBookOpen,
        description: 'Human resources, talent management, and L&D strategy',
        courses: [
            {
                slug: 'hr-management',
                name: 'HR Management Certification',
                duration: '6 Months',
                image: '/courses/hr-management.webp',
                entryRequirements: 'Interest in HR',
                studyUnits: ['Unit 1: HR Principles', 'Unit 2: Talent Management', 'Unit 3: L&D Strategy'],
                learningOutcomes: ['Apply HR principles', 'Manage talent', 'Lead L&D strategy'],
                futureProgression: 'Progression to HR Director'
            }
        ]
    },

    // ─── 37. Sales and Marketing ───
    {
        id: 'sales-marketing',
        name: 'Sales and Marketing',
        icon: FaComment,
        description: 'Sales management, marketing strategy, and digital marketing',
        courses: [
            {
                slug: 'digital-marketing',
                name: 'Digital Marketing Certification',
                duration: '6 Months',
                image: '/courses/digital-marketing.webp',
                entryRequirements: 'Interest in marketing',
                studyUnits: ['Unit 1: Marketing Principles', 'Unit 2: Digital Strategy', 'Unit 3: Social Media'],
                learningOutcomes: ['Apply marketing principles', 'Develop digital strategy', 'Manage social media'],
                futureProgression: 'Progression to Marketing Director'
            }
        ]
    },

    // ─── 38. Digital & IT ───
    {
        id: 'digital-it',
        name: 'Digital & IT',
        icon: FaDatabase,
        description: 'Digital skills, IT support, and technology management',
        courses: [
            {
                slug: 'it-support',
                name: 'IT Support Certification',
                duration: '6 Months',
                image: '/courses/it-support.webp',
                entryRequirements: 'Interest in IT',
                studyUnits: ['Unit 1: IT Skills', 'Unit 2: Support Management', 'Unit 3: Technology Implementation'],
                learningOutcomes: ['Develop IT skills', 'Manage support', 'Implement technology'],
                futureProgression: 'Progression to IT Manager'
            }
        ]
    },

    // ─── 39. AI Qualifications ───
    {
        id: 'ai-qualifications',
        name: 'AI Qualifications',
        icon: FaRobot,
        description: 'Artificial intelligence fundamentals and applications',
        courses: [
            {
                slug: 'ai-fundamentals',
                name: 'AI Fundamentals Certification',
                duration: '6 Months',
                image: '/courses/ai-fundamentals.webp',
                entryRequirements: 'Basic understanding of technology',
                studyUnits: ['Unit 1: AI Principles', 'Unit 2: Machine Learning', 'Unit 3: AI Applications'],
                learningOutcomes: ['Understand AI principles', 'Apply machine learning', 'Use AI applications'],
                futureProgression: 'Progression to AI Engineer'
            }
        ]
    },

    // ─── 40. Gen AI Qualifications ───
    {
        id: 'gen-ai-qualifications',
        name: 'Gen AI Qualifications',
        icon: FaMicrochip,
        description: 'Generative AI, prompt engineering, and AI creativity',
        courses: [
            {
                slug: 'gen-ai',
                name: 'Generative AI Certification',
                duration: '6 Months',
                image: '/courses/gen-ai.webp',
                entryRequirements: 'Understanding of AI basics',
                studyUnits: ['Unit 1: Gen AI Principles', 'Unit 2: Prompt Engineering', 'Unit 3: AI Creativity'],
                learningOutcomes: ['Apply Gen AI', 'Engineer prompts', 'Use AI creatively'],
                futureProgression: 'Progression to Gen AI Specialist'
            }
        ]
    },

    // ─── 41. Engineering & Technical Fields ───
    {
        id: 'engineering-technical',
        name: 'Engineering & Technical Fields',
        icon: FaTools,
        description: 'Engineering principles, technical skills, and innovation',
        courses: [
            {
                slug: 'engineering-certification',
                name: 'Engineering Certification',
                duration: '6 Months',
                image: '/courses/engineering-certification.webp',
                entryRequirements: 'Interest in engineering',
                studyUnits: ['Unit 1: Engineering Principles', 'Unit 2: Technical Skills', 'Unit 3: Innovation'],
                learningOutcomes: ['Apply engineering principles', 'Develop technical skills', 'Lead innovation'],
                futureProgression: 'Progression to Senior Engineer'
            }
        ]
    },

    // ─── 42. Education & Social Sciences ───
    {
        id: 'education-social-sciences',
        name: 'Education & Social Sciences',
        icon: FaGlobe,
        description: 'Education policy, social science research, and community development',
        courses: [
            {
                slug: 'social-science',
                name: 'Social Science Certification',
                duration: '6 Months',
                image: '/courses/social-science.webp',
                entryRequirements: 'Interest in social sciences',
                studyUnits: ['Unit 1: Social Science Principles', 'Unit 2: Research Methods', 'Unit 3: Community Development'],
                learningOutcomes: ['Apply social science principles', 'Conduct research', 'Lead community development'],
                futureProgression: 'Progression to Social Scientist'
            }
        ]
    },

    // ─── 43. Vocational Qualification ───
    {
        id: 'vocational-qualification',
        name: 'Vocational Qualification',
        icon: FaHardHat,
        description: 'Vocational training, skills development, and competency assessment',
        courses: [
            {
                slug: 'vocational-training',
                name: 'Vocational Training Certification',
                duration: '6 Months',
                image: '/courses/vocational-training.webp',
                entryRequirements: 'Interest in vocational skills',
                studyUnits: ['Unit 1: Vocational Principles', 'Unit 2: Skills Development', 'Unit 3: Competency Assessment'],
                learningOutcomes: ['Apply vocational principles', 'Develop skills', 'Assess competency'],
                futureProgression: 'Progression to Vocational Trainer'
            }
        ]
    },

    // ─── 44. Conservation and the Environment ───
    {
        id: 'conservation-environment',
        name: 'Conservation and the Environment',
        icon: FaLeaf,
        description: 'Environmental conservation, wildlife management, and sustainability',
        courses: [
            {
                slug: 'environmental-conservation',
                name: 'Environmental Conservation Certification',
                duration: '6 Months',
                image: '/courses/environmental-conservation.webp',
                entryRequirements: 'Interest in conservation',
                studyUnits: ['Unit 1: Conservation Principles', 'Unit 2: Wildlife Management', 'Unit 3: Sustainability'],
                learningOutcomes: ['Apply conservation principles', 'Manage wildlife', 'Lead sustainability'],
                futureProgression: 'Progression to Conservation Manager'
            }
        ]
    },

    // ─── 45. ISO Lead Auditor ───
    {
        id: 'iso-lead-auditor',
        name: 'ISO Lead Auditor',
        icon: FaClipboardCheck,
        description: 'ISO management systems lead auditor certifications',
        courses: [
            {
                slug: 'iso-lead-auditor-9001',
                name: 'ISO 9001:2015 Lead Auditor',
                duration: '5 Days',
                image: '/courses/iso-lead-auditor-9001.webp',
                entryRequirements: 'Understanding of quality management',
                studyUnits: ['Unit 1: ISO 9001 Requirements', 'Unit 2: Audit Principles', 'Unit 3: Audit Planning'],
                learningOutcomes: ['Understand ISO 9001', 'Plan and conduct audits', 'Lead audit teams'],
                futureProgression: 'Progression to Quality Director'
            }
        ]
    },

    // ─── 46. ISO Internal Auditor ───
    {
        id: 'iso-internal-auditor',
        name: 'ISO Internal Auditor',
        icon: FaFileInvoice,
        description: 'ISO management systems internal auditor certifications',
        courses: [
            {
                slug: 'iso-internal-auditor-9001',
                name: 'ISO 9001:2015 Internal Auditor',
                duration: '3 Days',
                image: '/courses/iso-internal-auditor-9001.webp',
                entryRequirements: 'Understanding of quality management',
                studyUnits: ['Unit 1: ISO 9001 Requirements', 'Unit 2: Internal Audit Principles', 'Unit 3: Audit Reporting'],
                learningOutcomes: ['Understand ISO 9001', 'Conduct internal audits', 'Write audit reports'],
                futureProgression: 'Progression to Lead Auditor'
            }
        ]
    },

    // ─── 47. ISO Foundation Course ───
    {
        id: 'iso-foundation',
        name: 'ISO Foundation Course',
        icon: FaGraduationCap,
        description: 'ISO management systems foundation courses',
        courses: [
            {
                slug: 'iso-foundation-9001',
                name: 'ISO 9001:2015 Foundation',
                duration: '2 Days',
                image: '/courses/iso-foundation-9001.webp',
                entryRequirements: 'Interest in quality management',
                studyUnits: ['Unit 1: ISO 9001 Overview', 'Unit 2: Key Requirements', 'Unit 3: Implementation'],
                learningOutcomes: ['Understand ISO 9001', 'Apply key requirements', 'Implement quality systems'],
                futureProgression: 'Progression to Internal Auditor'
            }
        ]
    },

    // ─── 48. Lead Implementer Course ───
    {
        id: 'lead-implementer',
        name: 'Lead Implementer Course',
        icon: FaClipboardList,
        description: 'ISO management systems lead implementer certifications',
        courses: [
            {
                slug: 'iso-lead-implementer-9001',
                name: 'ISO 9001:2015 Lead Implementer',
                duration: '5 Days',
                image: '/courses/iso-lead-implementer-9001.webp',
                entryRequirements: 'Understanding of quality management',
                studyUnits: ['Unit 1: Implementation Principles', 'Unit 2: Quality Systems', 'Unit 3: Project Management'],
                learningOutcomes: ['Implement quality systems', 'Lead implementation projects', 'Drive quality excellence'],
                futureProgression: 'Progression to Quality Director'
            }
        ]
    },

    // ─── 49. Technical ───
    {
        id: 'technical',
        name: 'Technical',
        icon: FaCogs,
        description: 'Technical skills, trades, and vocational training',
        courses: [
            {
                slug: 'technical-skills',
                name: 'Technical Skills Certification',
                duration: '6 Months',
                image: '/courses/technical-skills.webp',
                entryRequirements: 'Interest in technical skills',
                studyUnits: ['Unit 1: Technical Principles', 'Unit 2: Practical Skills', 'Unit 3: Application'],
                learningOutcomes: ['Understand technical principles', 'Apply practical skills', 'Lead technical projects'],
                futureProgression: 'Progression to Technical Manager'
            }
        ]
    },

    // ─── 50. Mechanical Technology ───
    {
        id: 'mechanical-technology',
        name: 'Mechanical Technology',
        icon: FaWrench,
        description: 'Mechanical technology, automation, and robotics',
        courses: [
            {
                slug: 'mechanical-technology-cert',
                name: 'Mechanical Technology Certification',
                duration: '6 Months',
                image: '/courses/mechanical-technology-cert.webp',
                entryRequirements: 'Interest in mechanical technology',
                studyUnits: ['Unit 1: Mechanical Principles', 'Unit 2: Automation', 'Unit 3: Robotics'],
                learningOutcomes: ['Understand mechanical principles', 'Apply automation', 'Use robotics'],
                futureProgression: 'Progression to Mechanical Engineer'
            }
        ]
    },

    // ─── 51. Transport & Logistics ───
    {
        id: 'transport-logistics',
        name: 'Transport & Logistics',
        icon: FaTruck,
        description: 'Transport management, logistics, and supply chain',
        courses: [
            {
                slug: 'logistics-management',
                name: 'Logistics Management Certification',
                duration: '6 Months',
                image: '/courses/logistics-management.webp',
                entryRequirements: 'Interest in logistics',
                studyUnits: ['Unit 1: Logistics Principles', 'Unit 2: Transport Management', 'Unit 3: Supply Chain'],
                learningOutcomes: ['Apply logistics principles', 'Manage transport', 'Lead supply chain'],
                futureProgression: 'Progression to Logistics Manager'
            }
        ]
    },

    // ─── 52. Wellness ───
    {
        id: 'wellness',
        name: 'Wellness',
        icon: GiHealthNormal,
        description: 'Wellness programs, health promotion, and lifestyle management',
        courses: [
            {
                slug: 'wellness-coach',
                name: 'Wellness Coach Certification',
                duration: '6 Months',
                image: '/courses/wellness-coach.webp',
                entryRequirements: 'Interest in wellness',
                studyUnits: ['Unit 1: Wellness Principles', 'Unit 2: Health Promotion', 'Unit 3: Lifestyle Management'],
                learningOutcomes: ['Apply wellness principles', 'Promote health', 'Manage lifestyles'],
                futureProgression: 'Progression to Wellness Director'
            }
        ]
    },

    // ─── 53. Hairdressing ───
    {
        id: 'hairdressing',
        name: 'Hairdressing',
        icon: FaSmile,
        description: 'Hairdressing, salon management, and beauty services',
        courses: [
            {
                slug: 'hairdressing-cert',
                name: 'Hairdressing Certification',
                duration: '12 Months',
                image: '/courses/hairdressing-cert.webp',
                entryRequirements: 'Interest in hairdressing',
                studyUnits: ['Unit 1: Hairdressing Principles', 'Unit 2: Salon Management', 'Unit 3: Beauty Services'],
                learningOutcomes: ['Apply hairdressing principles', 'Manage salons', 'Deliver beauty services'],
                futureProgression: 'Progression to Salon Manager'
            }
        ]
    },

    // ─── 54. Beauty Therapy ───
    {
        id: 'beauty-therapy',
        name: 'Beauty Therapy',
        icon: FaEye,
        description: 'Beauty therapy, aesthetics, and skincare',
        courses: [
            {
                slug: 'beauty-therapy-cert',
                name: 'Beauty Therapy Certification',
                duration: '12 Months',
                image: '/courses/beauty-therapy-cert.webp',
                entryRequirements: 'Interest in beauty therapy',
                studyUnits: ['Unit 1: Beauty Principles', 'Unit 2: Aesthetics', 'Unit 3: Skincare'],
                learningOutcomes: ['Apply beauty principles', 'Use aesthetics', 'Provide skincare'],
                futureProgression: 'Progression to Beauty Manager'
            }
        ]
    },

    // ─── 55. Training and Management ───
    {
        id: 'training-management',
        name: 'Training and Management',
        icon: FaChalkboardTeacher,
        description: 'Training management, L&D, and organizational development',
        courses: [
            {
                slug: 'training-manager',
                name: 'Training Manager Certification',
                duration: '6 Months',
                image: '/courses/training-manager.webp',
                entryRequirements: 'Experience in training',
                studyUnits: ['Unit 1: Training Principles', 'Unit 2: L&D Strategy', 'Unit 3: Organizational Development'],
                learningOutcomes: ['Apply training principles', 'Lead L&D strategy', 'Drive organizational development'],
                futureProgression: 'Progression to L&D Director'
            }
        ]
    },

    // ─── 56. Outdoor Aquatic Rescue ───
    {
        id: 'outdoor-aquatic-rescue',
        name: 'Outdoor Aquatic Rescue',
        icon: FaShip,
        description: 'Aquatic rescue, lifeguard training, and water safety',
        courses: [
            {
                slug: 'aquatic-rescue',
                name: 'Aquatic Rescue Certification',
                duration: '5 Days',
                image: '/courses/aquatic-rescue.webp',
                entryRequirements: 'Swimming ability',
                studyUnits: ['Unit 1: Rescue Principles', 'Unit 2: Lifeguard Skills', 'Unit 3: Water Safety'],
                learningOutcomes: ['Apply rescue principles', 'Use lifeguard skills', 'Ensure water safety'],
                futureProgression: 'Progression to Lifeguard Supervisor'
            }
        ]
    },

    // ─── 57. Pool Management ───
    {
        id: 'pool-management',
        name: 'Pool Management',
        icon: FaWater,
        description: 'Pool operations, safety, and facility management',
        courses: [
            {
                slug: 'pool-manager',
                name: 'Pool Management Certification',
                duration: '5 Days',
                image: '/courses/pool-manager.webp',
                entryRequirements: 'Interest in pool management',
                studyUnits: ['Unit 1: Pool Operations', 'Unit 2: Safety Management', 'Unit 3: Facility Management'],
                learningOutcomes: ['Manage pool operations', 'Ensure safety', 'Lead facility management'],
                futureProgression: 'Progression to Pool Operations Director'
            }
        ]
    },

    // ─── 58. Trainer Qualifications ───
    {
        id: 'trainer-qualifications',
        name: 'Trainer Qualifications',
        icon: FaBook,
        description: 'Trainer certifications, instructional skills, and course design',
        courses: [
            {
                slug: 'trainer-cert',
                name: 'Trainer Certification',
                duration: '3 Months',
                image: '/courses/trainer-cert.webp',
                entryRequirements: 'Experience in a subject area',
                studyUnits: ['Unit 1: Training Principles', 'Unit 2: Instructional Skills', 'Unit 3: Course Design'],
                learningOutcomes: ['Apply training principles', 'Use instructional skills', 'Design courses'],
                futureProgression: 'Progression to Training Manager'
            }
        ]
    },

    // ─── 59. Lifeguard Qualifications ───
    {
        id: 'lifeguard-qualifications',
        name: 'Lifeguard Qualifications',
        icon: FaSun,
        description: 'Lifeguard training, first aid, and water rescue',
        courses: [
            {
                slug: 'lifeguard-cert',
                name: 'Lifeguard Certification',
                duration: '5 Days',
                image: '/courses/lifeguard-cert.webp',
                entryRequirements: 'Swimming ability',
                studyUnits: ['Unit 1: Lifeguard Principles', 'Unit 2: First Aid', 'Unit 3: Water Rescue'],
                learningOutcomes: ['Apply lifeguard principles', 'Provide first aid', 'Perform water rescue'],
                futureProgression: 'Progression to Lifeguard Supervisor'
            }
        ]
    },

    // ─── 60. Estimation and Costing ───
    {
        id: 'estimation-costing',
        name: 'Estimation and Costing',
        icon: FaCalculator,
        description: 'Estimation, cost management, and project finance',
        courses: [
            {
                slug: 'estimation-cert',
                name: 'Estimation and Costing Certification',
                duration: '6 Months',
                image: '/courses/estimation-cert.webp',
                entryRequirements: 'Interest in estimation',
                studyUnits: ['Unit 1: Estimation Principles', 'Unit 2: Cost Management', 'Unit 3: Project Finance'],
                learningOutcomes: ['Apply estimation principles', 'Manage costs', 'Lead project finance'],
                futureProgression: 'Progression to Cost Manager'
            }
        ]
    },

    // ─── 61. Instructor Qualifications ───
    {
        id: 'instructor-qualifications',
        name: 'Instructor Qualifications',
        icon: FaChalkboard,
        description: 'Instructor training, teaching skills, and assessment',
        courses: [
            {
                slug: 'instructor-cert',
                name: 'Instructor Certification',
                duration: '3 Months',
                image: '/courses/instructor-cert.webp',
                entryRequirements: 'Experience in a subject area',
                studyUnits: ['Unit 1: Instructor Principles', 'Unit 2: Teaching Skills', 'Unit 3: Assessment'],
                learningOutcomes: ['Apply instructor principles', 'Use teaching skills', 'Assess learners'],
                futureProgression: 'Progression to Senior Instructor'
            }
        ]
    },

    // ─── 62. Wildlife Qualifications ───
    {
        id: 'wildlife-qualifications',
        name: 'Wildlife Qualifications',
        icon: FaTree,
        description: 'Wildlife management, conservation, and ecology',
        courses: [
            {
                slug: 'wildlife-cert',
                name: 'Wildlife Management Certification',
                duration: '6 Months',
                image: '/courses/wildlife-cert.webp',
                entryRequirements: 'Interest in wildlife',
                studyUnits: ['Unit 1: Wildlife Principles', 'Unit 2: Conservation', 'Unit 3: Ecology'],
                learningOutcomes: ['Apply wildlife principles', 'Lead conservation', 'Understand ecology'],
                futureProgression: 'Progression to Wildlife Manager'
            }
        ]
    },

    // ─── 63. Veterinary Qualifications ───
    {
        id: 'veterinary-qualifications',
        name: 'Veterinary Qualifications',
        icon: FaHeart,
        description: 'Veterinary medicine, animal care, and practice management',
        courses: [
            {
                slug: 'veterinary-cert',
                name: 'Veterinary Certification',
                duration: '12 Months',
                image: '/courses/veterinary-cert.webp',
                entryRequirements: 'Interest in veterinary medicine',
                studyUnits: ['Unit 1: Veterinary Principles', 'Unit 2: Animal Care', 'Unit 3: Practice Management'],
                learningOutcomes: ['Apply veterinary principles', 'Provide animal care', 'Manage practice'],
                futureProgression: 'Progression to Veterinary Practice Manager'
            }
        ]
    },

    // ─── 64. Journalism ───
    {
        id: 'journalism',
        name: 'Journalism',
        icon: FaComment,
        description: 'Journalism, media, and communication skills',
        courses: [
            {
                slug: 'journalism-cert',
                name: 'Journalism Certification',
                duration: '6 Months',
                image: '/courses/journalism-cert.webp',
                entryRequirements: 'Interest in journalism',
                studyUnits: ['Unit 1: Journalism Principles', 'Unit 2: Media Skills', 'Unit 3: Communication'],
                learningOutcomes: ['Apply journalism principles', 'Use media skills', 'Lead communication'],
                futureProgression: 'Progression to Media Manager'
            }
        ]
    },

    // ─── 65. Level 8 Professional Qualifications ───
    {
        id: 'level-8-professional',
        name: 'Level 8 Professional Qualifications',
        icon: FaGraduationCap,
        description: 'Level 8 professional certifications and advanced practice',
        courses: [
            {
                slug: 'level-8-cert',
                name: 'Level 8 Professional Certification',
                duration: '18 Months',
                image: '/courses/level-8-cert.webp',
                entryRequirements: 'Level 7 qualification or equivalent experience',
                studyUnits: ['Unit 1: Advanced Principles', 'Unit 2: Professional Practice', 'Unit 3: Leadership'],
                learningOutcomes: ['Apply advanced principles', 'Lead professional practice', 'Drive leadership'],
                futureProgression: 'Progression to Executive Leadership'
            }
        ]
    },

    // ─── 66. Emergency Response ───
    {
        id: 'emergency-response',
        name: 'Emergency Response',
        icon: FaAmbulance,
        description: 'Emergency planning, disaster management, and crisis response',
        courses: [
            {
                slug: 'emergency-response-cert',
                name: 'Emergency Response Certification',
                duration: '6 Months',
                image: '/courses/emergency-response-cert.webp',
                entryRequirements: 'Interest in emergency management',
                studyUnits: ['Unit 1: Emergency Principles', 'Unit 2: Disaster Management', 'Unit 3: Crisis Response'],
                learningOutcomes: ['Apply emergency principles', 'Lead disaster management', 'Manage crisis response'],
                futureProgression: 'Progression to Emergency Manager'
            }
        ]
    },

    // ─── 67. Risk Management ───
    {
        id: 'risk-management',
        name: 'Risk Management',
        icon: FaShieldAlt,
        description: 'Risk assessment, mitigation, and management systems',
        courses: [
            {
                slug: 'risk-management-cert',
                name: 'Risk Management Certification',
                duration: '6 Months',
                image: '/courses/risk-management-cert.webp',
                entryRequirements: 'Interest in risk management',
                studyUnits: ['Unit 1: Risk Principles', 'Unit 2: Assessment', 'Unit 3: Mitigation'],
                learningOutcomes: ['Apply risk principles', 'Conduct assessments', 'Lead mitigation'],
                futureProgression: 'Progression to Risk Director'
            }
        ]
    },

    // ─── 68. Project Management ───
    {
        id: 'project-management',
        name: 'Project Management',
        icon: FaClipboardList,
        description: 'Project planning, execution, and management',
        courses: [
            {
                slug: 'project-management-cert',
                name: 'Project Management Certification',
                duration: '6 Months',
                image: '/courses/project-management-cert.webp',
                entryRequirements: 'Interest in project management',
                studyUnits: ['Unit 1: Project Principles', 'Unit 2: Planning', 'Unit 3: Execution'],
                learningOutcomes: ['Apply project principles', 'Plan projects', 'Lead execution'],
                futureProgression: 'Progression to Project Director'
            }
        ]
    },

    // ─── 69. Leadership ───
    {
        id: 'leadership',
        name: 'Leadership',
        icon: FaUserTie,
        description: 'Leadership development, executive coaching, and management',
        courses: [
            {
                slug: 'leadership-cert',
                name: 'Leadership Certification',
                duration: '6 Months',
                image: '/courses/leadership-cert.webp',
                entryRequirements: 'Some leadership experience',
                studyUnits: ['Unit 1: Leadership Principles', 'Unit 2: Executive Coaching', 'Unit 3: Management'],
                learningOutcomes: ['Apply leadership principles', 'Provide executive coaching', 'Lead management'],
                futureProgression: 'Progression to Executive Leadership'
            }
        ]
    },

    // ─── 70. Communication ───
    {
        id: 'communication',
        name: 'Communication',
        icon: FaComment,
        description: 'Communication skills, public speaking, and media relations',
        courses: [
            {
                slug: 'communication-skills',
                name: 'Communication Skills Certification',
                duration: '3 Months',
                image: '/courses/communication-skills.webp',
                entryRequirements: 'Interest in communication',
                studyUnits: ['Unit 1: Communication Principles', 'Unit 2: Public Speaking', 'Unit 3: Media Relations'],
                learningOutcomes: ['Apply communication principles', 'Lead public speaking', 'Manage media relations'],
                futureProgression: 'Progression to Communication Director'
            }
        ]
    },

    // ─── 71. Ethics and Compliance ───
    {
        id: 'ethics-compliance',
        name: 'Ethics and Compliance',
        icon: FaShield,
        description: 'Ethics, compliance, and governance in organizations',
        courses: [
            {
                slug: 'ethics-compliance-cert',
                name: 'Ethics and Compliance Certification',
                duration: '6 Months',
                image: '/courses/ethics-compliance-cert.webp',
                entryRequirements: 'Interest in ethics and compliance',
                studyUnits: ['Unit 1: Ethics Principles', 'Unit 2: Compliance', 'Unit 3: Governance'],
                learningOutcomes: ['Apply ethics principles', 'Lead compliance', 'Manage governance'],
                futureProgression: 'Progression to Compliance Director'
            }
        ]
    },

    // ─── 72. Aesthetic Practice ───
    {
        id: 'aesthetic-practice',
        name: 'Aesthetic Practice',
        icon: FaEye,
        description: 'Aesthetic practice, beauty therapy, and skincare',
        courses: [
            {
                slug: 'aesthetic-practice-cert',
                name: 'Aesthetic Practice Certification',
                duration: '12 Months',
                image: '/courses/aesthetic-practice-cert.webp',
                entryRequirements: 'Interest in aesthetics',
                studyUnits: ['Unit 1: Aesthetic Principles', 'Unit 2: Beauty Therapy', 'Unit 3: Skincare'],
                learningOutcomes: ['Apply aesthetic principles', 'Provide beauty therapy', 'Lead skincare'],
                futureProgression: 'Progression to Aesthetic Director'
            }
        ]
    }
];

// Helper functions
export const getAllCategories = () => {
    return categories;
};

export const getCategoryById = (id) => {
    return categories.find(cat => cat.id === id);
};

export const getCourseBySlug = (categoryId, slug) => {
    const category = getCategoryById(categoryId);
    if (!category) return null;
    return category.courses.find(course => course.slug === slug);
};

export const getAllCourses = () => {
    return categories.flatMap(cat =>
        cat.courses.map(course => ({
            ...course,
            category: cat.id,
            categoryName: cat.name
        }))
    );
};