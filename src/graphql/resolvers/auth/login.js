import jwt from 'jsonwebtoken';
import { check } from '../../../helpers/bcrypt';

import User from '../../../database/models/user';

import config from '../../../config';

module.exports = {
  Login: async (args) => {
    try {
      const { email, password } = args.loginData;
      const existingUser = await User.findOne({
        email
      });
      if (existingUser) {
        if (check(existingUser.password, password)) {
          const token = jwt.sign({ userId: existingUser.id, email: existingUser.email }, `${config.SECRET_KEY}`, { expiresIn: '1h' });
          return {
            ...existingUser._doc,
            _id: existingUser.id,
            password: null,
            token,
            tokenExpiration: 1
          };
        }

        throw new Error('You entered incorrect email or password.');
      } else {
        throw new Error("user don't exist");
      }
    } catch (err) {
      throw err;
    }
  }
};
