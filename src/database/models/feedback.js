import mongoose from 'mongoose';

const CodeSchema = mongoose.Schema({
  feedback: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('FeedBack', CodeSchema);
