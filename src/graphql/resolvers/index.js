import adminResolver from './admin';

import userResolver from './user';

import signUpResolver from './auth/signup';
import loginResolver from './auth/login';

import addCodeResolver from './code/create';
import readCodeResolver from './code/read';
import updateCodeResolver from './code/update';
import deleteCodeResolver from './code/delete';

import addFeedBackResolver from './feedback/addFeedBack';

import addRatingResolver from './rate/addRating';

import addAds from './ads/index';
import allAds from './ads/allAds';

const Rootresolver = {
  ...userResolver,
  ...adminResolver,
  ...signUpResolver,
  ...loginResolver,
  ...addCodeResolver,
  ...readCodeResolver,
  ...updateCodeResolver,
  ...deleteCodeResolver,
  ...addFeedBackResolver,
  ...addRatingResolver,
  ...addAds,
  ...allAds
};

module.exports = Rootresolver;
