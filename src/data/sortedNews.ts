import news from './news.json';

// ISO dates sort chronologically; preserve input order for entries in the same month.
export const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date));
