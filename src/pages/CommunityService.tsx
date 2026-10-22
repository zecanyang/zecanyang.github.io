import React from 'react';
import communityData from '../data/community.json';
import LayoutComponent from '../components/Layout';
import type { CommunityService } from '../types/community';



const CommunityServicePage: React.FC = () => {
  const community: CommunityService = communityData as CommunityService;

  return (
    <LayoutComponent>
      <h1 className="page-title !mb-4 !pb-3">Academic Service</h1>

      <section className="mb-5">
        <h2 className="section-title flex items-center !text-lg !mb-2">
          <span className="w-6 h-1 bg-blue-600 mr-2.5 rounded-full"></span>
          Conference Organization
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {[
            { title: 'Executive Chair', items: community.academicService.executiveChair },
            { title: 'Organization Committee Chair', items: community.academicService.organizationChair },
            { title: 'Publication Chair', items: community.academicService.publicationChair },
            { title: 'Publicity Chair', items: community.academicService.publicityChair },
          ].map(({ title, items }) => (
            <div key={title} className="p-3 bg-white rounded-lg border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{title}</h3>
              <ul className="space-y-1 text-[13px] leading-snug text-gray-700">
                {items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gray-400">※</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title flex items-center !text-lg !mb-2">
          <span className="w-6 h-1 bg-blue-600 mr-2.5 rounded-full"></span>
          Review Service
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="p-3 bg-white rounded-lg border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-1.5">Journal Reviewing</h3>
            <ul className="space-y-1 text-[13px] leading-snug text-gray-700">
              {community.reviewService.journals.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gray-400">※</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 bg-white rounded-lg border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-1.5">Conference Reviewing</h3>
            <ul className="space-y-1 text-[13px] leading-snug text-gray-700">
              {community.reviewService.conferences.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gray-400">※</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default CommunityServicePage;
