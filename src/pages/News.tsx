import React from 'react';
import Layout from '../components/Layout';
import NewsList from '../components/NewsList';
import { sortedNews } from '../data/sortedNews';

const years = [...new Set(sortedNews.map(item => item.date.slice(0, 4)))];

const News: React.FC = () => (
  <Layout>
    <header className="mb-5 border-b border-gray-200 pb-3">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">News</h1>
      <p className="mt-2 text-xs text-gray-500">Research updates and professional milestones.</p>
    </header>
    {years.map(year => (
      <section key={year} className="mb-6" aria-labelledby={`news-${year}`}>
        <h2 id={`news-${year}`} className="text-xl font-bold text-gray-900 mb-2">{year}</h2>
        <NewsList items={sortedNews.filter(item => item.date.startsWith(year))} />
      </section>
    ))}
  </Layout>
);

export default News;
