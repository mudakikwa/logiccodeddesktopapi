import mongoose from 'mongoose';

const CodeSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('FeedBack', CodeSchema);