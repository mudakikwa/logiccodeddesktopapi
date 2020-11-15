import { generate } from '../../helpers/bcrypt';

import User from '../../database/models/user';

module.exports = {

  CreateUser: async (args) => {
    try {
      const existingUser = await User.findOne({ username: args.userinput.username });
      if (existingUser) {
        throw new Error('user already exist');
      }
    } catch (err) {
      throw err;
    }
    const hashedpassword = await generate(args.userinput.password);
    try {
      const newuser = new User({

        firstname: args.userinput.firstname,
        lastname: args.userinput.lastname,
        username: args.userinput.username,
        password: hashedpassword
      });

      const result = await newuser.save();
      return { ...result._doc, _id: newuser.id, password: null };
    } catch (err) {
      throw err;
    }
  }
};
