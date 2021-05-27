import mongoose from 'mongoose';

const CodeSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Rating', CodeSchema);
