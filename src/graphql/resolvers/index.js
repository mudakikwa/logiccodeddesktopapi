import adminResolver from './admin';

import userResolver from './user';

import signUpResolver from './auth/signup';

const Rootresolver = {
  ...userResolver,
  ...adminResolver,
  ...signUpResolver,
};

module.exports = Rootresolver;
