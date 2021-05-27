import FeedBack from '../../../database/models/feedback';

module.exports = {
  AddFeedBack: async (args) => {
    try {
      const { feedback , userId } = args.feedBackData;
      const existingFeedBack = await FeedBack.findOne({
        userId , feedback
      });
      if (existingFeedBack) {
        throw new Error('This FeedBack already exist');
      } else {
        const newFeedBack = new FeedBack({
          userId,
          feedback,
        });

        const result = await newFeedBack.save();
        return { ...result._doc, _id: result.id };
      }
    } catch (err) {
      throw err;
    }
  },
};
