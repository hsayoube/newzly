"use client"

import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(prev => !prev);
  const closeSidebar = () => setIsOpen(false);
  const openSidebar = () => setIsOpen(true);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar, closeSidebar, openSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
