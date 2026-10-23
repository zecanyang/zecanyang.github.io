export interface PersonalInfo {
  name: string;
  nameCn: string;
  position: string;
  institution: string;
  location: string;
  email: string;
  googleScholar: string;
  github: string;
  linkedin: string;
  avatar: string;
  bio: string;
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'preprint' | 'conference' | 'journal';
  arxiv?: string;
  code?: string;
  paper?: string;
  highlight?: boolean;
  selected?: boolean;
  selectedOrder?: number;
  summary?: string;
  topics?: string[];
  note?: string;
  tags?: string[];
  category?: 'first-author' | 'corresponding-author' | 'co-author';
}

export interface NewsItem {
  date: string;
  content: string;
  category: 'paper' | 'position' | 'award' | 'talk';
}

export interface Experience {
  supervisor?: string;
  type: 'education' | 'work';
  title: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface ResearchProject {
  group: 'pi' | 'key-member';
  grantNo?: string;
  title: string;
  titleCn: string;
  sponsor: string;
  sponsorCn?: string;
  startDate?: string;
  endDate?: string;
  role: string;
  roleCn?: string;
  amount: string;
  amountCn?: string;
}

export interface ResearchInterest {
  title: string;
  description: string;
  priority: number;
}
