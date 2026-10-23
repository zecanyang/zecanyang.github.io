import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const navItems: { name: string; shortName?: string; path: string }[] = [
    { name: 'Home', path: '/' },
    { name: 'Publications', path: '/publications' },
    { name: 'Experience', path: '/experience' },
    { name: 'Academic Service', shortName: 'Service', path: '/community-service' },
    { name: 'Honors & Awards', shortName: 'Awards', path: '/honors' },
    { name: 'News', path: '/news' },
  ];

  return (
    <nav aria-label="Main navigation" className="sticky top-14 md:top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 mb-2 py-2">
      <ul className="flex justify-start gap-3 sm:gap-5 md:gap-6 px-3 sm:px-4 max-w-6xl mx-auto flex-wrap whitespace-nowrap [-webkit-overflow-scrolling:touch]">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path}>
              <Link
                to={item.path}
                aria-current={isActive ? 'page' : undefined}
                className={`inline-block py-1 text-xs sm:text-sm lg:text-base font-semibold tracking-wide transition-all hover:text-blue-600 ${
                  isActive ? 'text-blue-600' : 'text-gray-500'
                }`}
              >
                {item.shortName ? (
                  <>
                    <span className="sm:hidden">{item.shortName}</span>
                    <span className="hidden sm:inline">{item.name}</span>
                  </>
                ) : (
                  item.name
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
