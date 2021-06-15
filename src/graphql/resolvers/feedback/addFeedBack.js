import FeedBack from '../../../database/models/feedback';

module.exports = {
  AddFeedBack: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error('User is not Autheticated');
      }
      const { feedback, userId } = args.feedBackData;
      const existingFeedBack = await FeedBack.findOne({
        userId, feedback
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
