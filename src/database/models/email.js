import mongoose from 'mongoose';

const EmailSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Email', EmailSchema);
