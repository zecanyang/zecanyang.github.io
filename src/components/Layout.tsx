import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 min-w-0 md:ml-56 lg:ml-64">
        <Navbar />
        <main className="px-4 pt-3 pb-8 sm:px-6 md:px-8 md:pt-4 md:pb-8 lg:px-10 lg:pt-5 lg:pb-10 max-w-6xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
