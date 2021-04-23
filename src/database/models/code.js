import mongoose from 'mongoose';

const CodeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  code: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Code', CodeSchema);
