import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { APP_NAME } from '../config';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 text-center">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-4 text-gray-400 dark:text-gray-500">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 dark:hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Optional Tagline */}
        <p className="flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm mb-2">
          Made with{' '}
          <Heart
            size={20}
            className="mx-1 text-red-600"
            fill="currentColor"  // this fills the icon with the current text color (red here)
            stroke="none"        // remove the stroke for a clean fill
          />{' '}
          by the {APP_NAME} team.
        </p>

        {/* Footer Text */}
        <p className="text-gray-400 dark:text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
