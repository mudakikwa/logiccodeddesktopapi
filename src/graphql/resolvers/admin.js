/* eslint-disable no-console */
import { sign } from '../../helpers/jwt';
import config from '../../config';

module.exports = {

  AdminLogin: async (args) => {
    try {
      const { username, password } = args.adminInput;
      if (username !== config.Admin_Username || password !== config.Admin_Password) {
        throw new Error('Invalid credentials');
      }
      const token = sign({ role: 'Admin', username: config.Admin_Username });
      return { role: 'Admin', Admin_Username: config.Admin_Username, token };
    } catch (err) {
      throw err;
    }
  }
};
