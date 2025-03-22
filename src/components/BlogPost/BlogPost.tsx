import Image from "next/image";
import React from "react";

import styles from "./blogPost.module.css";

type BlogPostProps = {
  title: string;
  desc: string;
  imgUrl: string;
  id: string | number;
  onClick: () => void;
};

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  desc,
  imgUrl,
  id,
  onClick,
}) => {
  console.log(id);
  return (
    <div onClick={onClick} className={styles.container}>
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
    </div>
  );
};

export default BlogPost;
