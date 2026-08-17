'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategoryById } from '../data/courses';
import SearchBar from '../../components/SearchBar';
import { useState } from 'react';
import React from 'react';

export default function CategoryPage({ params }) {
    // ✅ CORRECT: Unwrap the params Promise
    const { category } = React.use(params);
    const categoryData = getCategoryById(category);
    const [searchTerm, setSearchTerm] = useState('');

    if (!categoryData) {
        notFound();
    }

    // ... rest of your component remains the same
    // (The JSX you already have for displaying the category)
}