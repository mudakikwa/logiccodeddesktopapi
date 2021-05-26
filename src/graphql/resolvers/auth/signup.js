import { generate } from '../../../helpers/bcrypt';

import User from '../../../database/models/user';

module.exports = {
  SignUp: async (args) => {
    try {
      let hashedpassword = '';
      if (args.signUpData.password === args.signUpData.comfirmPassword) {
        hashedpassword = await generate(args.signUpData.password);
      } else {
        throw new Error("password don't match");
      }

      const existingUser = await User.findOne({
        username: args.signUpData.username,
      });
      if (existingUser) {
        throw new Error('User already exist');
      }
      const newUser = new User({
        fullname: args.signUpData.fullname,
        username: args.signUpData.username,
        email: args.signUpData.email,
        password: hashedpassword,
      });

      const result = await newUser.save();
      return { ...result._doc, _id: newUser.id, password: null };
    } catch (err) {
      throw err;
    }
  },
};
