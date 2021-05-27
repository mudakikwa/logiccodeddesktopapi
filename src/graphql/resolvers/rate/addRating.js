import Rating from '../../../database/models/rate';

module.exports = {
  AddRating: async (args) => {
    try {
      const {
        rating,
        userId
      } = args.ratingData;
      const existingRating = await Rating.findOne({
        userId,
        rating
      });
      if (existingRating) {
        throw new Error('This Rating already exist');
      } else {
        const newRating = new Rating({
          userId,
          rating
        });

        const result = await newRating.save();
        return {
          ...result._doc,
          _id: result.id
        };
      }
    } catch (err) {
      throw err;
    }
  },
};
