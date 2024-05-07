import { ConnectDB } from '@/config/db';
import User from '@/model/userSchema';
import bcryptjs from 'bcryptjs';
import { NextResponse } from 'next/server';
ConnectDB();
export async function POST(req, res) {
  try {
    const { username, email, password, phoneNumber } = await req.json();
    console.log(username, email, password, phoneNumber);
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ msg: 'User already exist' }, { status: 400 });
    }
    // Bcrypt salt generation
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    console.log(hashedPassword);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    const savedUser = await newUser.save();
    return NextResponse.json({
      message: 'User Register Successfully done',
      success: true,
      savedUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
