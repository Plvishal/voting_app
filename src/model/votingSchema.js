import mongoose, { Schema } from 'mongoose';
const votingSchema = new mongoose.Schema({
  candidate: String,
  voters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});
const Vote = mongoose.models.votes || mongoose.model('votes', votingSchema);
export default Vote;
