import adminResolver from './admin';

import userResolver from './user';

const Rootresolver = {
  ...userResolver,
  ...adminResolver

};

module.exports = Rootresolver;
