import adminResolver from './admin';

import userResolver from './user';

import signUpResolver from './auth/signup';
import loginResolver from './auth/login';

import addCodeResolver from './code/addCode';

const Rootresolver = {
  ...userResolver,
  ...adminResolver,
  ...signUpResolver,
  ...loginResolver,
  ...addCodeResolver,
};

module.exports = Rootresolver;
