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
