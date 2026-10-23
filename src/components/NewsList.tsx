import React from 'react';

interface NewsListProps {
  items: { date: string; content: string }[];
}

const NewsList: React.FC<NewsListProps> = ({ items }) => (
  <ul className="divide-y divide-gray-100">
    {items.map((item, index) => (
      <li key={`${item.date}-${index}`} className="flex gap-3 py-1.5">
        <time dateTime={item.date} className="shrink-0 w-16 text-xs font-medium text-gray-500 pt-0.5">{item.date}</time>
        <p className="text-[13px] leading-snug text-gray-700">{item.content}</p>
      </li>
    ))}
  </ul>
);

export default NewsList;
