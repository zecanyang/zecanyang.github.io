import Layout from '../components/Layout';
import { ExternalLink } from 'lucide-react';

const awards = [
  { title: 'IEEE TCSC Outstanding PhD Dissertation Award', organization: 'IEEE Technical Committee on Scalable Computing (TCSC)', year: 2025, link: 'https://www.ieee-tcsc.org/thesis.php' },
  { title: 'Outstanding Graduate Student Award', organization: 'Huazhong University of Science and Technology', year: 2025 },
  { title: 'Merit Graduate Student Award', organization: 'Huazhong University of Science and Technology', year: 2023 },
  { title: 'Outstanding Social Activities Award', organization: 'Huazhong University of Science and Technology', year: 2023 },
  { title: 'First Prize', organization: 'Baidu Netdisk AI Competition: Image Processing Challenge — Handwritten Text Erasure in General Scenarios', year: 2022, link: 'https://aistudio.baidu.com/competition/detail/347/0/leaderboard' },
];

export default function Honors() {
  return (
    <Layout>
      <h1 className="page-title">Honors &amp; Awards</h1>
      <ol className="divide-y divide-gray-200">
        {awards.map(award => (
          <li key={award.title} className="py-4 first:pt-0">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="text-base font-semibold text-gray-900">{award.title}{award.link && <a href={award.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 ml-2 text-sm font-normal text-blue-600 hover:underline whitespace-nowrap" aria-label={`More information about ${award.title}`}><ExternalLink className="w-3.5 h-3.5" />Link</a>}</h2>
              <span className="shrink-0 text-sm text-gray-500">{award.year}</span>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">{award.organization}</p>

          </li>
        ))}
      </ol>
    </Layout>
  );
}
