import { check } from '../../../helpers/bcrypt';

import User from '../../../database/models/user';

module.exports = {
  Login: async (args) => {
    try {
      const { email, password } = args.loginData;
      const existingUser = await User.findOne({
        email
      });
      if (existingUser) {
        if (check(existingUser.password, password)) {
          return {
            ...existingUser._doc,
            _id: existingUser.id,
            password: null,
          };
        }

        throw new Error('You entered incorrect email or password.');
      } else {
        throw new Error("user don't exist");
      }
    } catch (err) {
      throw err;
    }
  },
};
