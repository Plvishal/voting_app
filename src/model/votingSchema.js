import mongoose, { Schema } from 'mongoose';
const votingSchema = new mongoose.Schema({
  candidate: String,
  voters: [
    {
      type: String,
    },
  ],
});
const Votes = mongoose.models.votes || mongoose.model('votes', votingSchema);
export default Votes;
