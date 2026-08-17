// app/courses/data/courses.js
// MINIMAL WORKING VERSION

import { FaShieldAlt, FaHardHat, FaTools } from 'react-icons/fa';

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
                entryRequirements: 'No prior experience required',
                studyUnits: ['Unit 1: Managing Safely', 'Unit 2: Risk Assessment', 'Unit 3: Controlling Risks'],
                learningOutcomes: ['Understand safety responsibilities', 'Conduct risk assessments', 'Identify hazards'],
                futureProgression: 'Progression to NEBOSH or Safety Manager'
            }
        ]
    },
    {
        id: 'energy-management',
        name: 'Energy Management',
        icon: FaHardHat,
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
    {
        id: 'quality-control',
        name: 'Quality Control',
        icon: FaTools,
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