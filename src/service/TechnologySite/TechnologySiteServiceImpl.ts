import { TechnologySiteDTO } from '@/entity/Site/TechnologySiteDTO';

export interface TechnologySiteImpl {
  getRandomDocs?: (count?: number) => Promise<Partial<TechnologySiteDTO>[]>;
}
