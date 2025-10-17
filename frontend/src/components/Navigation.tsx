'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const navLinks = [
    { label: 'events' },
    { label: 'about' },
    { label: 'contact' },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-colors duration-300  ${
                scrolled ? 'bg-[#121212]/80 backdrop-blur-sm' : 'bg-transparent'
            }`}>
            <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
                <div className='text-2xl font-bold tracking-tight'>
                    eventure
                </div>
                <div className='flex gap-4'>
                    {navLinks.map((link) => (
                        <Link
                            href='#'
                            key={link.label}
                            className='text-gray-0 py-2 px-4 hover:text-gray-800 hover:bg-gray-200 rounded-sm transition-colors first-letter:uppercase'>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
