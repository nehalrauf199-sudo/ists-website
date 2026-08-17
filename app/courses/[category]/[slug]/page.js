'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategoryById } from '../../data/courses';
import { FaArrowLeft, FaClipboardList, FaBook, FaGraduationCap, FaRocket } from 'react-icons/fa';
import React from 'react';

export default function CourseDetailPage({ params }) {
    // ✅ CORRECT: Unwrap the params Promise
    const { category, slug } = React.use(params);
    const categoryData = getCategoryById(category);

    if (!categoryData) {
        notFound();
    }

    const course = categoryData.courses.find(c => c.slug === slug);

    if (!course) {
        notFound();
    }

    // ... rest of your component remains the same
    // (The JSX you already have for displaying the course details)
}