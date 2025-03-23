import { NextResponse } from "next/server";
import connect from "@/utils/db";
// import User from "@/models/User"
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { name, email, username, password } = await request.json();

  const salt = bcrypt.genSaltSync(10);
  const hashPwd = bcrypt.hashSync(password, salt);
  const newUser = new User({
    name,
    email,
    username,
    password: hashPwd,
  });
  try {
    await connect();

    await newUser.save();
    return new NextResponse("Created new user successfully", { status: 201 });
  } catch (error) {
    console.log(error.message);
    return new NextResponse(error.message, { status: 500 });
  }
};
