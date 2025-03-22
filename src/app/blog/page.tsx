import React from "react";

import styles from "./page.module.css";
import BlogPost from "@/components/BlogPost/BlogPost";
import { notFound } from "next/navigation";

type Post = {
  _id: string | number;
  title: string;
  desc: string;
  img: string;
};

export const metadata = {
  title: "Blog",
  description: "This is Blog page",
};

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      {data.map((post: Post) => (
        <BlogPost
          key={post._id}
          title={post.title}
          desc={post.desc}
          imgUrl={post.img}
          id={post._id}
        />
      ))}
    </div>
  );
};

export default Blog;
