import mongoose from 'mongoose';

export async function ConnectDB() {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL);
    console.log('Connected with Voting App');
  } catch (error) {
    console.log(error.message);
  }
}
