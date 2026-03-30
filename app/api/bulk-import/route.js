import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('ists');

        // ========== ALL MISSING OTHM COURSES ==========
        const missingOthmCourses = [
            { name: "OTHM Level 3 Diploma in Health & Social Care", category: "OTHM", hours: "60 credits", content: ["Patient care", "Health systems", "Communication"], outcomes: ["Provide basic care"], eligibility: "School leavers interested in healthcare.", modules: ["Introduction to Care", "Patient Care", "Health Systems", "Communication"], learningObjectives: ["Understand care principles", "Provide patient care", "Navigate systems", "Communicate effectively"] },
            { name: "OTHM Level 3 Diploma in Information Technology", category: "OTHM", hours: "60 credits", content: ["Computer systems", "Software basics", "IT skills"], outcomes: ["Use computer systems"], eligibility: "Basic computer knowledge recommended.", modules: ["Computer Systems", "Software", "IT Skills", "Digital Literacy"], learningObjectives: ["Operate computers", "Use software", "Develop IT skills", "Apply literacy"] },
            { name: "OTHM Level 4 Diploma in Logistics & Supply Chain", category: "OTHM", hours: "120 credits", content: ["Inventory management", "Transport systems", "Procurement"], outcomes: ["Manage supply chain"], eligibility: "Level 3 qualification or logistics experience.", modules: ["Inventory", "Transportation", "Procurement", "Warehouse", "Analytics"], learningObjectives: ["Manage inventory", "Optimize transport", "Handle procurement", "Analyze data"] },
            { name: "OTHM Level 4 Diploma in Information Technology", category: "OTHM", hours: "120 credits", content: ["Networking", "Database systems", "Web development"], outcomes: ["Design IT solutions"], eligibility: "Level 3 IT qualification.", modules: ["Networking", "Databases", "Web Development", "Programming", "Security"], learningObjectives: ["Design networks", "Manage databases", "Develop websites", "Implement security"] },
            { name: "OTHM Level 4 Diploma in Health & Social Care", category: "OTHM", hours: "120 credits", content: ["Healthcare management", "Social care policies", "Patient rights"], outcomes: ["Manage healthcare"], eligibility: "Level 3 Care qualification.", modules: ["Healthcare Management", "Social Policies", "Patient Rights", "Communication", "Care Planning"], learningObjectives: ["Manage services", "Apply policies", "Respect rights", "Develop plans"] },
            { name: "OTHM Level 5 Diploma in Information Technology", category: "OTHM", hours: "120 credits", content: ["Advanced programming", "System analysis", "Cloud computing"], outcomes: ["Develop complex IT systems"], eligibility: "Level 4 IT Diploma.", modules: ["Programming", "System Analysis", "Cloud Computing", "Project Management", "Cybersecurity"], learningObjectives: ["Develop software", "Analyze systems", "Implement cloud", "Manage projects"] },
            { name: "OTHM Level 5 Diploma in Logistics & Supply Chain", category: "OTHM", hours: "120 credits", content: ["Global logistics", "Supply chain strategy", "Risk management"], outcomes: ["Optimize supply chains"], eligibility: "Level 4 Logistics.", modules: ["Global Logistics", "Strategy", "Risk Management", "Sustainability", "Technology"], learningObjectives: ["Manage logistics", "Develop strategies", "Identify risks", "Implement sustainability"] },
            { name: "OTHM Level 5 Diploma in Health & Social Care", category: "OTHM", hours: "120 credits", content: ["Healthcare leadership", "Quality improvement", "Policy"], outcomes: ["Lead healthcare teams"], eligibility: "Level 4 Care.", modules: ["Leadership", "Quality Improvement", "Policy", "Finance", "Governance"], learningObjectives: ["Lead organizations", "Implement quality", "Apply policies", "Manage governance"] },
            { name: "OTHM Level 5 Diploma in Education & Training", category: "OTHM", hours: "120 credits", content: ["Teaching methods", "Curriculum design", "Assessment"], outcomes: ["Teach effectively"], eligibility: "Teaching assistants or aspiring teachers.", modules: ["Teaching Methods", "Curriculum", "Assessment", "Classroom Management", "Psychology"], learningObjectives: ["Apply methods", "Design curricula", "Develop assessments", "Manage classrooms"] },
            { name: "OTHM Level 6 Diploma in Business Management", category: "OTHM", hours: "120 credits", content: ["Corporate strategy", "Change management", "Global business"], outcomes: ["Lead corporate strategy"], eligibility: "Level 5 Business.", modules: ["Corporate Strategy", "Change Management", "Global Business", "Strategic HR", "Ethics"], learningObjectives: ["Develop strategies", "Lead change", "Navigate global", "Apply ethics"] },
            { name: "OTHM Level 6 Diploma in Accounting & Business", category: "OTHM", hours: "120 credits", content: ["Financial reporting", "Management accounting", "Auditing"], outcomes: ["Prepare financial statements"], eligibility: "Level 5 Accounting.", modules: ["Reporting", "Management Accounting", "Auditing", "Taxation", "Finance"], learningObjectives: ["Prepare reports", "Apply accounting", "Conduct audits", "Manage finance"] },
            { name: "OTHM Level 6 Diploma in Logistics & Supply Chain", category: "OTHM", hours: "120 credits", content: ["Supply chain analytics", "Strategic procurement", "Global logistics"], outcomes: ["Optimize supply chains"], eligibility: "Level 5 Logistics.", modules: ["Analytics", "Procurement", "Global Logistics", "Technology", "Strategy"], learningObjectives: ["Analyze data", "Develop procurement", "Manage logistics", "Implement technology"] },
            { name: "OTHM Level 6 Diploma in Tourism & Hospitality", category: "OTHM", hours: "120 credits", content: ["Tourism management", "Hospitality operations", "Customer experience"], outcomes: ["Manage tourism businesses"], eligibility: "Level 5 Tourism.", modules: ["Tourism Management", "Hospitality", "Customer Experience", "Marketing", "Events"], learningObjectives: ["Manage tourism", "Lead hospitality", "Enhance experience", "Develop marketing"] },
            { name: "OTHM Level 7 Diploma in Strategic Management & Leadership", category: "OTHM", hours: "120 credits", content: ["Strategic planning", "Leadership", "Corporate governance"], outcomes: ["Lead organizations strategically"], eligibility: "Level 6 qualification or senior management experience.", modules: ["Strategic Planning", "Leadership", "Governance", "Change Management", "Global Strategy"], learningObjectives: ["Develop plans", "Lead change", "Implement governance", "Formulate strategies"] },
            { name: "OTHM Level 7 Diploma in Accounting & Finance", category: "OTHM", hours: "120 credits", content: ["Advanced reporting", "Strategic finance", "Investment analysis"], outcomes: ["Lead finance departments"], eligibility: "Level 6 Accounting.", modules: ["Reporting", "Finance", "Investment", "Treasury", "Risk Management"], learningObjectives: ["Prepare reports", "Develop strategies", "Analyze investments", "Manage risks"] },
            { name: "OTHM Level 7 Diploma in Human Resource Management", category: "OTHM", hours: "120 credits", content: ["Talent management", "HR strategy", "Employment law"], outcomes: ["Lead HR departments"], eligibility: "Level 6 HR.", modules: ["Talent Management", "Strategy", "Employment Law", "Performance", "Development"], learningObjectives: ["Manage talent", "Develop strategies", "Apply law", "Lead development"] },
            { name: "OTHM Level 7 Diploma in Logistics & Supply Chain Management", category: "OTHM", hours: "120 credits", content: ["Global strategy", "Network design", "Sustainability"], outcomes: ["Lead global supply chains"], eligibility: "Level 6 Logistics.", modules: ["Global Strategy", "Network Design", "Sustainability", "Procurement", "Innovation"], learningObjectives: ["Develop strategies", "Design networks", "Implement sustainability", "Lead procurement"] },
            { name: "OTHM Level 7 Diploma in Health & Social Care Management", category: "OTHM", hours: "120 credits", content: ["Healthcare strategy", "Quality governance", "Policy"], outcomes: ["Lead healthcare organizations"], eligibility: "Level 6 Care.", modules: ["Strategy", "Governance", "Policy", "Leadership", "Innovation"], learningObjectives: ["Develop strategies", "Implement governance", "Apply policies", "Lead services"] },
            { name: "OTHM Level 7 Diploma in Tourism & Hospitality Management", category: "OTHM", hours: "120 credits", content: ["Strategic hospitality", "Tourism policy", "Luxury brand"], outcomes: ["Lead hospitality organizations"], eligibility: "Level 6 Tourism.", modules: ["Hospitality Strategy", "Tourism Policy", "Luxury Brand", "Destination Strategy", "Innovation"], learningObjectives: ["Lead enterprises", "Develop policies", "Manage brands", "Create strategies"] },
            { name: "OTHM Level 7 Diploma in Education Management", category: "OTHM", hours: "120 credits", content: ["Educational leadership", "Curriculum strategy", "Quality assurance"], outcomes: ["Lead educational institutions"], eligibility: "Level 6 Education.", modules: ["Leadership", "Curriculum", "Quality Assurance", "Policy", "Management"], learningObjectives: ["Lead organizations", "Develop curricula", "Implement quality", "Manage policies"] }
        ];

        // ========== MISSING HIQUAL COURSES ==========
        const missingHiqualCourses = [
            { name: "HiQual Civil Lab Technician", category: "HiQual", hours: "30-50 hours", content: ["Soil testing", "Concrete testing", "Aggregate testing"], outcomes: ["Work in civil labs"], eligibility: "High school with science background.", modules: ["Soil Testing", "Concrete Testing", "Aggregate Testing", "Lab Safety", "Documentation"], learningObjectives: ["Perform soil tests", "Test concrete", "Analyze aggregates", "Maintain records"] },
            { name: "HiQual Land Surveyor", category: "HiQual", hours: "40-60 hours", content: ["Surveying techniques", "GPS and total station", "Site measurement"], outcomes: ["Conduct land surveys"], eligibility: "Civil engineering or surveying background.", modules: ["Surveying Fundamentals", "GPS Operation", "Total Station", "Site Measurement", "Drawing Preparation"], learningObjectives: ["Use surveying equipment", "Conduct measurements", "Prepare drawings", "Analyze data"] },
            { name: "HiQual AutoCAD Civil", category: "HiQual", hours: "40-80 hours", content: ["2D drafting", "3D modeling", "Civil drawings"], outcomes: ["Create civil engineering drawings"], eligibility: "Basic computer knowledge.", modules: ["AutoCAD Interface", "2D Drafting", "3D Modeling", "Civil Standards", "Site Plans"], learningObjectives: ["Create 2D drawings", "Develop 3D models", "Apply standards", "Produce site plans"] },
            { name: "HiQual HVAC Technician Course", category: "HiQual", hours: "40-80 hours", content: ["HVAC systems", "Installation", "Maintenance", "Troubleshooting"], outcomes: ["Install and maintain HVAC systems"], eligibility: "Mechanical background preferred.", modules: ["HVAC Fundamentals", "Installation", "Maintenance", "Troubleshooting", "Refrigerant Handling"], learningObjectives: ["Install HVAC", "Perform maintenance", "Troubleshoot problems", "Handle refrigerants"] },
            { name: "HiQual MEP (Mechanical, Electrical, Plumbing)", category: "HiQual", hours: "50-80 hours", content: ["MEP systems", "Building services", "Coordination"], outcomes: ["Coordinate MEP works"], eligibility: "Engineering background.", modules: ["MEP Overview", "Building Services", "Coordination", "Quality Control", "Installation Standards"], learningObjectives: ["Coordinate installations", "Understand services", "Apply techniques", "Ensure quality"] },
            { name: "HiQual Rigger Level 1–3", category: "HiQual", hours: "20-60 hours", content: ["Rigging techniques", "Sling types", "Load calculation"], outcomes: ["Perform rigging operations"], eligibility: "Construction and industrial workers.", modules: ["Rigging Fundamentals", "Sling Types", "Load Calculation", "Hand Signals", "Safe Practices"], learningObjectives: ["Select equipment", "Calculate loads", "Use signals", "Perform rigging"] },
            { name: "HiQual Lifting Supervisor", category: "HiQual", hours: "30-50 hours", content: ["Lift planning", "Crane operations", "Risk assessment"], outcomes: ["Supervise lifting operations"], eligibility: "Experienced riggers.", modules: ["Lift Planning", "Crane Operations", "Risk Assessment", "Supervisory Duties", "Emergency Procedures"], learningObjectives: ["Plan lifts", "Supervise cranes", "Conduct assessments", "Manage emergencies"] },
            { name: "HiQual Crane Operator Safety", category: "HiQual", hours: "30-50 hours", content: ["Crane operation", "Load charts", "Safety procedures"], outcomes: ["Operate cranes safely"], eligibility: "Crane operator candidates.", modules: ["Crane Types", "Load Charts", "Safe Operation", "Inspection", "Emergency Response"], learningObjectives: ["Operate cranes", "Read charts", "Perform inspections", "Respond to emergencies"] },
            { name: "HiQual Food Safety Level 1–3", category: "HiQual", hours: "8-24 hours", content: ["Food hygiene", "Contamination prevention", "Temperature control"], outcomes: ["Handle food safely"], eligibility: "Food industry workers.", modules: ["Hygiene", "Contamination", "Temperature", "Personal Hygiene", "Legal Requirements"], learningObjectives: ["Maintain hygiene", "Prevent contamination", "Control temperatures", "Follow legal standards"] },
            { name: "HiQual HACCP", category: "HiQual", hours: "16-24 hours", content: ["HACCP principles", "Critical control points", "Monitoring"], outcomes: ["Implement HACCP systems"], eligibility: "Food safety personnel.", modules: ["HACCP Principles", "Critical Points", "Monitoring", "Corrective Actions", "Verification"], learningObjectives: ["Apply HACCP", "Identify points", "Monitor safety", "Take corrective actions"] },
            { name: "HiQual Total Quality Management (TQM)", category: "HiQual", hours: "20-30 hours", content: ["Quality principles", "Continuous improvement", "Customer focus"], outcomes: ["Implement TQM systems"], eligibility: "Managers and quality professionals.", modules: ["TQM Principles", "Continuous Improvement", "Customer Focus", "Process Management", "Tools"], learningObjectives: ["Apply TQM", "Drive improvement", "Focus on customers", "Manage processes"] },
            { name: "HiQual Six Sigma (Yellow / Green Belt)", category: "HiQual", hours: "20-40 hours", content: ["DMAIC methodology", "Statistical analysis", "Process improvement"], outcomes: ["Lead Six Sigma projects"], eligibility: "Quality professionals.", modules: ["Six Sigma", "DMAIC", "Statistics", "Improvement Tools", "Project Management"], learningObjectives: ["Apply DMAIC", "Use statistics", "Lead projects", "Analyze data"] },
            { name: "HiQual Quality Control & Assurance", category: "HiQual", hours: "30-50 hours", content: ["QC methods", "Statistical process control", "Inspection"], outcomes: ["Implement QC systems"], eligibility: "Quality technicians and engineers.", modules: ["QC Methods", "SPC", "Inspection Techniques", "Documentation", "Corrective Actions"], learningObjectives: ["Apply QC methods", "Use SPC", "Perform inspections", "Maintain records"] },
            { name: "HiQual ISO 17025 – Laboratory Management", category: "HiQual", hours: "20-30 hours", content: ["Lab management", "Testing methods", "Equipment calibration"], outcomes: ["Implement ISO 17025"], eligibility: "Laboratory personnel.", modules: ["Lab Management", "Testing Methods", "Calibration", "Quality Assurance", "Proficiency Testing"], learningObjectives: ["Understand ISO 17025", "Manage labs", "Calibrate equipment", "Ensure quality"] },
            { name: "HiQual ISO 22000 – Food Safety", category: "HiQual", hours: "20-30 hours", content: ["Food safety management", "HACCP principles", "Traceability"], outcomes: ["Implement ISO 22000"], eligibility: "Food industry professionals.", modules: ["Food Safety Management", "HACCP Integration", "Prerequisite Programs", "Traceability", "Emergency"], learningObjectives: ["Apply ISO 22000", "Integrate HACCP", "Implement traceability", "Ensure food safety"] },
            { name: "HiQual ISO 31000 – Risk Management", category: "HiQual", hours: "16-24 hours", content: ["Risk principles", "Risk framework", "Risk process"], outcomes: ["Implement risk management"], eligibility: "Managers and risk professionals.", modules: ["Risk Principles", "Framework", "Assessment", "Treatment", "Integration"], learningObjectives: ["Understand principles", "Apply framework", "Conduct assessment", "Integrate risk"] },
            { name: "HiQual Instructor Development Course", category: "HiQual", hours: "20-30 hours", content: ["Instructional techniques", "Classroom management", "Adult learning"], outcomes: ["Become certified instructor"], eligibility: "Subject matter experts.", modules: ["Instructional Techniques", "Classroom Management", "Adult Learning", "Practical Teaching", "Feedback"], learningObjectives: ["Apply techniques", "Manage classrooms", "Understand adult learning", "Teach effectively"] }
        ];

        // ========== MISSING IOSH COURSES ==========
        const missingIoshCourses = [
            { name: "IOSH Leading Safely", category: "IOSH", hours: "1 day", content: ["Leadership matters", "Safety culture", "Legal framework", "Strategic management"], outcomes: ["Lead safety from top"], eligibility: "Senior executives, directors, business owners.", modules: ["Leadership", "Safety Culture", "Legal Framework", "Strategic Management"], learningObjectives: ["Demonstrate leadership", "Develop culture", "Understand legal duties", "Integrate safety"] },
            { name: "IOSH Safety for Executives & Directors", category: "IOSH", hours: "1 day", content: ["Corporate responsibility", "Due diligence", "Boardroom safety strategy"], outcomes: ["Fulfill director duties"], eligibility: "Company directors, board members.", modules: ["Corporate Responsibility", "Due Diligence", "Boardroom Strategy", "Director Legal Duties"], learningObjectives: ["Understand responsibilities", "Demonstrate due diligence", "Set safety strategy", "Ensure compliance"] },
            { name: "IOSH Fire Safety for Managers", category: "IOSH", hours: "2 days", content: ["Fire risk assessment", "Fire prevention", "Emergency planning"], outcomes: ["Manage fire safety"], eligibility: "Managers, safety officers, fire wardens.", modules: ["Fire Legislation", "Risk Assessment", "Prevention", "Emergency Planning", "Management Systems"], learningObjectives: ["Understand law", "Conduct assessments", "Implement prevention", "Manage emergencies"] },
            { name: "IOSH Environment for Managers", category: "IOSH", hours: "2 days", content: ["Environmental management", "Legal compliance", "Waste management"], outcomes: ["Manage environmental impacts"], eligibility: "Managers with environmental responsibilities.", modules: ["Environmental Management", "Legal Compliance", "Waste Management", "Carbon Reduction", "Monitoring"], learningObjectives: ["Understand law", "Manage waste", "Reduce carbon", "Monitor performance"] },
            { name: "IOSH Construction Safety", category: "IOSH", hours: "3 days", content: ["Construction site hazards", "CDM regulations", "Working at height"], outcomes: ["Manage construction safety"], eligibility: "Construction managers, site supervisors.", modules: ["Construction Hazards", "CDM Regulations", "Working at Height", "Site Management", "Risk Assessment"], learningObjectives: ["Identify hazards", "Apply CDM", "Manage height risks", "Implement controls"] },
            { name: "IOSH Occupational Health & Wellbeing", category: "IOSH", hours: "2 days", content: ["Health hazard identification", "Wellbeing programs", "Mental health"], outcomes: ["Manage occupational health"], eligibility: "HR professionals, safety officers.", modules: ["Health Hazards", "Wellbeing Programs", "Mental Health", "Health Monitoring", "Surveillance"], learningObjectives: ["Identify health hazards", "Develop wellbeing programs", "Support mental health", "Implement surveillance"] },
            { name: "IOSH Safety for Logistics & Transport", category: "IOSH", hours: "2 days", content: ["Fleet safety", "Warehouse hazards", "Driver safety"], outcomes: ["Manage logistics safety"], eligibility: "Logistics managers, transport supervisors.", modules: ["Fleet Safety", "Warehouse Hazards", "Driver Safety", "Loading Safety", "Risk Assessment"], learningObjectives: ["Manage fleet", "Control hazards", "Implement driver safety", "Ensure safe loading"] },
            { name: "IOSH Safety for Healthcare", category: "IOSH", hours: "2 days", content: ["Clinical safety", "Patient handling", "Infection control"], outcomes: ["Manage healthcare safety"], eligibility: "Healthcare managers, clinical leads.", modules: ["Clinical Safety", "Patient Handling", "Infection Control", "Risk Assessment", "Medication Safety"], learningObjectives: ["Manage clinical safety", "Implement safe handling", "Control infections", "Assess risks"] },
            { name: "IOSH Safety, Health & Environment for Business", category: "IOSH", hours: "5 days", content: ["Integrated SHE management", "Business case", "Strategic planning"], outcomes: ["Integrate SHE into business"], eligibility: "Senior managers, SHE professionals.", modules: ["SHE Management", "Business Case", "Strategic Planning", "Performance Measurement", "Continuous Improvement"], learningObjectives: ["Integrate safety", "Develop business cases", "Create strategies", "Measure performance"] },
            { name: "IOSH Incident Investigation", category: "IOSH", hours: "2 days", content: ["Investigation techniques", "Root cause analysis", "Evidence gathering"], outcomes: ["Conduct investigations"], eligibility: "Safety professionals, supervisors.", modules: ["Investigation Principles", "Root Cause Analysis", "Evidence Collection", "Interview Techniques", "Report Writing"], learningObjectives: ["Plan investigations", "Identify root causes", "Collect evidence", "Write reports"] },
            { name: "IOSH Risk Assessment", category: "IOSH", hours: "2 days", content: ["Risk assessment methods", "Hazard identification", "Control hierarchy"], outcomes: ["Conduct risk assessments"], eligibility: "Safety professionals, risk assessors.", modules: ["Risk Methods", "Hazard ID", "Control Hierarchy", "Risk Evaluation", "Monitoring"], learningObjectives: ["Apply methodologies", "Identify hazards", "Select controls", "Monitor effectiveness"] },
            { name: "IOSH Working Safely Refresher", category: "IOSH", hours: "Half day", content: ["Key safety principles", "New regulations", "Common hazards"], outcomes: ["Refresh safety knowledge"], eligibility: "Anyone who previously completed IOSH Working Safely.", modules: ["Safety Principles", "Regulation Updates", "Hazard Review", "Best Practices"], learningObjectives: ["Refresh understanding", "Learn new regulations", "Review hazards"] },
            { name: "IOSH Managing Safely Refresher", category: "IOSH", hours: "1 day", content: ["Key management principles", "Legal updates", "New best practices"], outcomes: ["Refresh management skills"], eligibility: "Managers who previously completed IOSH Managing Safely.", modules: ["Management Principles", "Legal Updates", "Best Practice Review", "Case Studies"], learningObjectives: ["Refresh skills", "Learn legal updates", "Apply new practices"] },
            { name: "IOSH Display Screen Equipment (DSE)", category: "IOSH", hours: "Half day", content: ["DSE regulations", "Workstation assessment", "Ergonomics"], outcomes: ["Conduct DSE assessments"], eligibility: "Office workers, managers, DSE assessors.", modules: ["DSE Regulations", "Workstation Assessment", "Ergonomics", "Eye Care"], learningObjectives: ["Understand regulations", "Conduct assessments", "Apply ergonomics"] },
            { name: "IOSH Stress Management", category: "IOSH", hours: "1 day", content: ["Work-related stress", "Stress risk assessment", "Support strategies"], outcomes: ["Manage workplace stress"], eligibility: "Managers, HR professionals.", modules: ["Understanding Stress", "Risk Assessment", "Support Strategies", "Legal Requirements"], learningObjectives: ["Recognize stress", "Conduct assessments", "Implement strategies"] },
            { name: "IOSH Manual Handling", category: "IOSH", hours: "1 day", content: ["Manual handling risks", "Safe lifting techniques", "Risk assessment"], outcomes: ["Reduce manual handling injuries"], eligibility: "All employees who perform manual handling.", modules: ["Manual Handling Risks", "Safe Lifting", "Risk Assessment", "Mechanical Aids"], learningObjectives: ["Identify risks", "Use safe techniques", "Assess tasks"] },
            { name: "IOSH Working at Height", category: "IOSH", hours: "1 day", content: ["Height hazards", "Fall protection", "Ladder safety"], outcomes: ["Work safely at height"], eligibility: "Workers who perform tasks at height.", modules: ["Height Hazards", "Fall Protection", "Ladder Safety", "Equipment Inspection"], learningObjectives: ["Identify hazards", "Use fall protection", "Work safely on ladders", "Inspect equipment"] },
            { name: "IOSH Asbestos Awareness", category: "IOSH", hours: "Half day", content: ["Asbestos risks", "Identification", "Legal requirements"], outcomes: ["Work safely around asbestos"], eligibility: "Construction, maintenance, facilities workers.", modules: ["Asbestos Risks", "Identification", "Legal Requirements", "Safe Procedures"], learningObjectives: ["Recognize risks", "Identify asbestos", "Follow safe procedures"] }
        ];

        // Count existing courses before import
        const beforeCount = await db.collection('courses').countDocuments();

        // Insert missing courses (skip if already exists)
        let insertedOthm = 0;
        let insertedHiqual = 0;
        let insertedIosh = 0;
        let skipped = 0;

        // Insert OTHM missing courses
        for (const course of missingOthmCourses) {
            const existing = await db.collection('courses').findOne({ name: course.name, category: 'OTHM' });
            if (!existing) {
                await db.collection('courses').insertOne({
                    ...course,
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
                insertedOthm++;
            } else {
                skipped++;
            }
        }

        // Insert HiQual missing courses
        for (const course of missingHiqualCourses) {
            const existing = await db.collection('courses').findOne({ name: course.name, category: 'HiQual' });
            if (!existing) {
                await db.collection('courses').insertOne({
                    ...course,
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
                insertedHiqual++;
            } else {
                skipped++;
            }
        }

        // Insert IOSH missing courses
        for (const course of missingIoshCourses) {
            const existing = await db.collection('courses').findOne({ name: course.name, category: 'IOSH' });
            if (!existing) {
                await db.collection('courses').insertOne({
                    ...course,
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
                insertedIosh++;
            } else {
                skipped++;
            }
        }

        const afterCount = await db.collection('courses').countDocuments();
        const totalInserted = insertedOthm + insertedHiqual + insertedIosh;

        return NextResponse.json({
            success: true,
            message: `Bulk import complete!`,
            beforeCount: beforeCount,
            afterCount: afterCount,
            inserted: {
                OTHM: insertedOthm,
                HiQual: insertedHiqual,
                IOSH: insertedIosh,
                total: totalInserted
            },
            skipped: skipped,
            breakdown: {
                OTHM_added: missingOthmCourses.length,
                HiQual_added: missingHiqualCourses.length,
                IOSH_added: missingIoshCourses.length
            }
        });

    } catch (error) {
        console.error('Bulk import error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}