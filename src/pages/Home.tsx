import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import Layout from '../components/Layout';
import PublicationList from '../components/PublicationList';
import personal from '../data/personal.json';
import interests from '../data/research.json';
import news from '../data/news.json';
import publicationsData from '../data/publications.json';
import { Publication } from '../types';

const selected = (publicationsData as Publication[]).filter(pub => pub.selected).sort((a, b) => (a.selectedOrder ?? 0) - (b.selectedOrder ?? 0));
const Home: React.FC = () => (
  <Layout>
    <section className="mb-8 max-w-4xl">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">About Me</h1>
      <div className="max-w-3xl space-y-3 text-base leading-relaxed text-gray-700">
        {personal.bio.split('\n\n').map((paragraph, index) => (
          <p key={index}>
            {paragraph.split(/(\*\*[^*]+\*\*)/g).map((part, partIndex) =>
              part.startsWith('**') && part.endsWith('**')
                ? <strong key={partIndex} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>
                : part
            )}
          </p>
        ))}
      </div>
    </section>

    <section className="mb-8" aria-labelledby="research-title">
      <h2 id="research-title" className="text-2xl font-bold text-gray-900 mb-3">Research Overview</h2>
      <figure className="mb-4 w-full sm:w-[60%] mr-auto">
        <a href="/research-vision-web-q99.webp" target="_blank" rel="noopener noreferrer" aria-label="Open the research overview image at full size" className="block rounded-xl overflow-hidden border border-slate-200 focus-visible:outline-blue-600">
          <img src="/research-vision-web-q99.webp" alt="Research vision: robust, interpretable, and efficient learning through structured representation, probabilistic reasoning, and adaptive learning, empowering CPSS intelligence in computer vision, intelligent transportation, smart healthcare, and IoT networks." width="1672" height="941" className="block w-full h-auto" decoding="async" />
        </a>
      </figure>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {[...interests].sort((a, b) => a.priority - b.priority).map(interest => (
          <article key={interest.title} className="px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-100">
            <h3 className="text-sm font-semibold text-gray-900 leading-snug">{interest.title}</h3>
            <p className="text-xs text-gray-600 leading-snug mt-1">{interest.description}</p>
          </article>
        ))}
      </div>

    </section>

    <section className="mb-8" aria-labelledby="news-title">
      <h2 id="news-title" className="text-2xl font-bold text-gray-900 mb-3">Latest News</h2>
      <div className="divide-y divide-gray-100">
        {news.map((item, index) => (
          <div key={index} className="flex gap-3 py-1.5">
            <time dateTime={item.date} className="shrink-0 w-16 text-xs font-medium text-gray-500 pt-0.5">{item.date}</time>
            <p className="text-[13px] leading-snug text-gray-700">{item.content}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="mb-8" aria-labelledby="selected-title">
      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
        <h2 id="selected-title" className="text-2xl font-bold text-gray-900">Selected Publications</h2>
        <Link to="/publications" className="inline-flex items-center gap-1 text-sm font-medium text-blue-700">All publications <ArrowUpRight className="w-4 h-4" /></Link>
      </div>
      <p className="text-xs text-gray-500 mb-2">* denotes co-first author; † denotes corresponding author.</p>
      <PublicationList publications={selected} groupByYear={false} />
    </section>

    <section className="border-t border-gray-200 pt-5 mb-8" aria-labelledby="collaboration-title">
      <h2 id="collaboration-title" className="text-lg font-semibold text-gray-900 mb-2">Research &amp; Collaboration</h2>
      <p className="text-sm leading-relaxed text-gray-700 max-w-3xl">I welcome conversations with students and researchers who share an interest in Bayesian learning, tensor methods, robust and efficient machine learning, and privacy-preserving learning. Please feel free to get in touch to exchange ideas and explore opportunities for collaboration.</p>
      <a href={`mailto:${personal.email}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700"><Mail className="w-4 h-4" />{personal.email}</a>
    </section>
    <footer className="pt-6 border-t border-gray-200 text-sm text-gray-500">© {new Date().getFullYear()} {personal.name} · Zhengzhou University</footer>
  </Layout>
);
export default Home;
