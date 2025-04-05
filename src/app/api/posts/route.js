import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  const searchParams = request.nextUrl.searchParams;
  const username = searchParams.get("username");
  // fetch
  try {
    await connect();
    const posts = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("DATABASE ERROR!!", { status: 500 });
  }
};

export const POST = async (request) => {
  const { title, desc, username, img, content } = await request.json();

  console.log(title, desc, username);

  const newPost = new Post({ title, desc, username, img, content });

  try {
    await connect();
    await newPost.save();
    return NextResponse.json("Create new post successfully", { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ err: error.message }, { status: 500 });
  }
};
