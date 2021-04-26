import adminResolver from './admin';

import userResolver from './user';

import signUpResolver from './auth/signup';
import loginResolver from './auth/login';

import addCodeResolver from './code/create';
import readCodeResolver from './code/read';
import updateCodeResolver from './code/update';

const Rootresolver = {
  ...userResolver,
  ...adminResolver,
  ...signUpResolver,
  ...loginResolver,
  ...addCodeResolver,
  ...readCodeResolver,
  ...updateCodeResolver,
};

module.exports = Rootresolver;
