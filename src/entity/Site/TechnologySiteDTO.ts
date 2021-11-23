import { getModelForClass, Prop } from '@typegoose/typegoose';
import BasicSiteDTO from './BasicSiteDTO';

export class TechnologySiteDTO extends BasicSiteDTO {
  @Prop()
  siteType: 'technology';
}

export const TechnologyModel = getModelForClass(TechnologySiteDTO, {
  schemaOptions: {
    timestamps: {
      createdAt: 'submitDate',
      updatedAt: 'gmtModified',
    },
    versionKey: 'version',
    static: {
      getRandomDocs: function (itemCount) {
        return new Promise((resolve) => {
          resolve(
            //@ts-ignore
            this.aggregate([
              {
                $sample: { size: 12 },
              },
              {
                $group: {
                  _id: '$_id',
                  document: {
                    $push: {
                      _id: '$_id',
                      siteDesc: '$siteDesc',
                      siteName: '$siteName',
                      siteType: '$siteType',
                      siteLink: '$siteLink',
                      siteIcon: '$siteIcon',
                      submitDate: '$submitDate',
                      siteVerify: '$siteVerify',
                      userId: '$userId',
                      rss: '$rss',
                      hot: '$hot',
                      siteImgs: '$siteImgs',
                    },
                  },
                },
              },
              {
                $limit: itemCount,
              },
              {
                $unwind: '$document',
              },
            ]),
          );
        });
      },
    },
  },
  options: {
    customName: 'technologysites',
  },
});
