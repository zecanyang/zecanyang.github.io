import React from 'react';
import { NewsItem } from '../types';

interface NewsTimelineProps {
  news: NewsItem[];
}

const NewsTimeline: React.FC<NewsTimelineProps> = ({ news }) => {
  return (
    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
      {news.map((item, index) => (
        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* Dot */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
          {/* Content */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-gray-900">{item.date}</div>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                item.category === 'paper' ? 'bg-green-100 text-green-700' :
                item.category === 'award' ? 'bg-yellow-100 text-yellow-700' :
                item.category === 'talk' ? 'bg-purple-100 text-purple-700' :
                'bg-blue-100 text-blue-700'
              }`}>
                {item.category}
              </span>
            </div>
            <div className="text-gray-600 text-sm leading-relaxed">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsTimeline;
