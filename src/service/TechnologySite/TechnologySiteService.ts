import { TechnologySiteDTO, TechnologyModel } from '@/entity/Site';
import { Provide } from '@midwayjs/decorator';
import { TechnologySiteImpl } from './';

@Provide('TechnologyService')
export class TechnologyService implements TechnologySiteImpl {
  instance: TechnologySiteDTO = TechnologyModel;

  public async getRandomDocs(count: number): Promise<Partial<TechnologySiteDTO>[]> {
    // const instance = TechnologySiteDTO;
    // this.instance.
    return [];
  }
}
