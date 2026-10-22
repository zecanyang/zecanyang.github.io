import React from 'react';
import { FileText, Github } from 'lucide-react';
import { Publication } from '../types';

interface PublicationListProps {
  publications: Publication[];
  filter?: string;
  groupByYear?: boolean;
}

const PublicationList: React.FC<PublicationListProps> = ({ publications, filter, groupByYear = true }) => {
  const filteredPublications = filter
    ? filter === 'featured'
      ? publications.filter(pub => pub.selected)
      : publications.filter(pub => pub.type === filter)
    : publications;

  const publicationsByYear = filteredPublications.reduce<Record<number, Publication[]>>((acc, pub) => {
    const year = pub.year;
    acc[year] ??= [];
    acc[year].push(pub);
    return acc;
  }, {});

  const years = Object.keys(publicationsByYear)
    .map((y) => Number(y))
    .sort((a, b) => b - a);

  const renderPub = (pub: Publication) => {
    const paperLink = typeof pub.paper === 'string' ? pub.paper.trim() : '';
    const codeLink = typeof pub.code === 'string' ? pub.code.trim() : '';

    return (
      <article key={pub.title} className="py-2 border-b border-gray-100">
        <h3 className="text-sm font-semibold text-gray-900 leading-snug">
          {paperLink ? (
            <a href={paperLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">{pub.title}</a>
          ) : pub.title}
        </h3>
        <p className="text-[13px] leading-snug text-gray-600 mt-0.5">
          {pub.authors.map((author, i) => (
            <span key={i} className={author.includes('Zecan Yang') || author.includes('杨泽灿') ? 'font-semibold text-gray-900 underline decoration-gray-400 underline-offset-2' : ''}>
              {author}{i < pub.authors.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 mt-0.5 text-[13px] leading-snug">
          <p className="text-gray-600 flex-1 min-w-0">
            {pub.venue}, {pub.year}
            {pub.tags && pub.tags.length > 0 && <span className="text-gray-500"> ({pub.tags.join(', ')})</span>}
          </p>
          {(paperLink || codeLink) && (
            <div className="flex shrink-0 items-center gap-2.5 text-xs">
              {codeLink && <a href={codeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:underline"><Github className="w-3.5 h-3.5" />Code</a>}
              {paperLink && <a href={paperLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:underline"><FileText className="w-3.5 h-3.5" />Paper</a>}
            </div>
          )}
        </div>
      </article>
    );
  };

  if (!groupByYear) return <div>{filteredPublications.map(renderPub)}</div>;

  return (
    <div className="space-y-4">
      {years.map((year) => (
        <section key={year}>
          <div className="flex items-center gap-3 mb-1.5">
            <h2 className="text-sm font-bold text-gray-900">{year}</h2>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
          <div className="space-y-0">
            {publicationsByYear[year].map(renderPub)}
          </div>
        </section>
      ))}
    </div>
  );
};

export default PublicationList;
