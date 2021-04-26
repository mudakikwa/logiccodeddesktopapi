import Code from "../../../database/models/code";

module.exports = {
  AllCode: async () => {
    try {
      const codeSearch = await Code.find({});
      return codeSearch.map((data) => ({ ...data._doc }));
    } catch (error) {
      throw error;
    }
  },
};
