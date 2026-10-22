import React, { useState } from 'react';
import Layout from '../components/Layout';
import PublicationList from '../components/PublicationList';
import publicationsData from '../data/publications.json';
import { Publication } from '../types';

const Publications: React.FC = () => {
  const publications: Publication[] = publicationsData as Publication[];
  const [topic, setTopic] = useState('All topics');
  const [primaryAuthorOnly, setPrimaryAuthorOnly] = useState(false);
  const [filter, setFilter] = useState<string>('all');
  const topics = ['All topics', 'Bayesian & Probabilistic Learning', 'Tensor Methods', 'Computer Vision & Multimodal Learning', 'Spatio-Temporal & Network Data Analysis', 'Federated Learning & Privacy-Preserving'];
  const visiblePublications = publications.filter(pub =>
    (topic === 'All topics' || pub.topics?.includes(topic)) &&
    (!primaryAuthorOnly || pub.category === 'first-author' || pub.category === 'corresponding-author') &&
    (filter === 'all' || pub.type === filter)
  );

  const types = ['all', 'journal', 'conference', 'preprint'];

  const filterLabel: Record<string, string> = {
    all: 'All',
    journal: 'Journal',
    conference: 'Conference',
    preprint: 'Preprint',
  };

  return (
    <Layout>
      <header className="mb-3 border-b border-gray-200 pb-3">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 lg:gap-6">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 shrink-0">Publications</h1>
          <div className="flex flex-col gap-2 min-w-0 lg:items-end">
            <div className="flex flex-wrap gap-1.5" aria-label="Publication type">
              {types.map(type => (
                <button key={type} onClick={() => setFilter(type)} aria-pressed={filter === type}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${filter === type ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  {filterLabel[type]}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 min-w-0">
              <label htmlFor="publication-topic" className="sr-only">Research topic</label>
              <select id="publication-topic" value={topic} onChange={event => setTopic(event.target.value)} className="border border-gray-300 rounded-md px-2 py-1 text-xs bg-white w-full sm:w-64 min-w-0 max-w-full">
                {topics.map(item => <option key={item}>{item}</option>)}
              </select>
              <label className="flex items-center gap-1.5 text-xs text-gray-700 cursor-pointer">
                <input type="checkbox" checked={primaryAuthorOnly} onChange={event => setPrimaryAuthorOnly(event.target.checked)} className="w-3.5 h-3.5 accent-blue-600" />
                First / Corresponding Author
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1 mt-3 text-xs text-gray-500">
          <p>* denotes co-first author, † denotes corresponding author.</p>
          <p role="status" aria-live="polite">Showing {visiblePublications.length} of {publications.length} publications</p>
        </div>
      </header>
      {visiblePublications.length === 0 && <p className="py-8 text-gray-600" role="status">No publications match these filters.</p>}
      <PublicationList 
        publications={visiblePublications} 
      />
    </Layout>
  );
};

export default Publications;
