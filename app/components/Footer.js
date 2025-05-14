import { FaGithub } from 'react-icons/fa';
import { APP_NAME } from '../config';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-600">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 text-center">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-4 text-gray-400">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaGithub size={20} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
