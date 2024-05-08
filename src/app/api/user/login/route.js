import { ConnectDB } from '@/config/db';
import User from '@/model/userSchema';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Jost } from 'next/font/google';
import { NextResponse } from 'next/server';
ConnectDB();
export async function POST(req, res) {
  try {
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
    // Generating JSON Web Token
    const tokenData = {
      id: user._id,
      username: user.username,
    };
    const token = jwt.sign(tokenData, process.env.NEXT_PUBLIC_SECRET_KEY, {
      expiresIn: '1h',
    });
    const response = NextResponse.json({
      msg: 'Login successfully done',
      success: true,
    });
    response.cookies.set('token', token, {
      httpOnly: true,
    });
    response.cookies.set('id', user._id, {
      httpOnly: true,
    });
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
