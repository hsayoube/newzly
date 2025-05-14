import { Menu, X } from 'lucide-react';
import { useSidebar } from '../context/SidebarContext';

const SidebarToggle = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      <Menu className="w-6 h-6" />
    </button>
  );
};

export default SidebarToggle;
