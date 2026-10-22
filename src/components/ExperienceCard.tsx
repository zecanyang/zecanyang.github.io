import React from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { Experience } from '../types';
import { formatMonth } from '../lib/dates';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const subInstitution = experience.description?.trim();

  return (
    <div className="flex gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition-all">
      <div className="flex-shrink-0">
        <div className={`p-2 rounded-lg ${experience.type === 'education' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
          {experience.type === 'education' ? <GraduationCap className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
          <h3 className="text-sm font-bold text-gray-900 leading-snug">{experience.title}</h3>
          <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-gray-500 whitespace-nowrap">
            <Calendar aria-hidden="true" className="w-3.5 h-3.5 shrink-0" />
            {formatMonth(experience.startDate)} – {formatMonth(experience.endDate)}
          </span>
        </div>
        <p className="text-xs text-gray-500 leading-snug mt-0.5">
          {experience.institution}{subInstitution && `, ${subInstitution}`}
        </p>
        <p className="text-xs text-gray-600 leading-snug mt-0.5">
          {[
            experience.supervisor ? `Supervisor: ${experience.supervisor}` : undefined,
            experience.location,
          ].filter(Boolean).join(' · ')}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
