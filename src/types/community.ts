export interface CommunityService {
  academicService: {
    executiveChair: string[];
    organizationChair: string[];
    publicationChair: string[];
    publicityChair: string[];
  };
  reviewService: {
    journals: string[];
    conferences: string[];
  };
}

