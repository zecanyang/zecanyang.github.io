import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, GraduationCap, MapPin, Menu, X, FileText } from 'lucide-react';
import personalData from '../data/personal.json';
import { PersonalInfo } from '../types';

const Sidebar: React.FC = () => {
  const personal: PersonalInfo = personalData;
  const [open, setOpen] = useState(false);

  // 抽屉展开时锁定页面滚动
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const profile = (
    <>
      <div className="mb-6 lg:mb-9 flex flex-col items-center w-full">
        <img
          src={personal.avatar}
          alt={personal.name}
          className="w-28 h-36 lg:w-36 lg:h-44 rounded-[50%] object-cover mb-3 border-4 border-gray-100 shadow-sm"
        />
        <p className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-5 text-center">
          {personal.name}
          <span className="text-gray-500 font-medium"> / {personal.nameCn}</span>
        </p>
        <p className="text-sm lg:text-base text-gray-600 mb-2.5 flex items-center w-full text-left">
          <GraduationCap className="w-4 h-4 mr-2 flex-shrink-0" />
          {personal.position}
        </p>
        <div className="w-full text-left text-sm lg:text-base text-gray-600 space-y-1.5">
          <p className="pl-6 leading-snug">{personal.institution}</p>
          <p className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            {personal.location}
          </p>
        </div>
      </div>

      <div className="w-full border-t border-gray-100 pt-5 lg:pt-7">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 lg:mb-5">Contact</h3>
        <ul className="space-y-4">
          <li>
            <a href={`mailto:${personal.email}`} className="flex items-center text-sm lg:text-base text-gray-600 hover:text-blue-600 transition-colors">
              <Mail className="w-5 h-5 mr-3" />
              <span>Email</span>
            </a>
          </li>
          <li>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm lg:text-base text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="w-5 h-5 mr-3" />
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a href={personal.googleScholar} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm lg:text-base text-gray-600 hover:text-blue-600 transition-colors">
              <GraduationCap className="w-5 h-5 mr-3" />
              <span>Google Scholar</span>
            </a>
          </li>
          <li>
            <span role="link" aria-disabled="true" title="CV will be available soon" className="flex items-center text-sm lg:text-base text-gray-400 cursor-default">
              <FileText className="w-5 h-5 mr-3" />
              <span>CV <span className="text-xs">(Coming soon)</span></span>
            </span>
          </li>
          {personal.linkedin && <li>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm lg:text-base text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5 mr-3" />
              <span>LinkedIn</span>
            </a>
          </li>}
        </ul>
      </div>
    </>
  );

  return (
    <>
      {/* 移动端顶部栏 */}
      <header className="md:hidden sticky top-0 z-50 h-14 flex items-center justify-between gap-3 px-4 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <Link to="/" className="flex items-center gap-2.5 min-w-0">
          <img
            src={personal.avatar}
            alt={personal.name}
            className="w-9 h-9 rounded-full object-cover border border-gray-100 flex-shrink-0"
          />
          <span className="text-sm font-semibold text-gray-900 truncate">
            {personal.name}
            <span className="text-gray-500 font-medium"> / {personal.nameCn}</span>
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open profile menu"
          aria-expanded={open}
          aria-controls="profile-drawer"
          className="p-1.5 -mr-1.5 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* 移动端抽屉 */}
      <div aria-hidden={!open} hidden={!open} className={`md:hidden fixed inset-0 z-[60] ${open ? '' : 'pointer-events-none'}`}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${open ? 'opacity-100' : 'opacity-0'}`}
        />
        <aside id="profile-drawer"
          className={`absolute left-0 top-0 h-full w-72 max-w-[85vw] bg-white p-6 overflow-y-auto shadow-xl transition-transform duration-200 ${open ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close profile menu"
            className="absolute right-4 top-4 p-1.5 text-gray-500 hover:text-blue-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="mt-8">{profile}</div>
        </aside>
      </div>

      {/* 平板 / 桌面固定侧栏 */}
      <aside className="hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:w-56 lg:w-64 bg-white border-r border-gray-200 p-5 lg:p-7 items-center overflow-y-auto">
        {profile}
      </aside>
    </>
  );
};

export default Sidebar;
