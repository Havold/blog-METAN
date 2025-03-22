"use client";
import React from "react";

import styles from "./page.module.css";
import BlogPost from "@/components/BlogPost/BlogPost";
import { useRouter } from "next/navigation";

type Post = {
  id: string | number;
  title: string;
  desc: string;
  imgUrl: string;
};

const data = [
  {
    id: 1,
    title: "Enormous Universe",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vitae dolores laudantium magnam voluptatem recusandae fugiat atque amet dolore, earum suscipit ducimus itaque molestiae perspiciatis minus sunt tenetur quaerat exercitationem?",
    imgUrl: "/assets/post_1.jpg",
  },
  {
    id: 2,
    title: "Glorious Sun",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vitae dolores laudantium magnam voluptatem recusandae fugiat atque amet dolore, earum suscipit ducimus itaque molestiae perspiciatis minus sunt tenetur quaerat exercitationem?",
    imgUrl: "/assets/post_2.jpg",
  },
  {
    id: 3,
    title: "Green Earth",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vitae dolores laudantium magnam voluptatem recusandae fugiat atque amet dolore, earum suscipit ducimus itaque molestiae perspiciatis minus sunt tenetur quaerat exercitationem?",
    imgUrl: "/assets/post_3.jpg",
  },
];

const Blog = () => {
  const router = useRouter();

  const handleNavigate = (item: Post) => {
    const query = new URLSearchParams({
      ...item,
      id: item.id.toString(),
    }).toString();
    router.push(`/blog/${item.id}?${query}`);
  };

  return (
    <div className={styles.container}>
      {data.map((post) => (
        <BlogPost
          key={post.id}
          title={post.title}
          desc={post.desc}
          imgUrl={post.imgUrl}
          id={post.id}
          onClick={() => handleNavigate(post)}
        />
      ))}
    </div>
  );
};

export default Blog;
