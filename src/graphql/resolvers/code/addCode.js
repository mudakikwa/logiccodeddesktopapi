import Code from '../../../database/models/code';

module.exports = {
  AddCode: async (args) => {
    try {
      const { title, description, code } = args.codeData;
      const existingCode = await Code.findOne({
        title, description, code
      });
      if (existingCode) {
        throw new Error('This code already exist');
      } else {
        const newCode = new Code({
          title,
          description,
          code,
        });

        const result = await newCode.save();
        return { ...result._doc, _id: result.id };
      }
    } catch (err) {
      throw err;
    }
  },
};
