import Image from "next/image";
import React from "react";

import styles from "./page.module.css";
import { notFound } from "next/navigation";

type PostBlogProps = {
  id: string;
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
};

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  const post: PostBlogProps = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
};

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

const PostBlog = async ({ params }: { params: { id: string } }) => {
  const data: PostBlogProps = await getData(params.id);

  return (
    <div className={styles.container}>
      {/* TOP */}
      <div className={styles.headerContainer}>
        {/* LEFT */}
        <div className={styles.info}>
          <span className={styles.title}>{data.title}</span>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <div className={styles.avatarContainer}>
              <Image
                className={styles.avatar}
                fill={true}
                src="/assets/default-avatar.jpg"
                alt="Avatar"
              />
            </div>
            <span className={styles.name}>{data.username}</span>
          </div>
        </div>
        {/* RIGHT */}
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src={data.img || "/assets/default-image.jpg"}
            alt="Blog Image"
          />
        </div>
      </div>
      {/* BOTTOM */}
      <div className={styles.contentContainer}>
        <p className={styles.content}>{data.desc}</p>
      </div>
    </div>
  );
};

export default PostBlog;
