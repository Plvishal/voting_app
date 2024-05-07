import { ConnectDB } from '@/config/db';
import User from '@/model/userSchema';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
ConnectDB();
export async function POST(req, res) {
  const { email, password } = await req.json();
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json(
      {
        error: 'User does not exits',
      },
      {
        status: 400,
      }
    );
  }
  //   check password is valid or not
  const validPaasword = await bcryptjs.compare(password, user.password);
  if (!validPaasword) {
    return NextResponse.json(
      {
        msg: 'Incorrect password',
      },
      { status: 400 }
    );
  }
  

  return NextResponse.json('ok');
}
