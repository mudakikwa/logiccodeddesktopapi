import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({

  firstname: {
    type: String,
    required: true
  },

  lastname: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('User', UserSchema);
