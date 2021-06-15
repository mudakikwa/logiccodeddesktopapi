import Ads from '../../../database/models/ads';

module.exports = {
  AddAds: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error('User is not Autheticated');
      }
      const { link } = args.adsData;
      const existingAds = await Ads.findOne({
        link
      });
      if (existingAds) {
        throw new Error('This Ads already exist');
      } else {
        const newAds = new Ads({
          link
        });

        const result = await newAds.save();
        return { ...result._doc, _id: result.id };
      }
    } catch (err) {
      throw err;
    }
  },
};
