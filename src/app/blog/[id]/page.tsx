"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

import styles from "./page.module.css";

// type PostBlogProps = {
//   title: string;
//   desc: string;
//   imgUrl: string;
//   params: {
//     id: string;
//   };
// };

const PostBlog = ({ params }: { params: { id: string } }) => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const desc = searchParams.get("desc");
  const imgUrl = searchParams.get("imgUrl");

  console.log(params.id);
  return (
    <div className={styles.container}>
      {/* TOP */}
      <div className={styles.headerContainer}>
        {/* LEFT */}
        <div className={styles.info}>
          <span className={styles.title}>{title}</span>
          <p className={styles.desc}>{desc}</p>
          <div className={styles.author}>
            <div className={styles.avatarContainer}>
              <Image
                className={styles.avatar}
                fill={true}
                src="/assets/default-avatar.jpg"
                alt="Avatar"
              />
            </div>
            <span className={styles.name}>John Doe</span>
          </div>
        </div>
        {/* RIGHT */}
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src={imgUrl || "/assets/default-image.jpg"}
            alt="Blog Image"
          />
        </div>
      </div>
      {/* BOTTOM */}
      <div className={styles.contentContainer}>
        <p className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto eaque
          reprehenderit recusandae vel blanditiis exercitationem praesentium
          error! Est nulla molestias a modi eaque officia ipsa, laboriosam
          consequatur fuga nobis fugit.
        </p>
        <p className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto eaque
          reprehenderit recusandae vel blanditiis exercitationem praesentium
          error! Est nulla molestias a modi eaque officia ipsa, laboriosam
          consequatur fuga nobis fugit.
        </p>
        <p className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto eaque
          reprehenderit recusandae vel blanditiis exercitationem praesentium
          error! Est nulla molestias a modi eaque officia ipsa, laboriosam
          consequatur fuga nobis fugit.
        </p>
      </div>
    </div>
  );
};

export default PostBlog;
