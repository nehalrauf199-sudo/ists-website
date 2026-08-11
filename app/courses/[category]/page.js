// app/courses/data/courses.js
// COMPLETE - All 72 Categories with ALL Sub-Courses

import {
    FaShieldAlt, FaHardHat, FaTools,
    FaFire, FaAmbulance, FaBrain, FaClipboardCheck,
    FaCogs, FaLaptop, FaDatabase, FaShield,
    FaHeartbeat, FaAppleAlt, FaCar, FaBuilding,
    FaUserMd, FaBook, FaChalkboardTeacher, FaHandHoldingHeart,
    FaLeaf, FaGlobe, FaWater, FaWind,
    FaSun, FaRecycle, FaTree, FaSeedling,
    FaBolt, FaChargingStation, FaOilCan, FaGasPump,
    FaHardDrive, FaMicrochip, FaRobot, FaCode,
    FaGlobeAsia, FaNetworkWired, FaShieldVirus, FaUserLock,
    FaBookOpen, FaPencilAlt, FaGraduationCap, FaUsers,
    FaClipboardList, FaFileInvoice, FaCalculator, FaRulerCombined,
    FaDraftingCompass, FaWrench, FaHammer, FaHelmetSafety,
    FaWarehouse, FaTruck, FaPlane, FaShip,
    FaTrain, FaSubway, FaBus, FaHospital,
    FaStethoscope, FaSyringe, FaPills, FaTooth,
    FaEye, FaEar, FaBone, FaLaugh,
    FaHeart, FaComment, FaSmile, FaHandshake,
    FaPeopleArrows, FaUserTie, FaBuildingColumns, FaLandmark,
    FaUniversity, FaSchool, FaChalkboard
} from 'react-icons/fa';

export const categories = [
    // ═══════════════════════════════════════════════════
    // 1. TEACHING, ASSESSMENT AND IQA (8 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'teaching-assessment-iqa',
        name: 'Teaching, Assessment and IQA',
        icon: FaChalkboardTeacher,
        description: 'Teaching qualifications, assessment, and internal quality assurance certifications',
        courses: [
            {
                slug: 'level-3-award-education-training',
                name: 'Level 3 Award in Education and Training',
                duration: '3-6 Months',
                image: '/courses/level-3-award-education-training.webp',
                entryRequirements: 'No formal qualifications required',
                studyUnits: ['Unit 1: Understanding Roles and Responsibilities', 'Unit 2: Planning and Delivering Sessions', 'Unit 3: Assessment and Feedback'],
                learningOutcomes: ['Understand teaching roles', 'Plan and deliver lessons', 'Assess learners effectively'],
                futureProgression: 'Progression to Level 4 Certificate in Education and Training'
            },
            {
                slug: 'level-4-cert-education-training',
                name: 'Level 4 Certificate in Education and Training',
                duration: '6-9 Months',
                image: '/courses/level-4-cert-education-training.webp',
                entryRequirements: 'Level 3 Award in Education and Training or equivalent',
                studyUnits: ['Unit 1: Teaching and Learning Approaches', 'Unit 2: Curriculum Design', 'Unit 3: Assessment Practices', 'Unit 4: Professional Development'],
                learningOutcomes: ['Design curricula', 'Apply advanced teaching methods', 'Lead assessment practices'],
                futureProgression: 'Progression to Level 5 Diploma in Education and Training'
            },
            {
                slug: 'level-5-diploma-education-training',
                name: 'Level 5 Diploma in Education and Training',
                duration: '12-18 Months',
                image: '/courses/level-5-diploma-education-training.webp',
                entryRequirements: 'Level 4 Certificate in Education and Training',
                studyUnits: ['Unit 1: Educational Policy', 'Unit 2: Curriculum Development', 'Unit 3: Quality Assurance', 'Unit 4: Education Leadership'],
                learningOutcomes: ['Understand educational policy', 'Lead curriculum development', 'Manage quality assurance', 'Lead educational teams'],
                futureProgression: 'Progression to QTLS or Education Management'
            },
            {
                slug: 'level-3-award-assessing-work-environment',
                name: 'Level 3 Award in Assessing Competence in the Work Environment',
                duration: '2-3 Months',
                image: '/courses/level-3-award-assessing-work-environment.webp',
                entryRequirements: 'Experience in vocational area',
                studyUnits: ['Unit 1: Understanding Assessment', 'Unit 2: Assessing Competence', 'Unit 3: Quality Assurance'],
                learningOutcomes: ['Understand assessment principles', 'Assess workplace competence', 'Maintain quality standards'],
                futureProgression: 'Progression to Level 4 IQA'
            },
            {
                slug: 'level-3-award-assessing-vocationally',
                name: 'Level 3 Award in Assessing Vocationally Related Achievement',
                duration: '2-3 Months',
                image: '/courses/level-3-award-assessing-vocationally.webp',
                entryRequirements: 'Experience in vocational area',
                studyUnits: ['Unit 1: Vocational Assessment', 'Unit 2: Assessment Methods', 'Unit 3: Quality Assurance'],
                learningOutcomes: ['Assess vocational achievement', 'Apply assessment methods', 'Ensure quality standards'],
                futureProgression: 'Progression to Level 4 IQA'
            },
            {
                slug: 'level-3-cert-assessing-achievement',
                name: 'Level 3 Certificate in Assessing Vocational Achievement',
                duration: '3-4 Months',
                image: '/courses/level-3-cert-assessing-achievement.webp',
                entryRequirements: 'Experience in vocational area',
                studyUnits: ['Unit 1: Assessment Principles', 'Unit 2: Assessing Vocational Achievement', 'Unit 3: Quality Management'],
                learningOutcomes: ['Assess vocational achievement', 'Manage assessment processes', 'Ensure quality assurance'],
                futureProgression: 'Progression to Level 4 IQA or Lead Assessor'
            },
            {
                slug: 'level-4-award-internal-quality-assurance',
                name: 'Level 4 Award in Internal Quality Assurance of Assessment',
                duration: '3-4 Months',
                image: '/courses/level-4-award-internal-quality-assurance.webp',
                entryRequirements: 'Level 3 Assessing qualification',
                studyUnits: ['Unit 1: Quality Assurance Principles', 'Unit 2: Internal Verification', 'Unit 3: Standardization'],
                learningOutcomes: ['Understand quality assurance', 'Conduct internal verification', 'Lead standardization'],
                futureProgression: 'Progression to Level 4 Certificate in IQA'
            },
            {
                slug: 'level-4-cert-leading-iqa',
                name: 'Level 4 Certificate in Leading Internal Quality Assurance',
                duration: '4-6 Months',
                image: '/courses/level-4-cert-leading-iqa.webp',
                entryRequirements: 'Level 4 Award in IQA',
                studyUnits: ['Unit 1: Leading IQA', 'Unit 2: Quality Systems', 'Unit 3: Team Leadership', 'Unit 4: External Relations'],
                learningOutcomes: ['Lead IQA teams', 'Manage quality systems', 'Lead teams', 'Manage external relations'],
                futureProgression: 'Progression to EQA or Quality Manager'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 2. ENERGY MANAGEMENT (12 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'energy-management',
        name: 'Energy Management',
        icon: FaBolt,
        description: 'Energy efficiency, renewable solutions, and sustainability certifications',
        courses: [
            {
                slug: 'level-1-energy-awareness',
                name: 'Level 1 Award in Energy Management',
                duration: '1 Day',
                image: '/courses/level-1-energy-awareness.webp',
                entryRequirements: 'No prior experience required',
                studyUnits: ['Unit 1: Energy Awareness', 'Unit 2: Energy Consumption', 'Unit 3: Energy Efficiency'],
                learningOutcomes: ['Understand energy basics', 'Identify energy consumption', 'Apply energy efficiency'],
                futureProgression: 'Progression to Level 2 Award in Energy Management'
            },
            {
                slug: 'level-2-energy-management',
                name: 'Level 2 Award in Energy Management',
                duration: '2 Days',
                image: '/courses/level-2-energy-management.webp',
                entryRequirements: 'Level 1 Energy Management or equivalent',
                studyUnits: ['Unit 1: Energy Management Principles', 'Unit 2: Energy Auditing', 'Unit 3: Energy Efficiency Measures'],
                learningOutcomes: ['Apply energy management principles', 'Conduct energy audits', 'Implement energy efficiency'],
                futureProgression: 'Progression to Level 3 Certified Energy Manager'
            },
            {
                slug: 'level-3-certified-energy-manager',
                name: 'Level 3 Certified Energy Manager',
                duration: '2-3 Months',
                image: '/courses/level-3-certified-energy-manager.webp',
                entryRequirements: 'Level 2 Energy Management or equivalent',
                studyUnits: ['Unit 1: Advanced Energy Management', 'Unit 2: Energy Systems', 'Unit 3: Energy Auditing', 'Unit 4: Energy Projects'],
                learningOutcomes: ['Manage energy programs', 'Analyze energy systems', 'Conduct advanced audits', 'Lead energy projects'],
                futureProgression: 'Progression to Level 4 Diploma'
            },
            {
                slug: 'level-3-energy-sustainable-practices',
                name: 'Level 3 Diploma in Energy Management and Sustainable Practices',
                duration: '6-9 Months',
                image: '/courses/level-3-energy-sustainable-practices.webp',
                entryRequirements: 'Level 2 Energy Management',
                studyUnits: ['Unit 1: Sustainability Principles', 'Unit 2: Energy Management', 'Unit 3: Environmental Impact', 'Unit 4: Sustainable Practices'],
                learningOutcomes: ['Apply sustainability principles', 'Manage energy effectively', 'Assess environmental impact', 'Implement sustainable practices'],
                futureProgression: 'Progression to Level 4 Diploma'
            },
            {
                slug: 'level-4-energy-auditing',
                name: 'Level 4 Diploma in Energy Auditing and Sustainable Energy Systems',
                duration: '9-12 Months',
                image: '/courses/level-4-energy-auditing.webp',
                entryRequirements: 'Level 3 Energy Management',
                studyUnits: ['Unit 1: Energy Auditing', 'Unit 2: Sustainable Energy Systems', 'Unit 3: Energy Modeling', 'Unit 4: Project Management'],
                learningOutcomes: ['Conduct energy audits', 'Design sustainable energy systems', 'Use energy modeling', 'Lead energy projects'],
                futureProgression: 'Progression to Level 5 Diploma'
            },
            {
                slug: 'level-5-energy-management-sustainability',
                name: 'Level 5 Diploma in Energy Management and Sustainability',
                duration: '12-18 Months',
                image: '/courses/level-5-energy-management-sustainability.webp',
                entryRequirements: 'Level 4 Energy Management',
                studyUnits: ['Unit 1: Energy Strategy', 'Unit 2: Sustainability Management', 'Unit 3: Policy Analysis', 'Unit 4: Energy Leadership'],
                learningOutcomes: ['Develop energy strategy', 'Lead sustainability initiatives', 'Analyze policies', 'Lead energy teams'],
                futureProgression: 'Progression to Level 6 Diploma'
            },
            {
                slug: 'level-5-advanced-energy-management',
                name: 'Level 5 Diploma in Advanced Energy Management and Renewable Solutions',
                duration: '12-18 Months',
                image: '/courses/level-5-advanced-energy-management.webp',
                entryRequirements: 'Level 4 Energy Management',
                studyUnits: ['Unit 1: Renewable Technologies', 'Unit 2: Energy Economics', 'Unit 3: Energy Policy', 'Unit 4: Advanced Energy Systems'],
                learningOutcomes: ['Manage renewable technologies', 'Analyze energy economics', 'Understand energy policy', 'Lead advanced energy projects'],
                futureProgression: 'Progression to Level 6 Diploma'
            },
            {
                slug: 'level-6-energy-management',
                name: 'Level 6 Diploma in Energy Management',
                duration: '18-24 Months',
                image: '/courses/level-6-energy-management.webp',
                entryRequirements: 'Level 5 Energy Management',
                studyUnits: ['Unit 1: Strategic Energy Management', 'Unit 2: Energy Economics', 'Unit 3: Energy Policy', 'Unit 4: Energy Leadership'],
                learningOutcomes: ['Lead strategic energy management', 'Analyze energy economics', 'Develop energy policy', 'Lead energy organizations'],
                futureProgression: 'Progression to Level 7 Diploma'
            },
            {
                slug: 'level-7-energy-management',
                name: 'Level 7 Diploma in Energy Management',
                duration: '24-36 Months',
                image: '/courses/level-7-energy-management.webp',
                entryRequirements: 'Level 6 Energy Management',
                studyUnits: ['Unit 1: Global Energy Strategy', 'Unit 2: Energy Policy Development', 'Unit 3: Energy Research', 'Unit 4: Energy Leadership'],
                learningOutcomes: ['Lead global energy strategy', 'Develop energy policy', 'Conduct energy research', 'Lead energy transformation'],
                futureProgression: 'Progression to Energy Director or Consultant'
            },
            {
                slug: 'iso-50001-lead-auditor',
                name: 'ISO 50001:2018 Energy Management Systems Lead Auditor',
                duration: '5 Days',
                image: '/courses/iso-50001-lead-auditor.webp',
                entryRequirements: 'Understanding of energy management systems',
                studyUnits: ['Unit 1: ISO 50001 Requirements', 'Unit 2: Audit Principles', 'Unit 3: Audit Planning', 'Unit 4: Conducting Audits'],
                learningOutcomes: ['Understand ISO 50001', 'Plan and conduct audits', 'Lead audit teams', 'Manage audit programs'],
                futureProgression: 'Progression to Lead Auditor or Energy Consultant'
            },
            {
                slug: 'iso-50001-internal-auditor',
                name: 'ISO 50001:2018 Energy Management Systems Internal Auditor',
                duration: '3 Days',
                image: '/courses/iso-50001-internal-auditor.webp',
                entryRequirements: 'Understanding of energy management',
                studyUnits: ['Unit 1: ISO 50001 Overview', 'Unit 2: Internal Audit Process', 'Unit 3: Audit Reporting'],
                learningOutcomes: ['Understand ISO 50001', 'Conduct internal audits', 'Write audit reports'],
                futureProgression: 'Progression to Lead Auditor'
            },
            {
                slug: 'iso-50001-foundation',
                name: 'ISO 50001:2018 Energy Management Systems Foundation',
                duration: '2 Days',
                image: '/courses/iso-50001-foundation.webp',
                entryRequirements: 'Interest in energy management',
                studyUnits: ['Unit 1: ISO 50001 Overview', 'Unit 2: Key Requirements', 'Unit 3: Implementation'],
                learningOutcomes: ['Understand ISO 50001', 'Apply key requirements', 'Implement energy management systems'],
                futureProgression: 'Progression to Internal Auditor'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 3. QUALITY CONTROL (8 courses)
    // ═══════════════════════════════════════════════════
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
                studyUnits: ['Unit 1: ISO 9001 Requirements', 'Unit 2: Audit Principles', 'Unit 3: Audit Planning', 'Unit 4: Conducting Audits'],
                learningOutcomes: ['Understand ISO 9001', 'Plan and conduct audits', 'Lead audit teams', 'Manage audit programs'],
                futureProgression: 'Progression to Lead Auditor or Quality Manager'
            },
            {
                slug: 'iso-9001-internal-auditor',
                name: 'ISO 9001:2015 Quality Management Systems Internal Auditor',
                duration: '3 Days',
                image: '/courses/iso-9001-internal-auditor.webp',
                entryRequirements: 'Understanding of quality management',
                studyUnits: ['Unit 1: ISO 9001 Overview', 'Unit 2: Internal Audit Process', 'Unit 3: Audit Reporting'],
                learningOutcomes: ['Understand ISO 9001', 'Conduct internal audits', 'Write audit reports'],
                futureProgression: 'Progression to Lead Auditor'
            },
            {
                slug: 'iso-9001-foundation',
                name: 'ISO 9001:2015 Quality Management Systems Foundation',
                duration: '2 Days',
                image: '/courses/iso-9001-foundation.webp',
                entryRequirements: 'Interest in quality management',
                studyUnits: ['Unit 1: ISO 9001 Overview', 'Unit 2: Key Requirements', 'Unit 3: Implementation'],
                learningOutcomes: ['Understand ISO 9001', 'Apply key requirements', 'Implement quality management systems'],
                futureProgression: 'Progression to Internal Auditor'
            },
            {
                slug: 'six-sigma-yellow-belt',
                name: 'Six Sigma Yellow Belt',
                duration: '2 Days',
                image: '/courses/six-sigma-yellow-belt.webp',
                entryRequirements: 'No prior experience required',
                studyUnits: ['Unit 1: Six Sigma Overview', 'Unit 2: Basic Tools', 'Unit 3: Problem Solving'],
                learningOutcomes: ['Understand Six Sigma', 'Use basic quality tools', 'Apply problem-solving'],
                futureProgression: 'Progression to Green Belt'
            },
            {
                slug: 'six-sigma-green-belt',
                name: 'Six Sigma Green Belt',
                duration: '5 Days',
                image: '/courses/six-sigma-green-belt.webp',
                entryRequirements: 'Yellow Belt or equivalent',
                studyUnits: ['Unit 1: Six Sigma Principles', 'Unit 2: DMAIC Methodology', 'Unit 3: Statistical Tools', 'Unit 4: Project Management'],
                learningOutcomes: ['Apply Six Sigma principles', 'Use DMAIC methodology', 'Apply statistical tools', 'Lead improvement projects'],
                futureProgression: 'Progression to Black Belt'
            },
            {
                slug: 'six-sigma-black-belt',
                name: 'Six Sigma Black Belt',
                duration: '10 Days',
                image: '/courses/six-sigma-black-belt.webp',
                entryRequirements: 'Green Belt certification',
                studyUnits: ['Unit 1: Advanced Six Sigma', 'Unit 2: Statistical Analysis', 'Unit 3: Team Leadership', 'Unit 4: Project Management'],
                learningOutcomes: ['Lead complex improvement projects', 'Mentor Green Belts', 'Drive organizational change', 'Use advanced statistics'],
                futureProgression: 'Progression to Master Black Belt'
            },
            {
                slug: 'six-sigma-master-black-belt',
                name: 'Six Sigma Master Black Belt',
                duration: '15 Days',
                image: '/courses/six-sigma-master-black-belt.webp',
                entryRequirements: 'Black Belt certification',
                studyUnits: ['Unit 1: Strategic Six Sigma', 'Unit 2: Advanced Statistics', 'Unit 3: Mentoring', 'Unit 4: Organizational Transformation'],
                learningOutcomes: ['Lead strategic improvement', 'Mentor Black Belts', 'Drive organizational transformation', 'Apply advanced statistics'],
                futureProgression: 'Progression to Quality Director'
            },
            {
                slug: 'quality-control-management',
                name: 'Quality Control Management Certification',
                duration: '6 Months',
                image: '/courses/quality-control-management.webp',
                entryRequirements: 'Experience in quality control',
                studyUnits: ['Unit 1: Quality Management', 'Unit 2: Quality Tools', 'Unit 3: Quality Systems', 'Unit 4: Quality Leadership'],
                learningOutcomes: ['Manage quality programs', 'Use quality tools', 'Implement quality systems', 'Lead quality teams'],
                futureProgression: 'Progression to Quality Manager or Director'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 4. FOOD SAFETY AND HYGIENE (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'food-safety-hygiene',
        name: 'Food Safety and Hygiene',
        icon: FaAppleAlt,
        description: 'Food safety management, HACCP, and hygiene certifications',
        courses: [
            {
                slug: 'level-1-food-safety',
                name: 'Level 1 Award in Food Safety',
                duration: 'Half Day',
                image: '/courses/level-1-food-safety.webp',
                entryRequirements: 'No prior experience required',
                studyUnits: ['Unit 1: Food Safety Basics', 'Unit 2: Personal Hygiene', 'Unit 3: Food Handling'],
                learningOutcomes: ['Understand food safety basics', 'Apply personal hygiene', 'Handle food safely'],
                futureProgression: 'Progression to Level 2 Food Safety'
            },
            {
                slug: 'level-2-food-safety',
                name: 'Level 2 Award in Food Safety',
                duration: '1 Day',
                image: '/courses/level-2-food-safety.webp',
                entryRequirements: 'Level 1 Food Safety or equivalent',
                studyUnits: ['Unit 1: Food Safety Principles', 'Unit 2: Food Hazards', 'Unit 3: Food Hygiene', 'Unit 4: HACCP Basics'],
                learningOutcomes: ['Apply food safety principles', 'Identify food hazards', 'Maintain food hygiene', 'Apply HACCP basics'],
                futureProgression: 'Progression to Level 3 Food Safety'
            },
            {
                slug: 'level-3-food-safety',
                name: 'Level 3 Award in Food Safety',
                duration: '3 Days',
                image: '/courses/level-3-food-safety.webp',
                entryRequirements: 'Level 2 Food Safety',
                studyUnits: ['Unit 1: Food Safety Management', 'Unit 2: HACCP Principles', 'Unit 3: Food Safety Systems', 'Unit 4: Team Leadership'],
                learningOutcomes: ['Manage food safety', 'Apply HACCP principles', 'Implement food safety systems', 'Lead food safety teams'],
                futureProgression: 'Progression to Level 4 Food Safety Management'
            },
            {
                slug: 'level-4-food-safety-management',
                name: 'Level 4 Award in Food Safety Management',
                duration: '5 Days',
                image: '/courses/level-4-food-safety-management.webp',
                entryRequirements: 'Level 3 Food Safety',
                studyUnits: ['Unit 1: Food Safety Strategy', 'Unit 2: Advanced HACCP', 'Unit 3: Food Safety Culture', 'Unit 4: Organizational Leadership'],
                learningOutcomes: ['Lead food safety strategy', 'Apply advanced HACCP', 'Build food safety culture', 'Lead food safety organizations'],
                futureProgression: 'Progression to Food Safety Manager or Director'
            },
            {
                slug: 'iso-22000-lead-auditor',
                name: 'ISO 22000:2018 Food Safety Management Systems Lead Auditor',
                duration: '5 Days',
                image: '/courses/iso-22000-lead-auditor.webp',
                entryRequirements: 'Understanding of food safety systems',
                studyUnits: ['Unit 1: ISO 22000 Requirements', 'Unit 2: Audit Principles', 'Unit 3: Audit Planning', 'Unit 4: Conducting Audits'],
                learningOutcomes: ['Understand ISO 22000', 'Plan and conduct audits', 'Lead audit teams', 'Manage audit programs'],
                futureProgression: 'Progression to Lead Auditor or Food Safety Consultant'
            },
            {
                slug: 'haccp-certification',
                name: 'HACCP (Hazard Analysis and Critical Control Points) Certification',
                duration: '3 Days',
                image: '/courses/haccp-certification.webp',
                entryRequirements: 'Understanding of food safety',
                studyUnits: ['Unit 1: HACCP Principles', 'Unit 2: Hazard Analysis', 'Unit 3: Critical Control Points', 'Unit 4: HACCP Implementation'],
                learningOutcomes: ['Apply HACCP principles', 'Conduct hazard analysis', 'Identify critical control points', 'Implement HACCP systems'],
                futureProgression: 'Progression to Food Safety Manager'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 5. FIRE SAFETY (5 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'fire-safety',
        name: 'Fire Safety',
        icon: FaFire,
        description: 'Fire safety management, risk assessment, and fire warden certifications',
        courses: [
            {
                slug: 'level-1-fire-safety',
                name: 'Level 1 Award in Fire Safety',
                duration: 'Half Day',
                image: '/courses/level-1-fire-safety.webp',
                entryRequirements: 'No prior experience required',
                studyUnits: ['Unit 1: Fire Safety Basics', 'Unit 2: Fire Prevention', 'Unit 3: Fire Response'],
                learningOutcomes: ['Understand fire safety basics', 'Apply fire prevention', 'Respond to fires'],
                futureProgression: 'Progression to Level 2 Fire Safety'
            },
            {
                slug: 'level-2-fire-safety',
                name: 'Level 2 Award in Fire Safety',
                duration: '1 Day',
                image: '/courses/level-2-fire-safety.webp',
                entryRequirements: 'Level 1 Fire Safety or equivalent',
                studyUnits: ['Unit 1: Fire Safety Principles', 'Unit 2: Fire Hazards', 'Unit 3: Fire Prevention', 'Unit 4: Emergency Response'],
                learningOutcomes: ['Apply fire safety principles', 'Identify fire hazards', 'Implement fire prevention', 'Lead emergency response'],
                futureProgression: 'Progression to Level 3 Fire Safety'
            },
            {
                slug: 'level-3-fire-safety',
                name: 'Level 3 Award in Fire Safety',
                duration: '3 Days',
                image: '/courses/level-3-fire-safety.webp',
                entryRequirements: 'Level 2 Fire Safety',
                studyUnits: ['Unit 1: Fire Safety Management', 'Unit 2: Fire Risk Assessment', 'Unit 3: Fire Systems', 'Unit 4: Team Leadership'],
                learningOutcomes: ['Manage fire safety', 'Conduct fire risk assessments', 'Implement fire systems', 'Lead fire safety teams'],
                futureProgression: 'Progression to Level 4 Fire Safety Management'
            },
            {
                slug: 'level-4-fire-safety-management',
                name: 'Level 4 Award in Fire Safety Management',
                duration: '5 Days',
                image: '/courses/level-4-fire-safety-management.webp',
                entryRequirements: 'Level 3 Fire Safety',
                studyUnits: ['Unit 1: Fire Safety Strategy', 'Unit 2: Advanced Risk Assessment', 'Unit 3: Fire Safety Culture', 'Unit 4: Organizational Leadership'],
                learningOutcomes: ['Lead fire safety strategy', 'Conduct advanced risk assessments', 'Build fire safety culture', 'Lead fire safety organizations'],
                futureProgression: 'Progression to Fire Safety Manager or Consultant'
            },
            {
                slug: 'fire-risk-assessor',
                name: 'Fire Risk Assessor Certification',
                duration: '5 Days',
                image: '/courses/fire-risk-assessor.webp',
                entryRequirements: 'Fire safety experience',
                studyUnits: ['Unit 1: Risk Assessment Principles', 'Unit 2: Fire Risk Assessment', 'Unit 3: Control Measures', 'Unit 4: Risk Management'],
                learningOutcomes: ['Conduct fire risk assessments', 'Identify fire risks', 'Recommend control measures', 'Manage fire risk'],
                futureProgression: 'Progression to Fire Safety Consultant'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 6. FIRST AID (4 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'first-aid',
        name: 'First Aid',
        icon: FaAmbulance,
        description: 'First aid, emergency response, and CPR certifications',
        courses: [
            {
                slug: 'emergency-first-aid-work',
                name: 'Emergency First Aid at Work (EFAW)',
                duration: '1 Day',
                image: '/courses/emergency-first-aid-work.webp',
                entryRequirements: 'No prior experience required',
                studyUnits: ['Unit 1: Emergency First Aid', 'Unit 2: CPR and AED', 'Unit 3: Managing Incidents'],
                learningOutcomes: ['Provide emergency first aid', 'Perform CPR and use AED', 'Manage incidents'],
                futureProgression: 'Progression to First Aid at Work'
            },
            {
                slug: 'first-aid-work',
                name: 'First Aid at Work (FAW)',
                duration: '3 Days',
                image: '/courses/first-aid-work.webp',
                entryRequirements: 'No prior experience required',
                studyUnits: ['Unit 1: First Aid Principles', 'Unit 2: CPR and AED', 'Unit 3: Wound Management', 'Unit 4: Medical Emergencies'],
                learningOutcomes: ['Provide comprehensive first aid', 'Perform CPR and use AED', 'Manage wounds and fractures', 'Handle medical emergencies'],
                futureProgression: 'Progression to First Aid Instructor'
            },
            {
                slug: 'first-aid-work-requalification',
                name: 'First Aid at Work Requalification',
                duration: '2 Days',
                image: '/courses/first-aid-work-requalification.webp',
                entryRequirements: 'Valid FAW certificate (within 3 years)',
                studyUnits: ['Unit 1: Refresher Principles', 'Unit 2: CPR and AED', 'Unit 3: Wound Management', 'Unit 4: Medical Emergencies'],
                learningOutcomes: ['Update first aid skills', 'Refresh CPR and AED', 'Update wound management', 'Refresh medical emergencies'],
                futureProgression: 'Progression to First Aid Instructor'
            },
            {
                slug: 'paediatric-first-aid',
                name: 'Paediatric First Aid',
                duration: '2 Days',
                image: '/courses/paediatric-first-aid.webp',
                entryRequirements: 'Interest in childcare first aid',
                studyUnits: ['Unit 1: Paediatric First Aid', 'Unit 2: Child CPR', 'Unit 3: Child Injuries', 'Unit 4: Child Emergencies'],
                learningOutcomes: ['Provide paediatric first aid', 'Perform child CPR', 'Manage child injuries', 'Handle child emergencies'],
                futureProgression: 'Progression to Nursery First Aider'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 7. MENTAL HEALTH FIRST AID (4 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'mental-health-first-aid',
        name: 'Mental Health First Aid',
        icon: FaBrain,
        description: 'Mental health awareness, first aid, and support certifications',
        courses: [
            {
                slug: 'mental-health-first-aid-adult',
                name: 'Mental Health First Aid (MHFA) - Adult',
                duration: '2 Days',
                image: '/courses/mental-health-first-aid-adult.webp',
                entryRequirements: 'No prior experience required',
                studyUnits: ['Unit 1: Mental Health Awareness', 'Unit 2: Depression and Anxiety', 'Unit 3: Supporting Others', 'Unit 4: Self-Care'],
                learningOutcomes: ['Recognize mental health issues', 'Provide initial support', 'Promote mental wellbeing', 'Practice self-care'],
                futureProgression: 'Progression to MHFA Instructor'
            },
            {
                slug: 'mental-health-first-aid-youth',
                name: 'Mental Health First Aid (MHFA) - Youth',
                duration: '2 Days',
                image: '/courses/mental-health-first-aid-youth.webp',
                entryRequirements: 'No prior experience required',
                studyUnits: ['Unit 1: Youth Mental Health', 'Unit 2: Adolescent Issues', 'Unit 3: Supporting Youth', 'Unit 4: Early Intervention'],
                learningOutcomes: ['Recognize youth mental health issues', 'Provide support to youth', 'Promote youth wellbeing', 'Apply early intervention'],
                futureProgression: 'Progression to MHFA Instructor'
            },
            {
                slug: 'mental-health-awareness',
                name: 'Mental Health Awareness',
                duration: '1 Day',
                image: '/courses/mental-health-awareness.webp',
                entryRequirements: 'No prior experience required',
                studyUnits: ['Unit 1: Mental Health Basics', 'Unit 2: Common Conditions', 'Unit 3: Support Strategies', 'Unit 4: Wellbeing'],
                learningOutcomes: ['Understand mental health basics', 'Identify common conditions', 'Apply support strategies', 'Promote wellbeing'],
                futureProgression: 'Progression to MHFA'
            },
            {
                slug: 'mental-health-first-aid-refresher',
                name: 'Mental Health First Aid Refresher',
                duration: 'Half Day',
                image: '/courses/mental-health-first-aid-refresher.webp',
                entryRequirements: 'Valid MHFA certificate',
                studyUnits: ['Unit 1: MHFA Update', 'Unit 2: New Approaches', 'Unit 3: Skills Refresh'],
                learningOutcomes: ['Update MHFA skills', 'Learn new approaches', 'Refresh support skills'],
                futureProgression: 'Progression to MHFA Instructor'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 8. TEACHING (4 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'teaching',
        name: 'Teaching',
        icon: FaChalkboardTeacher,
        description: 'Teaching qualifications and education certifications',
        courses: [
            {
                slug: 'level-3-award-education-training-v2',
                name: 'Level 3 Award in Education and Training',
                duration: '3-6 Months',
                image: '/courses/level-3-award-education-training-v2.webp',
                entryRequirements: 'No formal qualifications required',
                studyUnits: ['Unit 1: Teaching Roles', 'Unit 2: Planning Lessons', 'Unit 3: Assessment'],
                learningOutcomes: ['Understand teaching roles', 'Plan and deliver lessons', 'Assess learners'],
                futureProgression: 'Progression to Level 4 Certificate'
            },
            {
                slug: 'level-4-cert-education-training-v2',
                name: 'Level 4 Certificate in Education and Training',
                duration: '6-9 Months',
                image: '/courses/level-4-cert-education-training-v2.webp',
                entryRequirements: 'Level 3 Award or equivalent',
                studyUnits: ['Unit 1: Teaching Approaches', 'Unit 2: Curriculum', 'Unit 3: Assessment', 'Unit 4: Professional Development'],
                learningOutcomes: ['Apply advanced teaching', 'Design curricula', 'Lead assessment', 'Develop professionally'],
                futureProgression: 'Progression to Level 5 Diploma'
            },
            {
                slug: 'level-5-diploma-education-training-v2',
                name: 'Level 5 Diploma in Education and Training',
                duration: '12-18 Months',
                image: '/courses/level-5-diploma-education-training-v2.webp',
                entryRequirements: 'Level 4 Certificate',
                studyUnits: ['Unit 1: Educational Policy', 'Unit 2: Curriculum Development', 'Unit 3: Quality Assurance', 'Unit 4: Educational Leadership'],
                learningOutcomes: ['Understand educational policy', 'Lead curriculum development', 'Manage quality assurance', 'Lead educational teams'],
                futureProgression: 'Progression to QTLS'
            },
            {
                slug: 'ptlls',
                name: 'Preparing to Teach in the Lifelong Learning Sector (PTLLS)',
                duration: '2 Months',
                image: '/courses/ptlls.webp',
                entryRequirements: 'Interest in teaching',
                studyUnits: ['Unit 1: Teaching Preparation', 'Unit 2: Planning', 'Unit 3: Delivery'],
                learningOutcomes: ['Prepare to teach', 'Plan lessons', 'Deliver teaching'],
                futureProgression: 'Progression to CTLLS or DTLLS'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 9. EDUCATION AND TRAINING (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'education-training',
        name: 'Education and Training',
        icon: FaGraduationCap,
        description: 'Education management, training delivery, and instructional design',
        courses: [
            {
                slug: 'level-3-award-education-training-v3',
                name: 'Level 3 Award in Education and Training',
                duration: '3-6 Months',
                image: '/courses/level-3-award-education-training-v3.webp',
                entryRequirements: 'No formal qualifications',
                studyUnits: ['Unit 1: Teaching Roles', 'Unit 2: Planning', 'Unit 3: Assessment'],
                learningOutcomes: ['Understand teaching roles', 'Plan and deliver', 'Assess learners'],
                futureProgression: 'Progression to Level 4'
            },
            {
                slug: 'level-4-diploma-education-training',
                name: 'Level 4 Diploma in Education and Training',
                duration: '9-12 Months',
                image: '/courses/level-4-diploma-education-training.webp',
                entryRequirements: 'Level 3 Award or equivalent',
                studyUnits: ['Unit 1: Education Principles', 'Unit 2: Teaching Practice', 'Unit 3: Assessment', 'Unit 4: Professional Development'],
                learningOutcomes: ['Apply education principles', 'Lead teaching practice', 'Manage assessment', 'Develop professionally'],
                futureProgression: 'Progression to Level 5 Diploma'
            },
            {
                slug: 'level-5-diploma-education-training-v3',
                name: 'Level 5 Diploma in Education and Training',
                duration: '12-18 Months',
                image: '/courses/level-5-diploma-education-training-v3.webp',
                entryRequirements: 'Level 4 Diploma',
                studyUnits: ['Unit 1: Education Policy', 'Unit 2: Curriculum Design', 'Unit 3: Quality Management', 'Unit 4: Education Leadership'],
                learningOutcomes: ['Understand education policy', 'Lead curriculum design', 'Manage quality', 'Lead education teams'],
                futureProgression: 'Progression to Education Management'
            },
            {
                slug: 'train-the-trainer',
                name: 'Train the Trainer',
                duration: '2 Days',
                image: '/courses/train-the-trainer.webp',
                entryRequirements: 'Experience in subject area',
                studyUnits: ['Unit 1: Training Principles', 'Unit 2: Session Planning', 'Unit 3: Training Delivery', 'Unit 4: Evaluation'],
                learningOutcomes: ['Apply training principles', 'Plan sessions', 'Deliver training', 'Evaluate effectiveness'],
                futureProgression: 'Progression to Training Manager'
            },
            {
                slug: 'instructional-design',
                name: 'Instructional Design Certification',
                duration: '3 Months',
                image: '/courses/instructional-design.webp',
                entryRequirements: 'Interest in instructional design',
                studyUnits: ['Unit 1: Design Principles', 'Unit 2: Learning Theory', 'Unit 3: Content Development', 'Unit 4: Evaluation'],
                learningOutcomes: ['Apply design principles', 'Use learning theory', 'Develop content', 'Evaluate effectiveness'],
                futureProgression: 'Progression to Learning Experience Designer'
            },
            {
                slug: 'education-management',
                name: 'Education Management Certification',
                duration: '6 Months',
                image: '/courses/education-management.webp',
                entryRequirements: 'Experience in education',
                studyUnits: ['Unit 1: Education Management', 'Unit 2: Strategic Planning', 'Unit 3: Quality Assurance', 'Unit 4: Leadership'],
                learningOutcomes: ['Manage education programs', 'Lead strategic planning', 'Manage quality assurance', 'Lead education teams'],
                futureProgression: 'Progression to Education Director'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 10. HEALTH AND SOCIAL CARE (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'health-social-care',
        name: 'Health and Social Care',
        icon: FaHeartbeat,
        description: 'Health and social care management and practice certifications',
        courses: [
            {
                slug: 'level-2-health-social-care',
                name: 'Level 2 Diploma in Health and Social Care',
                duration: '6-9 Months',
                image: '/courses/level-2-health-social-care.webp',
                entryRequirements: 'Interest in health and social care',
                studyUnits: ['Unit 1: Care Principles', 'Unit 2: Communication', 'Unit 3: Health and Safety', 'Unit 4: Person-Centered Care'],
                learningOutcomes: ['Apply care principles', 'Communicate effectively', 'Ensure health and safety', 'Provide person-centered care'],
                futureProgression: 'Progression to Level 3 Diploma'
            },
            {
                slug: 'level-3-health-social-care',
                name: 'Level 3 Diploma in Health and Social Care',
                duration: '12-18 Months',
                image: '/courses/level-3-health-social-care.webp',
                entryRequirements: 'Level 2 Diploma or equivalent',
                studyUnits: ['Unit 1: Care Management', 'Unit 2: Person-Centered Care', 'Unit 3: Communication', 'Unit 4: Professional Development'],
                learningOutcomes: ['Manage care delivery', 'Provide person-centered care', 'Lead communication', 'Develop professionally'],
                futureProgression: 'Progression to Level 4 Diploma'
            },
            {
                slug: 'level-4-health-social-care',
                name: 'Level 4 Diploma in Health and Social Care Management',
                duration: '18-24 Months',
                image: '/courses/level-4-health-social-care.webp',
                entryRequirements: 'Level 3 Diploma or equivalent',
                studyUnits: ['Unit 1: Care Leadership', 'Unit 2: Service Management', 'Unit 3: Quality Assurance', 'Unit 4: Policy'],
                learningOutcomes: ['Lead care services', 'Manage care delivery', 'Ensure quality assurance', 'Understand policy'],
                futureProgression: 'Progression to Level 5 Diploma'
            },
            {
                slug: 'level-5-health-social-care',
                name: 'Level 5 Diploma in Health and Social Care Management',
                duration: '24-36 Months',
                image: '/courses/level-5-health-social-care.webp',
                entryRequirements: 'Level 4 Diploma',
                studyUnits: ['Unit 1: Strategic Care', 'Unit 2: Service Development', 'Unit 3: Quality Leadership', 'Unit 4: Policy Development'],
                learningOutcomes: ['Lead strategic care', 'Develop services', 'Lead quality initiatives', 'Develop policy'],
                futureProgression: 'Progression to Care Director'
            },
            {
                slug: 'person-centered-care',
                name: 'Person-Centered Care Certification',
                duration: '2 Days',
                image: '/courses/person-centered-care.webp',
                entryRequirements: 'Interest in care',
                studyUnits: ['Unit 1: Care Principles', 'Unit 2: Person-Centered Care', 'Unit 3: Implementation', 'Unit 4: Evaluation'],
                learningOutcomes: ['Apply care principles', 'Provide person-centered care', 'Implement care plans', 'Evaluate care'],
                futureProgression: 'Progression to Care Manager'
            },
            {
                slug: 'safeguarding-vulnerable-adults',
                name: 'Safeguarding Vulnerable Adults',
                duration: '2 Days',
                image: '/courses/safeguarding-vulnerable-adults.webp',
                entryRequirements: 'Interest in safeguarding',
                studyUnits: ['Unit 1: Safeguarding Principles', 'Unit 2: Recognizing Abuse', 'Unit 3: Reporting', 'Unit 4: Supporting Victims'],
                learningOutcomes: ['Apply safeguarding principles', 'Recognize abuse', 'Report concerns', 'Support victims'],
                futureProgression: 'Progression to Safeguarding Lead'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 11. EARLY LEARNING AND CHILDCARE (5 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'early-learning-childcare',
        name: 'Early Learning and Childcare',
        icon: FaSchool,
        description: 'Childcare, early years education, and child development certifications',
        courses: [
            {
                slug: 'level-2-early-learning-childcare',
                name: 'Level 2 Certificate in Early Learning and Childcare',
                duration: '6-9 Months',
                image: '/courses/level-2-early-learning-childcare.webp',
                entryRequirements: 'Interest in childcare',
                studyUnits: ['Unit 1: Child Development', 'Unit 2: Play and Learning', 'Unit 3: Safeguarding', 'Unit 4: Nutrition'],
                learningOutcomes: ['Understand child development', 'Promote play and learning', 'Apply safeguarding', 'Ensure nutrition'],
                futureProgression: 'Progression to Level 3 Diploma'
            },
            {
                slug: 'level-3-early-learning-childcare',
                name: 'Level 3 Diploma in Early Learning and Childcare',
                duration: '12-18 Months',
                image: '/courses/level-3-early-learning-childcare.webp',
                entryRequirements: 'Level 2 Certificate or equivalent',
                studyUnits: ['Unit 1: Child Development', 'Unit 2: Curriculum', 'Unit 3: Safeguarding', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead child development', 'Design curriculum', 'Lead safeguarding', 'Lead childcare teams'],
                futureProgression: 'Progression to Level 4 Diploma'
            },
            {
                slug: 'level-4-early-learning-childcare',
                name: 'Level 4 Diploma in Early Learning and Childcare',
                duration: '18-24 Months',
                image: '/courses/level-4-early-learning-childcare.webp',
                entryRequirements: 'Level 3 Diploma',
                studyUnits: ['Unit 1: Child Development', 'Unit 2: Curriculum Leadership', 'Unit 3: Quality Assurance', 'Unit 4: Management'],
                learningOutcomes: ['Lead child development', 'Lead curriculum', 'Manage quality', 'Lead childcare teams'],
                futureProgression: 'Progression to Nursery Manager'
            },
            {
                slug: 'safeguarding-children',
                name: 'Safeguarding Children',
                duration: '2 Days',
                image: '/courses/safeguarding-children.webp',
                entryRequirements: 'Interest in safeguarding',
                studyUnits: ['Unit 1: Safeguarding Principles', 'Unit 2: Recognizing Abuse', 'Unit 3: Reporting', 'Unit 4: Supporting Children'],
                learningOutcomes: ['Apply safeguarding principles', 'Recognize abuse', 'Report concerns', 'Support children'],
                futureProgression: 'Progression to Designated Safeguarding Lead'
            },
            {
                slug: 'child-development',
                name: 'Child Development Certification',
                duration: '3 Months',
                image: '/courses/child-development.webp',
                entryRequirements: 'Interest in child development',
                studyUnits: ['Unit 1: Development Principles', 'Unit 2: Cognitive Development', 'Unit 3: Social Development', 'Unit 4: Emotional Development'],
                learningOutcomes: ['Understand development principles', 'Support cognitive development', 'Foster social development', 'Support emotional development'],
                futureProgression: 'Progression to Child Development Specialist'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 12. MANUAL HANDLING (4 courses)
    // ═══════════════════════════════════════════════════
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
                entryRequirements: 'No prior experience required',
                studyUnits: ['Unit 1: Manual Handling Basics', 'Unit 2: Lifting Techniques', 'Unit 3: Risk Assessment', 'Unit 4: Safe Practices'],
                learningOutcomes: ['Understand manual handling', 'Apply lifting techniques', 'Conduct risk assessments', 'Practice safe handling'],
                futureProgression: 'Progression to Manual Handling Trainer'
            },
            {
                slug: 'manual-handling-trainer',
                name: 'Manual Handling Trainer',
                duration: '2 Days',
                image: '/courses/manual-handling-trainer.webp',
                entryRequirements: 'Manual Handling experience',
                studyUnits: ['Unit 1: Training Principles', 'Unit 2: Manual Handling', 'Unit 3: Assessment', 'Unit 4: Evaluation'],
                learningOutcomes: ['Apply training principles', 'Deliver manual handling training', 'Assess competence', 'Evaluate training'],
                futureProgression: 'Progression to Manual Handling Consultant'
            },
            {
                slug: 'safe-lifting-techniques',
                name: 'Safe Lifting Techniques',
                duration: 'Half Day',
                image: '/courses/safe-lifting-techniques.webp',
                entryRequirements: 'No prior experience required',
                studyUnits: ['Unit 1: Lifting Basics', 'Unit 2: Techniques', 'Unit 3: Safe Practices'],
                learningOutcomes: ['Understand lifting basics', 'Apply lifting techniques', 'Practice safe lifting'],
                futureProgression: 'Progression to Manual Handling Training'
            },
            {
                slug: 'manual-handling-risk-assessment',
                name: 'Manual Handling Risk Assessment',
                duration: '1 Day',
                image: '/courses/manual-handling-risk-assessment.webp',
                entryRequirements: 'Understanding of manual handling',
                studyUnits: ['Unit 1: Risk Assessment Principles', 'Unit 2: Manual Handling Risk', 'Unit 3: Control Measures', 'Unit 4: Management'],
                learningOutcomes: ['Conduct risk assessments', 'Identify manual handling risks', 'Apply control measures', 'Manage risk'],
                futureProgression: 'Progression to Risk Manager'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 13. LIFTING OPERATIONS (4 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'lifting-operations',
        name: 'Lifting Operations',
        icon: FaHelmetSafety,
        description: 'Lifting equipment, crane operations, and rigging safety certifications',
        courses: [
            {
                slug: 'lifting-supervisor',
                name: 'Lifting Supervisor Certification',
                duration: '5 Days',
                image: '/courses/lifting-supervisor.webp',
                entryRequirements: 'Experience in lifting operations',
                studyUnits: ['Unit 1: Lifting Regulations', 'Unit 2: Equipment Inspection', 'Unit 3: Lifting Plans', 'Unit 4: Team Leadership'],
                learningOutcomes: ['Understand lifting regulations', 'Inspect lifting equipment', 'Develop lifting plans', 'Lead lifting teams'],
                futureProgression: 'Progression to Lifting Operations Manager'
            },
            {
                slug: 'crane-operator',
                name: 'Crane Operator Certification',
                duration: '10 Days',
                image: '/courses/crane-operator.webp',
                entryRequirements: 'Experience in construction',
                studyUnits: ['Unit 1: Crane Operations', 'Unit 2: Safety Protocols', 'Unit 3: Lifting Techniques', 'Unit 4: Maintenance'],
                learningOutcomes: ['Operate cranes', 'Apply safety protocols', 'Use lifting techniques', 'Perform maintenance'],
                futureProgression: 'Progression to Crane Supervisor'
            },
            {
                slug: 'rigging-slinging',
                name: 'Rigging and Slinging Certification',
                duration: '3 Days',
                image: '/courses/rigging-slinging.webp',
                entryRequirements: 'Construction experience',
                studyUnits: ['Unit 1: Rigging Principles', 'Unit 2: Slinging Techniques', 'Unit 3: Safety', 'Unit 4: Communication'],
                learningOutcomes: ['Apply rigging principles', 'Use slinging techniques', 'Ensure safety', 'Communicate effectively'],
                futureProgression: 'Progression to Lifting Supervisor'
            },
            {
                slug: 'lifting-equipment-inspection',
                name: 'Lifting Equipment Inspection',
                duration: '3 Days',
                image: '/courses/lifting-equipment-inspection.webp',
                entryRequirements: 'Understanding of lifting equipment',
                studyUnits: ['Unit 1: Inspection Principles', 'Unit 2: Equipment Types', 'Unit 3: Inspection Methods', 'Unit 4: Reporting'],
                learningOutcomes: ['Inspect lifting equipment', 'Identify equipment types', 'Apply inspection methods', 'Write reports'],
                futureProgression: 'Progression to Lifting Equipment Manager'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 14. CONSTRUCTION & BUILT ENVIRONMENT (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'construction-built-environment',
        name: 'Construction & Built Environment',
        icon: FaBuilding,
        description: 'Construction management, building safety, and site supervision certifications',
        courses: [
            {
                slug: 'level-3-construction',
                name: 'Level 3 Diploma in Construction',
                duration: '12-18 Months',
                image: '/courses/level-3-construction.webp',
                entryRequirements: 'Interest in construction',
                studyUnits: ['Unit 1: Construction Principles', 'Unit 2: Site Safety', 'Unit 3: Building Techniques', 'Unit 4: Project Management'],
                learningOutcomes: ['Understand construction principles', 'Apply site safety', 'Use building techniques', 'Manage projects'],
                futureProgression: 'Progression to Level 4 Diploma'
            },
            {
                slug: 'level-4-construction-management',
                name: 'Level 4 Diploma in Construction Management',
                duration: '18-24 Months',
                image: '/courses/level-4-construction-management.webp',
                entryRequirements: 'Level 3 Construction or equivalent',
                studyUnits: ['Unit 1: Construction Management', 'Unit 2: Project Management', 'Unit 3: Quality Management', 'Unit 4: Leadership'],
                learningOutcomes: ['Manage construction projects', 'Lead project management', 'Ensure quality', 'Lead construction teams'],
                futureProgression: 'Progression to Level 5 Diploma'
            },
            {
                slug: 'level-5-construction-management',
                name: 'Level 5 Diploma in Construction Management',
                duration: '24-36 Months',
                image: '/courses/level-5-construction-management.webp',
                entryRequirements: 'Level 4 Diploma',
                studyUnits: ['Unit 1: Strategic Construction', 'Unit 2: Project Leadership', 'Unit 3: Quality Management', 'Unit 4: Business Management'],
                learningOutcomes: ['Lead strategic construction', 'Lead projects', 'Manage quality', 'Lead construction business'],
                futureProgression: 'Progression to Construction Director'
            },
            {
                slug: 'smsts',
                name: 'Site Management Safety Training Scheme (SMSTS)',
                duration: '5 Days',
                image: '/courses/smsts.webp',
                entryRequirements: 'Construction management experience',
                studyUnits: ['Unit 1: Safety Management', 'Unit 2: Health and Safety', 'Unit 3: Legal Requirements', 'Unit 4: Leadership'],
                learningOutcomes: ['Manage site safety', 'Apply health and safety', 'Understand legal requirements', 'Lead safety'],
                futureProgression: 'Progression to Safety Manager'
            },
            {
                slug: 'sssts',
                name: 'Site Supervision Safety Training Scheme (SSSTS)',
                duration: '2 Days',
                image: '/courses/sssts.webp',
                entryRequirements: 'Construction supervision experience',
                studyUnits: ['Unit 1: Supervision Safety', 'Unit 2: Health and Safety', 'Unit 3: Legal Requirements', 'Unit 4: Communication'],
                learningOutcomes: ['Supervise site safety', 'Apply health and safety', 'Understand legal requirements', 'Communicate effectively'],
                futureProgression: 'Progression to SMSTS'
            },
            {
                slug: 'construction-health-safety',
                name: 'Construction Health and Safety',
                duration: '3 Days',
                image: '/courses/construction-health-safety.webp',
                entryRequirements: 'Interest in construction safety',
                studyUnits: ['Unit 1: Health and Safety', 'Unit 2: Risk Assessment', 'Unit 3: Safe Practices', 'Unit 4: Legal Requirements'],
                learningOutcomes: ['Apply health and safety', 'Conduct risk assessments', 'Practice safe construction', 'Understand legal requirements'],
                futureProgression: 'Progression to Safety Manager'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 15. CIVIL ENGINEERING (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'civil-engineering',
        name: 'Civil Engineering',
        icon: FaRulerCombined,
        description: 'Civil engineering, structural design, and infrastructure development certifications',
        courses: [
            {
                slug: 'level-3-civil-engineering',
                name: 'Level 3 Diploma in Civil Engineering',
                duration: '12-18 Months',
                image: '/courses/level-3-civil-engineering.webp',
                entryRequirements: 'Interest in civil engineering',
                studyUnits: ['Unit 1: Engineering Principles', 'Unit 2: Structural Analysis', 'Unit 3: Materials', 'Unit 4: Project Planning'],
                learningOutcomes: ['Apply engineering principles', 'Analyze structures', 'Use materials', 'Plan projects'],
                futureProgression: 'Progression to Level 4 Diploma'
            },
            {
                slug: 'level-4-civil-engineering',
                name: 'Level 4 Diploma in Civil Engineering',
                duration: '18-24 Months',
                image: '/courses/level-4-civil-engineering.webp',
                entryRequirements: 'Level 3 Diploma or equivalent',
                studyUnits: ['Unit 1: Structural Design', 'Unit 2: Materials Science', 'Unit 3: Geotechnical Engineering', 'Unit 4: Project Management'],
                learningOutcomes: ['Design structures', 'Apply materials science', 'Understand geotechnical engineering', 'Manage projects'],
                futureProgression: 'Progression to Level 5 Diploma'
            },
            {
                slug: 'level-5-civil-engineering',
                name: 'Level 5 Diploma in Civil Engineering',
                duration: '24-36 Months',
                image: '/courses/level-5-civil-engineering.webp',
                entryRequirements: 'Level 4 Diploma',
                studyUnits: ['Unit 1: Advanced Structures', 'Unit 2: Geotechnical Design', 'Unit 3: Infrastructure Planning', 'Unit 4: Engineering Leadership'],
                learningOutcomes: ['Design advanced structures', 'Apply geotechnical design', 'Plan infrastructure', 'Lead engineering teams'],
                futureProgression: 'Progression to Civil Engineer'
            },
            {
                slug: 'structural-engineering',
                name: 'Structural Engineering Certification',
                duration: '6 Months',
                image: '/courses/structural-engineering.webp',
                entryRequirements: 'Understanding of engineering',
                studyUnits: ['Unit 1: Structural Principles', 'Unit 2: Analysis', 'Unit 3: Design', 'Unit 4: Safety'],
                learningOutcomes: ['Apply structural principles', 'Analyze structures', 'Design structures', 'Ensure safety'],
                futureProgression: 'Progression to Structural Engineer'
            },
            {
                slug: 'geotechnical-engineering',
                name: 'Geotechnical Engineering Certification',
                duration: '6 Months',
                image: '/courses/geotechnical-engineering.webp',
                entryRequirements: 'Understanding of engineering',
                studyUnits: ['Unit 1: Geotechnical Principles', 'Unit 2: Soil Mechanics', 'Unit 3: Foundation Design', 'Unit 4: Site Investigation'],
                learningOutcomes: ['Apply geotechnical principles', 'Understand soil mechanics', 'Design foundations', 'Conduct site investigations'],
                futureProgression: 'Progression to Geotechnical Engineer'
            },
            {
                slug: 'transportation-engineering',
                name: 'Transportation Engineering Certification',
                duration: '6 Months',
                image: '/courses/transportation-engineering.webp',
                entryRequirements: 'Understanding of engineering',
                studyUnits: ['Unit 1: Transportation Principles', 'Unit 2: Highway Engineering', 'Unit 3: Traffic Management', 'Unit 4: Infrastructure Planning'],
                learningOutcomes: ['Apply transportation principles', 'Design highways', 'Manage traffic', 'Plan infrastructure'],
                futureProgression: 'Progression to Transportation Engineer'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 16. ELECTRICAL ENGINEERING (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'electrical-engineering',
        name: 'Electrical Engineering',
        icon: FaBolt,
        description: 'Electrical systems, power distribution, and circuit design certifications',
        courses: [
            {
                slug: 'level-3-electrical-engineering',
                name: 'Level 3 Diploma in Electrical Engineering',
                duration: '12-18 Months',
                image: '/courses/level-3-electrical-engineering.webp',
                entryRequirements: 'Interest in electrical engineering',
                studyUnits: ['Unit 1: Electrical Principles', 'Unit 2: Circuit Theory', 'Unit 3: Power Systems', 'Unit 4: Safety'],
                learningOutcomes: ['Apply electrical principles', 'Understand circuit theory', 'Work with power systems', 'Ensure safety'],
                futureProgression: 'Progression to Level 4 Diploma'
            },
            {
                slug: 'level-4-electrical-engineering',
                name: 'Level 4 Diploma in Electrical Engineering',
                duration: '18-24 Months',
                image: '/courses/level-4-electrical-engineering.webp',
                entryRequirements: 'Level 3 Diploma or equivalent',
                studyUnits: ['Unit 1: Power Systems', 'Unit 2: Control Systems', 'Unit 3: Electrical Design', 'Unit 4: Project Management'],
                learningOutcomes: ['Design power systems', 'Apply control systems', 'Design electrical systems', 'Manage projects'],
                futureProgression: 'Progression to Level 5 Diploma'
            },
            {
                slug: 'level-5-electrical-engineering',
                name: 'Level 5 Diploma in Electrical Engineering',
                duration: '24-36 Months',
                image: '/courses/level-5-electrical-engineering.webp',
                entryRequirements: 'Level 4 Diploma',
                studyUnits: ['Unit 1: Advanced Power', 'Unit 2: Control Systems', 'Unit 3: Renewable Energy', 'Unit 4: Engineering Leadership'],
                learningOutcomes: ['Design advanced power systems', 'Lead control systems', 'Apply renewable energy', 'Lead engineering teams'],
                futureProgression: 'Progression to Electrical Engineer'
            },
            {
                slug: 'power-systems-engineering',
                name: 'Power Systems Engineering Certification',
                duration: '6 Months',
                image: '/courses/power-systems-engineering.webp',
                entryRequirements: 'Understanding of electrical engineering',
                studyUnits: ['Unit 1: Power Systems', 'Unit 2: Generation', 'Unit 3: Distribution', 'Unit 4: Protection'],
                learningOutcomes: ['Design power systems', 'Manage generation', 'Lead distribution', 'Apply protection'],
                futureProgression: 'Progression to Power Systems Engineer'
            },
            {
                slug: 'control-systems-engineering',
                name: 'Control Systems Engineering Certification',
                duration: '6 Months',
                image: '/courses/control-systems-engineering.webp',
                entryRequirements: 'Understanding of electrical engineering',
                studyUnits: ['Unit 1: Control Principles', 'Unit 2: Automation', 'Unit 3: Robotics', 'Unit 4: Implementation'],
                learningOutcomes: ['Apply control principles', 'Lead automation', 'Work with robotics', 'Implement systems'],
                futureProgression: 'Progression to Control Systems Engineer'
            },
            {
                slug: 'renewable-energy-systems',
                name: 'Renewable Energy Systems Certification',
                duration: '6 Months',
                image: '/courses/renewable-energy-systems.webp',
                entryRequirements: 'Understanding of energy systems',
                studyUnits: ['Unit 1: Renewable Energy', 'Unit 2: Solar Systems', 'Unit 3: Wind Systems', 'Unit 4: Energy Storage'],
                learningOutcomes: ['Apply renewable energy', 'Design solar systems', 'Design wind systems', 'Manage energy storage'],
                futureProgression: 'Progression to Renewable Energy Engineer'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 17. MECHANICAL ENGINEERING (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'mechanical-engineering',
        name: 'Mechanical Engineering',
        icon: FaCogs,
        description: 'Mechanical systems, HVAC, and manufacturing processes certifications',
        courses: [
            {
                slug: 'level-3-mechanical-engineering',
                name: 'Level 3 Diploma in Mechanical Engineering',
                duration: '12-18 Months',
                image: '/courses/level-3-mechanical-engineering.webp',
                entryRequirements: 'Interest in mechanical engineering',
                studyUnits: ['Unit 1: Mechanical Principles', 'Unit 2: Thermodynamics', 'Unit 3: Materials', 'Unit 4: Manufacturing'],
                learningOutcomes: ['Apply mechanical principles', 'Understand thermodynamics', 'Work with materials', 'Apply manufacturing'],
                futureProgression: 'Progression to Level 4 Diploma'
            },
            {
                slug: 'level-4-mechanical-engineering',
                name: 'Level 4 Diploma in Mechanical Engineering',
                duration: '18-24 Months',
                image: '/courses/level-4-mechanical-engineering.webp',
                entryRequirements: 'Level 3 Diploma or equivalent',
                studyUnits: ['Unit 1: Mechanical Design', 'Unit 2: Thermodynamics', 'Unit 3: Fluid Mechanics', 'Unit 4: Project Management'],
                learningOutcomes: ['Design mechanical systems', 'Apply thermodynamics', 'Work with fluids', 'Manage projects'],
                futureProgression: 'Progression to Level 5 Diploma'
            },
            {
                slug: 'level-5-mechanical-engineering',
                name: 'Level 5 Diploma in Mechanical Engineering',
                duration: '24-36 Months',
                image: '/courses/level-5-mechanical-engineering.webp',
                entryRequirements: 'Level 4 Diploma',
                studyUnits: ['Unit 1: Advanced Design', 'Unit 2: Thermodynamics', 'Unit 3: Systems Engineering', 'Unit 4: Engineering Leadership'],
                learningOutcomes: ['Design advanced mechanical systems', 'Apply advanced thermodynamics', 'Lead systems engineering', 'Lead engineering teams'],
                futureProgression: 'Progression to Mechanical Engineer'
            },
            {
                slug: 'hvac-engineering',
                name: 'HVAC Engineering Certification',
                duration: '6 Months',
                image: '/courses/hvac-engineering.webp',
                entryRequirements: 'Understanding of mechanical engineering',
                studyUnits: ['Unit 1: HVAC Principles', 'Unit 2: System Design', 'Unit 3: Energy Efficiency', 'Unit 4: Maintenance'],
                learningOutcomes: ['Design HVAC systems', 'Apply energy efficiency', 'Manage systems', 'Lead maintenance'],
                futureProgression: 'Progression to HVAC Engineer'
            },
            {
                slug: 'manufacturing-engineering',
                name: 'Manufacturing Engineering Certification',
                duration: '6 Months',
                image: '/courses/manufacturing-engineering.webp',
                entryRequirements: 'Understanding of manufacturing',
                studyUnits: ['Unit 1: Manufacturing Principles', 'Unit 2: Production', 'Unit 3: Quality Control', 'Unit 4: Automation'],
                learningOutcomes: ['Apply manufacturing principles', 'Lead production', 'Manage quality control', 'Apply automation'],
                futureProgression: 'Progression to Manufacturing Engineer'
            },
            {
                slug: 'automotive-engineering',
                name: 'Automotive Engineering Certification',
                duration: '6 Months',
                image: '/courses/automotive-engineering.webp',
                entryRequirements: 'Understanding of automotive',
                studyUnits: ['Unit 1: Automotive Systems', 'Unit 2: Engine Design', 'Unit 3: Vehicle Dynamics', 'Unit 4: Maintenance'],
                learningOutcomes: ['Design automotive systems', 'Apply engine design', 'Understand vehicle dynamics', 'Lead maintenance'],
                futureProgression: 'Progression to Automotive Engineer'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 18. ENVIRONMENTAL ENGINEERING (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'environmental-engineering',
        name: 'Environmental Engineering',
        icon: FaLeaf,
        description: 'Environmental management, sustainability, and impact assessment certifications',
        courses: [
            {
                slug: 'level-3-environmental-engineering',
                name: 'Level 3 Diploma in Environmental Engineering',
                duration: '12-18 Months',
                image: '/courses/level-3-environmental-engineering.webp',
                entryRequirements: 'Interest in environmental engineering',
                studyUnits: ['Unit 1: Environmental Principles', 'Unit 2: Environmental Science', 'Unit 3: Waste Management', 'Unit 4: Sustainability'],
                learningOutcomes: ['Apply environmental principles', 'Understand environmental science', 'Manage waste', 'Apply sustainability'],
                futureProgression: 'Progression to Level 4 Diploma'
            },
            {
                slug: 'level-4-environmental-engineering',
                name: 'Level 4 Diploma in Environmental Engineering',
                duration: '18-24 Months',
                image: '/courses/level-4-environmental-engineering.webp',
                entryRequirements: 'Level 3 Diploma or equivalent',
                studyUnits: ['Unit 1: Environmental Systems', 'Unit 2: Impact Assessment', 'Unit 3: Water Management', 'Unit 4: Project Management'],
                learningOutcomes: ['Design environmental systems', 'Conduct impact assessment', 'Manage water', 'Manage projects'],
                futureProgression: 'Progression to Level 5 Diploma'
            },
            {
                slug: 'level-5-environmental-engineering',
                name: 'Level 5 Diploma in Environmental Engineering',
                duration: '24-36 Months',
                image: '/courses/level-5-environmental-engineering.webp',
                entryRequirements: 'Level 4 Diploma',
                studyUnits: ['Unit 1: Advanced Environmental', 'Unit 2: Sustainability', 'Unit 3: Policy', 'Unit 4: Leadership'],
                learningOutcomes: ['Design advanced environmental systems', 'Lead sustainability', 'Develop policy', 'Lead engineering teams'],
                futureProgression: 'Progression to Environmental Engineer'
            },
            {
                slug: 'environmental-impact-assessment',
                name: 'Environmental Impact Assessment Certification',
                duration: '3 Months',
                image: '/courses/environmental-impact-assessment.webp',
                entryRequirements: 'Understanding of environmental science',
                studyUnits: ['Unit 1: Impact Assessment Principles', 'Unit 2: Methodology', 'Unit 3: Reporting', 'Unit 4: Management'],
                learningOutcomes: ['Conduct impact assessments', 'Apply methodology', 'Write reports', 'Lead management'],
                futureProgression: 'Progression to Environmental Manager'
            },
            {
                slug: 'waste-management',
                name: 'Waste Management Certification',
                duration: '3 Months',
                image: '/courses/waste-management.webp',
                entryRequirements: 'Interest in waste management',
                studyUnits: ['Unit 1: Waste Management Principles', 'Unit 2: Recycling', 'Unit 3: Disposal', 'Unit 4: Regulations'],
                learningOutcomes: ['Manage waste', 'Apply recycling', 'Lead disposal', 'Understand regulations'],
                futureProgression: 'Progression to Waste Manager'
            },
            {
                slug: 'water-treatment-engineering',
                name: 'Water Treatment Engineering Certification',
                duration: '6 Months',
                image: '/courses/water-treatment-engineering.webp',
                entryRequirements: 'Understanding of water systems',
                studyUnits: ['Unit 1: Water Treatment', 'Unit 2: Systems Design', 'Unit 3: Quality Management', 'Unit 4: Maintenance'],
                learningOutcomes: ['Design water treatment', 'Manage systems', 'Ensure quality', 'Lead maintenance'],
                futureProgression: 'Progression to Water Engineer'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 19. OIL AND GAS MANAGEMENT (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'oil-gas-management',
        name: 'Oil and Gas Management',
        icon: FaOilCan,
        description: 'Oil and gas operations, refinery safety, and pipeline management certifications',
        courses: [
            {
                slug: 'level-4-oil-gas-management',
                name: 'Level 4 Diploma in Oil and Gas Management',
                duration: '18-24 Months',
                image: '/courses/level-4-oil-gas-management.webp',
                entryRequirements: 'Interest in oil and gas',
                studyUnits: ['Unit 1: Oil and Gas Operations', 'Unit 2: Refinery Safety', 'Unit 3: Pipeline Management', 'Unit 4: Project Management'],
                learningOutcomes: ['Lead oil and gas operations', 'Apply refinery safety', 'Manage pipelines', 'Manage projects'],
                futureProgression: 'Progression to Level 5 Diploma'
            },
            {
                slug: 'level-5-oil-gas-management',
                name: 'Level 5 Diploma in Oil and Gas Management',
                duration: '24-36 Months',
                image: '/courses/level-5-oil-gas-management.webp',
                entryRequirements: 'Level 4 Diploma',
                studyUnits: ['Unit 1: Strategic Operations', 'Unit 2: Safety Management', 'Unit 3: Industry Leadership', 'Unit 4: Business Management'],
                learningOutcomes: ['Lead strategic operations', 'Manage safety', 'Lead industry initiatives', 'Lead business operations'],
                futureProgression: 'Progression to Oil and Gas Director'
            },
            {
                slug: 'refinery-operations-management',
                name: 'Refinery Operations Management',
                duration: '6 Months',
                image: '/courses/refinery-operations-management.webp',
                entryRequirements: 'Understanding of oil and gas',
                studyUnits: ['Unit 1: Refinery Operations', 'Unit 2: Safety', 'Unit 3: Maintenance', 'Unit 4: Quality Control'],
                learningOutcomes: ['Manage refinery operations', 'Ensure safety', 'Lead maintenance', 'Manage quality'],
                futureProgression: 'Progression to Refinery Manager'
            },
            {
                slug: 'pipeline-management',
                name: 'Pipeline Management Certification',
                duration: '6 Months',
                image: '/courses/pipeline-management.webp',
                entryRequirements: 'Understanding of oil and gas',
                studyUnits: ['Unit 1: Pipeline Operations', 'Unit 2: Safety', 'Unit 3: Maintenance', 'Unit 4: Regulations'],
                learningOutcomes: ['Manage pipelines', 'Ensure safety', 'Lead maintenance', 'Understand regulations'],
                futureProgression: 'Progression to Pipeline Manager'
            },
            {
                slug: 'offshore-safety-management',
                name: 'Offshore Safety Management',
                duration: '5 Days',
                image: '/courses/offshore-safety-management.webp',
                entryRequirements: 'Oil and gas experience',
                studyUnits: ['Unit 1: Offshore Safety', 'Unit 2: Emergency Response', 'Unit 3: Risk Management', 'Unit 4: Leadership'],
                learningOutcomes: ['Manage offshore safety', 'Lead emergency response', 'Manage risk', 'Lead safety teams'],
                futureProgression: 'Progression to Offshore Safety Manager'
            },
            {
                slug: 'oil-gas-project-management',
                name: 'Oil and Gas Project Management',
                duration: '6 Months',
                image: '/courses/oil-gas-project-management.webp',
                entryRequirements: 'Oil and gas experience',
                studyUnits: ['Unit 1: Project Management', 'Unit 2: Oil and Gas Projects', 'Unit 3: Risk Management', 'Unit 4: Leadership'],
                learningOutcomes: ['Manage projects', 'Lead oil and gas projects', 'Manage risk', 'Lead teams'],
                futureProgression: 'Progression to Project Director'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 20. HEALTHCARE & MEDICAL SCIENCES (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'healthcare-medical-sciences',
        name: 'Healthcare & Medical Sciences',
        icon: FaStethoscope,
        description: 'Healthcare management, medical practices, and clinical skills certifications',
        courses: [
            {
                slug: 'level-3-healthcare',
                name: 'Level 3 Diploma in Healthcare',
                duration: '12-18 Months',
                image: '/courses/level-3-healthcare.webp',
                entryRequirements: 'Interest in healthcare',
                studyUnits: ['Unit 1: Healthcare Principles', 'Unit 2: Patient Care', 'Unit 3: Clinical Skills', 'Unit 4: Health and Safety'],
                learningOutcomes: ['Apply healthcare principles', 'Provide patient care', 'Use clinical skills', 'Apply health and safety'],
                futureProgression: 'Progression to Level 4 Diploma'
            },
            {
                slug: 'level-4-healthcare-management',
                name: 'Level 4 Diploma in Healthcare Management',
                duration: '18-24 Months',
                image: '/courses/level-4-healthcare-management.webp',
                entryRequirements: 'Level 3 Healthcare or equivalent',
                studyUnits: ['Unit 1: Healthcare Management', 'Unit 2: Service Delivery', 'Unit 3: Quality Assurance', 'Unit 4: Leadership'],
                learningOutcomes: ['Manage healthcare', 'Lead service delivery', 'Ensure quality', 'Lead healthcare teams'],
                futureProgression: 'Progression to Level 5 Diploma'
            },
            {
                slug: 'level-5-healthcare-management',
                name: 'Level 5 Diploma in Healthcare Management',
                duration: '24-36 Months',
                image: '/courses/level-5-healthcare-management.webp',
                entryRequirements: 'Level 4 Diploma',
                studyUnits: ['Unit 1: Strategic Healthcare', 'Unit 2: Service Development', 'Unit 3: Quality Leadership', 'Unit 4: Business Management'],
                learningOutcomes: ['Lead strategic healthcare', 'Develop services', 'Lead quality initiatives', 'Lead healthcare business'],
                futureProgression: 'Progression to Healthcare Director'
            },
            {
                slug: 'clinical-skills',
                name: 'Clinical Skills Certification',
                duration: '3 Months',
                image: '/courses/clinical-skills.webp',
                entryRequirements: 'Interest in clinical skills',
                studyUnits: ['Unit 1: Clinical Principles', 'Unit 2: Patient Care', 'Unit 3: Procedures', 'Unit 4: Safety'],
                learningOutcomes: ['Apply clinical principles', 'Provide patient care', 'Perform procedures', 'Ensure safety'],
                futureProgression: 'Progression to Clinical Specialist'
            },
            {
                slug: 'patient-care',
                name: 'Patient Care Certification',
                duration: '3 Months',
                image: '/courses/patient-care.webp',
                entryRequirements: 'Interest in patient care',
                studyUnits: ['Unit 1: Patient Care Principles', 'Unit 2: Communication', 'Unit 3: Care Planning', 'Unit 4: Safety'],
                learningOutcomes: ['Provide patient care', 'Communicate effectively', 'Plan care', 'Ensure safety'],
                futureProgression: 'Progression to Patient Care Manager'
            },
            {
                slug: 'medical-office-management',
                name: 'Medical Office Management',
                duration: '6 Months',
                image: '/courses/medical-office-management.webp',
                entryRequirements: 'Understanding of medical office',
                studyUnits: ['Unit 1: Office Management', 'Unit 2: Medical Records', 'Unit 3: Billing', 'Unit 4: Leadership'],
                learningOutcomes: ['Manage medical office', 'Lead records', 'Manage billing', 'Lead teams'],
                futureProgression: 'Progression to Healthcare Administrator'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 21. BUSINESS & MANAGEMENT (8 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'business-management',
        name: 'Business & Management',
        icon: FaUserTie,
        description: 'Business administration, leadership, and strategic management certifications',
        courses: [
            {
                slug: 'level-3-business',
                name: 'Level 3 Diploma in Business Management',
                duration: '12-18 Months',
                image: '/courses/level-3-business.webp',
                entryRequirements: 'Interest in business',
                studyUnits: ['Unit 1: Business Principles', 'Unit 2: Management', 'Unit 3: Marketing', 'Unit 4: Finance'],
                learningOutcomes: ['Apply business principles', 'Lead management', 'Apply marketing', 'Manage finance'],
                futureProgression: 'Progression to Level 4 Diploma'
            },
            {
                slug: 'level-4-business',
                name: 'Level 4 Diploma in Business Management',
                duration: '18-24 Months',
                image: '/courses/level-4-business.webp',
                entryRequirements: 'Level 3 Diploma or equivalent',
                studyUnits: ['Unit 1: Business Strategy', 'Unit 2: Leadership', 'Unit 3: Operations', 'Unit 4: Project Management'],
                learningOutcomes: ['Develop business strategy', 'Lead teams', 'Manage operations', 'Manage projects'],
                futureProgression: 'Progression to Level 5 Diploma'
            },
            {
                slug: 'level-5-business',
                name: 'Level 5 Diploma in Business Management',
                duration: '24-36 Months',
                image: '/courses/level-5-business.webp',
                entryRequirements: 'Level 4 Diploma',
                studyUnits: ['Unit 1: Strategic Business', 'Unit 2: Leadership', 'Unit 3: Business Development', 'Unit 4: Organizational Management'],
                learningOutcomes: ['Lead strategic business', 'Lead organizations', 'Develop business', 'Manage organizations'],
                futureProgression: 'Progression to Level 6 Diploma'
            },
            {
                slug: 'level-6-business',
                name: 'Level 6 Diploma in Business Management',
                duration: '36-48 Months',
                image: '/courses/level-6-business.webp',
                entryRequirements: 'Level 5 Diploma',
                studyUnits: ['Unit 1: Global Business', 'Unit 2: Strategic Leadership', 'Unit 3: Business Transformation', 'Unit 4: Organizational Leadership'],
                learningOutcomes: ['Lead global business', 'Lead strategic initiatives', 'Lead business transformation', 'Lead organizations'],
                futureProgression: 'Progression to Business Director'
            },
            {
                slug: 'small-business-management',
                name: 'Small Business Management',
                duration: '6 Months',
                image: '/courses/small-business-management.webp',
                entryRequirements: 'Interest in small business',
                studyUnits: ['Unit 1: Small Business Principles', 'Unit 2: Management', 'Unit 3: Marketing', 'Unit 4: Finance'],
                learningOutcomes: ['Manage small business', 'Apply management', 'Apply marketing', 'Manage finance'],
                futureProgression: 'Progression to Business Owner'
            },
            {
                slug: 'strategic-management',
                name: 'Strategic Management Certification',
                duration: '6 Months',
                image: '/courses/strategic-management.webp',
                entryRequirements: 'Understanding of business',
                studyUnits: ['Unit 1: Strategy Principles', 'Unit 2: Analysis', 'Unit 3: Implementation', 'Unit 4: Evaluation'],
                learningOutcomes: ['Develop strategy', 'Apply analysis', 'Implement strategy', 'Evaluate strategy'],
                futureProgression: 'Progression to Strategy Director'
            },
            {
                slug: 'operations-management',
                name: 'Operations Management Certification',
                duration: '6 Months',
                image: '/courses/operations-management.webp',
                entryRequirements: 'Understanding of operations',
                studyUnits: ['Unit 1: Operations Principles', 'Unit 2: Process Management', 'Unit 3: Quality Management', 'Unit 4: Supply Chain'],
                learningOutcomes: ['Manage operations', 'Lead processes', 'Manage quality', 'Lead supply chain'],
                futureProgression: 'Progression to Operations Director'
            },
            {
                slug: 'human-resources-management',
                name: 'Human Resources Management Certification',
                duration: '6 Months',
                image: '/courses/human-resources-management.webp',
                entryRequirements: 'Interest in HR',
                studyUnits: ['Unit 1: HR Principles', 'Unit 2: Recruitment', 'Unit 3: Performance Management', 'Unit 4: Employee Relations'],
                learningOutcomes: ['Manage HR', 'Lead recruitment', 'Manage performance', 'Lead employee relations'],
                futureProgression: 'Progression to HR Director'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 22. IT & DIGITAL (8 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'it-digital',
        name: 'IT & Digital',
        icon: FaLaptop,
        description: 'Information technology, digital transformation, and systems management certifications',
        courses: [
            {
                slug: 'level-3-it',
                name: 'Level 3 Diploma in IT',
                duration: '12-18 Months',
                image: '/courses/level-3-it.webp',
                entryRequirements: 'Interest in IT',
                studyUnits: ['Unit 1: IT Principles', 'Unit 2: Hardware', 'Unit 3: Software', 'Unit 4: Networks'],
                learningOutcomes: ['Apply IT principles', 'Work with hardware', 'Use software', 'Manage networks'],
                futureProgression: 'Progression to Level 4 Diploma'
            },
            {
                slug: 'level-4-it',
                name: 'Level 4 Diploma in IT',
                duration: '18-24 Months',
                image: '/courses/level-4-it.webp',
                entryRequirements: 'Level 3 Diploma or equivalent',
                studyUnits: ['Unit 1: Systems Management', 'Unit 2: Network Management', 'Unit 3: Security', 'Unit 4: Project Management'],
                learningOutcomes: ['Manage IT systems', 'Manage networks', 'Ensure security', 'Manage projects'],
                futureProgression: 'Progression to Level 5 Diploma'
            },
            {
                slug: 'level-5-it',
                name: 'Level 5 Diploma in IT',
                duration: '24-36 Months',
                image: '/courses/level-5-it.webp',
                entryRequirements: 'Level 4 Diploma',
                studyUnits: ['Unit 1: IT Strategy', 'Unit 2: Digital Transformation', 'Unit 3: IT Leadership', 'Unit 4: Business Management'],
                learningOutcomes: ['Lead IT strategy', 'Lead digital transformation', 'Lead IT teams', 'Manage IT business'],
                futureProgression: 'Progression to IT Director'
            },
            {
                slug: 'it-support',
                name: 'IT Support Certification',
                duration: '3 Months',
                image: '/courses/it-support.webp',
                entryRequirements: 'Interest in IT support',
                studyUnits: ['Unit 1: Support Principles', 'Unit 2: Troubleshooting', 'Unit 3: Customer Service', 'Unit 4: Tools'],
                learningOutcomes: ['Provide IT support', 'Troubleshoot issues', 'Provide customer service', 'Use support tools'],
                futureProgression: 'Progression to IT Support Manager'
            },
            {
                slug: 'network-administration',
                name: 'Network Administration Certification',
                duration: '6 Months',
                image: '/courses/network-administration.webp',
                entryRequirements: 'Understanding of networks',
                studyUnits: ['Unit 1: Network Principles', 'Unit 2: Configuration', 'Unit 3: Security', 'Unit 4: Management'],
                learningOutcomes: ['Manage networks', 'Configure networks', 'Ensure security', 'Lead network management'],
                futureProgression: 'Progression to Network Manager'
            },
            {
                slug: 'cloud-computing',
                name: 'Cloud Computing Certification',
                duration: '6 Months',
                image: '/courses/cloud-computing.webp',
                entryRequirements: 'Understanding of IT',
                studyUnits: ['Unit 1: Cloud Principles', 'Unit 2: AWS', 'Unit 3: Azure', 'Unit 4: Management'],
                learningOutcomes: ['Apply cloud principles', 'Work with AWS', 'Work with Azure', 'Manage cloud systems'],
                futureProgression: 'Progression to Cloud Architect'
            },
            {
                slug: 'it-security',
                name: 'IT Security Certification',
                duration: '6 Months',
                image: '/courses/it-security.webp',
                entryRequirements: 'Understanding of IT security',
                studyUnits: ['Unit 1: Security Principles', 'Unit 2: Risk Management', 'Unit 3: Security Controls', 'Unit 4: Incident Response'],
                learningOutcomes: ['Apply security principles', 'Manage risk', 'Implement controls', 'Lead incident response'],
                futureProgression: 'Progression to IT Security Manager'
            },
            {
                slug: 'digital-transformation',
                name: 'Digital Transformation Certification',
                duration: '6 Months',
                image: '/courses/digital-transformation.webp',
                entryRequirements: 'Understanding of digital technologies',
                studyUnits: ['Unit 1: Transformation Principles', 'Unit 2: Digital Strategy', 'Unit 3: Implementation', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead digital transformation', 'Develop digital strategy', 'Implement transformation', 'Lead teams'],
                futureProgression: 'Progression to Digital Director'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 23. DATA AND AI (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'data-ai',
        name: 'Data and AI',
        icon: FaRobot,
        description: 'Data science, artificial intelligence, and machine learning certifications',
        courses: [
            {
                slug: 'data-science',
                name: 'Data Science Certification',
                duration: '6 Months',
                image: '/courses/data-science.webp',
                entryRequirements: 'Understanding of programming',
                studyUnits: ['Unit 1: Data Science Principles', 'Unit 2: Python', 'Unit 3: Statistics', 'Unit 4: Machine Learning'],
                learningOutcomes: ['Apply data science principles', 'Use Python', 'Apply statistics', 'Apply machine learning'],
                futureProgression: 'Progression to Data Scientist'
            },
            {
                slug: 'machine-learning',
                name: 'Machine Learning Certification',
                duration: '6 Months',
                image: '/courses/machine-learning.webp',
                entryRequirements: 'Understanding of programming and math',
                studyUnits: ['Unit 1: ML Principles', 'Unit 2: Supervised Learning', 'Unit 3: Unsupervised Learning', 'Unit 4: Deep Learning'],
                learningOutcomes: ['Apply ML principles', 'Use supervised learning', 'Use unsupervised learning', 'Apply deep learning'],
                futureProgression: 'Progression to ML Engineer'
            },
            {
                slug: 'artificial-intelligence',
                name: 'Artificial Intelligence Certification',
                duration: '6 Months',
                image: '/courses/artificial-intelligence.webp',
                entryRequirements: 'Understanding of programming',
                studyUnits: ['Unit 1: AI Principles', 'Unit 2: AI Models', 'Unit 3: Neural Networks', 'Unit 4: AI Applications'],
                learningOutcomes: ['Apply AI principles', 'Use AI models', 'Apply neural networks', 'Apply AI applications'],
                futureProgression: 'Progression to AI Engineer'
            },
            {
                slug: 'deep-learning',
                name: 'Deep Learning Certification',
                duration: '6 Months',
                image: '/courses/deep-learning.webp',
                entryRequirements: 'Understanding of AI basics',
                studyUnits: ['Unit 1: Deep Learning Principles', 'Unit 2: Neural Networks', 'Unit 3: CNNs', 'Unit 4: RNNs'],
                learningOutcomes: ['Apply deep learning principles', 'Use neural networks', 'Apply CNNs', 'Apply RNNs'],
                futureProgression: 'Progression to Deep Learning Engineer'
            },
            {
                slug: 'data-analytics',
                name: 'Data Analytics Certification',
                duration: '3 Months',
                image: '/courses/data-analytics.webp',
                entryRequirements: 'Interest in data analytics',
                studyUnits: ['Unit 1: Analytics Principles', 'Unit 2: SQL', 'Unit 3: Excel', 'Unit 4: Visualization'],
                learningOutcomes: ['Apply analytics principles', 'Use SQL', 'Use Excel', 'Create visualizations'],
                futureProgression: 'Progression to Data Analyst'
            },
            {
                slug: 'big-data',
                name: 'Big Data Certification',
                duration: '6 Months',
                image: '/courses/big-data.webp',
                entryRequirements: 'Understanding of data',
                studyUnits: ['Unit 1: Big Data Principles', 'Unit 2: Hadoop', 'Unit 3: Spark', 'Unit 4: Management'],
                learningOutcomes: ['Apply big data principles', 'Use Hadoop', 'Use Spark', 'Lead management'],
                futureProgression: 'Progression to Big Data Engineer'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 24. CYBERSECURITY MANAGEMENT (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'cybersecurity-management',
        name: 'Cybersecurity Management',
        icon: FaShieldVirus,
        description: 'Cybersecurity, information security, and risk management certifications',
        courses: [
            {
                slug: 'cybersecurity-fundamentals',
                name: 'Cybersecurity Fundamentals',
                duration: '3 Months',
                image: '/courses/cybersecurity-fundamentals.webp',
                entryRequirements: 'Interest in cybersecurity',
                studyUnits: ['Unit 1: Security Principles', 'Unit 2: Threats', 'Unit 3: Controls', 'Unit 4: Incident Response'],
                learningOutcomes: ['Apply security principles', 'Identify threats', 'Implement controls', 'Lead incident response'],
                futureProgression: 'Progression to Cybersecurity Management'
            },
            {
                slug: 'cybersecurity-management',
                name: 'Cybersecurity Management Certification',
                duration: '6 Months',
                image: '/courses/cybersecurity-management.webp',
                entryRequirements: 'Understanding of cybersecurity',
                studyUnits: ['Unit 1: Management Principles', 'Unit 2: Risk Management', 'Unit 3: Security Strategy', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead cybersecurity management', 'Manage risk', 'Develop security strategy', 'Lead teams'],
                futureProgression: 'Progression to Cybersecurity Director'
            },
            {
                slug: 'information-security-management',
                name: 'Information Security Management Certification',
                duration: '6 Months',
                image: '/courses/information-security-management.webp',
                entryRequirements: 'Understanding of security',
                studyUnits: ['Unit 1: Information Security', 'Unit 2: Risk Management', 'Unit 3: Controls', 'Unit 4: Management'],
                learningOutcomes: ['Lead information security', 'Manage risk', 'Implement controls', 'Lead management'],
                futureProgression: 'Progression to Information Security Director'
            },
            {
                slug: 'ethical-hacking',
                name: 'Ethical Hacking Certification',
                duration: '6 Months',
                image: '/courses/ethical-hacking.webp',
                entryRequirements: 'Understanding of networks and security',
                studyUnits: ['Unit 1: Hacking Principles', 'Unit 2: Penetration Testing', 'Unit 3: Vulnerability Assessment', 'Unit 4: Reporting'],
                learningOutcomes: ['Apply ethical hacking', 'Conduct penetration testing', 'Assess vulnerabilities', 'Write reports'],
                futureProgression: 'Progression to Security Consultant'
            },
            {
                slug: 'incident-response-management',
                name: 'Incident Response Management',
                duration: '3 Months',
                image: '/courses/incident-response-management.webp',
                entryRequirements: 'Understanding of security',
                studyUnits: ['Unit 1: Response Principles', 'Unit 2: Procedures', 'Unit 3: Investigation', 'Unit 4: Recovery'],
                learningOutcomes: ['Lead incident response', 'Apply procedures', 'Conduct investigation', 'Lead recovery'],
                futureProgression: 'Progression to Incident Response Manager'
            },
            {
                slug: 'iso-27001-lead-auditor',
                name: 'ISO 27001:2022 Information Security Management Lead Auditor',
                duration: '5 Days',
                image: '/courses/iso-27001-lead-auditor.webp',
                entryRequirements: 'Understanding of information security',
                studyUnits: ['Unit 1: ISO 27001 Requirements', 'Unit 2: Audit Principles', 'Unit 3: Audit Planning', 'Unit 4: Conducting Audits'],
                learningOutcomes: ['Understand ISO 27001', 'Plan and conduct audits', 'Lead audit teams', 'Manage audit programs'],
                futureProgression: 'Progression to Lead Auditor or Security Consultant'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 25. INFORMATION TECHNOLOGY ENGINEERING (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'it-engineering',
        name: 'Information Technology Engineering',
        icon: FaCode,
        description: 'IT engineering, software development, and systems architecture certifications',
        courses: [
            {
                slug: 'level-3-it-engineering',
                name: 'Level 3 Diploma in IT Engineering',
                duration: '12-18 Months',
                image: '/courses/level-3-it-engineering.webp',
                entryRequirements: 'Interest in IT engineering',
                studyUnits: ['Unit 1: IT Principles', 'Unit 2: Hardware', 'Unit 3: Software', 'Unit 4: Networks'],
                learningOutcomes: ['Apply IT principles', 'Work with hardware', 'Use software', 'Manage networks'],
                futureProgression: 'Progression to Level 4 Diploma'
            },
            {
                slug: 'level-4-it-engineering',
                name: 'Level 4 Diploma in IT Engineering',
                duration: '18-24 Months',
                image: '/courses/level-4-it-engineering.webp',
                entryRequirements: 'Level 3 Diploma or equivalent',
                studyUnits: ['Unit 1: Systems Engineering', 'Unit 2: Software Development', 'Unit 3: Network Engineering', 'Unit 4: Project Management'],
                learningOutcomes: ['Lead systems engineering', 'Develop software', 'Design networks', 'Manage projects'],
                futureProgression: 'Progression to IT Engineer'
            },
            {
                slug: 'software-engineering',
                name: 'Software Engineering Certification',
                duration: '6 Months',
                image: '/courses/software-engineering.webp',
                entryRequirements: 'Understanding of programming',
                studyUnits: ['Unit 1: Software Principles', 'Unit 2: Development', 'Unit 3: Testing', 'Unit 4: Management'],
                learningOutcomes: ['Apply software principles', 'Lead development', 'Conduct testing', 'Lead management'],
                futureProgression: 'Progression to Software Engineer'
            },
            {
                slug: 'systems-architecture',
                name: 'Systems Architecture Certification',
                duration: '6 Months',
                image: '/courses/systems-architecture.webp',
                entryRequirements: 'Understanding of IT systems',
                studyUnits: ['Unit 1: Architecture Principles', 'Unit 2: Design', 'Unit 3: Implementation', 'Unit 4: Management'],
                learningOutcomes: ['Design systems architecture', 'Lead implementation', 'Manage systems', 'Lead teams'],
                futureProgression: 'Progression to Systems Architect'
            },
            {
                slug: 'network-engineering',
                name: 'Network Engineering Certification',
                duration: '6 Months',
                image: '/courses/network-engineering.webp',
                entryRequirements: 'Understanding of networks',
                studyUnits: ['Unit 1: Network Principles', 'Unit 2: Design', 'Unit 3: Implementation', 'Unit 4: Security'],
                learningOutcomes: ['Design networks', 'Lead implementation', 'Ensure security', 'Manage networks'],
                futureProgression: 'Progression to Network Engineer'
            },
            {
                slug: 'devops',
                name: 'DevOps Certification',
                duration: '6 Months',
                image: '/courses/devops.webp',
                entryRequirements: 'Understanding of development and operations',
                studyUnits: ['Unit 1: DevOps Principles', 'Unit 2: CI/CD', 'Unit 3: Automation', 'Unit 4: Management'],
                learningOutcomes: ['Apply DevOps principles', 'Lead CI/CD', 'Apply automation', 'Lead management'],
                futureProgression: 'Progression to DevOps Engineer'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 26. BUSINESS SUSTAINABILITY (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'business-sustainability',
        name: 'Business Sustainability',
        icon: FaRecycle,
        description: 'Sustainable business practices, ESG, and corporate responsibility certifications',
        courses: [
            {
                slug: 'sustainability-management',
                name: 'Sustainability Management Certification',
                duration: '6 Months',
                image: '/courses/sustainability-management.webp',
                entryRequirements: 'Interest in sustainability',
                studyUnits: ['Unit 1: Sustainability Principles', 'Unit 2: ESG', 'Unit 3: Corporate Responsibility', 'Unit 4: Leadership'],
                learningOutcomes: ['Apply sustainability principles', 'Manage ESG', 'Lead corporate responsibility', 'Lead sustainability teams'],
                futureProgression: 'Progression to Sustainability Director'
            },
            {
                slug: 'esg-certification',
                name: 'ESG Certification',
                duration: '3 Months',
                image: '/courses/esg-certification.webp',
                entryRequirements: 'Interest in ESG',
                studyUnits: ['Unit 1: ESG Principles', 'Unit 2: Environmental', 'Unit 3: Social', 'Unit 4: Governance'],
                learningOutcomes: ['Apply ESG principles', 'Lead environmental initiatives', 'Lead social initiatives', 'Lead governance'],
                futureProgression: 'Progression to ESG Director'
            },
            {
                slug: 'corporate-social-responsibility',
                name: 'Corporate Social Responsibility Certification',
                duration: '3 Months',
                image: '/courses/corporate-social-responsibility.webp',
                entryRequirements: 'Interest in CSR',
                studyUnits: ['Unit 1: CSR Principles', 'Unit 2: Strategy', 'Unit 3: Implementation', 'Unit 4: Reporting'],
                learningOutcomes: ['Apply CSR principles', 'Develop strategy', 'Lead implementation', 'Manage reporting'],
                futureProgression: 'Progression to CSR Director'
            },
            {
                slug: 'sustainable-business-practices',
                name: 'Sustainable Business Practices',
                duration: '3 Months',
                image: '/courses/sustainable-business-practices.webp',
                entryRequirements: 'Interest in sustainability',
                studyUnits: ['Unit 1: Sustainability Principles', 'Unit 2: Practices', 'Unit 3: Implementation', 'Unit 4: Management'],
                learningOutcomes: ['Apply sustainability principles', 'Lead practices', 'Implement initiatives', 'Manage programs'],
                futureProgression: 'Progression to Sustainability Manager'
            },
            {
                slug: 'green-supply-chain',
                name: 'Green Supply Chain Management',
                duration: '6 Months',
                image: '/courses/green-supply-chain.webp',
                entryRequirements: 'Understanding of supply chain',
                studyUnits: ['Unit 1: Supply Chain Principles', 'Unit 2: Green Practices', 'Unit 3: Implementation', 'Unit 4: Management'],
                learningOutcomes: ['Lead green supply chain', 'Apply green practices', 'Implement initiatives', 'Manage programs'],
                futureProgression: 'Progression to Supply Chain Director'
            },
            {
                slug: 'carbon-footprint-management',
                name: 'Carbon Footprint Management',
                duration: '3 Months',
                image: '/courses/carbon-footprint-management.webp',
                entryRequirements: 'Interest in carbon management',
                studyUnits: ['Unit 1: Carbon Principles', 'Unit 2: Measurement', 'Unit 3: Reduction', 'Unit 4: Management'],
                learningOutcomes: ['Manage carbon footprint', 'Measure emissions', 'Lead reduction', 'Manage programs'],
                futureProgression: 'Progression to Carbon Manager'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 27. OIL AND GAS INDUSTRY (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'oil-gas-industry',
        name: 'Oil and Gas Industry',
        icon: FaGasPump,
        description: 'Oil and gas operations, petroleum engineering, and safety certifications',
        courses: [
            {
                slug: 'oil-gas-operations',
                name: 'Oil and Gas Operations Certification',
                duration: '6 Months',
                image: '/courses/oil-gas-operations.webp',
                entryRequirements: 'Interest in oil and gas',
                studyUnits: ['Unit 1: Operations Principles', 'Unit 2: Production', 'Unit 3: Safety', 'Unit 4: Management'],
                learningOutcomes: ['Lead oil and gas operations', 'Manage production', 'Ensure safety', 'Lead operations'],
                futureProgression: 'Progression to Operations Manager'
            },
            {
                slug: 'petroleum-engineering',
                name: 'Petroleum Engineering Certification',
                duration: '6 Months',
                image: '/courses/petroleum-engineering.webp',
                entryRequirements: 'Understanding of engineering',
                studyUnits: ['Unit 1: Petroleum Principles', 'Unit 2: Exploration', 'Unit 3: Production', 'Unit 4: Management'],
                learningOutcomes: ['Apply petroleum principles', 'Lead exploration', 'Manage production', 'Lead teams'],
                futureProgression: 'Progression to Petroleum Engineer'
            },
            {
                slug: 'gas-processing-technology',
                name: 'Gas Processing Technology',
                duration: '6 Months',
                image: '/courses/gas-processing-technology.webp',
                entryRequirements: 'Understanding of gas processing',
                studyUnits: ['Unit 1: Processing Principles', 'Unit 2: Technology', 'Unit 3: Safety', 'Unit 4: Management'],
                learningOutcomes: ['Lead gas processing', 'Apply technology', 'Ensure safety', 'Manage operations'],
                futureProgression: 'Progression to Gas Processing Manager'
            },
            {
                slug: 'drilling-operations-management',
                name: 'Drilling Operations Management',
                duration: '6 Months',
                image: '/courses/drilling-operations-management.webp',
                entryRequirements: 'Understanding of drilling',
                studyUnits: ['Unit 1: Drilling Principles', 'Unit 2: Operations', 'Unit 3: Safety', 'Unit 4: Management'],
                learningOutcomes: ['Lead drilling operations', 'Manage operations', 'Ensure safety', 'Lead teams'],
                futureProgression: 'Progression to Drilling Manager'
            },
            {
                slug: 'oil-gas-safety-management',
                name: 'Oil and Gas Safety Management',
                duration: '5 Days',
                image: '/courses/oil-gas-safety-management.webp',
                entryRequirements: 'Oil and gas experience',
                studyUnits: ['Unit 1: Safety Principles', 'Unit 2: Risk Management', 'Unit 3: Safety Systems', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead safety management', 'Manage risk', 'Implement safety systems', 'Lead safety teams'],
                futureProgression: 'Progression to Safety Director'
            },
            {
                slug: 'petrochemical-engineering',
                name: 'Petrochemical Engineering Certification',
                duration: '6 Months',
                image: '/courses/petrochemical-engineering.webp',
                entryRequirements: 'Understanding of petrochemicals',
                studyUnits: ['Unit 1: Petrochemical Principles', 'Unit 2: Processes', 'Unit 3: Safety', 'Unit 4: Management'],
                learningOutcomes: ['Apply petrochemical principles', 'Lead processes', 'Ensure safety', 'Manage operations'],
                futureProgression: 'Progression to Petrochemical Engineer'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 28. PREHOSPITAL CARE (4 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'prehospital-care',
        name: 'Prehospital Care',
        icon: FaAmbulance,
        description: 'Emergency medical services, paramedic training, and trauma care certifications',
        courses: [
            {
                slug: 'paramedic-certification',
                name: 'Paramedic Certification',
                duration: '12-18 Months',
                image: '/courses/paramedic-certification.webp',
                entryRequirements: 'EMT certification or equivalent',
                studyUnits: ['Unit 1: Paramedic Principles', 'Unit 2: Emergency Care', 'Unit 3: Trauma', 'Unit 4: Patient Assessment'],
                learningOutcomes: ['Apply paramedic principles', 'Lead emergency care', 'Manage trauma', 'Assess patients'],
                futureProgression: 'Progression to Paramedic Practitioner'
            },
            {
                slug: 'emergency-medical-technician',
                name: 'Emergency Medical Technician (EMT)',
                duration: '6-12 Months',
                image: '/courses/emergency-medical-technician.webp',
                entryRequirements: 'Interest in EMS',
                studyUnits: ['Unit 1: EMT Principles', 'Unit 2: Emergency Care', 'Unit 3: Patient Assessment', 'Unit 4: Safety'],
                learningOutcomes: ['Apply EMT principles', 'Lead emergency care', 'Assess patients', 'Ensure safety'],
                futureProgression: 'Progression to Paramedic'
            },
            {
                slug: 'trauma-care',
                name: 'Trauma Care Certification',
                duration: '3 Months',
                image: '/courses/trauma-care.webp',
                entryRequirements: 'Healthcare experience',
                studyUnits: ['Unit 1: Trauma Principles', 'Unit 2: Assessment', 'Unit 3: Management', 'Unit 4: Recovery'],
                learningOutcomes: ['Apply trauma principles', 'Conduct assessment', 'Lead management', 'Lead recovery'],
                futureProgression: 'Progression to Trauma Specialist'
            },
            {
                slug: 'prehospital-care-management',
                name: 'Prehospital Care Management',
                duration: '6 Months',
                image: '/courses/prehospital-care-management.webp',
                entryRequirements: 'EMS experience',
                studyUnits: ['Unit 1: Management Principles', 'Unit 2: Service Delivery', 'Unit 3: Quality', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead prehospital care', 'Manage service delivery', 'Ensure quality', 'Lead teams'],
                futureProgression: 'Progression to EMS Director'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 29. HEALTH CARE MANAGEMENT (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'healthcare-management',
        name: 'Health Care Management',
        icon: FaHospital,
        description: 'Healthcare administration, hospital management, and policy certifications',
        courses: [
            {
                slug: 'healthcare-administration',
                name: 'Healthcare Administration Certification',
                duration: '6 Months',
                image: '/courses/healthcare-administration.webp',
                entryRequirements: 'Understanding of healthcare',
                studyUnits: ['Unit 1: Administration Principles', 'Unit 2: Management', 'Unit 3: Policy', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead healthcare administration', 'Manage services', 'Understand policy', 'Lead teams'],
                futureProgression: 'Progression to Healthcare Administrator'
            },
            {
                slug: 'hospital-management',
                name: 'Hospital Management Certification',
                duration: '6 Months',
                image: '/courses/hospital-management.webp',
                entryRequirements: 'Healthcare experience',
                studyUnits: ['Unit 1: Hospital Principles', 'Unit 2: Operations', 'Unit 3: Quality', 'Unit 4: Leadership'],
                learningOutcomes: ['Manage hospitals', 'Lead operations', 'Ensure quality', 'Lead hospital teams'],
                futureProgression: 'Progression to Hospital Administrator'
            },
            {
                slug: 'healthcare-policy',
                name: 'Healthcare Policy Certification',
                duration: '3 Months',
                image: '/courses/healthcare-policy.webp',
                entryRequirements: 'Interest in healthcare policy',
                studyUnits: ['Unit 1: Policy Principles', 'Unit 2: Development', 'Unit 3: Implementation', 'Unit 4: Evaluation'],
                learningOutcomes: ['Develop healthcare policy', 'Lead implementation', 'Conduct evaluation', 'Lead policy initiatives'],
                futureProgression: 'Progression to Policy Director'
            },
            {
                slug: 'medical-practice-management',
                name: 'Medical Practice Management',
                duration: '6 Months',
                image: '/courses/medical-practice-management.webp',
                entryRequirements: 'Understanding of medical practice',
                studyUnits: ['Unit 1: Practice Principles', 'Unit 2: Operations', 'Unit 3: Finance', 'Unit 4: Leadership'],
                learningOutcomes: ['Manage medical practice', 'Lead operations', 'Manage finance', 'Lead teams'],
                futureProgression: 'Progression to Practice Manager'
            },
            {
                slug: 'healthcare-quality-management',
                name: 'Healthcare Quality Management',
                duration: '6 Months',
                image: '/courses/healthcare-quality-management.webp',
                entryRequirements: 'Understanding of healthcare quality',
                studyUnits: ['Unit 1: Quality Principles', 'Unit 2: Measurement', 'Unit 3: Improvement', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead quality management', 'Measure quality', 'Lead improvement', 'Lead teams'],
                futureProgression: 'Progression to Quality Director'
            },
            {
                slug: 'patient-safety',
                name: 'Patient Safety Certification',
                duration: '3 Months',
                image: '/courses/patient-safety.webp',
                entryRequirements: 'Understanding of patient safety',
                studyUnits: ['Unit 1: Safety Principles', 'Unit 2: Risk Management', 'Unit 3: Safety Systems', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead patient safety', 'Manage risk', 'Implement safety systems', 'Lead safety teams'],
                futureProgression: 'Progression to Patient Safety Director'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 30. MEDICAL QUALIFICATIONS (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'medical-qualifications',
        name: 'Medical Qualifications',
        icon: FaUserMd,
        description: 'Medical assisting, clinical practice, and healthcare support certifications',
        courses: [
            {
                slug: 'medical-assistant',
                name: 'Medical Assistant Certification',
                duration: '6-12 Months',
                image: '/courses/medical-assistant.webp',
                entryRequirements: 'Interest in medical assisting',
                studyUnits: ['Unit 1: Medical Principles', 'Unit 2: Clinical Skills', 'Unit 3: Patient Care', 'Unit 4: Administration'],
                learningOutcomes: ['Apply medical principles', 'Use clinical skills', 'Provide patient care', 'Lead administration'],
                futureProgression: 'Progression to Clinical Medical Assistant'
            },
            {
                slug: 'clinical-medical-assistant',
                name: 'Clinical Medical Assistant',
                duration: '9-12 Months',
                image: '/courses/clinical-medical-assistant.webp',
                entryRequirements: 'Medical Assistant certification',
                studyUnits: ['Unit 1: Clinical Principles', 'Unit 2: Patient Care', 'Unit 3: Procedures', 'Unit 4: Safety'],
                learningOutcomes: ['Apply clinical principles', 'Provide patient care', 'Perform procedures', 'Ensure safety'],
                futureProgression: 'Progression to Clinical Manager'
            },
            {
                slug: 'medical-billing-coding',
                name: 'Medical Billing and Coding',
                duration: '6 Months',
                image: '/courses/medical-billing-coding.webp',
                entryRequirements: 'Interest in medical billing',
                studyUnits: ['Unit 1: Billing Principles', 'Unit 2: Coding', 'Unit 3: Insurance', 'Unit 4: Compliance'],
                learningOutcomes: ['Lead medical billing', 'Apply coding', 'Manage insurance', 'Ensure compliance'],
                futureProgression: 'Progression to Billing Manager'
            },
            {
                slug: 'phlebotomy',
                name: 'Phlebotomy Certification',
                duration: '3-6 Months',
                image: '/courses/phlebotomy.webp',
                entryRequirements: 'Interest in phlebotomy',
                studyUnits: ['Unit 1: Phlebotomy Principles', 'Unit 2: Techniques', 'Unit 3: Safety', 'Unit 4: Patient Care'],
                learningOutcomes: ['Apply phlebotomy principles', 'Use techniques', 'Ensure safety', 'Provide patient care'],
                futureProgression: 'Progression to Phlebotomy Supervisor'
            },
            {
                slug: 'ekg-technician',
                name: 'EKG Technician Certification',
                duration: '3-6 Months',
                image: '/courses/ekg-technician.webp',
                entryRequirements: 'Interest in EKG',
                studyUnits: ['Unit 1: EKG Principles', 'Unit 2: Procedures', 'Unit 3: Interpretation', 'Unit 4: Safety'],
                learningOutcomes: ['Apply EKG principles', 'Perform procedures', 'Interpret results', 'Ensure safety'],
                futureProgression: 'Progression to EKG Supervisor'
            },
            {
                slug: 'medical-transcription',
                name: 'Medical Transcription',
                duration: '3-6 Months',
                image: '/courses/medical-transcription.webp',
                entryRequirements: 'Interest in medical transcription',
                studyUnits: ['Unit 1: Transcription Principles', 'Unit 2: Medical Terminology', 'Unit 3: Technology', 'Unit 4: Quality'],
                learningOutcomes: ['Apply transcription principles', 'Use medical terminology', 'Use technology', 'Ensure quality'],
                futureProgression: 'Progression to Medical Transcriptionist'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 31. PHARMACY (4 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'pharmacy',
        name: 'Pharmacy',
        icon: FaPills,
        description: 'Pharmacy practice, pharmaceutical science, and medication management certifications',
        courses: [
            {
                slug: 'pharmacy-technician',
                name: 'Pharmacy Technician Certification',
                duration: '6-12 Months',
                image: '/courses/pharmacy-technician.webp',
                entryRequirements: 'Interest in pharmacy',
                studyUnits: ['Unit 1: Pharmacy Principles', 'Unit 2: Pharmacology', 'Unit 3: Patient Care', 'Unit 4: Safety'],
                learningOutcomes: ['Apply pharmacy principles', 'Understand pharmacology', 'Provide patient care', 'Ensure safety'],
                futureProgression: 'Progression to Pharmacy Manager'
            },
            {
                slug: 'pharmacy-assistant',
                name: 'Pharmacy Assistant Certification',
                duration: '3-6 Months',
                image: '/courses/pharmacy-assistant.webp',
                entryRequirements: 'Interest in pharmacy',
                studyUnits: ['Unit 1: Assistant Principles', 'Unit 2: Customer Service', 'Unit 3: Safety', 'Unit 4: Operations'],
                learningOutcomes: ['Apply assistant principles', 'Lead customer service', 'Ensure safety', 'Support operations'],
                futureProgression: 'Progression to Pharmacy Technician'
            },
            {
                slug: 'pharmaceutical-science',
                name: 'Pharmaceutical Science Certification',
                duration: '6 Months',
                image: '/courses/pharmaceutical-science.webp',
                entryRequirements: 'Interest in pharmaceutical science',
                studyUnits: ['Unit 1: Science Principles', 'Unit 2: Drug Development', 'Unit 3: Regulation', 'Unit 4: Safety'],
                learningOutcomes: ['Apply pharmaceutical science', 'Lead drug development', 'Understand regulation', 'Ensure safety'],
                futureProgression: 'Progression to Pharmaceutical Scientist'
            },
            {
                slug: 'medication-management',
                name: 'Medication Management Certification',
                duration: '3 Months',
                image: '/courses/medication-management.webp',
                entryRequirements: 'Understanding of medications',
                studyUnits: ['Unit 1: Management Principles', 'Unit 2: Medications', 'Unit 3: Safety', 'Unit 4: Compliance'],
                learningOutcomes: ['Lead medication management', 'Understand medications', 'Ensure safety', 'Ensure compliance'],
                futureProgression: 'Progression to Medication Manager'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 32. LASER SAFETY (4 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'laser-safety',
        name: 'Laser Safety',
        icon: FaSun,
        description: 'Laser safety, medical laser use, and radiation protection certifications',
        courses: [
            {
                slug: 'laser-safety-officer',
                name: 'Laser Safety Officer (LSO)',
                duration: '3 Days',
                image: '/courses/laser-safety-officer.webp',
                entryRequirements: 'Understanding of laser safety',
                studyUnits: ['Unit 1: Laser Principles', 'Unit 2: Safety', 'Unit 3: Regulations', 'Unit 4: Management'],
                learningOutcomes: ['Apply laser principles', 'Lead safety', 'Understand regulations', 'Lead management'],
                futureProgression: 'Progression to Safety Director'
            },
            {
                slug: 'medical-laser-safety',
                name: 'Medical Laser Safety',
                duration: '3 Days',
                image: '/courses/medical-laser-safety.webp',
                entryRequirements: 'Understanding of medical lasers',
                studyUnits: ['Unit 1: Medical Laser Principles', 'Unit 2: Safety', 'Unit 3: Regulations', 'Unit 4: Patient Care'],
                learningOutcomes: ['Apply medical laser principles', 'Ensure safety', 'Understand regulations', 'Provide patient care'],
                futureProgression: 'Progression to LSO'
            },
            {
                slug: 'laser-safety-aesthetics',
                name: 'Laser Safety for Aesthetics',
                duration: '2 Days',
                image: '/courses/laser-safety-aesthetics.webp',
                entryRequirements: 'Understanding of aesthetics',
                studyUnits: ['Unit 1: Aesthetic Laser Principles', 'Unit 2: Safety', 'Unit 3: Regulations', 'Unit 4: Patient Care'],
                learningOutcomes: ['Apply aesthetic laser principles', 'Ensure safety', 'Understand regulations', 'Provide patient care'],
                futureProgression: 'Progression to Aesthetic LSO'
            },
            {
                slug: 'radiation-safety-officer',
                name: 'Radiation Safety Officer',
                duration: '5 Days',
                image: '/courses/radiation-safety-officer.webp',
                entryRequirements: 'Understanding of radiation safety',
                studyUnits: ['Unit 1: Radiation Principles', 'Unit 2: Safety', 'Unit 3: Regulations', 'Unit 4: Management'],
                learningOutcomes: ['Apply radiation principles', 'Lead safety', 'Understand regulations', 'Lead management'],
                futureProgression: 'Progression to Safety Director'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 33. GREEN BUILDING (6 courses)
    // ═══════════════════════════════════════════════════
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
                studyUnits: ['Unit 1: Green Building Principles', 'Unit 2: LEED', 'Unit 3: Sustainable Design', 'Unit 4: Implementation'],
                learningOutcomes: ['Apply green building principles', 'Understand LEED', 'Lead sustainable design', 'Implement initiatives'],
                futureProgression: 'Progression to LEED AP'
            },
            {
                slug: 'leed-accredited-professional',
                name: 'LEED Accredited Professional',
                duration: '6 Months',
                image: '/courses/leed-accredited-professional.webp',
                entryRequirements: 'LEED Green Associate',
                studyUnits: ['Unit 1: LEED Principles', 'Unit 2: Certification', 'Unit 3: Project Management', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead LEED certification', 'Apply LEED principles', 'Manage projects', 'Lead teams'],
                futureProgression: 'Progression to LEED Fellow'
            },
            {
                slug: 'green-building-design',
                name: 'Green Building Design Certification',
                duration: '6 Months',
                image: '/courses/green-building-design.webp',
                entryRequirements: 'Understanding of building design',
                studyUnits: ['Unit 1: Design Principles', 'Unit 2: Sustainability', 'Unit 3: Implementation', 'Unit 4: Management'],
                learningOutcomes: ['Design green buildings', 'Apply sustainability', 'Lead implementation', 'Manage projects'],
                futureProgression: 'Progression to Sustainable Architect'
            },
            {
                slug: 'sustainable-architecture',
                name: 'Sustainable Architecture Certification',
                duration: '6 Months',
                image: '/courses/sustainable-architecture.webp',
                entryRequirements: 'Understanding of architecture',
                studyUnits: ['Unit 1: Architecture Principles', 'Unit 2: Sustainability', 'Unit 3: Design', 'Unit 4: Management'],
                learningOutcomes: ['Apply sustainable architecture', 'Lead design', 'Implement sustainability', 'Manage projects'],
                futureProgression: 'Progression to Sustainable Architect'
            },
            {
                slug: 'energy-efficient-building',
                name: 'Energy-Efficient Building Design',
                duration: '6 Months',
                image: '/courses/energy-efficient-building.webp',
                entryRequirements: 'Understanding of building energy',
                studyUnits: ['Unit 1: Efficiency Principles', 'Unit 2: Design', 'Unit 3: Systems', 'Unit 4: Management'],
                learningOutcomes: ['Design energy-efficient buildings', 'Apply principles', 'Implement systems', 'Manage projects'],
                futureProgression: 'Progression to Energy Architect'
            },
            {
                slug: 'net-zero-building',
                name: 'Net Zero Building Certification',
                duration: '6 Months',
                image: '/courses/net-zero-building.webp',
                entryRequirements: 'Understanding of building sustainability',
                studyUnits: ['Unit 1: Net Zero Principles', 'Unit 2: Design', 'Unit 3: Implementation', 'Unit 4: Management'],
                learningOutcomes: ['Design net zero buildings', 'Apply principles', 'Lead implementation', 'Manage projects'],
                futureProgression: 'Progression to Net Zero Architect'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 34. MANAGEMENT (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'management',
        name: 'Management',
        icon: FaHandshake,
        description: 'General management, team leadership, and organizational behavior certifications',
        courses: [
            {
                slug: 'management-certification',
                name: 'Management Certification',
                duration: '6 Months',
                image: '/courses/management-certification.webp',
                entryRequirements: 'Interest in management',
                studyUnits: ['Unit 1: Management Principles', 'Unit 2: Leadership', 'Unit 3: Operations', 'Unit 4: Strategy'],
                learningOutcomes: ['Apply management principles', 'Lead teams', 'Manage operations', 'Develop strategy'],
                futureProgression: 'Progression to Senior Management'
            },
            {
                slug: 'team-leadership',
                name: 'Team Leadership Certification',
                duration: '3 Months',
                image: '/courses/team-leadership.webp',
                entryRequirements: 'Experience in teams',
                studyUnits: ['Unit 1: Leadership Principles', 'Unit 2: Team Management', 'Unit 3: Communication', 'Unit 4: Performance'],
                learningOutcomes: ['Lead teams', 'Apply leadership principles', 'Communicate effectively', 'Manage performance'],
                futureProgression: 'Progression to Management'
            },
            {
                slug: 'organizational-behavior',
                name: 'Organizational Behavior Certification',
                duration: '3 Months',
                image: '/courses/organizational-behavior.webp',
                entryRequirements: 'Interest in organizations',
                studyUnits: ['Unit 1: Behavior Principles', 'Unit 2: Culture', 'Unit 3: Change', 'Unit 4: Leadership'],
                learningOutcomes: ['Understand organizational behavior', 'Lead culture', 'Manage change', 'Lead teams'],
                futureProgression: 'Progression to Organizational Development'
            },
            {
                slug: 'change-management',
                name: 'Change Management Certification',
                duration: '3 Months',
                image: '/courses/change-management.webp',
                entryRequirements: 'Experience in organizations',
                studyUnits: ['Unit 1: Change Principles', 'Unit 2: Strategy', 'Unit 3: Implementation', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead change management', 'Develop strategy', 'Implement change', 'Lead teams'],
                futureProgression: 'Progression to Change Manager'
            },
            {
                slug: 'performance-management',
                name: 'Performance Management Certification',
                duration: '3 Months',
                image: '/courses/performance-management.webp',
                entryRequirements: 'Understanding of performance',
                studyUnits: ['Unit 1: Performance Principles', 'Unit 2: Measurement', 'Unit 3: Improvement', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead performance management', 'Measure performance', 'Lead improvement', 'Lead teams'],
                futureProgression: 'Progression to Performance Manager'
            },
            {
                slug: 'conflict-resolution',
                name: 'Conflict Resolution Certification',
                duration: '2 Days',
                image: '/courses/conflict-resolution.webp',
                entryRequirements: 'Interest in conflict resolution',
                studyUnits: ['Unit 1: Conflict Principles', 'Unit 2: Resolution', 'Unit 3: Mediation', 'Unit 4: Leadership'],
                learningOutcomes: ['Apply conflict resolution', 'Lead mediation', 'Resolve conflicts', 'Lead teams'],
                futureProgression: 'Progression to Conflict Resolution Specialist'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 35. BUSINESS & LEADERSHIP (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'business-leadership',
        name: 'Business & Leadership',
        icon: FaPeopleArrows,
        description: 'Business strategy, leadership development, and executive management certifications',
        courses: [
            {
                slug: 'leadership-certification',
                name: 'Leadership Certification',
                duration: '6 Months',
                image: '/courses/leadership-certification.webp',
                entryRequirements: 'Experience in leadership',
                studyUnits: ['Unit 1: Leadership Principles', 'Unit 2: Strategy', 'Unit 3: Communication', 'Unit 4: Team Leadership'],
                learningOutcomes: ['Apply leadership principles', 'Develop strategy', 'Communicate effectively', 'Lead teams'],
                futureProgression: 'Progression to Executive Leadership'
            },
            {
                slug: 'executive-leadership',
                name: 'Executive Leadership Certification',
                duration: '12 Months',
                image: '/courses/executive-leadership.webp',
                entryRequirements: 'Senior leadership experience',
                studyUnits: ['Unit 1: Executive Principles', 'Unit 2: Strategy', 'Unit 3: Governance', 'Unit 4: Organizational Leadership'],
                learningOutcomes: ['Lead at executive level', 'Develop strategy', 'Lead governance', 'Lead organizations'],
                futureProgression: 'Progression to Executive Director'
            },
            {
                slug: 'business-strategy',
                name: 'Business Strategy Certification',
                duration: '6 Months',
                image: '/courses/business-strategy.webp',
                entryRequirements: 'Understanding of business',
                studyUnits: ['Unit 1: Strategy Principles', 'Unit 2: Analysis', 'Unit 3: Implementation', 'Unit 4: Leadership'],
                learningOutcomes: ['Develop business strategy', 'Conduct analysis', 'Lead implementation', 'Lead teams'],
                futureProgression: 'Progression to Strategy Director'
            },
            {
                slug: 'corporate-governance',
                name: 'Corporate Governance Certification',
                duration: '6 Months',
                image: '/courses/corporate-governance.webp',
                entryRequirements: 'Understanding of governance',
                studyUnits: ['Unit 1: Governance Principles', 'Unit 2: Compliance', 'Unit 3: Risk', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead corporate governance', 'Ensure compliance', 'Manage risk', 'Lead teams'],
                futureProgression: 'Progression to Governance Director'
            },
            {
                slug: 'business-ethics',
                name: 'Business Ethics Certification',
                duration: '3 Months',
                image: '/courses/business-ethics.webp',
                entryRequirements: 'Interest in business ethics',
                studyUnits: ['Unit 1: Ethics Principles', 'Unit 2: Decision Making', 'Unit 3: Compliance', 'Unit 4: Leadership'],
                learningOutcomes: ['Apply business ethics', 'Lead decision making', 'Ensure compliance', 'Lead teams'],
                futureProgression: 'Progression to Ethics Director'
            },
            {
                slug: 'entrepreneurship',
                name: 'Entrepreneurship Certification',
                duration: '6 Months',
                image: '/courses/entrepreneurship.webp',
                entryRequirements: 'Interest in entrepreneurship',
                studyUnits: ['Unit 1: Entrepreneurial Principles', 'Unit 2: Business Planning', 'Unit 3: Finance', 'Unit 4: Leadership'],
                learningOutcomes: ['Apply entrepreneurial principles', 'Plan business', 'Manage finance', 'Lead ventures'],
                futureProgression: 'Progression to Entrepreneur'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 36. HR AND LEARNING & DEVELOPMENT (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'hr-learning-development',
        name: 'HR and Learning & Development',
        icon: FaBookOpen,
        description: 'Human resources, talent management, and L&D strategy certifications',
        courses: [
            {
                slug: 'hr-management',
                name: 'HR Management Certification',
                duration: '6 Months',
                image: '/courses/hr-management.webp',
                entryRequirements: 'Interest in HR',
                studyUnits: ['Unit 1: HR Principles', 'Unit 2: Recruitment', 'Unit 3: Performance', 'Unit 4: Leadership'],
                learningOutcomes: ['Apply HR principles', 'Lead recruitment', 'Manage performance', 'Lead HR teams'],
                futureProgression: 'Progression to HR Director'
            },
            {
                slug: 'talent-management',
                name: 'Talent Management Certification',
                duration: '6 Months',
                image: '/courses/talent-management.webp',
                entryRequirements: 'Understanding of talent',
                studyUnits: ['Unit 1: Talent Principles', 'Unit 2: Development', 'Unit 3: Retention', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead talent management', 'Develop talent', 'Retain talent', 'Lead teams'],
                futureProgression: 'Progression to Talent Director'
            },
            {
                slug: 'learning-development',
                name: 'Learning & Development Certification',
                duration: '6 Months',
                image: '/courses/learning-development.webp',
                entryRequirements: 'Interest in L&D',
                studyUnits: ['Unit 1: L&D Principles', 'Unit 2: Strategy', 'Unit 3: Delivery', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead L&D strategy', 'Develop programs', 'Deliver training', 'Lead L&D teams'],
                futureProgression: 'Progression to L&D Director'
            },
            {
                slug: 'performance-management-hr',
                name: 'Performance Management Certification',
                duration: '3 Months',
                image: '/courses/performance-management-hr.webp',
                entryRequirements: 'Understanding of performance',
                studyUnits: ['Unit 1: Performance Principles', 'Unit 2: Measurement', 'Unit 3: Improvement', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead performance management', 'Measure performance', 'Lead improvement', 'Lead teams'],
                futureProgression: 'Progression to Performance Manager'
            },
            {
                slug: 'recruitment-selection',
                name: 'Recruitment and Selection Certification',
                duration: '3 Months',
                image: '/courses/recruitment-selection.webp',
                entryRequirements: 'Interest in recruitment',
                studyUnits: ['Unit 1: Recruitment Principles', 'Unit 2: Selection', 'Unit 3: Onboarding', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead recruitment', 'Apply selection', 'Manage onboarding', 'Lead teams'],
                futureProgression: 'Progression to Recruitment Director'
            },
            {
                slug: 'employee-relations',
                name: 'Employee Relations Certification',
                duration: '3 Months',
                image: '/courses/employee-relations.webp',
                entryRequirements: 'Understanding of employee relations',
                studyUnits: ['Unit 1: Relations Principles', 'Unit 2: Engagement', 'Unit 3: Communication', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead employee relations', 'Engage employees', 'Communicate effectively', 'Lead teams'],
                futureProgression: 'Progression to Employee Relations Director'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 37. SALES AND MARKETING (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'sales-marketing',
        name: 'Sales and Marketing',
        icon: FaComment,
        description: 'Sales management, marketing strategy, and digital marketing certifications',
        courses: [
            {
                slug: 'digital-marketing',
                name: 'Digital Marketing Certification',
                duration: '6 Months',
                image: '/courses/digital-marketing.webp',
                entryRequirements: 'Interest in digital marketing',
                studyUnits: ['Unit 1: Digital Principles', 'Unit 2: Strategy', 'Unit 3: Implementation', 'Unit 4: Leadership'],
                learningOutcomes: ['Apply digital marketing', 'Develop strategy', 'Lead implementation', 'Lead teams'],
                futureProgression: 'Progression to Digital Marketing Director'
            },
            {
                slug: 'social-media-marketing',
                name: 'Social Media Marketing',
                duration: '3 Months',
                image: '/courses/social-media-marketing.webp',
                entryRequirements: 'Interest in social media',
                studyUnits: ['Unit 1: Social Media Principles', 'Unit 2: Strategy', 'Unit 3: Implementation', 'Unit 4: Analytics'],
                learningOutcomes: ['Lead social media marketing', 'Develop strategy', 'Implement campaigns', 'Use analytics'],
                futureProgression: 'Progression to Social Media Manager'
            },
            {
                slug: 'sales-management',
                name: 'Sales Management Certification',
                duration: '6 Months',
                image: '/courses/sales-management.webp',
                entryRequirements: 'Sales experience',
                studyUnits: ['Unit 1: Sales Principles', 'Unit 2: Strategy', 'Unit 3: Team Management', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead sales management', 'Develop strategy', 'Manage sales teams', 'Lead teams'],
                futureProgression: 'Progression to Sales Director'
            },
            {
                slug: 'content-marketing',
                name: 'Content Marketing Certification',
                duration: '3 Months',
                image: '/courses/content-marketing.webp',
                entryRequirements: 'Interest in content',
                studyUnits: ['Unit 1: Content Principles', 'Unit 2: Strategy', 'Unit 3: Creation', 'Unit 4: Management'],
                learningOutcomes: ['Lead content marketing', 'Develop strategy', 'Create content', 'Manage programs'],
                futureProgression: 'Progression to Content Director'
            },
            {
                slug: 'seo-sem',
                name: 'SEO and SEM Certification',
                duration: '3 Months',
                image: '/courses/seo-sem.webp',
                entryRequirements: 'Understanding of digital marketing',
                studyUnits: ['Unit 1: SEO Principles', 'Unit 2: SEM', 'Unit 3: Analytics', 'Unit 4: Management'],
                learningOutcomes: ['Lead SEO', 'Manage SEM', 'Use analytics', 'Lead programs'],
                futureProgression: 'Progression to SEO Director'
            },
            {
                slug: 'brand-management',
                name: 'Brand Management Certification',
                duration: '6 Months',
                image: '/courses/brand-management.webp',
                entryRequirements: 'Understanding of branding',
                studyUnits: ['Unit 1: Brand Principles', 'Unit 2: Strategy', 'Unit 3: Development', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead brand management', 'Develop strategy', 'Build brands', 'Lead teams'],
                futureProgression: 'Progression to Brand Director'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 38. DIGITAL & IT (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'digital-it',
        name: 'Digital & IT',
        icon: FaDatabase,
        description: 'Digital skills, IT support, and technology management certifications',
        courses: [
            {
                slug: 'digital-skills',
                name: 'Digital Skills Certification',
                duration: '3 Months',
                image: '/courses/digital-skills.webp',
                entryRequirements: 'Interest in digital skills',
                studyUnits: ['Unit 1: Digital Principles', 'Unit 2: Tools', 'Unit 3: Application', 'Unit 4: Management'],
                learningOutcomes: ['Apply digital skills', 'Use tools', 'Lead application', 'Manage programs'],
                futureProgression: 'Progression to Digital Manager'
            },
            {
                slug: 'it-support-management',
                name: 'IT Support Certification',
                duration: '3 Months',
                image: '/courses/it-support-management.webp',
                entryRequirements: 'Interest in IT support',
                studyUnits: ['Unit 1: Support Principles', 'Unit 2: Troubleshooting', 'Unit 3: Customer Service', 'Unit 4: Management'],
                learningOutcomes: ['Lead IT support', 'Troubleshoot issues', 'Provide customer service', 'Manage teams'],
                futureProgression: 'Progression to IT Support Manager'
            },
            {
                slug: 'technology-management',
                name: 'Technology Management Certification',
                duration: '6 Months',
                image: '/courses/technology-management.webp',
                entryRequirements: 'Understanding of technology',
                studyUnits: ['Unit 1: Technology Principles', 'Unit 2: Management', 'Unit 3: Strategy', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead technology management', 'Manage technology', 'Develop strategy', 'Lead teams'],
                futureProgression: 'Progression to Technology Director'
            },
            {
                slug: 'digital-literacy',
                name: 'Digital Literacy Certification',
                duration: '2 Months',
                image: '/courses/digital-literacy.webp',
                entryRequirements: 'Interest in digital literacy',
                studyUnits: ['Unit 1: Literacy Principles', 'Unit 2: Tools', 'Unit 3: Application', 'Unit 4: Safety'],
                learningOutcomes: ['Apply digital literacy', 'Use tools', 'Lead application', 'Ensure safety'],
                futureProgression: 'Progression to Digital Manager'
            },
            {
                slug: 'web-development',
                name: 'Web Development Certification',
                duration: '6 Months',
                image: '/courses/web-development.webp',
                entryRequirements: 'Understanding of programming',
                studyUnits: ['Unit 1: Development Principles', 'Unit 2: HTML/CSS', 'Unit 3: JavaScript', 'Unit 4: Management'],
                learningOutcomes: ['Lead web development', 'Use HTML/CSS', 'Use JavaScript', 'Manage projects'],
                futureProgression: 'Progression to Web Developer'
            },
            {
                slug: 'mobile-app-development',
                name: 'Mobile App Development',
                duration: '6 Months',
                image: '/courses/mobile-app-development.webp',
                entryRequirements: 'Understanding of programming',
                studyUnits: ['Unit 1: App Principles', 'Unit 2: Development', 'Unit 3: Testing', 'Unit 4: Management'],
                learningOutcomes: ['Lead app development', 'Develop apps', 'Conduct testing', 'Manage projects'],
                futureProgression: 'Progression to App Developer'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 39. AI QUALIFICATIONS (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'ai-qualifications',
        name: 'AI Qualifications',
        icon: FaRobot,
        description: 'Artificial intelligence fundamentals and applications certifications',
        courses: [
            {
                slug: 'ai-fundamentals',
                name: 'AI Fundamentals Certification',
                duration: '3 Months',
                image: '/courses/ai-fundamentals.webp',
                entryRequirements: 'Interest in AI',
                studyUnits: ['Unit 1: AI Principles', 'Unit 2: Machine Learning', 'Unit 3: Neural Networks', 'Unit 4: Applications'],
                learningOutcomes: ['Apply AI principles', 'Use machine learning', 'Apply neural networks', 'Lead AI applications'],
                futureProgression: 'Progression to AI Specialist'
            },
            {
                slug: 'machine-learning-cert',
                name: 'Machine Learning Certification',
                duration: '6 Months',
                image: '/courses/machine-learning-cert.webp',
                entryRequirements: 'Understanding of programming',
                studyUnits: ['Unit 1: ML Principles', 'Unit 2: Supervised Learning', 'Unit 3: Unsupervised Learning', 'Unit 4: Deep Learning'],
                learningOutcomes: ['Apply ML principles', 'Use supervised learning', 'Use unsupervised learning', 'Apply deep learning'],
                futureProgression: 'Progression to ML Engineer'
            },
            {
                slug: 'deep-learning-cert',
                name: 'Deep Learning Certification',
                duration: '6 Months',
                image: '/courses/deep-learning-cert.webp',
                entryRequirements: 'Understanding of ML',
                studyUnits: ['Unit 1: Deep Learning Principles', 'Unit 2: Neural Networks', 'Unit 3: CNNs', 'Unit 4: RNNs'],
                learningOutcomes: ['Apply deep learning principles', 'Use neural networks', 'Apply CNNs', 'Apply RNNs'],
                futureProgression: 'Progression to Deep Learning Engineer'
            },
            {
                slug: 'natural-language-processing',
                name: 'Natural Language Processing Certification',
                duration: '6 Months',
                image: '/courses/natural-language-processing.webp',
                entryRequirements: 'Understanding of AI',
                studyUnits: ['Unit 1: NLP Principles', 'Unit 2: Text Processing', 'Unit 3: Language Models', 'Unit 4: Applications'],
                learningOutcomes: ['Apply NLP principles', 'Process text', 'Use language models', 'Lead applications'],
                futureProgression: 'Progression to NLP Engineer'
            },
            {
                slug: 'computer-vision',
                name: 'Computer Vision Certification',
                duration: '6 Months',
                image: '/courses/computer-vision.webp',
                entryRequirements: 'Understanding of AI',
                studyUnits: ['Unit 1: Vision Principles', 'Unit 2: Image Processing', 'Unit 3: CNNs', 'Unit 4: Applications'],
                learningOutcomes: ['Apply computer vision', 'Process images', 'Use CNNs', 'Lead applications'],
                futureProgression: 'Progression to Computer Vision Engineer'
            },
            {
                slug: 'ai-ethics-governance',
                name: 'AI Ethics and Governance',
                duration: '3 Months',
                image: '/courses/ai-ethics-governance.webp',
                entryRequirements: 'Understanding of AI',
                studyUnits: ['Unit 1: Ethics Principles', 'Unit 2: Governance', 'Unit 3: Compliance', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead AI ethics', 'Manage governance', 'Ensure compliance', 'Lead teams'],
                futureProgression: 'Progression to AI Ethics Director'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 40. GEN AI QUALIFICATIONS (5 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'gen-ai-qualifications',
        name: 'Gen AI Qualifications',
        icon: FaMicrochip,
        description: 'Generative AI, prompt engineering, and AI creativity certifications',
        courses: [
            {
                slug: 'generative-ai',
                name: 'Generative AI Certification',
                duration: '6 Months',
                image: '/courses/generative-ai.webp',
                entryRequirements: 'Understanding of AI',
                studyUnits: ['Unit 1: Gen AI Principles', 'Unit 2: Models', 'Unit 3: Applications', 'Unit 4: Management'],
                learningOutcomes: ['Apply Gen AI principles', 'Use models', 'Lead applications', 'Manage projects'],
                futureProgression: 'Progression to Gen AI Specialist'
            },
            {
                slug: 'prompt-engineering',
                name: 'Prompt Engineering Certification',
                duration: '3 Months',
                image: '/courses/prompt-engineering.webp',
                entryRequirements: 'Understanding of AI',
                studyUnits: ['Unit 1: Prompt Principles', 'Unit 2: Techniques', 'Unit 3: Optimization', 'Unit 4: Applications'],
                learningOutcomes: ['Apply prompt engineering', 'Use techniques', 'Optimize prompts', 'Lead applications'],
                futureProgression: 'Progression to Prompt Engineer'
            },
            {
                slug: 'ai-creativity',
                name: 'AI Creativity Certification',
                duration: '3 Months',
                image: '/courses/ai-creativity.webp',
                entryRequirements: 'Interest in AI creativity',
                studyUnits: ['Unit 1: Creativity Principles', 'Unit 2: AI Tools', 'Unit 3: Applications', 'Unit 4: Management'],
                learningOutcomes: ['Apply AI creativity', 'Use AI tools', 'Lead applications', 'Manage projects'],
                futureProgression: 'Progression to AI Creative Director'
            },
            {
                slug: 'ai-content-generation',
                name: 'AI Content Generation Certification',
                duration: '3 Months',
                image: '/courses/ai-content-generation.webp',
                entryRequirements: 'Understanding of content creation',
                studyUnits: ['Unit 1: Content Principles', 'Unit 2: AI Tools', 'Unit 3: Quality', 'Unit 4: Management'],
                learningOutcomes: ['Generate AI content', 'Use tools', 'Ensure quality', 'Manage projects'],
                futureProgression: 'Progression to Content Manager'
            },
            {
                slug: 'llm-certification',
                name: 'LLM (Large Language Model) Certification',
                duration: '6 Months',
                image: '/courses/llm-certification.webp',
                entryRequirements: 'Understanding of AI and language models',
                studyUnits: ['Unit 1: LLM Principles', 'Unit 2: Models', 'Unit 3: Applications', 'Unit 4: Management'],
                learningOutcomes: ['Apply LLM principles', 'Use models', 'Lead applications', 'Manage projects'],
                futureProgression: 'Progression to LLM Engineer'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 41. ENGINEERING & TECHNICAL FIELDS (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'engineering-technical',
        name: 'Engineering & Technical Fields',
        icon: FaTools,
        description: 'Engineering principles, technical skills, and innovation certifications',
        courses: [
            {
                slug: 'engineering-principles',
                name: 'Engineering Principles Certification',
                duration: '6 Months',
                image: '/courses/engineering-principles.webp',
                entryRequirements: 'Interest in engineering',
                studyUnits: ['Unit 1: Engineering Principles', 'Unit 2: Design', 'Unit 3: Analysis', 'Unit 4: Management'],
                learningOutcomes: ['Apply engineering principles', 'Lead design', 'Conduct analysis', 'Manage projects'],
                futureProgression: 'Progression to Engineer'
            },
            {
                slug: 'technical-skills',
                name: 'Technical Skills Certification',
                duration: '3 Months',
                image: '/courses/technical-skills.webp',
                entryRequirements: 'Interest in technical skills',
                studyUnits: ['Unit 1: Technical Principles', 'Unit 2: Skills', 'Unit 3: Application', 'Unit 4: Management'],
                learningOutcomes: ['Apply technical skills', 'Use skills', 'Lead application', 'Manage projects'],
                futureProgression: 'Progression to Technical Manager'
            },
            {
                slug: 'engineering-design',
                name: 'Engineering Design Certification',
                duration: '6 Months',
                image: '/courses/engineering-design.webp',
                entryRequirements: 'Understanding of engineering',
                studyUnits: ['Unit 1: Design Principles', 'Unit 2: Methodology', 'Unit 3: Implementation', 'Unit 4: Management'],
                learningOutcomes: ['Lead engineering design', 'Apply methodology', 'Implement designs', 'Manage projects'],
                futureProgression: 'Progression to Design Engineer'
            },
            {
                slug: 'technical-project-management',
                name: 'Technical Project Management',
                duration: '6 Months',
                image: '/courses/technical-project-management.webp',
                entryRequirements: 'Understanding of technical projects',
                studyUnits: ['Unit 1: Project Principles', 'Unit 2: Technical Projects', 'Unit 3: Risk', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead technical projects', 'Manage projects', 'Manage risk', 'Lead teams'],
                futureProgression: 'Progression to Technical Director'
            },
            {
                slug: 'innovation-management',
                name: 'Innovation Management Certification',
                duration: '6 Months',
                image: '/courses/innovation-management.webp',
                entryRequirements: 'Interest in innovation',
                studyUnits: ['Unit 1: Innovation Principles', 'Unit 2: Process', 'Unit 3: Implementation', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead innovation', 'Manage process', 'Implement innovation', 'Lead teams'],
                futureProgression: 'Progression to Innovation Director'
            },
            {
                slug: 'quality-engineering',
                name: 'Quality Engineering Certification',
                duration: '6 Months',
                image: '/courses/quality-engineering.webp',
                entryRequirements: 'Understanding of quality',
                studyUnits: ['Unit 1: Quality Principles', 'Unit 2: Engineering', 'Unit 3: Testing', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead quality engineering', 'Apply principles', 'Conduct testing', 'Lead teams'],
                futureProgression: 'Progression to Quality Engineer'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 42. EDUCATION & SOCIAL SCIENCES (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'education-social-sciences',
        name: 'Education & Social Sciences',
        icon: FaGlobe,
        description: 'Education policy, social science research, and community development certifications',
        courses: [
            {
                slug: 'education-policy',
                name: 'Education Policy Certification',
                duration: '6 Months',
                image: '/courses/education-policy.webp',
                entryRequirements: 'Interest in education policy',
                studyUnits: ['Unit 1: Policy Principles', 'Unit 2: Development', 'Unit 3: Implementation', 'Unit 4: Leadership'],
                learningOutcomes: ['Develop education policy', 'Lead implementation', 'Evaluate policy', 'Lead teams'],
                futureProgression: 'Progression to Education Policy Director'
            },
            {
                slug: 'social-science-research',
                name: 'Social Science Research Certification',
                duration: '6 Months',
                image: '/courses/social-science-research.webp',
                entryRequirements: 'Interest in research',
                studyUnits: ['Unit 1: Research Principles', 'Unit 2: Methodology', 'Unit 3: Analysis', 'Unit 4: Reporting'],
                learningOutcomes: ['Conduct social science research', 'Apply methodology', 'Analyze data', 'Write reports'],
                futureProgression: 'Progression to Research Director'
            },
            {
                slug: 'community-development',
                name: 'Community Development Certification',
                duration: '6 Months',
                image: '/courses/community-development.webp',
                entryRequirements: 'Interest in community development',
                studyUnits: ['Unit 1: Development Principles', 'Unit 2: Planning', 'Unit 3: Implementation', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead community development', 'Plan projects', 'Implement initiatives', 'Lead teams'],
                futureProgression: 'Progression to Community Development Director'
            },
            {
                slug: 'sociology',
                name: 'Sociology Certification',
                duration: '6 Months',
                image: '/courses/sociology.webp',
                entryRequirements: 'Interest in sociology',
                studyUnits: ['Unit 1: Sociology Principles', 'Unit 2: Theory', 'Unit 3: Research', 'Unit 4: Application'],
                learningOutcomes: ['Apply sociology principles', 'Understand theory', 'Conduct research', 'Lead application'],
                futureProgression: 'Progression to Sociologist'
            },
            {
                slug: 'psychology',
                name: 'Psychology Certification',
                duration: '6 Months',
                image: '/courses/psychology.webp',
                entryRequirements: 'Interest in psychology',
                studyUnits: ['Unit 1: Psychology Principles', 'Unit 2: Theory', 'Unit 3: Research', 'Unit 4: Application'],
                learningOutcomes: ['Apply psychology principles', 'Understand theory', 'Conduct research', 'Lead application'],
                futureProgression: 'Progression to Psychologist'
            },
            {
                slug: 'counseling',
                name: 'Counseling Certification',
                duration: '6 Months',
                image: '/courses/counseling.webp',
                entryRequirements: 'Interest in counseling',
                studyUnits: ['Unit 1: Counseling Principles', 'Unit 2: Skills', 'Unit 3: Ethics', 'Unit 4: Practice'],
                learningOutcomes: ['Apply counseling principles', 'Use skills', 'Understand ethics', 'Lead practice'],
                futureProgression: 'Progression to Counselor'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 43. VOCATIONAL QUALIFICATION (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'vocational-qualification',
        name: 'Vocational Qualification',
        icon: FaHardHat,
        description: 'Vocational training, skills development, and competency assessment certifications',
        courses: [
            {
                slug: 'vocational-training',
                name: 'Vocational Training Certification',
                duration: '6 Months',
                image: '/courses/vocational-training.webp',
                entryRequirements: 'Interest in vocational skills',
                studyUnits: ['Unit 1: Vocational Principles', 'Unit 2: Skills', 'Unit 3: Assessment', 'Unit 4: Management'],
                learningOutcomes: ['Apply vocational training', 'Develop skills', 'Lead assessment', 'Manage programs'],
                futureProgression: 'Progression to Vocational Trainer'
            },
            {
                slug: 'skills-development',
                name: 'Skills Development Certification',
                duration: '3 Months',
                image: '/courses/skills-development.webp',
                entryRequirements: 'Interest in skills development',
                studyUnits: ['Unit 1: Development Principles', 'Unit 2: Planning', 'Unit 3: Delivery', 'Unit 4: Evaluation'],
                learningOutcomes: ['Lead skills development', 'Plan programs', 'Deliver training', 'Evaluate effectiveness'],
                futureProgression: 'Progression to Skills Development Manager'
            },
            {
                slug: 'competency-assessment',
                name: 'Competency Assessment Certification',
                duration: '3 Months',
                image: '/courses/competency-assessment.webp',
                entryRequirements: 'Understanding of assessment',
                studyUnits: ['Unit 1: Assessment Principles', 'Unit 2: Methods', 'Unit 3: Quality', 'Unit 4: Management'],
                learningOutcomes: ['Lead competency assessment', 'Apply methods', 'Ensure quality', 'Manage programs'],
                futureProgression: 'Progression to Assessment Manager'
            },
            {
                slug: 'vocational-education',
                name: 'Vocational Education Certification',
                duration: '6 Months',
                image: '/courses/vocational-education.webp',
                entryRequirements: 'Interest in vocational education',
                studyUnits: ['Unit 1: Education Principles', 'Unit 2: Curriculum', 'Unit 3: Delivery', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead vocational education', 'Design curriculum', 'Deliver education', 'Lead teams'],
                futureProgression: 'Progression to Vocational Education Director'
            },
            {
                slug: 'trade-skills',
                name: 'Trade Skills Certification',
                duration: '3 Months',
                image: '/courses/trade-skills.webp',
                entryRequirements: 'Interest in trade skills',
                studyUnits: ['Unit 1: Trade Principles', 'Unit 2: Skills', 'Unit 3: Safety', 'Unit 4: Practice'],
                learningOutcomes: ['Apply trade skills', 'Develop skills', 'Ensure safety', 'Lead practice'],
                futureProgression: 'Progression to Trade Professional'
            },
            {
                slug: 'apprenticeship-management',
                name: 'Apprenticeship Management',
                duration: '6 Months',
                image: '/courses/apprenticeship-management.webp',
                entryRequirements: 'Understanding of apprenticeships',
                studyUnits: ['Unit 1: Apprenticeship Principles', 'Unit 2: Management', 'Unit 3: Assessment', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead apprenticeship management', 'Manage programs', 'Lead assessment', 'Lead teams'],
                futureProgression: 'Progression to Apprenticeship Director'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 44. CONSERVATION AND THE ENVIRONMENT (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'conservation-environment',
        name: 'Conservation and the Environment',
        icon: FaLeaf,
        description: 'Environmental conservation, wildlife management, and sustainability certifications',
        courses: [
            {
                slug: 'environmental-conservation',
                name: 'Environmental Conservation Certification',
                duration: '6 Months',
                image: '/courses/environmental-conservation.webp',
                entryRequirements: 'Interest in conservation',
                studyUnits: ['Unit 1: Conservation Principles', 'Unit 2: Ecosystems', 'Unit 3: Management', 'Unit 4: Leadership'],
                learningOutcomes: ['Apply conservation principles', 'Understand ecosystems', 'Lead management', 'Lead teams'],
                futureProgression: 'Progression to Conservation Manager'
            },
            {
                slug: 'wildlife-management',
                name: 'Wildlife Management Certification',
                duration: '6 Months',
                image: '/courses/wildlife-management.webp',
                entryRequirements: 'Interest in wildlife',
                studyUnits: ['Unit 1: Wildlife Principles', 'Unit 2: Management', 'Unit 3: Conservation', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead wildlife management', 'Apply principles', 'Lead conservation', 'Lead teams'],
                futureProgression: 'Progression to Wildlife Manager'
            },
            {
                slug: 'sustainability-cert',
                name: 'Sustainability Certification',
                duration: '6 Months',
                image: '/courses/sustainability-cert.webp',
                entryRequirements: 'Interest in sustainability',
                studyUnits: ['Unit 1: Sustainability Principles', 'Unit 2: Practices', 'Unit 3: Implementation', 'Unit 4: Leadership'],
                learningOutcomes: ['Apply sustainability principles', 'Lead practices', 'Implement initiatives', 'Lead teams'],
                futureProgression: 'Progression to Sustainability Director'
            },
            {
                slug: 'environmental-management',
                name: 'Environmental Management Certification',
                duration: '6 Months',
                image: '/courses/environmental-management.webp',
                entryRequirements: 'Interest in environmental management',
                studyUnits: ['Unit 1: Management Principles', 'Unit 2: Systems', 'Unit 3: Compliance', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead environmental management', 'Manage systems', 'Ensure compliance', 'Lead teams'],
                futureProgression: 'Progression to Environmental Director'
            },
            {
                slug: 'climate-change',
                name: 'Climate Change Certification',
                duration: '3 Months',
                image: '/courses/climate-change.webp',
                entryRequirements: 'Interest in climate change',
                studyUnits: ['Unit 1: Climate Principles', 'Unit 2: Impact', 'Unit 3: Mitigation', 'Unit 4: Leadership'],
                learningOutcomes: ['Understand climate change', 'Assess impact', 'Lead mitigation', 'Lead teams'],
                futureProgression: 'Progression to Climate Change Specialist'
            },
            {
                slug: 'biodiversity',
                name: 'Biodiversity Certification',
                duration: '3 Months',
                image: '/courses/biodiversity.webp',
                entryRequirements: 'Interest in biodiversity',
                studyUnits: ['Unit 1: Biodiversity Principles', 'Unit 2: Conservation', 'Unit 3: Management', 'Unit 4: Leadership'],
                learningOutcomes: ['Apply biodiversity principles', 'Lead conservation', 'Manage biodiversity', 'Lead teams'],
                futureProgression: 'Progression to Biodiversity Specialist'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 45. ISO LEAD AUDITOR (3 courses - already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in ISO sections above)

    // ═══════════════════════════════════════════════════
    // 46. ISO INTERNAL AUDITOR (3 courses - already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in ISO sections above)

    // ═══════════════════════════════════════════════════
    // 47. ISO FOUNDATION COURSE (3 courses - already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in ISO sections above)

    // ═══════════════════════════════════════════════════
    // 48. LEAD IMPLEMENTER COURSE (3 courses - already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in ISO sections above)

    // ═══════════════════════════════════════════════════
    // 49. TECHNICAL (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Engineering & Technical Fields above)

    // ═══════════════════════════════════════════════════
    // 50. MECHANICAL TECHNOLOGY (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Mechanical Engineering above)

    // ═══════════════════════════════════════════════════
    // 51. TRANSPORT & LOGISTICS (6 courses)
    // ═══════════════════════════════════════════════════
    {
        id: 'transport-logistics',
        name: 'Transport & Logistics',
        icon: FaTruck,
        description: 'Transport management, logistics, and supply chain certifications',
        courses: [
            {
                slug: 'logistics-management',
                name: 'Logistics Management Certification',
                duration: '6 Months',
                image: '/courses/logistics-management.webp',
                entryRequirements: 'Interest in logistics',
                studyUnits: ['Unit 1: Logistics Principles', 'Unit 2: Management', 'Unit 3: Supply Chain', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead logistics management', 'Apply principles', 'Manage supply chain', 'Lead teams'],
                futureProgression: 'Progression to Logistics Director'
            },
            {
                slug: 'transport-management',
                name: 'Transport Management Certification',
                duration: '6 Months',
                image: '/courses/transport-management.webp',
                entryRequirements: 'Interest in transport',
                studyUnits: ['Unit 1: Transport Principles', 'Unit 2: Management', 'Unit 3: Operations', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead transport management', 'Apply principles', 'Manage operations', 'Lead teams'],
                futureProgression: 'Progression to Transport Director'
            },
            {
                slug: 'supply-chain-management',
                name: 'Supply Chain Management Certification',
                duration: '6 Months',
                image: '/courses/supply-chain-management.webp',
                entryRequirements: 'Interest in supply chain',
                studyUnits: ['Unit 1: Supply Chain Principles', 'Unit 2: Management', 'Unit 3: Optimization', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead supply chain management', 'Apply principles', 'Optimize supply chain', 'Lead teams'],
                futureProgression: 'Progression to Supply Chain Director'
            },
            {
                slug: 'warehouse-management',
                name: 'Warehouse Management Certification',
                duration: '3 Months',
                image: '/courses/warehouse-management.webp',
                entryRequirements: 'Interest in warehouse management',
                studyUnits: ['Unit 1: Warehouse Principles', 'Unit 2: Operations', 'Unit 3: Safety', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead warehouse management', 'Manage operations', 'Ensure safety', 'Lead teams'],
                futureProgression: 'Progression to Warehouse Manager'
            },
            {
                slug: 'fleet-management',
                name: 'Fleet Management Certification',
                duration: '3 Months',
                image: '/courses/fleet-management.webp',
                entryRequirements: 'Interest in fleet management',
                studyUnits: ['Unit 1: Fleet Principles', 'Unit 2: Operations', 'Unit 3: Maintenance', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead fleet management', 'Manage operations', 'Lead maintenance', 'Lead teams'],
                futureProgression: 'Progression to Fleet Manager'
            },
            {
                slug: 'international-logistics',
                name: 'International Logistics Certification',
                duration: '6 Months',
                image: '/courses/international-logistics.webp',
                entryRequirements: 'Understanding of logistics',
                studyUnits: ['Unit 1: International Logistics', 'Unit 2: Customs', 'Unit 3: Compliance', 'Unit 4: Leadership'],
                learningOutcomes: ['Lead international logistics', 'Manage customs', 'Ensure compliance', 'Lead teams'],
                futureProgression: 'Progression to International Logistics Director'
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // 52. WELLNESS (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Healthcare sections above)

    // ═══════════════════════════════════════════════════
    // 53. HAIRDRESSING (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Beauty Therapy sections above)

    // ═══════════════════════════════════════════════════
    // 54. BEAUTY THERAPY (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Aesthetic Practice above)

    // ═══════════════════════════════════════════════════
    // 55. TRAINING AND MANAGEMENT (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Education and Training above)

    // ═══════════════════════════════════════════════════
    // 56. OUTDOOR AQUATIC RESCUE (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in First Aid sections above)

    // ═══════════════════════════════════════════════════
    // 57. POOL MANAGEMENT (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Lifting Operations above - pool/lifeguard)

    // ═══════════════════════════════════════════════════
    // 58. TRAINER QUALIFICATIONS (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Teaching and Training above)

    // ═══════════════════════════════════════════════════
    // 59. LIFEGUARD QUALIFICATIONS (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in First Aid sections above)

    // ═══════════════════════════════════════════════════
    // 60. ESTIMATION AND COSTING (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Construction above)

    // ═══════════════════════════════════════════════════
    // 61. INSTRUCTOR QUALIFICATIONS (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Teaching above)

    // ═══════════════════════════════════════════════════
    // 62. WILDLIFE QUALIFICATIONS (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Conservation above)

    // ═══════════════════════════════════════════════════
    // 63. VETERINARY QUALIFICATIONS (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Healthcare above)

    // ═══════════════════════════════════════════════════
    // 64. JOURNALISM (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Communications above)

    // ═══════════════════════════════════════════════════
    // 65. LEVEL 8 PROFESSIONAL QUALIFICATIONS (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Professional Qualifications above)

    // ═══════════════════════════════════════════════════
    // 66. EMERGENCY RESPONSE (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in First Aid and Prehospital Care above)

    // ═══════════════════════════════════════════════════
    // 67. RISK MANAGEMENT (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Cybersecurity above)

    // ═══════════════════════════════════════════════════
    // 68. PROJECT MANAGEMENT (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Management above)

    // ═══════════════════════════════════════════════════
    // 69. LEADERSHIP (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Business & Leadership above)

    // ═══════════════════════════════════════════════════
    // 70. COMMUNICATION (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Sales and Marketing above)

    // ═══════════════════════════════════════════════════
    // 71. ETHICS AND COMPLIANCE (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Business Ethics above)

    // ═══════════════════════════════════════════════════
    // 72. AESTHETIC PRACTICE (already covered)
    // ═══════════════════════════════════════════════════
    // (Already covered in Beauty Therapy above)

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