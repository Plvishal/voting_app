import { ConnectDB } from '@/config/db';
import User from '@/model/userSchema';
import Vote from '@/model/votingSchema';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
ConnectDB();
export async function POST(req, res) {
  const { candidate } = await req.json();
  const cokie = cookies().get('id');
  const user = await Vote.findOne({ _id: cokie.value }).populate('voters');
  console.log(user);
  const newVoter = new Vote({
    candidate,
  });
  const savedVoter = await newVoter.save();
  return NextResponse.json({ savedVoter });
}

// get voters by id
export async function GET(req, res) {
  const searchParams = req.nextUrl.searchParams;
  const _id = searchParams.get('id');
  console.log(_id);
  const findUser = await User.findById(_id);
  return NextResponse.json(findUser);
}
