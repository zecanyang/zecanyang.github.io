import React from 'react';
import Layout from '../components/Layout';
import ExperienceCard from '../components/ExperienceCard';
import experienceData from '../data/experience.json';
import projectsData from '../data/projects.json';
import { Experience as ExperienceType, ResearchProject } from '../types';
import { Calendar, FolderKanban } from 'lucide-react';
import { formatMonth } from '../lib/dates';

const Experience: React.FC = () => {
  const experiences: ExperienceType[] = experienceData as ExperienceType[];
  const projects: ResearchProject[] = projectsData as ResearchProject[];
  
  const education = experiences.filter(e => e.type === 'education');
  const work = experiences.filter(e => e.type === 'work');

  const projectGroups: { key: ResearchProject['group']; label: string }[] = [
    { key: 'pi', label: 'Principal Investigator (PI)' },
    { key: 'key-member', label: 'Key Member' },
  ];

  // 项目始终显示完整起止日期，并按月份标注 Planned 或 Ongoing。
  const projectStatus = (start: string, end: string) => {
    const toMonth = (s: string) => {
      const [y, m] = s.split('.').map(Number);
      return y * 12 + (m - 1);
    };
    const today = new Date();
    const current = today.getFullYear() * 12 + today.getMonth();
    const startIndex = toMonth(start);
    const endIndex = toMonth(end);

    if (current < startIndex) return 'Planned';
    if (current > endIndex) return '';
    return 'Ongoing';
  };

  return (
    <Layout>
      <h1 className="page-title">Experience</h1>
      
      <section className="mb-8">
        <h2 className="section-title flex items-center">
          <span className="w-6 h-1 bg-blue-600 mr-2.5 rounded-full"></span>
          Professional Experience
        </h2>
        <div className="space-y-2">
          {work.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="section-title flex items-center">
          <span className="w-6 h-1 bg-blue-600 mr-2.5 rounded-full"></span>
          Education
        </h2>
        <div className="space-y-2">
          {education.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title flex items-center">
          <span className="w-6 h-1 bg-blue-600 mr-2.5 rounded-full"></span>
          Research Funding &amp; Projects
        </h2>
        <div className="space-y-4">
          {projectGroups.map(({ key, label }) => {
            const groupProjects = projects.filter(p => p.group === key);
            if (groupProjects.length === 0) return null;
            // PI 项目按开始时间倒序；无起始时间的排在最后
            if (key === 'pi') {
              groupProjects.sort((a, b) => (b.startDate ?? '').localeCompare(a.startDate ?? ''));
            }
            return (
              <div key={key}>
                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{label}</h3>
                <div className="space-y-2">
                  {groupProjects.map((project, index) => (
                    <div
                      key={index}
                      className="flex gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition-all"
                    >
                      <div className="flex-shrink-0">
                        <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                          <FolderKanban className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 gap-y-2">
                        <div className="min-w-0">
                          <h4 lang="zh-CN" className="text-sm font-bold text-gray-900 leading-snug">{project.titleCn}</h4>
                          <p className="text-xs text-gray-500 leading-snug mt-0.5">{project.title}</p>
                          <p className="text-xs text-gray-600 leading-snug mt-0.5">
                            {[
                              project.sponsorCn || project.sponsor,
                              project.grantNo,
                              project.amount,
                            ].filter(Boolean).join(' · ')}
                          </p>
                        </div>
                        {project.startDate && project.endDate && (
                          <div className="justify-self-end text-right text-xs text-gray-500">
                            <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                              <Calendar aria-hidden="true" className="w-3.5 h-3.5 shrink-0" />
                              {formatMonth(project.startDate)} – {formatMonth(project.endDate)}
                            </span>
                            {projectStatus(project.startDate, project.endDate) && <p className="mt-0.5">({projectStatus(project.startDate, project.endDate)})</p>}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
