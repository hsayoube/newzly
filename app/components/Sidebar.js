'use client';

import { useSidebar } from '../context/SidebarContext';
import { X } from 'lucide-react';
import { APP_NAME, CATEGORIES } from '../config';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const Sidebar = () => {
    const { isOpen, closeSidebar } = useSidebar();
    const pathname = usePathname();

    return (
        <aside
            className={clsx(
                'fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden',
                isOpen ? 'translate-x-0' : '-translate-x-full'
            )}
            aria-label="Mobile sidebar"
        >
            <div className="h-full flex flex-col p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-800 hover:from-blue-900 hover:to-indigo-300 transition duration-700">
                        {APP_NAME}
                    </h1>
                    <button
                        onClick={closeSidebar}
                        aria-label="Close sidebar"
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    >
                        <X size={28} />
                    </button>
                </div>

                {/* Divider */}
                <hr className="border-gray-200 dark:border-gray-700" />

                {/* Nav */}
                <nav className="flex-1 overflow-y-auto">
                    <ul className="space-y-4">
                        {CATEGORIES.map((category) => {
                            const isActive = pathname === `/${category}`;
                            return (
                                <li key={category}>
                                    <Link
                                        href={`/${category}`}
                                        className={clsx(
                                            'block px-3 py-2 rounded-md text-base font-medium capitalize transition-colors duration-150',
                                            isActive
                                                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                                                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                                        )}
                                        onClick={closeSidebar}
                                    >
                                        {category}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
