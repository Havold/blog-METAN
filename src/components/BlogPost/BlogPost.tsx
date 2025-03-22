import Image from "next/image";
import React from "react";

import styles from "./blogPost.module.css";
import Link from "next/link";

type BlogPostProps = {
  title: string;
  desc: string;
  imgUrl: string;
  id: string | number;
};

const BlogPost: React.FC<BlogPostProps> = ({ title, desc, imgUrl, id }) => {
  console.log(id);
  return (
    <Link href={`/blog/${id}`} className={styles.container}>
      {/* LEFT */}
      <div className={styles.contentContainer}>
        <span className={styles.title}>{title}</span>
        <p className={styles.desc}>{desc}</p>
      </div>
      {/* RIGHT */}
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          fill={true}
          src={imgUrl}
          alt="BlogPost Image"
        />
      </div>
    </Link>
  );
};

export default BlogPost;
