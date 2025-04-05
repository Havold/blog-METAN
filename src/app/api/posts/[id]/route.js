import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connect from "@/utils/db";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("DATABASE ERROR", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    await Post.findByIdAndDelete(id);
    return NextResponse.json("This post has been removed", { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: err }, { status: 500 });
  }
};
