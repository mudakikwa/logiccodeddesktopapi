import { generate } from '../../helpers/bcrypt';

import User from '../../database/models/user';

module.exports = {

  CreateUser: async (args) => {
    try {
      const hashedpassword = await generate(args.userInput.password);
      const existingUser = await User.findOne({ username: args.userInput.username });
      if (existingUser) {
        throw new Error('User already exist');
      }
      const newUser = new User({

        firstname: args.userInput.firstname,
        lastname: args.userInput.lastname,
        username: args.userInput.username,
        password: hashedpassword
      });

      const result = await newUser.save();
      return { ...result._doc, _id: newUser.id, password: null };
    } catch (err) {
      throw err;
    }
  }
};
