"use client"

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { APP_NAME } from '../config';
import SubscribeModal from './SubscribeModal';
import ThemeSwitcher from './ThemeSwitcher';
import SidebarToggle from './SidebarToggle';
import clsx from 'clsx';

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname()

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Sidebar button */}
          <div className="block md:hidden">
            <SidebarToggle />
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 text-2xl text-transparent bg-clip-text font-bold bg-gradient-to-br from-blue-500 to-indigo-800 hover:from-blue-900 hover:to-indigo-300 transition duration-700">
            <Link href="/">{APP_NAME}</Link>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6 text-gray-500 dark:text-gray-300 font-medium">
            <Link href="/" className={clsx(
              "hover:text-blue-600 dark:hover:text-blue-400 transition duration-100",
              pathname === "/" && "text-blue-600 dark:text-blue-400"
            )}>Home</Link>
            <Link href="/news" className={clsx(
              "hover:text-blue-600 dark:hover:text-blue-400 transition duration-100",
              pathname === "/news" && "text-blue-600 dark:text-blue-400"
            )}>News</Link>
            <Link href="/about" className={clsx(
              "hover:text-blue-600 dark:hover:text-blue-400 transition duration-100",
              pathname === "/about" && "text-blue-600 dark:text-blue-400"
            )}>About</Link>
          </div>

          <div className="flex justify-between items-center">
            <ThemeSwitcher />
            <div className="hidden md:block">
              <button className="bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-800 hover:to-indigo-400 transition duration-700 py-2 px-5 rounded-md hover:cursor-pointer">
                <span className="text-white px-4 py-2 rounded-md" onClick={() => setShowModal(true)}>
                  Subscribe
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
      <SubscribeModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </nav>
  );
}
