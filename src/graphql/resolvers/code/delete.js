import Code from '../../../database/models/code';

module.exports = {
  DeleteCode: async (args) => {
    try {
      const { _id } = args.codeData;
      const deleteCode = await Code.findOneAndDelete({
        _id
      });
      if (deleteCode) {
        return { _id, message: 'the code have beeenn deleted successfully' };
      }
      throw new Error(" code don't exist");
    } catch (err) {
      throw err;
    }
  },
};
