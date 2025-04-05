import fs from "fs";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path"

const uploadDir = path.join(process.cwd(),"public/uploads")

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

export const POST = async (req: Request) => {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return NextResponse.json({err: "No files received."}, {status: 400})
  }
  
  let buffer;
  if (file instanceof File) {
    buffer = Buffer.from(await file.arrayBuffer())
  } else {
    return NextResponse.json({err: "Invalid file type."}, {status: 400})
  }

  const filename = `${Date.now()}-${file.name}`
  const imgUrl = path.join(uploadDir, filename)
  console.log(imgUrl)
  try {
    await writeFile(imgUrl, buffer);
    return NextResponse.json({imgUrl: `/uploads/${filename}`}, {status: 200})
  } catch (error) {
    console.log(error);
    return NextResponse.json({err: error}, {status: 500})
  }

  

}