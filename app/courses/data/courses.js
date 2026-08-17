// app/courses/data/courses.js
import {
    FaShieldAlt,
    FaHeartbeat,
    FaFire,
    FaClipboardCheck,
    FaTools,
    FaBolt,
    FaHardHat,
    FaLaptop,
    FaUserTie,
    FaHospital,
    FaSchool,
    FaBuilding,      // ← FIXED: was FaBuildingColumns
    FaOilCan,
    FaAppleAlt,
    FaServer         // ← FIXED: was FaHardDrive
} from 'react-icons/fa';

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
                entryRequirements: 'No prior experience required. Basic understanding of English.',
                studyUnits: ['Managing Safely', 'Risk Assessment', 'Controlling Risks', 'Understanding Responsibilities', 'Incident Investigation'],
                learningOutcomes: ['Understand safety responsibilities', 'Conduct risk assessments', 'Identify and control hazards', 'Investigate incidents effectively'],
                futureProgression: 'NEBOSH General Certificate, Safety Manager, Health & Safety Consultant'
            },
            {
                slug: 'nebosh-general',
                name: 'NEBOSH General Certificate',
                duration: '10 Days',
                image: '/courses/nebosh-general.webp',
                entryRequirements: 'No formal requirements, but understanding of English is essential.',
                studyUnits: ['Health and Safety Management', 'Risk Assessment', 'Workplace Hazards', 'Incident Investigation', 'Legal Framework'],
                learningOutcomes: ['Manage health and safety effectively', 'Control workplace risks', 'Understand legal requirements', 'Investigate incidents'],
                futureProgression: 'NEBOSH Diploma, Safety Manager, HSE Director'
            }
        ]
    },
    {
        id: 'first-aid',
        name: 'First Aid',
        icon: FaHeartbeat,
        description: 'Emergency response, CPR, and life-saving skills certifications',
        courses: [
            {
                slug: 'emergency-first-aid',
                name: 'Level 3 Award in Emergency First Aid at Work',
                duration: '1 Day',
                image: '/courses/emergency-first-aid.webp',
                entryRequirements: 'Age 16+, basic understanding of English.',
                studyUnits: ['Emergency Response', 'CPR', 'Choking', 'Bleeding', 'Shock Management'],
                learningOutcomes: ['Perform CPR', 'Manage choking', 'Control bleeding', 'Handle emergencies'],
                futureProgression: 'First Aid at Work, Paediatric First Aid, Instructor Qualifications'
            },
            {
                slug: 'paediatric-first-aid',
                name: 'Level 3 Award in Paediatric First Aid',
                duration: '2 Days',
                image: '/courses/paediatric-first-aid.webp',
                entryRequirements: 'Age 16+, working with children or childcare setting.',
                studyUnits: ['Paediatric CPR', 'Child Emergencies', 'Allergies', 'Asthma', 'Febrile Seizures'],
                learningOutcomes: ['Respond to child emergencies', 'Perform child CPR', 'Manage childhood illnesses'],
                futureProgression: 'Childcare Manager, Nursery Supervisor, Teaching Assistant'
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
                slug: 'fire-safety-training',
                name: 'Level 2 Award in Fire Safety',
                duration: '3 Days',
                image: '/courses/fire-safety.webp',
                entryRequirements: 'No prior experience required.',
                studyUnits: ['Fire Prevention', 'Fire Triangle', 'Fire Extinguishers', 'Emergency Evacuation', 'Fire Legislation'],
                learningOutcomes: ['Understand fire principles', 'Use fire extinguishers', 'Plan evacuations', 'Comply with fire safety laws'],
                futureProgression: 'Fire Risk Assessment, Fire Safety Manager, HSE Officer'
            }
        ]
    },
    {
        id: 'iso-lead-auditor',
        name: 'ISO Lead Auditor',
        icon: FaClipboardCheck,
        description: 'ISO standards, auditing, and quality management systems',
        courses: [
            {
                slug: 'iso-9001-lead-auditor',
                name: 'ISO 9001:2015 Quality Management Lead Auditor',
                duration: '5 Days',
                image: '/courses/iso-9001-lead-auditor.webp',
                entryRequirements: 'Understanding of quality management systems.',
                studyUnits: ['ISO 9001 Requirements', 'Audit Principles', 'Audit Planning', 'Audit Reporting', 'Corrective Actions'],
                learningOutcomes: ['Plan and conduct audits', 'Lead audit teams', 'Prepare audit reports', 'Manage corrective actions'],
                futureProgression: 'Lead Auditor, Quality Manager, Quality Consultant'
            },
            {
                slug: 'iso-14001-lead-auditor',
                name: 'ISO 14001:2015 Environmental Management Lead Auditor',
                duration: '5 Days',
                image: '/courses/iso-14001-lead-auditor.webp',
                entryRequirements: 'Understanding of environmental management systems.',
                studyUnits: ['ISO 14001 Requirements', 'Environmental Aspects', 'Audit Techniques', 'Legal Compliance'],
                learningOutcomes: ['Audit environmental systems', 'Identify environmental aspects', 'Ensure legal compliance'],
                futureProgression: 'Environmental Manager, Sustainability Consultant, Lead Auditor'
            }
        ]
    },
    {
        id: 'quality-control',
        name: 'Quality Control',
        icon: FaTools,
        description: 'Quality assurance, inspection, and Six Sigma certifications',
        courses: [
            {
                slug: 'six-sigma-green-belt',
                name: 'Six Sigma Green Belt',
                duration: '5 Days',
                image: '/courses/six-sigma-green-belt.webp',
                entryRequirements: 'Basic knowledge of quality principles.',
                studyUnits: ['DMAIC Methodology', 'Statistical Tools', 'Process Improvement', 'Quality Tools'],
                learningOutcomes: ['Lead quality projects', 'Use statistical tools', 'Improve processes', 'Reduce defects'],
                futureProgression: 'Six Sigma Black Belt, Quality Manager, Process Improvement Specialist'
            }
        ]
    },
    {
        id: 'energy-management',
        name: 'Energy Management',
        icon: FaBolt,
        description: 'Energy efficiency, renewable solutions, and sustainability',
        courses: [
            {
                slug: 'iso-50001-lead-auditor',
                name: 'ISO 50001:2018 Energy Management Lead Auditor',
                duration: '5 Days',
                image: '/courses/iso-50001-lead-auditor.webp',
                entryRequirements: 'Understanding of energy management systems.',
                studyUnits: ['ISO 50001 Overview', 'Energy Management Requirements', 'Audit Planning', 'Energy Performance'],
                learningOutcomes: ['Understand ISO 50001', 'Plan and conduct audits', 'Lead audit teams', 'Improve energy performance'],
                futureProgression: 'Energy Consultant, Lead Auditor, Energy Manager'
            }
        ]
    },
    {
        id: 'lifting-operations',
        name: 'Lifting Operations',
        icon: FaHardHat,
        description: 'Safe lifting, crane operations, and rigging certifications',
        courses: [
            {
                slug: 'lifting-supervisor',
                name: 'Lifting Supervisor Certification',
                duration: '3 Days',
                image: '/courses/lifting-supervisor.webp',
                entryRequirements: 'Experience in construction or industrial operations.',
                studyUnits: ['Lifting Safety', 'Crane Operations', 'Rigging', 'Load Calculations', 'Risk Assessment'],
                learningOutcomes: ['Supervise lifting operations', 'Calculate loads', 'Inspect lifting equipment', 'Ensure safety compliance'],
                futureProgression: 'Lifting Engineer, HSE Officer, Construction Manager'
            }
        ]
    },
    {
        id: 'it-qualifications',
        name: 'IT Qualifications',
        icon: FaLaptop,
        description: 'Digital skills, networking, and IT certifications',
        courses: [
            {
                slug: 'comptia-a-plus',
                name: 'CompTIA A+ Certification',
                duration: '10 Days',
                image: '/courses/comptia-a-plus.webp',
                entryRequirements: 'Basic computer knowledge.',
                studyUnits: ['Hardware', 'Networking', 'Operating Systems', 'Security', 'Troubleshooting'],
                learningOutcomes: ['Build and repair computers', 'Install operating systems', 'Troubleshoot hardware issues'],
                futureProgression: 'Network Administrator, IT Support, Help Desk Manager'
            },
            {
                slug: 'ccna',
                name: 'Cisco CCNA Certification',
                duration: '15 Days',
                image: '/courses/ccna.webp',
                entryRequirements: 'Basic networking knowledge recommended.',
                studyUnits: ['Network Fundamentals', 'Routing', 'Switching', 'Network Security', 'WAN Technologies'],
                learningOutcomes: ['Configure routers and switches', 'Troubleshoot networks', 'Implement security'],
                futureProgression: 'Network Engineer, Systems Administrator, IT Manager'
            }
        ]
    },
    {
        id: 'business-leadership',
        name: 'Business & Leadership',
        icon: FaUserTie,
        description: 'Management, leadership, and organizational development',
        courses: [
            {
                slug: 'leadership-skills',
                name: 'Certified Leadership Skills Training',
                duration: '3 Days',
                image: '/courses/leadership-skills.webp',
                entryRequirements: 'No prior management experience required.',
                studyUnits: ['Leadership Styles', 'Team Building', 'Communication', 'Decision Making', 'Conflict Resolution'],
                learningOutcomes: ['Lead teams effectively', 'Make strategic decisions', 'Resolve conflicts', 'Motivate employees'],
                futureProgression: 'Team Leader, Department Manager, Director'
            }
        ]
    },
    {
        id: 'health-social-care',
        name: 'Health and Social Care',
        icon: FaHospital,
        description: 'Healthcare management, patient care, and social work',
        courses: [
            {
                slug: 'healthcare-management',
                name: 'Level 5 Healthcare Management',
                duration: '6 Months',
                image: '/courses/healthcare-management.webp',
                entryRequirements: 'Experience in healthcare or social care setting.',
                studyUnits: ['Healthcare Systems', 'Patient Care', 'Healthcare Policy', 'Ethics', 'Risk Management'],
                learningOutcomes: ['Manage healthcare services', 'Ensure patient safety', 'Understand policy and law'],
                futureProgression: 'Healthcare Manager, Hospital Administrator, Social Care Director'
            }
        ]
    },
    {
        id: 'early-learning',
        name: 'Early Learning and Childcare',
        icon: FaSchool,
        description: 'Child development, nursery management, and early education',
        courses: [
            {
                slug: 'childcare-level-3',
                name: 'Level 3 Diploma in Early Years Education',
                duration: '12 Months',
                image: '/courses/childcare-level-3.webp',
                entryRequirements: 'Age 18+, interest in childcare.',
                studyUnits: ['Child Development', 'Safeguarding', 'Curriculum Planning', 'Child Behavior', 'Parental Engagement'],
                learningOutcomes: ['Support child development', 'Plan early years curriculum', 'Ensure child safety'],
                futureProgression: 'Nursery Manager, Early Years Teacher, Childcare Consultant'
            }
        ]
    },
    {
        id: 'construction',
        name: 'Construction & Civil Engineering',
        icon: FaBuilding,
        description: 'Building, construction management, and civil engineering',
        courses: [
            {
                slug: 'construction-safety',
                name: 'Construction Safety Management',
                duration: '5 Days',
                image: '/courses/construction-safety.webp',
                entryRequirements: 'Experience in construction industry.',
                studyUnits: ['Construction Hazards', 'Safety Legislation', 'Risk Assessment', 'Site Management'],
                learningOutcomes: ['Manage construction safety', 'Comply with legal requirements', 'Conduct site inspections'],
                futureProgression: 'Safety Manager, Construction Manager, Site Supervisor'
            }
        ]
    },
    {
        id: 'oil-gas',
        name: 'Oil and Gas Management',
        icon: FaOilCan,
        description: 'Petroleum, gas operations, and energy sector management',
        courses: [
            {
                slug: 'oil-gas-safety',
                name: 'Oil and Gas Safety Management',
                duration: '5 Days',
                image: '/courses/oil-gas-safety.webp',
                entryRequirements: 'Experience in oil and gas operations.',
                studyUnits: ['HSE in Oil and Gas', 'Process Safety', 'Risk Assessment', 'Emergency Response'],
                learningOutcomes: ['Manage safety in oil and gas', 'Conduct risk assessments', 'Respond to emergencies'],
                futureProgression: 'HSE Manager, Operations Director, Safety Consultant'
            }
        ]
    },
    {
        id: 'food-safety',
        name: 'Food Safety and Hygiene',
        icon: FaAppleAlt,
        description: 'Food handling, safety standards, and hygiene certifications',
        courses: [
            {
                slug: 'food-safety-level-3',
                name: 'Level 3 Food Safety and Hygiene',
                duration: '3 Days',
                image: '/courses/food-safety.webp',
                entryRequirements: 'Experience in food handling or catering.',
                studyUnits: ['Food Safety Laws', 'HACCP', 'Food Storage', 'Personal Hygiene', 'Pest Control'],
                learningOutcomes: ['Implement HACCP', 'Maintain food safety standards', 'Train food handlers'],
                futureProgression: 'Food Safety Manager, Quality Control, Catering Manager'
            }
        ]
    },
    {
        id: 'technical-vocational',
        name: 'Technical & Vocational Qualifications',
        icon: FaServer,
        description: 'Hands-on technical skills, trades, and vocational training',
        courses: [
            {
                slug: 'welding-inspection',
                name: 'Welding Inspection and Quality Control',
                duration: '5 Days',
                image: '/courses/welding-inspection.webp',
                entryRequirements: 'Experience in welding or metalworking.',
                studyUnits: ['Welding Processes', 'Welding Defects', 'Inspection Techniques', 'NDT Methods'],
                learningOutcomes: ['Inspect welds', 'Identify defects', 'Apply quality control methods'],
                futureProgression: 'Welding Inspector, Quality Control, NDT Technician'
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