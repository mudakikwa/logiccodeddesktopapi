import Code from '../../../database/models/code';

module.exports = {
  UpdateCode: async (args) => {
    try {
      const {
        _id, title, description, code
      } = args.codeData;
      const existingCode = await Code.findOne({
        title,
        description,
        code,
      });
      if (existingCode) {
        throw new Error('This code already exist');
      } else {
        const updateCode = await Code.findOneAndUpdate(
          { _id },
          { title, description, code }
        );

        return { ...updateCode._doc, _id: updateCode.id };
      }
    } catch (err) {
      throw err;
    }
  },
};
