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
    FaLeaf,           // Diploma Environment
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
    FaFlask,          // Lab Technician
    FaRulerCombined,  // Architectural
    FaGlobe,          // Surveying
    FaAppleAlt,       // Food Safety
    FaLeaf,           // Green Building
    FaProjectDiagram, // Project Management
    FaCar,            // Defence Driving
    FaFolderOpen,     // Document Controller
    FaWrench,         // Technical
    FaFire,           // B Gas CPD
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
            { slug: 'cpr', name: 'CPR', duration: '1 Day', image: '/courses/cpr.jpg', entryRequirements: 'No prior experience required.', studyUnits: ['CPR Techniques', 'Rescue Breathing'], learningOutcomes: ['Perform CPR effectively'], futureProgression: 'Advanced First Aid' },
            { slug: 'aed', name: 'AED', duration: '1 Day', image: '/courses/aed.jpg', entryRequirements: 'No prior experience required.', studyUnits: ['AED Operation', 'Safety Protocols'], learningOutcomes: ['Use AED correctly'], futureProgression: 'First Aid' },
            { slug: 'bls', name: 'BLS', duration: '2 Days', image: '/courses/bls.jpg', entryRequirements: 'Basic medical knowledge', studyUnits: ['BLS Protocols', 'Team Dynamics'], learningOutcomes: ['Perform BLS'], futureProgression: 'Advanced Cardiac Life Support' },
            { slug: 'heartsaver-first-aid', name: 'Heartsaver First Aid', duration: '1 Day', image: '/courses/heartsaver-first-aid.jpg', entryRequirements: 'No prior experience', studyUnits: ['First Aid Basics', 'Emergency Response'], learningOutcomes: ['Provide first aid'], futureProgression: 'BLS' },
            { slug: 'wilderness-first-aid', name: 'Wilderness First Aid', duration: '3 Days', image: '/courses/wilderness-first-aid.jpg', entryRequirements: 'Basic first aid knowledge', studyUnits: ['Wilderness Medicine', 'Survival Skills'], learningOutcomes: ['Handle medical emergencies in remote areas'], futureProgression: 'Wilderness EMT' }
        ]
    },
    {
        id: 'fire-safety',
        name: 'Fire Safety',
        icon: FaFire,
        description: 'Fire prevention, emergency response, and management certifications',
        courses: [
            { slug: 'fire-warden', name: 'Fire Warden', duration: '2 Days', image: '/courses/fire-warden.jpg', entryRequirements: 'No prior experience', studyUnits: ['Fire Prevention', 'Evacuation Procedures'], learningOutcomes: ['Lead fire evacuations'], futureProgression: 'Fire Safety Manager' },
            { slug: 'industrial-fire-safety', name: 'Industrial Fire Safety', duration: '3 Days', image: '/courses/industrial-fire-safety.jpg', entryRequirements: 'Basic safety knowledge', studyUnits: ['Industrial Hazards', 'Fire Suppression'], learningOutcomes: ['Manage industrial fire risks'], futureProgression: 'HSE Officer' },
            { slug: 'fire-safety-emergency-response', name: 'Fire Safety & Emergency Response', duration: '3 Days', image: '/courses/fire-safety-emergency-response.jpg', entryRequirements: 'No prior experience', studyUnits: ['Emergency Response Plans', 'Fire Drills'], learningOutcomes: ['Develop emergency response plans'], futureProgression: 'Emergency Manager' },
            { slug: 'fire-watch', name: 'Fire Watch', duration: '1 Day', image: '/courses/fire-watch.jpg', entryRequirements: 'Basic safety knowledge', studyUnits: ['Fire Watch Duties', 'Hazard Identification'], learningOutcomes: ['Perform fire watch duties'], futureProgression: 'Fire Safety Officer' },
            { slug: 'fire-fighter', name: 'Fire Fighter', duration: '5 Days', image: '/courses/fire-fighter.jpg', entryRequirements: 'Physical fitness required', studyUnits: ['Firefighting Techniques', 'Rescue Operations'], learningOutcomes: ['Perform firefighting operations'], futureProgression: 'Fire Captain' }
        ]
    },
    {
        id: 'risk-management',
        name: 'Risk Management',
        icon: FaShieldAlt,
        description: 'Occupational risk assessment, HAZOP, and safety management',
        courses: [
            { slug: 'occupational-risk-management', name: 'Occupational Risk Management', duration: '3 Days', image: '/courses/occupational-risk-management.jpg', entryRequirements: 'Basic safety knowledge', studyUnits: ['Risk Assessment', 'Control Measures'], learningOutcomes: ['Manage workplace risks'], futureProgression: 'HSE Manager' },
            { slug: 'construction-risk-management', name: 'Construction Risk Management', duration: '3 Days', image: '/courses/construction-risk-management.jpg', entryRequirements: 'Construction experience', studyUnits: ['Construction Hazards', 'Risk Mitigation'], learningOutcomes: ['Manage construction risks'], futureProgression: 'Construction Manager' },
            { slug: 'industrial-risk-management', name: 'Industrial Risk Management', duration: '3 Days', image: '/courses/industrial-risk-management.jpg', entryRequirements: 'Industrial experience', studyUnits: ['Industrial Hazards', 'Safety Protocols'], learningOutcomes: ['Manage industrial risks'], futureProgression: 'Safety Director' },
            { slug: 'hira', name: 'HIRA (Hazard Identification & Risk Assessment)', duration: '2 Days', image: '/courses/hira.jpg', entryRequirements: 'No prior experience', studyUnits: ['HIRA Methodology', 'Risk Evaluation'], learningOutcomes: ['Conduct HIRA'], futureProgression: 'Risk Assessment Specialist' },
            { slug: 'hazop', name: 'HAZOP', duration: '3 Days', image: '/courses/hazop.jpg', entryRequirements: 'Process industry experience', studyUnits: ['HAZOP Methodology', 'Team Leadership'], learningOutcomes: ['Lead HAZOP studies'], futureProgression: 'Process Safety Manager' },
            { slug: 'hazcom', name: 'HAZCOM', duration: '2 Days', image: '/courses/hazcom.jpg', entryRequirements: 'No prior experience', studyUnits: ['Hazard Communication', 'SDS Management'], learningOutcomes: ['Manage chemical safety'], futureProgression: 'Safety Officer' },
            { slug: 'hazmat', name: 'HAZMAT', duration: '3 Days', image: '/courses/hazmat.jpg', entryRequirements: 'Basic safety knowledge', studyUnits: ['HAZMAT Handling', 'Emergency Response'], learningOutcomes: ['Handle hazardous materials safely'], futureProgression: 'HAZMAT Specialist' },
            { slug: 'chmm', name: 'CHMM', duration: '4 Days', image: '/courses/chmm.jpg', entryRequirements: 'Safety experience', studyUnits: ['Hazardous Materials Management', 'Regulations'], learningOutcomes: ['Manage hazardous materials compliance'], futureProgression: 'Environmental Manager' },
            { slug: 'hmp', name: 'HMP', duration: '2 Days', image: '/courses/hmp.jpg', entryRequirements: 'No prior experience', studyUnits: ['Hazard Management Planning', 'Risk Control'], learningOutcomes: ['Develop hazard management plans'], futureProgression: 'Safety Coordinator' }
        ]
    },
    {
        id: 'scaffolding',
        name: 'Scaffolding',
        icon: FaHardHat,
        description: 'Scaffolding inspection, supervision, and training certifications',
        courses: [
            { slug: 'scaffolding-inspector', name: 'Scaffolding Inspector', duration: '3 Days', image: '/courses/scaffolding-inspector.jpg', entryRequirements: 'Construction experience', studyUnits: ['Scaffolding Standards', 'Inspection Techniques'], learningOutcomes: ['Inspect scaffolding systems'], futureProgression: 'Safety Inspector' },
            { slug: 'scaffolding-supervisor', name: 'Scaffolding Supervisor', duration: '3 Days', image: '/courses/scaffolding-supervisor.jpg', entryRequirements: 'Scaffolding experience', studyUnits: ['Scaffolding Management', 'Team Leadership'], learningOutcomes: ['Supervise scaffolding operations'], futureProgression: 'Construction Supervisor' },
            { slug: 'train-the-trainer-scaffold', name: 'Train the Trainer Scaffold', duration: '5 Days', image: '/courses/train-the-trainer-scaffold.jpg', entryRequirements: 'Scaffolding expertise', studyUnits: ['Training Methods', 'Scaffolding Standards'], learningOutcomes: ['Train scaffolding personnel'], futureProgression: 'Training Manager' }
        ]
    },
    {
        id: 'rigger',
        name: 'Rigger',
        icon: FaTools,
        description: 'Lifting operations, rigging, and load handling certifications',
        courses: [
            { slug: 'lifting-operations', name: 'Lifting Operations', duration: '3 Days', image: '/courses/lifting-operations.jpg', entryRequirements: 'Basic construction experience', studyUnits: ['Lifting Safety', 'Load Calculations'], learningOutcomes: ['Plan lifting operations'], futureProgression: 'Lifting Engineer' },
            { slug: 'rigging-lifting-sling-operations', name: 'Rigging, Lifting & Sling Operations', duration: '3 Days', image: '/courses/rigging-lifting-sling-operations.jpg', entryRequirements: 'Construction experience', studyUnits: ['Rigging Techniques', 'Sling Operations'], learningOutcomes: ['Perform rigging operations'], futureProgression: 'Rigging Supervisor' },
            { slug: 'rigger-lifting-safety', name: 'Rigger & Lifting Safety', duration: '2 Days', image: '/courses/rigger-lifting-safety.jpg', entryRequirements: 'No prior experience', studyUnits: ['Rigger Duties', 'Lifting Safety'], learningOutcomes: ['Ensure lifting safety'], futureProgression: 'Safety Officer' },
            { slug: 'rigger-banksman-lifting-operations', name: 'Rigger, Banksman & Lifting Operations', duration: '3 Days', image: '/courses/rigger-banksman-lifting-operations.jpg', entryRequirements: 'Construction experience', studyUnits: ['Banksman Duties', 'Lifting Coordination'], learningOutcomes: ['Coordinate lifting operations'], futureProgression: 'Lifting Supervisor' },
            { slug: 'industrial-rigging-lifting-operation', name: 'Industrial Rigging & Lifting Operation', duration: '3 Days', image: '/courses/industrial-rigging-lifting-operation.jpg', entryRequirements: 'Industrial experience', studyUnits: ['Industrial Rigging', 'Heavy Lifting'], learningOutcomes: ['Perform industrial rigging'], futureProgression: 'Industrial Rigger' },
            { slug: 'advanced-rigging-lifting-operation', name: 'Advanced Rigging & Lifting Operation', duration: '5 Days', image: '/courses/advanced-rigging-lifting-operation.jpg', entryRequirements: 'Rigging experience', studyUnits: ['Advanced Rigging Techniques', 'Complex Lifts'], learningOutcomes: ['Manage complex rigging operations'], futureProgression: 'Rigging Manager' },
            { slug: 'rigger-slinging-load-handling', name: 'Rigger, Slinging & Load Handling', duration: '2 Days', image: '/courses/rigger-slinging-load-handling.jpg', entryRequirements: 'Basic construction knowledge', studyUnits: ['Slinging Methods', 'Load Handling'], learningOutcomes: ['Handle loads safely'], futureProgression: 'Rigger' },
            { slug: 'professional-rigging-lifting-safety', name: 'Professional Rigging & Lifting Safety', duration: '4 Days', image: '/courses/professional-rigging-lifting-safety.jpg', entryRequirements: 'Rigging experience', studyUnits: ['Professional Rigging', 'Safety Management'], learningOutcomes: ['Manage rigging safety'], futureProgression: 'Safety Manager' },
            { slug: 'rigger-level-1', name: 'Rigger Level 1 Certification', duration: '3 Days', image: '/courses/rigger-level-1.jpg', entryRequirements: 'No prior experience', studyUnits: ['Basic Rigging', 'Safety Protocols'], learningOutcomes: 'Perform basic rigging operations', futureProgression: 'Rigger Level 2' },
            { slug: 'rigger-level-2', name: 'Rigger Level 2 Certification', duration: '3 Days', image: '/courses/rigger-level-2.jpg', entryRequirements: 'Rigger Level 1', studyUnits: ['Advanced Rigging', 'Complex Loads'], learningOutcomes: 'Perform advanced rigging', futureProgression: 'Rigger Level 3' },
            { slug: 'rigger-level-3', name: 'Rigger Level 3', duration: '4 Days', image: '/courses/rigger-level-3.jpg', entryRequirements: 'Rigger Level 2', studyUnits: ['Master Rigging', 'Supervision'], learningOutcomes: 'Supervise rigging operations', futureProgression: 'Rigging Manager' }
        ]
    },
    {
        id: 'osha',
        name: 'OSHA 30/40 Hours',
        icon: FaClipboardCheck,
        description: 'OSHA safety training for construction, oil & gas, and general industry',
        courses: [
            { slug: 'osha-construction-safety', name: 'Construction Safety', duration: '30 Hours', image: '/courses/osha-construction-safety.jpg', entryRequirements: 'Construction experience', studyUnits: ['OSHA Standards', 'Construction Hazards'], learningOutcomes: 'Manage construction safety', futureProgression: 'Safety Officer' },
            { slug: 'osha-general-industrial-safety', name: 'General Industrial Safety', duration: '30 Hours', image: '/courses/osha-general-industrial-safety.jpg', entryRequirements: 'Industrial experience', studyUnits: ['Industrial Hazards', 'OSHA Compliance'], learningOutcomes: 'Ensure industrial safety', futureProgression: 'Safety Manager' },
            { slug: 'osha-oil-gas', name: 'Oil & Gas', duration: '40 Hours', image: '/courses/osha-oil-gas.jpg', entryRequirements: 'Oil & gas experience', studyUnits: ['Oil & Gas Hazards', 'Emergency Response'], learningOutcomes: 'Manage oil & gas safety', futureProgression: 'HSE Manager' },
            { slug: 'osha-workplace-safety', name: 'Workplace Safety', duration: '30 Hours', image: '/courses/osha-workplace-safety.jpg', entryRequirements: 'No prior experience', studyUnits: ['Workplace Safety', 'OSHA Regulations'], learningOutcomes: 'Implement workplace safety', futureProgression: 'Safety Coordinator' }
        ]
    },
    {
        id: 'iosh',
        name: 'IOSH',
        icon: FaUserTie,
        description: 'IOSH Managing Safely and working safely certifications',
        courses: [
            { slug: 'iosh-managing-safely', name: 'IOSH Managing Safely', duration: '5 Days', image: '/courses/iosh-managing-safely.jpg', entryRequirements: 'Supervisory experience', studyUnits: ['Managing Safely', 'Risk Assessment'], learningOutcomes: 'Manage safety effectively', futureProgression: 'NEBOSH, Safety Manager' }
        ]
    },
    {
        id: 'qaqc',
        name: 'QA/QC',
        icon: FaFlask,
        description: 'Quality assurance and quality control in various industries',
        courses: [
            { slug: 'qaqc-civil', name: 'Civil', duration: '5 Days', image: '/courses/qaqc-civil.jpg', entryRequirements: 'Civil engineering background', studyUnits: ['Civil QA/QC', 'Standards'], learningOutcomes: 'Implement civil QA/QC', futureProgression: 'QA/QC Manager' },
            { slug: 'qaqc-electrical', name: 'Electrical', duration: '5 Days', image: '/courses/qaqc-electrical.jpg', entryRequirements: 'Electrical engineering background', studyUnits: ['Electrical QA/QC', 'Testing'], learningOutcomes: 'Implement electrical QA/QC', futureProgression: 'Quality Engineer' },
            { slug: 'qaqc-mechanical', name: 'Mechanical', duration: '5 Days', image: '/courses/qaqc-mechanical.jpg', entryRequirements: 'Mechanical engineering background', studyUnits: ['Mechanical QA/QC', 'Inspection'], learningOutcomes: 'Implement mechanical QA/QC', futureProgression: 'Quality Manager' },
            { slug: 'qaqc-oil-gas', name: 'Oil & Gas', duration: '5 Days', image: '/courses/qaqc-oil-gas.jpg', entryRequirements: 'Oil & gas experience', studyUnits: ['Oil & Gas QA/QC', 'Standards'], learningOutcomes: 'Implement oil & gas QA/QC', futureProgression: 'QA/QC Manager' },
            { slug: 'qaqc-telecom', name: 'Telecom', duration: '5 Days', image: '/courses/qaqc-telecom.jpg', entryRequirements: 'Telecom experience', studyUnits: ['Telecom QA/QC', 'Testing'], learningOutcomes: 'Implement telecom QA/QC', futureProgression: 'Quality Engineer' },
            { slug: 'qaqc-solar-inspector', name: 'Solar Inspector', duration: '4 Days', image: '/courses/qaqc-solar-inspector.jpg', entryRequirements: 'Solar industry experience', studyUnits: ['Solar QA/QC', 'Inspection'], learningOutcomes: 'Inspect solar installations', futureProgression: 'Solar Quality Manager' },
            { slug: 'qaqc-welding-inspector', name: 'Welding Inspector', duration: '5 Days', image: '/courses/qaqc-welding-inspector.jpg', entryRequirements: 'Welding experience', studyUnits: ['Welding Standards', 'Inspection'], learningOutcomes: 'Inspect welding operations', futureProgression: 'CSWIP Certified Inspector' },
            { slug: 'qaqc-piping-fabrication', name: 'Piping & Fabrication', duration: '5 Days', image: '/courses/qaqc-piping-fabrication.jpg', entryRequirements: 'Piping experience', studyUnits: ['Piping Standards', 'Fabrication QA/QC'], learningOutcomes: 'Implement piping QA/QC', futureProgression: 'Piping Inspector' },
            { slug: 'qaqc-lifting', name: 'Lifting QA/QC', duration: '3 Days', image: '/courses/qaqc-lifting.jpg', entryRequirements: 'Lifting experience', studyUnits: ['Lifting Equipment', 'Inspection'], learningOutcomes: 'Inspect lifting equipment', futureProgression: 'Lifting Engineer' },
            { slug: 'qaqc-chemical', name: 'Chemical', duration: '5 Days', image: '/courses/qaqc-chemical.jpg', entryRequirements: 'Chemical engineering background', studyUnits: ['Chemical QA/QC', 'Testing'], learningOutcomes: 'Implement chemical QA/QC', futureProgression: 'Quality Manager' },
            { slug: 'qaqc-painting-coating', name: 'Painting & Coating', duration: '4 Days', image: '/courses/qaqc-painting-coating.jpg', entryRequirements: 'Coating experience', studyUnits: ['Coating Standards', 'Inspection'], learningOutcomes: 'Inspect coating operations', futureProgression: 'Coating Inspector' }
        ]
    },
    {
        id: 'ndt',
        name: 'NDT',
        icon: FaMicroscope,
        description: 'Non-Destructive Testing methods and certifications',
        courses: [
            { slug: 'ndt-rt', name: 'RT (Radiographic Testing)', duration: '5 Days', image: '/courses/ndt-rt.jpg', entryRequirements: 'Technical background', studyUnits: ['RT Principles', 'Safety'], learningOutcomes: 'Perform radiographic testing', futureProgression: 'NDT Level II' },
            { slug: 'ndt-ut', name: 'UT (Ultrasonic Testing)', duration: '5 Days', image: '/courses/ndt-ut.jpg', entryRequirements: 'Technical background', studyUnits: ['UT Principles', 'Equipment'], learningOutcomes: 'Perform ultrasonic testing', futureProgression: 'NDT Level II' },
            { slug: 'ndt-mpt', name: 'MPT (Magnetic Particle Testing)', duration: '3 Days', image: '/courses/ndt-mpt.jpg', entryRequirements: 'Technical background', studyUnits: ['MPT Principles', 'Application'], learningOutcomes: 'Perform magnetic particle testing', futureProgression: 'NDT Level II' },
            { slug: 'ndt-vt', name: 'VT (Visual Testing)', duration: '2 Days', image: '/courses/ndt-vt.jpg', entryRequirements: 'No prior experience', studyUnits: ['VT Principles', 'Visual Inspection'], learningOutcomes: 'Perform visual inspection', futureProgression: 'NDT Level II' },
            { slug: 'ndt-et', name: 'ET (Eddy Current Testing)', duration: '4 Days', image: '/courses/ndt-et.jpg', entryRequirements: 'Technical background', studyUnits: ['ET Principles', 'Application'], learningOutcomes: 'Perform eddy current testing', futureProgression: 'NDT Level II' },
            { slug: 'ndt-pt', name: 'PT (Penetrant Testing)', duration: '3 Days', image: '/courses/ndt-pt.jpg', entryRequirements: 'Technical background', studyUnits: ['PT Principles', 'Application'], learningOutcomes: 'Perform penetrant testing', futureProgression: 'NDT Level II' }
        ]
    },
    {
        id: 'diploma-hse',
        name: 'Diploma in HSE',
        icon: FaGraduationCap,
        description: 'Diploma in Occupational Health & Safety Management',
        courses: [
            { slug: 'diploma-hse-level-6', name: 'Level 6 Diploma in Occupational Health & Safety Management', duration: '12 Months', image: '/courses/diploma-hse-level-6.jpg', entryRequirements: 'Relevant experience', studyUnits: ['HSE Management', 'Risk Assessment'], learningOutcomes: 'Manage HSE programs', futureProgression: 'HSE Director' },
            { slug: 'diploma-hse-level-7', name: 'Level 7 Diploma in Occupational Health & Safety Management', duration: '12 Months', image: '/courses/diploma-hse-level-7.jpg', entryRequirements: 'Level 6 HSE or equivalent', studyUnits: ['Strategic HSE', 'Leadership'], learningOutcomes: 'Lead HSE strategy', futureProgression: 'HSE Director' },
            { slug: 'diploma-hse-level-8', name: 'Level 8 Diploma in HSE', duration: '18 Months', image: '/courses/diploma-hse-level-8.jpg', entryRequirements: 'Level 7 HSE or equivalent', studyUnits: ['Advanced HSE', 'Research'], learningOutcomes: 'Expert HSE management', futureProgression: 'Chief HSE Officer' }
        ]
    },
    {
        id: 'diploma-environment',
        name: 'Diploma in Environment',
        icon: FaLeaf,
        description: 'Diploma in Environmental Sustainability Management',
        courses: [
            { slug: 'diploma-environment-level-7', name: 'Level 7 Diploma Environmental Sustainability Management', duration: '12 Months', image: '/courses/diploma-environment-level-7.jpg', entryRequirements: 'Environmental experience', studyUnits: ['Sustainability', 'Environmental Policy'], learningOutcomes: 'Manage sustainability programs', futureProgression: 'Sustainability Director' }
        ]
    },
    {
        id: 'diploma-civil',
        name: 'Diploma in Civil',
        icon: FaBuilding,
        description: 'Civil engineering, construction management, and site supervision',
        courses: [
            { slug: 'diploma-civil-level-6', name: 'Level 6 Diploma in Civil Engineering', duration: '12 Months', image: '/courses/diploma-civil-level-6.jpg', entryRequirements: 'Civil experience', studyUnits: ['Structural Engineering', 'Construction'], learningOutcomes: 'Manage civil projects', futureProgression: 'Civil Engineer' },
            { slug: 'diploma-civil-level-7', name: 'Level 7 Diploma in Civil Engineering', duration: '12 Months', image: '/courses/diploma-civil-level-7.jpg', entryRequirements: 'Level 6 Civil or equivalent', studyUnits: ['Advanced Civil Engineering', 'Design'], learningOutcomes: 'Lead civil engineering projects', futureProgression: 'Senior Civil Engineer' },
            { slug: 'diploma-civil-level-3', name: 'Level 3 Diploma in Civil', duration: '6 Months', image: '/courses/diploma-civil-level-3.jpg', entryRequirements: 'No prior experience', studyUnits: ['Civil Basics', 'Construction'], learningOutcomes: 'Assist in civil projects', futureProgression: 'Civil Technician' },
            { slug: 'diploma-construction-site-management-level-6', name: 'Level 6 Diploma in Construction Site Management', duration: '12 Months', image: '/courses/diploma-construction-site-management-level-6.jpg', entryRequirements: 'Construction experience', studyUnits: ['Site Management', 'Safety'], learningOutcomes: 'Manage construction sites', futureProgression: 'Construction Manager' },
            { slug: 'construction-project-management-level-7', name: 'Construction Project Management Level 7', duration: '12 Months', image: '/courses/construction-project-management-level-7.jpg', entryRequirements: 'Project management experience', studyUnits: ['Project Planning', 'Risk Management'], learningOutcomes: 'Lead construction projects', futureProgression: 'Project Director' },
            { slug: 'construction-senior-management', name: 'Construction Senior Management', duration: '12 Months', image: '/courses/construction-senior-management.jpg', entryRequirements: 'Management experience', studyUnits: ['Strategic Management', 'Leadership'], learningOutcomes: 'Lead construction organizations', futureProgression: 'CEO/Construction Director' }
        ]
    },
    {
        id: 'electrical',
        name: 'Electrical',
        icon: FaBolt,
        description: 'Electrical engineering diplomas and certifications',
        courses: [
            { slug: 'electrical-level-6', name: 'Level 6 Diploma in Electrical', duration: '12 Months', image: '/courses/electrical-level-6.jpg', entryRequirements: 'Electrical experience', studyUnits: ['Power Systems', 'Electrical Design'], learningOutcomes: 'Design electrical systems', futureProgression: 'Electrical Engineer' },
            { slug: 'electrical-level-7', name: 'Level 7 Diploma in Electrical', duration: '12 Months', image: '/courses/electrical-level-7.jpg', entryRequirements: 'Level 6 Electrical or equivalent', studyUnits: ['Advanced Electrical Engineering', 'Smart Grids'], learningOutcomes: 'Lead electrical projects', futureProgression: 'Senior Electrical Engineer' }
        ]
    },
    {
        id: 'mechanical',
        name: 'Mechanical',
        icon: FaCogs,
        description: 'Mechanical engineering diplomas and certifications',
        courses: [
            { slug: 'mechanical-level-6', name: 'Level 6 Diploma in Mechanical', duration: '12 Months', image: '/courses/mechanical-level-6.jpg', entryRequirements: 'Mechanical experience', studyUnits: ['Mechanical Design', 'Thermodynamics'], learningOutcomes: 'Design mechanical systems', futureProgression: 'Mechanical Engineer' }
        ]
    },
    {
        id: 'wpr',
        name: 'WPR',
        icon: FaFileAlt,
        description: 'Work Permit Receiver and safety permit certifications',
        courses: [
            { slug: 'wpr-certification', name: 'Work Permit Receiver Certificate', duration: '2 Days', image: '/courses/wpr-certification.jpg', entryRequirements: 'No prior experience', studyUnits: ['Work Permit Systems', 'Safety Protocols'], learningOutcomes: 'Issue and receive work permits', futureProgression: 'Safety Officer' }
        ]
    },
    {
        id: 'iso',
        name: 'ISO',
        icon: FaCertificate,
        description: 'ISO standards, auditing, and implementation certifications',
        courses: [
            { slug: 'iso-lead-auditor', name: 'Lead Auditor', duration: '5 Days', image: '/courses/iso-lead-auditor.jpg', entryRequirements: 'Quality management experience', studyUnits: ['Auditing Principles', 'Lead Auditor Skills'], learningOutcomes: 'Lead ISO audits', futureProgression: 'Lead Auditor' },
            { slug: 'iso-lead-implementation', name: 'Lead Implementation', duration: '5 Days', image: '/courses/iso-lead-implementation.jpg', entryRequirements: 'Quality management experience', studyUnits: ['Implementation Strategies', 'ISO Standards'], learningOutcomes: 'Implement ISO systems', futureProgression: 'Quality Manager' },
            { slug: 'iso-27001', name: 'ISO 27001', duration: '5 Days', image: '/courses/iso-27001.jpg', entryRequirements: 'IT security experience', studyUnits: ['ISMS', 'Security Controls'], learningOutcomes: 'Implement ISO 27001', futureProgression: 'Information Security Manager' },
            { slug: 'iso-27018', name: 'ISO 27018', duration: '3 Days', image: '/courses/iso-27018.jpg', entryRequirements: 'Cloud experience', studyUnits: ['Cloud Privacy', 'Data Protection'], learningOutcomes: 'Implement cloud privacy controls', futureProgression: 'Privacy Officer' },
            { slug: 'iso-27019', name: 'ISO 27019', duration: '3 Days', image: '/courses/iso-27019.jpg', entryRequirements: 'Energy sector experience', studyUnits: ['Energy Security', 'SCADA'], learningOutcomes: 'Secure energy systems', futureProgression: 'Security Manager' },
            { slug: 'iso-27032', name: 'ISO 27032', duration: '3 Days', image: '/courses/iso-27032.jpg', entryRequirements: 'Cybersecurity experience', studyUnits: ['Cybersecurity', 'Risk Management'], learningOutcomes: 'Implement cybersecurity controls', futureProgression: 'Cybersecurity Manager' },
            { slug: 'iso-27033', name: 'ISO 27033', duration: '3 Days', image: '/courses/iso-27033.jpg', entryRequirements: 'Network security experience', studyUnits: ['Network Security', 'Protection'], learningOutcomes: 'Secure network infrastructure', futureProgression: 'Network Security Manager' },
            { slug: 'iso-27034', name: 'ISO 27034', duration: '3 Days', image: '/courses/iso-27034.jpg', entryRequirements: 'Application security experience', studyUnits: ['Application Security', 'SDLC'], learningOutcomes: 'Secure applications', futureProgression: 'Application Security Manager' },
            { slug: 'iso-27035', name: 'ISO 27035', duration: '3 Days', image: '/courses/iso-27035.jpg', entryRequirements: 'Incident response experience', studyUnits: ['Incident Management', 'Response'], learningOutcomes: 'Manage security incidents', futureProgression: 'Incident Response Manager' },
            { slug: 'iso-27036', name: 'ISO 27036', duration: '3 Days', image: '/courses/iso-27036.jpg', entryRequirements: 'Supplier management experience', studyUnits: ['Supplier Security', 'Risk Management'], learningOutcomes: 'Manage supplier security', futureProgression: 'Vendor Risk Manager' },
            { slug: 'iso-27037', name: 'ISO 27037', duration: '3 Days', image: '/courses/iso-27037.jpg', entryRequirements: 'Digital forensics experience', studyUnits: ['Digital Forensics', 'Evidence Handling'], learningOutcomes: 'Conduct digital forensics', futureProgression: 'Forensics Specialist' },
            { slug: 'iso-27040', name: 'ISO 27040', duration: '3 Days', image: '/courses/iso-27040.jpg', entryRequirements: 'Storage security experience', studyUnits: ['Storage Security', 'Data Protection'], learningOutcomes: 'Secure storage systems', futureProgression: 'Storage Security Manager' },
            { slug: 'iso-27041', name: 'ISO 27041', duration: '3 Days', image: '/courses/iso-27041.jpg', entryRequirements: 'Incident investigation experience', studyUnits: ['Incident Investigation', 'Analysis'], learningOutcomes: 'Conduct incident investigations', futureProgression: 'Investigations Manager' },
            { slug: 'iso-27043', name: 'ISO 27043', duration: '3 Days', image: '/courses/iso-27043.jpg', entryRequirements: 'Security testing experience', studyUnits: ['Security Testing', 'Evaluation'], learningOutcomes: 'Conduct security testing', futureProgression: 'Security Tester' },
            { slug: 'iso-27071', name: 'ISO 27071', duration: '3 Days', image: '/courses/iso-27071.jpg', entryRequirements: 'Biometric security experience', studyUnits: ['Biometric Security', 'Implementation'], learningOutcomes: 'Implement biometric security', futureProgression: 'Security Manager' },
            { slug: 'iso-10001', name: 'ISO 10001', duration: '3 Days', image: '/courses/iso-10001.jpg', entryRequirements: 'Customer experience experience', studyUnits: ['Customer Satisfaction', 'Quality'], learningOutcomes: 'Implement customer satisfaction', futureProgression: 'Customer Experience Manager' },
            { slug: 'iso-10004', name: 'ISO 10004', duration: '3 Days', image: '/courses/iso-10004.jpg', entryRequirements: 'Customer experience experience', studyUnits: ['Customer Experience', 'Improvement'], learningOutcomes: 'Manage customer experience', futureProgression: 'CX Manager' },
            { slug: 'iso-10005', name: 'ISO 10005', duration: '3 Days', image: '/courses/iso-10005.jpg', entryRequirements: 'Quality planning experience', studyUnits: ['Quality Planning', 'Standards'], learningOutcomes: 'Develop quality plans', futureProgression: 'Quality Planner' },
            { slug: 'iso-10006', name: 'ISO 10006', duration: '3 Days', image: '/courses/iso-10006.jpg', entryRequirements: 'Project management experience', studyUnits: ['Quality in Projects', 'Standards'], learningOutcomes: 'Implement quality in projects', futureProgression: 'Project Quality Manager' },
            { slug: 'iso-10007', name: 'ISO 10007', duration: '3 Days', image: '/courses/iso-10007.jpg', entryRequirements: 'Configuration management experience', studyUnits: ['Configuration Management', 'Quality'], learningOutcomes: 'Implement configuration management', futureProgression: 'Configuration Manager' },
            { slug: 'iso-10012', name: 'ISO 10012', duration: '3 Days', image: '/courses/iso-10012.jpg', entryRequirements: 'Metrology experience', studyUnits: ['Measurement Management', 'Quality'], learningOutcomes: 'Manage measurement systems', futureProgression: 'Metrology Manager' },
            { slug: 'iso-13485', name: 'ISO 13485', duration: '5 Days', image: '/courses/iso-13485.jpg', entryRequirements: 'Medical device experience', studyUnits: ['Medical Device Quality', 'Standards'], learningOutcomes: 'Implement ISO 13485', futureProgression: 'Quality Manager' },
            { slug: 'iso-1720', name: 'ISO 1720', duration: '3 Days', image: '/courses/iso-1720.jpg', entryRequirements: 'Paints and coatings experience', studyUnits: ['Coating Standards', 'Quality'], learningOutcomes: 'Implement coating quality standards', futureProgression: 'Coating Specialist' }
        ]
    },
    {
        id: 'business-management',
        name: 'Business Management',
        icon: FaBriefcase,
        description: 'Business administration, leadership, and management diplomas',
        courses: [
            { slug: 'business-level-6', name: 'Level 6 Diploma', duration: '12 Months', image: '/courses/business-level-6.jpg', entryRequirements: 'Business experience', studyUnits: ['Business Strategy', 'Leadership'], learningOutcomes: 'Lead business operations', futureProgression: 'Business Manager' },
            { slug: 'business-level-5', name: 'Level 5 Diploma', duration: '9 Months', image: '/courses/business-level-5.jpg', entryRequirements: 'Business knowledge', studyUnits: ['Business Management', 'Operations'], learningOutcomes: 'Manage business functions', futureProgression: 'Business Manager' },
            { slug: 'business-level-6-extended', name: 'Level 6 Extended', duration: '15 Months', image: '/courses/business-level-6-extended.jpg', entryRequirements: 'Business experience', studyUnits: ['Advanced Business', 'Strategy'], learningOutcomes: 'Lead strategic initiatives', futureProgression: 'Senior Manager' },
            { slug: 'business-level-3', name: 'Level 3 Diploma', duration: '6 Months', image: '/courses/business-level-3.jpg', entryRequirements: 'No prior experience', studyUnits: ['Business Basics', 'Operations'], learningOutcomes: 'Support business operations', futureProgression: 'Junior Manager' }
        ]
    },
    {
        id: 'it',
        name: 'IT',
        icon: FaLaptop,
        description: 'Information technology diplomas and certifications',
        courses: [
            { slug: 'it-level-6', name: 'Level 6 Diploma', duration: '12 Months', image: '/courses/it-level-6.jpg', entryRequirements: 'IT experience', studyUnits: ['Advanced IT', 'Systems Management'], learningOutcomes: 'Manage IT systems', futureProgression: 'IT Manager' },
            { slug: 'it-level-5-extended', name: 'Level 5 Extended', duration: '9 Months', image: '/courses/it-level-5-extended.jpg', entryRequirements: 'IT knowledge', studyUnits: ['IT Management', 'Networks'], learningOutcomes: 'Manage IT operations', futureProgression: 'IT Supervisor' },
            { slug: 'it-level-3', name: 'Level 3 Diploma', duration: '6 Months', image: '/courses/it-level-3.jpg', entryRequirements: 'No prior experience', studyUnits: ['IT Basics', 'Systems'], learningOutcomes: 'Support IT systems', futureProgression: 'IT Support' }
        ]
    },
    {
        id: 'law',
        name: 'Law',
        icon: FaGavel,
        description: 'Legal studies, law, and legal assistant certifications',
        courses: [
            { slug: 'law-level-3-1', name: 'Level 3 Diploma', duration: '6 Months', image: '/courses/law-level-3.jpg', entryRequirements: 'No prior experience', studyUnits: ['Legal Basics', 'Law'], learningOutcomes: 'Understand legal principles', futureProgression: 'Legal Assistant' }
        ]
    },
    {
        id: 'train-the-trainer',
        name: 'Train the Trainer',
        icon: FaChalkboardTeacher,
        description: 'Trainer qualifications across HSE, Construction, Oil & Gas, and more',
        courses: [
            { slug: 'trainer-hse', name: 'HSE', duration: '5 Days', image: '/courses/trainer-hse.jpg', entryRequirements: 'HSE experience', studyUnits: ['Training Methods', 'HSE'], learningOutcomes: 'Train HSE personnel', futureProgression: 'HSE Trainer' },
            { slug: 'trainer-construction', name: 'Construction – Engineering', duration: '5 Days', image: '/courses/trainer-construction.jpg', entryRequirements: 'Construction experience', studyUnits: ['Training Methods', 'Construction'], learningOutcomes: 'Train construction personnel', futureProgression: 'Construction Trainer' },
            { slug: 'trainer-oil-gas', name: 'Oil & Gas / Fire', duration: '5 Days', image: '/courses/trainer-oil-gas.jpg', entryRequirements: 'Oil & gas experience', studyUnits: ['Training Methods', 'Fire Safety'], learningOutcomes: 'Train oil & gas personnel', futureProgression: 'Oil & Gas Trainer' },
            { slug: 'trainer-quality', name: 'Quality / ISO', duration: '5 Days', image: '/courses/trainer-quality.jpg', entryRequirements: 'Quality experience', studyUnits: ['Training Methods', 'ISO'], learningOutcomes: 'Train quality personnel', futureProgression: 'Quality Trainer' },
            { slug: 'trainer-professional', name: 'Professional Training', duration: '5 Days', image: '/courses/trainer-professional.jpg', entryRequirements: 'Training experience', studyUnits: ['Advanced Training', 'Professional Skills'], learningOutcomes: 'Train professionals', futureProgression: 'Senior Trainer' },
            { slug: 'trainer-hr', name: 'HR', duration: '5 Days', image: '/courses/trainer-hr.jpg', entryRequirements: 'HR experience', studyUnits: ['Training Methods', 'HR'], learningOutcomes: 'Train HR personnel', futureProgression: 'HR Trainer' },
            { slug: 'trainer-teaching', name: 'Teaching / Learning', duration: '5 Days', image: '/courses/trainer-teaching.jpg', entryRequirements: 'Teaching experience', studyUnits: ['Teaching Methods', 'Learning'], learningOutcomes: 'Teach effectively', futureProgression: 'Master Trainer' },
            { slug: 'trainer-scaffolding', name: 'Scaffolding', duration: '5 Days', image: '/courses/trainer-scaffolding.jpg', entryRequirements: 'Scaffolding experience', studyUnits: ['Training Methods', 'Scaffolding'], learningOutcomes: 'Train scaffolding personnel', futureProgression: 'Scaffolding Trainer' },
            { slug: 'trainer-wpr', name: 'WPR', duration: '3 Days', image: '/courses/trainer-wpr.jpg', entryRequirements: 'WPR experience', studyUnits: ['Training Methods', 'WPR'], learningOutcomes: 'Train WPR personnel', futureProgression: 'WPR Trainer' },
            { slug: 'trainer-level-3-construction', name: 'Level 3 Construction', duration: '5 Days', image: '/courses/trainer-level-3-construction.jpg', entryRequirements: 'Construction experience', studyUnits: ['Training Methods', 'Construction'], learningOutcomes: 'Train construction personnel', futureProgression: 'Construction Trainer' }
        ]
    },
    {
        id: 'green-building',
        name: 'Green Building',
        icon: FaLeaf,
        description: 'Sustainable building, LEED, and green construction certifications',
        courses: [
            { slug: 'green-building-level-3', name: 'Level 3 Diploma', duration: '6 Months', image: '/courses/green-building-level-3.jpg', entryRequirements: 'No prior experience', studyUnits: ['Green Building', 'Sustainability'], learningOutcomes: 'Implement green building practices', futureProgression: 'Green Building Specialist' },
            { slug: 'leed-green-building', name: 'LEED Green Building', duration: '5 Days', image: '/courses/leed-green-building.jpg', entryRequirements: 'Construction experience', studyUnits: ['LEED Standards', 'Green Design'], learningOutcomes: 'Design LEED certified buildings', futureProgression: 'LEED AP' },
            { slug: 'leed-green-building-certification', name: 'LEED Green Building Certification', duration: '3 Days', image: '/courses/leed-green-building-certification.jpg', entryRequirements: 'Green building experience', studyUnits: ['LEED Certification', 'Requirements'], learningOutcomes: 'Manage LEED certification', futureProgression: 'LEED AP' }
        ]
    },
    {
        id: 'project-management',
        name: 'Project Management',
        icon: FaProjectDiagram,
        description: 'Construction project management, PRINCE2, and P6 certifications',
        courses: [
            { slug: 'construction-project-management', name: 'Construction Project Management', duration: '5 Days', image: '/courses/construction-project-management.jpg', entryRequirements: 'Construction experience', studyUnits: ['Project Planning', 'Scheduling'], learningOutcomes: 'Manage construction projects', futureProgression: 'Project Manager' },
            { slug: 'project-management-level-7', name: 'Project Management Level 7 Diploma', duration: '12 Months', image: '/courses/project-management-level-7.jpg', entryRequirements: 'Project management experience', studyUnits: ['Advanced Project Management', 'Leadership'], learningOutcomes: 'Lead complex projects', futureProgression: 'Project Director' },
            { slug: 'prince2-p6', name: 'PRINCE2 P6 / P6 Certification', duration: '5 Days', image: '/courses/prince2-p6.jpg', entryRequirements: 'Project experience', studyUnits: ['PRINCE2 Methodology', 'P6 Software'], learningOutcomes: 'Manage projects using PRINCE2', futureProgression: 'Project Manager' }
        ]
    },
    {
        id: 'defence-driving',
        name: 'Defence Driving Certificate',
        icon: FaCar,
        description: 'Specialised defence transport and driving certifications',
        courses: [
            { slug: 'defence-driving-certificate', name: 'Specialised Defence Transport', duration: '3 Days', image: '/courses/defence-driving-certificate.jpg', entryRequirements: 'Driving license required', studyUnits: ['Defence Driving', 'Safety Protocols'], learningOutcomes: 'Operate defence transport', futureProgression: 'Defence Transport Manager' }
        ]
    },
    {
        id: 'document-controller',
        name: 'Document Controller',
        icon: FaFolderOpen,
        description: 'Document control, management, and certification programs',
        courses: [
            { slug: 'lead-document-controller', name: 'Lead Document Controller', duration: '5 Days', image: '/courses/lead-document-controller.jpg', entryRequirements: 'Document control experience', studyUnits: ['Advanced Document Control', 'Systems'], learningOutcomes: 'Lead document control teams', futureProgression: 'Document Control Manager' },
            { slug: 'diploma-document-controller', name: 'Diploma in Document Controller', duration: '12 Months', image: '/courses/diploma-document-controller.jpg', entryRequirements: 'Document control experience', studyUnits: ['Document Control Systems', 'Records Management'], learningOutcomes: 'Manage document control operations', futureProgression: 'Records Manager' },
            { slug: 'certified-document-controller', name: 'Certified Document Controller', duration: '3 Days', image: '/courses/certified-document-controller.jpg', entryRequirements: 'No prior experience', studyUnits: ['Document Control Basics', 'Software'], learningOutcomes: 'Perform document control duties', futureProgression: 'Document Controller' }
        ]
    },
    {
        id: 'technical',
        name: 'Technical',
        icon: FaWrench,
        description: 'HVAC, wall and floor tiles, and technical certifications',
        courses: [
            { slug: 'hvac-diploma', name: 'HVAC Diploma', duration: '12 Months', image: '/courses/hvac-diploma.jpg', entryRequirements: 'Technical experience', studyUnits: ['HVAC Systems', 'Design'], learningOutcomes: 'Design HVAC systems', futureProgression: 'HVAC Engineer' },
            { slug: 'diploma-wall-floor-tiles', name: 'Diploma in Wall and Floor Tiles', duration: '6 Months', image: '/courses/diploma-wall-floor-tiles.jpg', entryRequirements: 'No prior experience', studyUnits: ['Tiling Techniques', 'Installation'], learningOutcomes: 'Install wall and floor tiles', futureProgression: 'Tiling Specialist' }
        ]
    },
    {
        id: 'b-gas-cpd',
        name: 'B Gas CPD',
        icon: FaFire,
        description: 'Painting coating inspector and gas certifications',
        courses: [
            { slug: 'painting-coating-inspector', name: 'Painting Coating Inspector', duration: '4 Days', image: '/courses/painting-coating-inspector.jpg', entryRequirements: 'Coating experience', studyUnits: ['Coating Standards', 'Inspection'], learningOutcomes: 'Inspect coating operations', futureProgression: 'Coating Inspector' },
            { slug: 'g1', name: 'G1', duration: '3 Days', image: '/courses/g1.jpg', entryRequirements: 'Gas experience', studyUnits: ['Gas Standards', 'Safety'], learningOutcomes: 'Implement gas safety', futureProgression: 'Gas Safety Officer' },
            { slug: 'g2', name: 'G2', duration: '3 Days', image: '/courses/g2.jpg', entryRequirements: 'Gas experience', studyUnits: ['Advanced Gas Standards', 'Safety'], learningOutcomes: 'Manage gas safety', futureProgression: 'Gas Safety Manager' }
        ]
    },
    {
        id: 'solar',
        name: 'Solar',
        icon: FaSun,
        description: 'Solar inspection, supervision, and installation certifications',
        courses: [
            { slug: 'solar-inspector', name: 'Diploma in Solar Inspector', duration: '6 Months', image: '/courses/solar-inspector.jpg', entryRequirements: 'Solar experience', studyUnits: ['Solar Systems', 'Inspection'], learningOutcomes: 'Inspect solar installations', futureProgression: 'Solar Inspector' },
            { slug: 'solar-supervisor', name: 'Diploma in Solar Supervisor', duration: '6 Months', image: '/courses/solar-supervisor.jpg', entryRequirements: 'Solar experience', studyUnits: ['Solar Systems', 'Supervision'], learningOutcomes: 'Supervise solar installations', futureProgression: 'Solar Supervisor' },
            { slug: 'solar-pv-installer', name: 'Diploma in Solar PV Installer', duration: '6 Months', image: '/courses/solar-pv-installer.jpg', entryRequirements: 'Technical experience', studyUnits: ['Solar PV Systems', 'Installation'], learningOutcomes: 'Install solar PV systems', futureProgression: 'Solar Installer' },
            { slug: 'solar-technician', name: 'Diploma in Solar Technician', duration: '6 Months', image: '/courses/solar-technician.jpg', entryRequirements: 'Technical experience', studyUnits: ['Solar Systems', 'Maintenance'], learningOutcomes: 'Maintain solar systems', futureProgression: 'Solar Technician' }
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