import Ads from '../../../database/models/ads';

module.exports = {
  AllAds: async () => {
    try {
      const codeSearch = await Ads.find({}).sort({ _id: -1 }).limit(1);
      return codeSearch.map((data) => ({ ...data._doc }));
    } catch (error) {
      throw error;
    }
  },
};
