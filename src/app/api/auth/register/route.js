import { NextResponse } from "next/server";
import connect from "@/utils/db";
// import User from "@/models/User"
import User from "@/models/User";

export const POST = async (request) => {
  const { name, email, username, password } = await request.json();
  const newUser = new User({
    name,
    email,
    username,
    password,
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
