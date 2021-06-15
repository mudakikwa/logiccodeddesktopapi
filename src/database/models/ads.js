import mongoose from 'mongoose';

const CodeSchema = mongoose.Schema({
  link: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Ads', CodeSchema);
