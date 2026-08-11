// app/courses/data/courses.js
// All course data – hardcoded for speed and clean URLs

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

import {
    GiHealthNormal, GiHealthCapsule,
    GiHealthIncrease, GiHealthCrystal
} from 'react-icons/gi';

import {
    MdHealthAndSafety
} from 'react-icons/md';

export const categories = [
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
                entryRequirements: 'No prior experience required. Basic understanding of workplace safety recommended.',
                studyUnits: [
                    'Unit 1: Managing Safely',
                    'Unit 2: Risk Assessment',
                    'Unit 3: Controlling Risks',
                    'Unit 4: Understanding Your Responsibilities',
                    'Unit 5: Identifying Hazards',
                    'Unit 6: Investigating Incidents'
                ],
                learningOutcomes: [
                    'Understand health and safety responsibilities',
                    'Conduct effective risk assessments',
                    'Identify and control workplace hazards',
                    'Investigate incidents effectively',
                    'Manage safety in your team'
                ],
                futureProgression: 'Progression to IOSH Managing Safely, NEBOSH, or become a Safety Manager'
            },
            {
                slug: 'iosh-working-safely',
                name: 'IOSH Working Safely',
                duration: '1 Day',
                image: '/courses/iosh-working-safely.webp',
                entryRequirements: 'Open to all workers at all levels',
                studyUnits: [
                    'Unit 1: Introducing Working Safely',
                    'Unit 2: Defining Hazards and Risks',
                    'Unit 3: Identifying Common Hazards',
                    'Unit 4: Improving Safety Performance'
                ],
                learningOutcomes: [
                    'Identify common workplace hazards',
                    'Understand your safety responsibilities',
                    'Contribute to a safer workplace'
                ],
                futureProgression: 'Progression to IOSH Managing Safely or NEBOSH'
            },
            {
                slug: 'nebosh-igc',
                name: 'NEBOSH International General Certificate',
                duration: '10 Days',
                image: '/courses/nebosh-igc.webp',
                entryRequirements: 'No formal entry requirements. Good understanding of English recommended.',
                studyUnits: [
                    'Unit 1: Health and Safety Foundations',
                    'Unit 2: Policy and Organizing',
                    'Unit 3: Planning and Implementing',
                    'Unit 4: Measuring and Auditing',
                    'Unit 5: Incident Investigation'
                ],
                learningOutcomes: [
                    'Understand health and safety management systems',
                    'Apply risk assessment principles',
                    'Implement effective control measures',
                    'Investigate incidents and implement corrective actions'
                ],
                futureProgression: 'Progression to NEBOSH Diploma or become a Health & Safety Professional'
            },
            {
                slug: 'level-3-health-safety',
                name: 'Level 3 Diploma in Health and Safety',
                duration: '12 Months',
                image: '/courses/level-3-health-safety.webp',
                entryRequirements: 'No formal qualifications required. Some workplace experience recommended.',
                studyUnits: [
                    'Unit 1: Health and Safety Management',
                    'Unit 2: Risk Assessment and Control',
                    'Unit 3: Workplace Hazards and Controls',
                    'Unit 4: Incident Investigation',
                    'Unit 5: Emergency Planning'
                ],
                learningOutcomes: [
                    'Manage health and safety in the workplace',
                    'Conduct comprehensive risk assessments',
                    'Develop safety management systems',
                    'Lead incident investigations'
                ],
                futureProgression: 'Progression to Level 5 Diploma or become a Health & Safety Manager'
            },
            {
                slug: 'level-5-health-safety',
                name: 'Level 5 Diploma in Health and Safety',
                duration: '18 Months',
                image: '/courses/level-5-health-safety.webp',
                entryRequirements: 'Level 3 qualification or relevant experience in health and safety',
                studyUnits: [
                    'Unit 1: Strategic Health and Safety Management',
                    'Unit 2: Risk Management',
                    'Unit 3: Health and Safety Legislation',
                    'Unit 4: Organizational Culture',
                    'Unit 5: Leadership and Influence'
                ],
                learningOutcomes: [
                    'Develop health and safety strategies',
                    'Lead organizational safety culture',
                    'Implement legislative compliance',
                    'Influence safety behaviors'
                ],
                futureProgression: 'Progression to Level 7 Diploma or become a Health & Safety Director'
            },
            {
                slug: 'certified-safety-manager',
                name: 'Certified Safety Manager (CSM)',
                duration: '6 Months',
                image: '/courses/certified-safety-manager.webp',
                entryRequirements: '3+ years of experience in safety or a related field',
                studyUnits: [
                    'Unit 1: Safety Management Systems',
                    'Unit 2: Risk Management',
                    'Unit 3: Emergency Response Planning',
                    'Unit 4: Safety Auditing',
                    'Unit 5: Behavioral Safety'
                ],
                learningOutcomes: [
                    'Manage safety programs effectively',
                    'Conduct safety audits',
                    'Lead emergency response teams',
                    'Build positive safety cultures'
                ],
                futureProgression: 'Progression to become a Safety Director or Consultant'
            }
        ]
    },
    {
        id: 'energy-management',
        name: 'Energy Management',
        icon: FaBolt,
        description: 'Energy efficiency, renewable solutions, and sustainability certifications',
        courses: [
            {
                slug: 'level-5-energy-management',
                name: 'Level 5 Diploma in Energy Management and Sustainability',
                duration: '12 Months',
                image: '/courses/level-5-energy-management.webp',
                entryRequirements: 'No formal qualifications required. Interest in energy and sustainability recommended.',
                studyUnits: [
                    'Unit 1: Energy Management Fundamentals',
                    'Unit 2: Energy Auditing',
                    'Unit 3: Renewable Energy Technologies',
                    'Unit 4: Sustainability Practices',
                    'Unit 5: Energy Policy and Legislation'
                ],
                learningOutcomes: [
                    'Understand energy management principles',
                    'Conduct energy audits',
                    'Evaluate renewable technologies',
                    'Implement sustainability practices'
                ],
                futureProgression: 'Progression to Level 7 Diploma or become Energy Manager'
            },
            {
                slug: 'iso-50001-lead-auditor',
                name: 'ISO 50001:2018 Energy Management Systems Lead Auditor',
                duration: '5 Days',
                image: '/courses/iso-50001-lead-auditor.webp',
                entryRequirements: 'Understanding of energy management systems recommended',
                studyUnits: [
                    'Unit 1: ISO 50001 Overview',
                    'Unit 2: Energy Management Requirements',
                    'Unit 3: Audit Planning',
                    'Unit 4: Conducting Audits',
                    'Unit 5: Audit Reporting'
                ],
                learningOutcomes: [
                    'Understand ISO 50001 requirements',
                    'Plan and conduct audits',
                    'Write audit reports',
                    'Lead audit teams'
                ],
                futureProgression: 'Progression to become Lead Auditor or Energy Consultant'
            },
            {
                slug: 'level-4-energy-auditing',
                name: 'Level 4 Diploma in Energy Auditing and Sustainable Energy Systems',
                duration: '9 Months',
                image: '/courses/level-4-energy-auditing.webp',
                entryRequirements: 'Some experience in energy or facilities management recommended',
                studyUnits: [
                    'Unit 1: Energy Auditing Techniques',
                    'Unit 2: Building Energy Management',
                    'Unit 3: Renewable Energy Systems',
                    'Unit 4: Energy Monitoring and Targeting',
                    'Unit 5: Sustainable Energy Solutions'
                ],
                learningOutcomes: [
                    'Conduct energy audits',
                    'Analyze energy data',
                    'Recommend energy saving measures',
                    'Implement renewable energy solutions'
                ],
                futureProgression: 'Progression to Level 5 Diploma or Energy Manager'
            },
            {
                slug: 'certified-energy-manager',
                name: 'Certified Energy Manager (CEM)',
                duration: '4 Months',
                image: '/courses/certified-energy-manager.webp',
                entryRequirements: '2+ years of experience in energy management or related field',
                studyUnits: [
                    'Unit 1: Energy Management Basics',
                    'Unit 2: Energy Auditing',
                    'Unit 3: Energy Efficiency Measures',
                    'Unit 4: Renewable Energy',
                    'Unit 5: Energy Economics'
                ],
                learningOutcomes: [
                    'Manage energy programs effectively',
                    'Conduct energy audits',
                    'Implement efficiency measures',
                    'Develop energy strategies'
                ],
                futureProgression: 'Progression to become Energy Director or Consultant'
            }
        ]
    },
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
                entryRequirements: 'Understanding of quality management systems recommended',
                studyUnits: [
                    'Unit 1: ISO 9001 Requirements',
                    'Unit 2: Audit Principles',
                    'Unit 3: Audit Planning',
                    'Unit 4: Conducting Audits',
                    'Unit 5: Reporting Audits'
                ],
                learningOutcomes: [
                    'Understand ISO 9001 requirements',
                    'Plan and conduct audits',
                    'Lead audit teams',
                    'Write audit reports'
                ],
                futureProgression: 'Progression to become Lead Auditor or Quality Manager'
            },
            {
                slug: 'six-sigma-green-belt',
                name: 'Six Sigma Green Belt',
                duration: '5 Days',
                image: '/courses/six-sigma-green-belt.webp',
                entryRequirements: 'Basic understanding of quality concepts recommended',
                studyUnits: [
                    'Unit 1: Six Sigma Overview',
                    'Unit 2: DMAIC Methodology',
                    'Unit 3: Statistical Tools',
                    'Unit 4: Process Improvement',
                    'Unit 5: Project Management'
                ],
                learningOutcomes: [
                    'Apply Six Sigma principles',
                    'Use DMAIC methodology',
                    'Analyze data',
                    'Lead improvement projects'
                ],
                futureProgression: 'Progression to Six Sigma Black Belt or Quality Manager'
            },
            {
                slug: 'six-sigma-black-belt',
                name: 'Six Sigma Black Belt',
                duration: '10 Days',
                image: '/courses/six-sigma-black-belt.webp',
                entryRequirements: 'Green Belt certification or equivalent experience',
                studyUnits: [
                    'Unit 1: Advanced Six Sigma',
                    'Unit 2: Statistical Analysis',
                    'Unit 3: Process Design',
                    'Unit 4: Team Leadership',
                    'Unit 5: Project Management'
                ],
                learningOutcomes: [
                    'Lead complex improvement projects',
                    'Mentor Green Belts',
                    'Develop process designs',
                    'Drive organizational change'
                ],
                futureProgression: 'Progression to Master Black Belt or Quality Director'
            },
            {
                slug: 'level-5-quality-management',
                name: 'Level 5 Diploma in Quality Management',
                duration: '12 Months',
                image: '/courses/level-5-quality-management.webp',
                entryRequirements: 'Level 3 qualification or relevant experience',
                studyUnits: [
                    'Unit 1: Quality Management Principles',
                    'Unit 2: Quality Systems',
                    'Unit 3: Continuous Improvement',
                    'Unit 4: Supplier Quality',
                    'Unit 5: Quality Metrics'
                ],
                learningOutcomes: [
                    'Develop quality management systems',
                    'Lead continuous improvement',
                    'Manage supplier quality',
                    'Analyze quality metrics'
                ],
                futureProgression: 'Progression to Level 7 Diploma or Quality Director'
            }
        ]
    },
    {
        id: 'food-safety',
        name: 'Food Safety and Hygiene',
        icon: FaAppleAlt,
        description: 'Food safety management, HACCP, and hygiene certifications',
        courses: [
            {
                slug: 'level-3-food-safety',
                name: 'Level 3 Award in Food Safety',
                duration: '3 Days',
                image: '/courses/level-3-food-safety.webp',
                entryRequirements: 'Some experience in food handling recommended',
                studyUnits: [
                    'Unit 1: Food Safety Legislation',
                    'Unit 2: Food Hazards',
                    'Unit 3: Food Safety Management',
                    'Unit 4: HACCP Principles',
                    'Unit 5: Food Hygiene'
                ],
                learningOutcomes: [
                    'Understand food safety laws',
                    'Identify food hazards',
                    'Apply HACCP principles',
                    'Manage food safety systems'
                ],
                futureProgression: 'Progression to Level 4 or become Food Safety Manager'
            },
            {
                slug: 'haccp-level-3',
                name: 'HACCP Level 3',
                duration: '3 Days',
                image: '/courses/haccp-level-3.webp',
                entryRequirements: 'Understanding of food safety basics recommended',
                studyUnits: [
                    'Unit 1: HACCP Principles',
                    'Unit 2: Hazard Analysis',
                    'Unit 3: Critical Control Points',
                    'Unit 4: Implementation',
                    'Unit 5: Monitoring and Review'
                ],
                learningOutcomes: [
                    'Apply HACCP principles',
                    'Analyze hazards',
                    'Establish control points',
                    'Implement and monitor HACCP systems'
                ],
                futureProgression: 'Progression to Level 4 or Food Safety Manager'
            },
            {
                slug: 'iso-22000-lead-auditor',
                name: 'ISO 22000:2018 Food Safety Management Systems Lead Auditor',
                duration: '5 Days',
                image: '/courses/iso-22000-lead-auditor.webp',
                entryRequirements: 'Understanding of food safety systems recommended',
                studyUnits: [
                    'Unit 1: ISO 22000 Requirements',
                    'Unit 2: Audit Principles',
                    'Unit 3: Audit Planning',
                    'Unit 4: Conducting Audits',
                    'Unit 5: Audit Reporting'
                ],
                learningOutcomes: [
                    'Understand ISO 22000 requirements',
                    'Plan and conduct audits',
                    'Lead audit teams',
                    'Write audit reports'
                ],
                futureProgression: 'Progression to become Lead Auditor or Food Safety Consultant'
            },
            {
                slug: 'level-5-food-safety',
                name: 'Level 5 Diploma in Food Safety',
                duration: '12 Months',
                image: '/courses/level-5-food-safety.webp',
                entryRequirements: 'Level 3 qualification or relevant experience',
                studyUnits: [
                    'Unit 1: Food Safety Management',
                    'Unit 2: HACCP Implementation',
                    'Unit 3: Food Safety Culture',
                    'Unit 4: Regulatory Compliance',
                    'Unit 5: Food Safety Auditing'
                ],
                learningOutcomes: [
                    'Lead food safety programs',
                    'Implement HACCP systems',
                    'Build food safety culture',
                    'Conduct food safety audits'
                ],
                futureProgression: 'Progression to Level 7 Diploma or Food Safety Director'
            }
        ]
    },
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
                studyUnits: [
                    'Unit 1: Fire Safety Legislation',
                    'Unit 2: Fire Hazards',
                    'Unit 3: Fire Prevention',
                    'Unit 4: Emergency Planning',
                    'Unit 5: Fire Extinguisher Training'
                ],
                learningOutcomes: [
                    'Understand fire safety laws',
                    'Identify fire hazards',
                    'Implement fire prevention measures',
                    'Develop emergency plans'
                ],
                futureProgression: 'Progression to Level 4 or become Fire Safety Manager'
            },
            {
                slug: 'fire-risk-assessor',
                name: 'Fire Risk Assessor',
                duration: '5 Days',
                image: '/courses/fire-risk-assessor.webp',
                entryRequirements: 'Some experience in fire safety recommended',
                studyUnits: [
                    'Unit 1: Fire Risk Assessment Principles',
                    'Unit 2: Identification of Fire Hazards',
                    'Unit 3: Evaluation of Fire Risk',
                    'Unit 4: Control Measures',
                    'Unit 5: Documentation and Review'
                ],
                learningOutcomes: [
                    'Conduct fire risk assessments',
                    'Identify fire hazards',
                    'Evaluate fire risks',
                    'Recommend control measures'
                ],
                futureProgression: 'Progression to become Fire Safety Consultant'
            },
            {
                slug: 'fire-warden-training',
                name: 'Fire Warden Training',
                duration: '2 Days',
                image: '/courses/fire-warden-training.webp',
                entryRequirements: 'Open to all employees',
                studyUnits: [
                    'Unit 1: Fire Warden Responsibilities',
                    'Unit 2: Fire Prevention',
                    'Unit 3: Emergency Evacuation',
                    'Unit 4: Fire Extinguisher Use',
                    'Unit 5: Communication and Reporting'
                ],
                learningOutcomes: [
                    'Understand fire warden duties',
                    'Prevent fires',
                    'Lead evacuations',
                    'Use fire extinguishers'
                ],
                futureProgression: 'Progression to Fire Safety Manager'
            }
        ]
    },
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
                studyUnits: [
                    'Unit 1: First Aid Principles',
                    'Unit 2: CPR and AED',
                    'Unit 3: Wound Management',
                    'Unit 4: Fracture Management',
                    'Unit 5: Medical Emergencies'
                ],
                learningOutcomes: [
                    'Provide first aid in the workplace',
                    'Perform CPR and use AED',
                    'Manage wounds and fractures',
                    'Handle medical emergencies'
                ],
                futureProgression: 'Progression to become First Aid Instructor or Paramedic'
            },
            {
                slug: 'emergency-first-aid',
                name: 'Emergency First Aid at Work (EFAW)',
                duration: '1 Day',
                image: '/courses/emergency-first-aid.webp',
                entryRequirements: 'Open to all employees',
                studyUnits: [
                    'Unit 1: Emergency First Aid',
                    'Unit 2: CPR',
                    'Unit 3: Managing Incidents',
                    'Unit 4: Minor Injuries'
                ],
                learningOutcomes: [
                    'Provide emergency first aid',
                    'Perform CPR',
                    'Manage incidents',
                    'Handle minor injuries'
                ],
                futureProgression: 'Progression to First Aid at Work'
            },
            {
                slug: 'paediatric-first-aid',
                name: 'Paediatric First Aid',
                duration: '2 Days',
                image: '/courses/paediatric-first-aid.webp',
                entryRequirements: 'No prior experience required',
                studyUnits: [
                    'Unit 1: Child and Infant CPR',
                    'Unit 2: Childhood Illnesses',
                    'Unit 3: Wound Management',
                    'Unit 4: Emergency Planning',
                    'Unit 5: Safeguarding'
                ],
                learningOutcomes: [
                    'Provide first aid to children and infants',
                    'Recognize childhood illnesses',
                    'Manage injuries',
                    'Understand safeguarding'
                ],
                futureProgression: 'Progression to become First Aid Instructor'
            }
        ]
    },
    {
        id: 'mental-health',
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
                studyUnits: [
                    'Unit 1: Mental Health Awareness',
                    'Unit 2: Depression',
                    'Unit 3: Anxiety',
                    'Unit 4: Self-Harm and Suicide',
                    'Unit 5: Supporting Others'
                ],
                learningOutcomes: [
                    'Recognize mental health issues',
                    'Provide initial support',
                    'Signpost to professional help',
                    'Promote mental wellbeing'
                ],
                futureProgression: 'Progression to become MHFA Instructor'
            },
            {
                slug: 'mental-health-champion',
                name: 'Mental Health Champion',
                duration: '1 Day',
                image: '/courses/mental-health-champion.webp',
                entryRequirements: 'Open to all employees',
                studyUnits: [
                    'Unit 1: Mental Health Basics',
                    'Unit 2: Reducing Stigma',
                    'Unit 3: Supporting Colleagues',
                    'Unit 4: Building Resilience'
                ],
                learningOutcomes: [
                    'Understand mental health',
                    'Reduce stigma',
                    'Support colleagues',
                    'Build resilience'
                ],
                futureProgression: 'Progression to MHFA'
            }
        ]
    }
];

// Helper function to get all categories
export const getAllCategories = () => {
    return categories;
};

// Helper function to get a category by ID
export const getCategoryById = (id) => {
    return categories.find(cat => cat.id === id);
};

// Helper function to get a course by slug
export const getCourseBySlug = (categoryId, slug) => {
    const category = getCategoryById(categoryId);
    if (!category) return null;
    return category.courses.find(course => course.slug === slug);
};

// Helper function to get all courses (flattened)
export const getAllCourses = () => {
    return categories.flatMap(cat =>
        cat.courses.map(course => ({
            ...course,
            category: cat.id,
            categoryName: cat.name
        }))
    );
};