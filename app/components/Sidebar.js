"use client"

import { useSidebar } from "../context/SidebarContext";
import { X } from "lucide-react";
import { APP_NAME } from "../config";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const Sidebar = () => {
    const { isOpen, closeSidebar } = useSidebar();
    const pathname = usePathname()

    return (
        <aside
            className={`fixed md:hidden top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            <div className="p-6 h-full flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between mb-8 w-full">
                        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-800 hover:from-blue-900 hover:to-indigo-300 transition duration-700">
                            {APP_NAME}
                        </h1>
                        <button
                            onClick={closeSidebar}
                            aria-label="Close sidebar"
                            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition"
                        >
                            <X size={30} />
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-4 text-gray-600 dark:text-gray-300 font-medium" onClick={closeSidebar}>
                        <Link
                            href="/"
                            className={clsx(
                                "transition-colors hover:text-blue-600 dark:hover:text-blue-400",
                                pathname === "/" && "text-blue-600 dark:text-blue-400 font-semibold"
                            )}
                        >
                            Home
                        </Link>
                        <Link
                            href="/news"
                            className={clsx(
                                "transition-colors hover:text-blue-600 dark:hover:text-blue-400",
                                pathname === "/news" && "text-blue-600 dark:text-blue-400 font-semibold"
                            )}
                        >
                            News
                        </Link>
                        <Link
                            href="/about"
                            className={clsx(
                                "transition-colors hover:text-blue-600 dark:hover:text-blue-400",
                                pathname === "/about" && "text-blue-600 dark:text-blue-400 font-semibold"
                            )}
                        >
                            About
                        </Link>
                    </nav>
                </div>
            </div>
        </aside>

    );
};

export default Sidebar;
